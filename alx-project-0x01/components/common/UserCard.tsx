import React from "react";
import { UserProps } from "@/interfaces"; // adjust import path to where your interfaces live

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Name and Username */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 text-gray-700">
        <p>
          📧 <span className="font-medium">{email}</span>
        </p>
        <p>
          📱 <span className="font-medium">{phone}</span>
        </p>
        <p>
          🌍{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      {/* Address */}
      <div className="mt-4 text-gray-600">
        <p className="font-semibold">📍 Address</p>
        <p>
          {address.street}, {address.suite}, {address.city} ({address.zipcode})
        </p>
      </div>

      {/* Company Info */}
      <div className="mt-4 text-gray-600">
        <p className="font-semibold">🏢 {company.name}</p>
        <p className="italic text-sm">{company.catchPhrase}</p>
        <p className="text-xs text-gray-500">{company.bs}</p>
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs text-gray-400">
        User ID: {id} | Geo: {address.geo.lat}, {address.geo.lng}
      </div>
    </div>
  );
};

export default UserCard;
