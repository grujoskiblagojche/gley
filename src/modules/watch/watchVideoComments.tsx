"use client";

import { cn } from "@/utils/className";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { WatchVideoComment } from "./watchVideoComment";
import { Comment } from "@/types/comment";
import { videoCommentsMockData } from "./watchVideoCommentsMockData";
import { useSession } from "next-auth/react";

type Props = {
  movieId: string;
};

export const WatchVideoComments = ({ movieId }: Props) => {
  const session = useSession();
  // get comments from API by movieID
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    const existingComments = videoCommentsMockData();
    setComments(existingComments);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setComment(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!session.data?.user || comment.trim().length === 0) return;

    setComments((prevState) => [
      ...prevState,
      {
        id: session.data?.user?.email?.split("@")[0] ?? "",
        author: {
          name: session.data?.user?.name ?? "",
          image: session.data?.user?.image ?? "",
        },
        text: comment,
      },
    ]);

    setComment("");
  };

  return (
    <div className="relative flex">
      <button
        type="button"
        onClick={() => setShowComments(!showComments)}
        className="relative z-30"
      >
        <Image
          src="/images/icons/wpf_chat.svg"
          alt="back"
          width={33}
          height={33}
          className="w-10 h-10 active:scale-95 cursor-pointer"
        />
      </button>
      <div
        className={cn(
          "fixed right-6 top-0 flex flex-col items-end justify-end gap-2 w-[262px] h-full pb-32",
          {
            "opacity-0 -z-10": !showComments,
            "opacity-100 z-10": showComments,
          }
        )}
      >
        {comments.map((comment, i) => (
          <WatchVideoComment key={i} comment={comment} />
        ))}
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Comment.."
            value={comment}
            onChange={handleChange}
            className="w-full rounded-lg py-2 px-4 outline-none"
          ></input>
          <button
            type="submit"
            className="p-2 w-12 rounded-lg bg-green-600 text-green-50 text-2xl font-bold"
          >
            {">"}
          </button>
        </form>
      </div>
    </div>
  );
};
