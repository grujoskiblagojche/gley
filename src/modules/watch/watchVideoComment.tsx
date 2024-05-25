"use client";

import { Comment } from "@/types/comment";
import { cn } from "@/utils/className";
import Image from "next/image";

type Props = {
  comment: Comment;
  className?: string;
};

export const WatchVideoComment = ({ comment, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full p-2 bg-kinemoe-950/80 rounded-lg",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={comment.author.image}
          alt={comment.author.name}
          width={36}
          height={36}
          className="w-8 h-8 rounded-full"
        />
        <h5 className="text-kinemoe-100 font-bold">{comment.author.name}:</h5>
      </div>
      <p className="text-kinemoe-50">{comment.text}</p>
    </div>
  );
};
