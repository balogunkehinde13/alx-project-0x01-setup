import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
