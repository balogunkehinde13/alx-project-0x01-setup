import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces"; // adjust import path

interface UserCardProps extends UserModalProps {
  user?: UserData; 
}

const UserModal: React.FC<UserCardProps> = ({ user, onClose, onSubmit }) => {
  // Initialize form state
  const [formData, setFormData] = useState<UserData>(
    user || {
      id: Date.now(), // temporary ID
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
      company: { name: "", catchPhrase: "", bs: "" },
    }
  );

  // Handle input change for top-level fields
  const handleChange = (field: keyof UserData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle nested fields (address, company)
  const handleNestedChange = (
    section: "address" | "company",
    field: string,
    value: string
  ) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white text-black rounded-xl shadow-xl max-w-lg w-full p-6 relative animate-fadeIn 
                max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {user?.name ? "Edit User" : "Add New User"}
        </h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Website */}
          <input
            type="text"
            placeholder="Website"
            value={formData.website}
            onChange={(e) => handleChange("website", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Address Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Address</h3>
            <input
              type="text"
              placeholder="Street"
              value={formData.address.street}
              onChange={(e) => handleNestedChange("address", "street", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Suite"
              value={formData.address.suite}
              onChange={(e) => handleNestedChange("address", "suite", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="City"
              value={formData.address.city}
              onChange={(e) => handleNestedChange("address", "city", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Zipcode"
              value={formData.address.zipcode}
              onChange={(e) => handleNestedChange("address", "zipcode", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          {/* Company Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Company</h3>
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company.name}
              onChange={(e) => handleNestedChange("company", "name", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Catch Phrase"
              value={formData.company.catchPhrase}
              onChange={(e) => handleNestedChange("company", "catchPhrase", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="BS"
              value={formData.company.bs}
              onChange={(e) => handleNestedChange("company", "bs", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(formData)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
