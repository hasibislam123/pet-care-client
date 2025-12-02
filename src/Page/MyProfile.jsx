import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Edit3, Check, X, Loader2 } from "lucide-react";

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
      await updateProfile(user, { displayName: name, photoURL: photo });
      setUser({ ...user, displayName: name, photoURL: photo });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400">
      <div className="relative w-full max-w-2xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-12 text-center transition-all duration-500 hover:scale-[1.02]">
        {/* Profile Image */}
        <div className="relative w-44 h-44 mx-auto mb-8">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co.com/TBrt637D/428671013-378887818213913-2348732190062257655-n.jpg"
            }
            alt="User Avatar"
            className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`absolute -bottom-4 right-2 flex items-center gap-2 text-sm font-semibold text-white rounded-full px-5 py-2 transition-all duration-300 ${
              isEditing
                ? "bg-gradient-to-r from-gray-400 to-gray-600"
                : "bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600"
            }`}
          >
            {isEditing ? (
              <>
                <X size={16} />
                Cancel
              </>
            ) : (
              <>
                <Edit3 size={16} />
                Edit
              </>
            )}
          </button>
        </div>

        {/* Profile Info */}
        {!isEditing ? (
          <div className="text-white">
            <h2 className="text-4xl font-extrabold mb-2 tracking-wide">
              {user?.displayName || "No Name"}
            </h2>
            <p className="text-white/80 text-lg mb-6">
              {user?.email || "No Email"}
            </p>
            
          </div>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-5 mt-8">
            <input
              type="text"
              placeholder="Update Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/25 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <input
              type="text"
              placeholder="Update Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/25 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-pink-600 transition disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Updating.. .
                </>
              ) : (
                <>
                  <Check size={20} /> Save Changes
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
