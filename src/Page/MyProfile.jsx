import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login first!");

    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      // Update context
      setUser({ ...user, displayName: name, photoURL: photo });
      setIsEditing(false);
      alert(" Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 p-4 rounded-4xl">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co.com/TBrt637D/428671013-378887818213913-2348732190062257655-n.jpg"
            }
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
          />
          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute -bottom-4 right-0 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md hover:from-indigo-600 hover:to-pink-600 transition"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Profile Info */}
        {!isEditing ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">
              {user?.displayName || "No Name"}
            </h2>
            <p className="text-white/80">{user?.email || "No Email"}</p>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Update Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <input
              type="text"
              placeholder="Update Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-pink-600 transition disabled:opacity-50"
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
