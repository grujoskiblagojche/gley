"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

type Props = {
  onImageUpload: (base64: string) => void;
};

export const AvatarUpload = ({ onImageUpload }: Props) => {
  const [image, setImage] = useState<string>();

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result;
        if (typeof base64 === "string") {
          onImageUpload(base64);
          setImage(base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex rounded-full w-80 aspect-square shrink-0 overflow-hidden relative group">
      {image ? (
        <Image
          src={image}
          alt="profile"
          width={384}
          height={384}
          className="object-cover"
        />
      ) : (
        <Image
          src="/images/assets/profile.jpg"
          alt="profile"
          width={384}
          height={384}
          className="object-cover"
        />
      )}

      <div className="absolute left-0 bottom-0 flex justify-center items-center w-full h-20 group-hover:h-24 bg-kinemoe-950/60">
        <span className="text-base text-kinemoe-100">Upload Photo</span>
      </div>

      <input
        type="file"
        accept="image/png,image/jpg,image/jpeg"
        capture="environment"
        onChange={onChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};
