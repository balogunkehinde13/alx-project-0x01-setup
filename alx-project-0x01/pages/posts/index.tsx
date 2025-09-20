import React from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  const dummyPosts = [
    { title: "First Post", excerpt: "This is the first post's excerpt." },
    { title: "Second Post", excerpt: "This is the second post's excerpt." },
  ];

  return (
    <>
    <Header />
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {dummyPosts.map((post, i) => (
        <PostCard key={i} title={post.title} excerpt={post.excerpt} />
      ))}
    </div>
    </>
  );
};

export default PostsPage;
