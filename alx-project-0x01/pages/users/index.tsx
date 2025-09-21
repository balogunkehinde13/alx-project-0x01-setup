import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  posts: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isCreating, setIsCreating] = useState(false); // ✅ distinguish between add & edit mode

  // Open modal: either for creating a new user or editing existing one
  const handleOpenModal = (user?: UserData) => {
    if (user) {
      setSelectedUser(user);
      setIsCreating(false);
    } else {
      // ✅ open modal with empty fields for "Add New User"
      setSelectedUser({
        id: 0,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: { lat: "", lng: "" },
        },
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      });
      setIsCreating(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsCreating(false);
  };

  const handleSubmit = (user: UserData) => {
    if (isCreating) {
      console.log("✅ New user added:", user);
      // You could push to posts state here if it was local
    } else {
      console.log("✏️ Existing user updated:", user);
    }
    handleCloseModal();
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="container mx-auto p-6 relative">
        {/* ✅ Top-Left Button */}
        <button
          onClick={() => handleOpenModal()}
          className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ➕ Add New User
        </button>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Users</h1>

        {/* User List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((user) => (
            <div key={user.id} onClick={() => handleOpenModal(user)}>
              <UserCard {...user} />
            </div>
          ))}
        </div>

        {/* User Modal (Create or Edit) */}
        {selectedUser && (
          <UserModal
            user={selectedUser}
            onClose={handleCloseModal}
            onSubmit={handleSubmit}
          />
        )}
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
