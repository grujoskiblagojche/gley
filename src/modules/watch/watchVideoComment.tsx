import { Comment } from "@/types/comment";
import { cn } from "@/utils/className";
import Image from "next/image";

type Props = {
  comment: Comment;
  className?: string;
};

export const WatchVideoComment = ({ comment, className }: Props) => {
  const imageSrc = comment.author.image.includes("https") // Image coming from API
    ? comment.author.image
    : `/images/users/${comment.author.image}.png`; // Mock image using 'name'

  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full p-2 bg-kinemoe-950/80 rounded-lg",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={imageSrc}
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
