import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { Edit3, Check, X, Loader2 } from "lucide-react";

const MyProfile = () => {
  const { user } = useContext(AuthContext) || {};
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || ""
  });

  const handleEdit = () => {
    setIsEditing(true);
    setFormData({
      name: user?.displayName || "",
      email: user?.email || "",
      photoURL: user?.photoURL || ""
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: user?.displayName || "",
      email: user?.email || "",
      photoURL: user?.photoURL || ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.photoURL
      });
      
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-500 p-6 text-white">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="opacity-90 mt-2">Manage your account information</p>
        </div>
        
        <div className="p-6">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-xl p-6 text-center">
                    <div className="mx-auto mb-4">
                      {formData.photoURL ? (
                        <img 
                          src={formData.photoURL} 
                          alt="Profile" 
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-4xl text-gray-500">👤</span>
                        </div>
                      )}
                    </div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Photo URL
                    </label>
                    <input
                      type="text"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      placeholder="Enter image URL"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-gray-100"
                      disabled
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Email cannot be changed
                    </p>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition flex items-center justify-center gap-2"
                    >
                      <X size={20} />
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-600 transition flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Check size={20} />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="mx-auto mb-4">
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-4xl text-gray-500">👤</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{user.displayName || "No name set"}</h2>
                  <p className="text-gray-600 mt-1">{user.email}</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Account Information</h3>
                    <p className="text-gray-600 mt-1">Your profile details</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <p className="mt-1 text-gray-900">
                        {user.displayName || "No name set"}
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <p className="mt-1 text-gray-900">
                        {user.email}
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Account Created
                      </label>
                      <p className="mt-1 text-gray-900">
                        {user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "Unknown"}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleEdit}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-600 transition flex items-center gap-2"
                  >
                    <Edit3 size={20} />
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;