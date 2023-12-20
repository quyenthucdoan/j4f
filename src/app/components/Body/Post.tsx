import React from "react";

type APost = {
  date: string;
  title: string;
  author: string;
  content: string;
};

const Post = ({ data }: { data: APost }) => {
  const author = data.author;
  const date = data.date;
  const title = data.title;
  const content = data.content.replace(/\\n/g, "\n");
  // const numberOfLikes = data.likes;
  // const numberOfComments = data.comments;

  return (
    <>
      <div className="static p-8 h-full w-full bg-white text-black font-sans border rounded border-cBorder col-span-2">
        <p className="text-sm pb-3">
          Posted by {author} - {date}
        </p>
        <h2 className="text-xl pb-3 font-semibold">{title}</h2>
        <p className="line-clamp-3">{content}</p>
      </div>
    </>
  );
};

export default Post;
