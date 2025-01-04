"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Implement logic to save the updated user data (API call or local storage update)
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    router.push("/explore");
  };

  return (
    <section className="flex flex-col items-center justify-center bg-accent-2 py-16 min-h-screen">
      {/* Profile Header */}
      <div className="text-center mb-10">
        <Image
          src={user?.profilePicture || "/assets/default-profile.png"}
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold text-white">{user?.name}</h1>
        <p className="text-white mt-2">{user?.bio || "No bio available"}</p>
      </div>

      {/* Profile Details Section */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Profile Details
        </h2>

        {isEditing ? (
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-1"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-1"
              placeholder="Email"
            />
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-1"
              placeholder="Bio"
              rows="4"
            />
            <button
              onClick={handleSave}
              className="bg-accent-2 text-white py-3 rounded-lg hover:bg-accent-1/90"
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-gray-700">
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Bio:</strong> {userData.bio}
            </p>
            <button
              onClick={handleEditToggle}
              className="bg-accent-2 text-white py-3 rounded-lg hover:bg-accent-1/90"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Account Settings Section */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Account Settings
        </h2>
        <Link
          href="/change-password"
          className="text-accent-1 hover:underline mb-4 block"
        >
          Change Password
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-400 w-full"
        >
          Log Out
        </button>
      </div>
    </section>
  );
};

export default ProfilePage;
