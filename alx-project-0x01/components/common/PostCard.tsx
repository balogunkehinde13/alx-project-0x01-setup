import React from "react";

interface PostCardProps {
  title: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt }) => {
  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{excerpt}</p>
    </div>
  );
};

export default PostCard;
