import { useState } from "react";

export default function GithubProfileFinder() {
  const githubApi = "https://api.github.com/users";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileName, setProfileName] = useState("");

  function searchProfileHandler() {
    setData(null)
    if (!profileName.trim()) {
      setError("Please enter a valid profile name.");
      return;
    }
    setError(null);
    setLoading(true);
    fetch(`${githubApi}/${profileName}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  return (
    <div className="h-screen w-full pt-10 flex flex-col items-center gap-8">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          onChange={(e) => setProfileName(e.target.value.trim())}
          placeholder="Enter profile name"
          className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
          aria-label="Enter GitHub profile name"
        />
        <button
          onClick={searchProfileHandler}
          className="px-4 py-1 bg-amber-500 text-white rounded-md hover:bg-amber-700 transition-colors duration-200"
          aria-label="Search GitHub profile"
        >
          Search
        </button>
      </div>
      <div className="w-1/4 flex flex-col gap-6 h-fit items-center">
        {/* Card Container */}
        <div className="w-full mx-10 p-6 rounded-lg border-2 border-amber-500 flex items-center justify-center">
          {/* Avatar */}
          {loading ? (
            <div className="border-t-4 rounded-full w-16 h-16 border-amber-500 animate-spin" />
          ) : data ? (
            <div>
              <img
                src={data.avatar_url || "https://via.placeholder.com/150"}
                alt="User Avatar"
                className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-amber-500"
              />
              {/* Name and ID */}
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {data.name || "Unknown User"}
                </h2>
                <p className="text-sm text-gray-500">
                  ID: {data.id ?? <span className="text-red-700">unknown</span>}
                </p>
              </div>
              {/* Email */}
              <p className="text-center text-gray-600 mt-2">
                Email: {data.email ?? <span className="text-red-700">unknown</span>}
              </p>
              {/* Stats Section */}
              <div className="flex flex-row justify-between mt-6">
                <div className="text-center">
                  <p className="text-lg font-semibold text-amber-500">{data["public_repos"] ?? "0"}</p>
                  <p className="text-sm text-gray-500">Repos</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-amber-500">{data.followers ?? "0"}</p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-amber-500">{data.following ?? "0"}</p>
                  <p className="text-sm text-gray-500">Following</p>
                </div>
              </div>
              {/* Timestamps */}
              <div className="mt-6 text-sm text-gray-500 text-center">
                <p>
                  Created At:{" "}
                  {data["created_at"] &&
                    new Date(data["created_at"]).toISOString().split("T")[0]}
                </p>
                <p>
                  Last Update:{" "}
                  {data["updated_at"] &&
                    new Date(data["updated_at"]).toISOString().split("T")[0]}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-red-700 font-semibold">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}