import React from 'react';

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    blogsCount: 12,
    reviewsCount: 8,
    reactionsGained: 345,
    destinationsCovered: 15,
    bio: 'Travel enthusiast and blogger who loves exploring new destinations and sharing experiences.',
  };

  return (
    <div className="min-h-screen bg-[#b8f3f51e] py-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-[0_0_15px_rgba(184,243,245,0.3)] p-8">
        {/* Profile Header */}
        <div className="text-center">
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-[#b8f3f5] shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">{user.name}</h1>
          <p className="text-gray-600 italic mt-2">{user.bio}</p>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">Blogs</h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">{user.blogsCount}</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">Reviews</h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">{user.reviewsCount}</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">Reactions</h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">{user.reactionsGained}</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">Destinations</h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">{user.destinationsCovered}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-[#b8f3f5] bg-opacity-30 p-6 rounded-lg shadow-[0_0_10px_rgba(184,243,245,0.3)]">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            I have been traveling for over 5 years, documenting my journeys through blogs and reviews. My favorite destinations include Japan, Italy, and New Zealand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;