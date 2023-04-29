import Comments from "@/icons/Comments";
import Heart from "@/icons/Heart";
import Link from "next/link";
import React, { useMemo } from "react";

type Props = {
  title: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  url?: string;
};

const Card = ({
  title,
  author,
  likes,
  comments,
  date,
  url,
  ...rest
}: Props) => {
  const dateStr = useMemo(() => {
    const dateObj = new Date(date);
    return `${dateObj.getDay()} / ${dateObj.getMonth()} / ${dateObj.getFullYear()}`;
  }, [date]);

  return (
    <div
      className="bg-white rounded drop-shadow-md p-8 flex flex-col justify-between"
      {...rest}
    >
      <h3 className="mb-4 text-xl">{title}</h3>&nbsp;
      <div className="flex flex-col gap-4">
        {url && (
          <Link
            rel="noopener noreferrer nofollow"
            target="_blank"
            href={url}
            passHref
            className="cursor-pointer italic w-full whitespace-nowrap overflow-hidden text-ellipsis"
          >
            <span>url:&nbsp;{url}</span>
          </Link>
        )}
        <span className="text-slate-600">Author: {author}</span>
        <span className="text-slate-600">{dateStr}</span>
        <div className="flex gap-8">
          <div className="flex gap-2 text-pink-600">
            <Heart height="24px" />
            {likes}
          </div>
          <div className="flex gap-2 text-cyan-600">
            <Comments height="24px" />
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
