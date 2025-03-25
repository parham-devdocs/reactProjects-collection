import { useEffect, useState } from "react";

export default function AutoCompletionWithApi() {
    const [data, setData] = useState([]);
    const [dropDownData, setDropDownData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [userData, setUserData] = useState(null);

    // Handle input change
    function changeHandler(event) {
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        setShowDropDown(true);

        if (query.length > 0 && Array.isArray(data)) {
            const filtered = data.filter(
                user => typeof user.name === 'string' && user.name.toLowerCase().startsWith(query)
            );
            setDropDownData(filtered);
        } else {
            setDropDownData([]);
        }
    }

    // Fetch all users from API
    async function fetchData() {
        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/users');
            const jsonData = await res.json();

            if (jsonData && jsonData.users && Array.isArray(jsonData.users)) {
                const firstNames = jsonData.users.map(item => ({ name: item.firstName, id: item.id }));
                setData(firstNames);
            } else {
                throw new Error("Invalid API response");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // Fetch individual user data
    async function fetchUserData(userId) {
        try {
            const res = await fetch(`https://dummyjson.com/users/${userId}`);
            const jsonData = await res.json();

            if (jsonData && jsonData.id) {
                setUserData(jsonData); // Set the fetched user data
                setShowDropDown(false); // Hide the dropdown
            } else {
                throw new Error("Invalid user data");
            }
        } catch (err) {
            setError(err.message);
            console.error("Error fetching user data:", err);
        }
    }

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=" min-h-screen w-full mx-auto flex justify-center">
            {/* Search Input and Dropdown */}
            <div className="w-60 flex flex-col items-center gap-4">
                {/* Input field */}
                <input
                    onChange={changeHandler}
                    value={searchParams}
                    type="text"
                    className="border-2 border-gray-300 outline-none rounded-md w-full focus:border-amber-400 py-2 px-2 font-semibold"
                    placeholder="Search..."
                />

                {/* Dropdown */}
                {showDropDown && (
                    <div className="py-3 px-2 border-2 border-amber-500 rounded-md w-full min-h-9 max-h-80 overflow-y-auto">
                        {/* Loading state */}
                        {loading && <p className="text-center">Loading...</p>}

                        {/* Error state */}
                        {error && <p className="text-red-500">{error}</p>}

                        {/* No results */}
                        {!loading && !error && dropDownData.length === 0 && (
                            <p className="text-center">No users found</p>
                        )}

                        {/* Results */}
                        {!loading && !error && dropDownData.length > 0 && (
                            <ul className="flex flex-col text-left gap-1">
                                {dropDownData.map((user, index) => (
                                    <li
                                        key={index}
                                        className="hover:bg-gray-100 p-1 rounded cursor-pointer"
                                        onClick={() => fetchUserData(user.id)}
                                    >
                                        {user.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            

            {/* User Profile Card */}
            {userData && (
                <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md h-full w-full space-y-4">
                        {/* Profile Section */}
                        <div className="flex items-center space-x-4">
                            <img
                                src={userData.image}
                                alt={`${userData.firstName} ${userData.lastName}`}
                                className="w-16 h-16 rounded-full border-2 border-amber-400"
                            />
                            <div>
                                <h2 className="text-xl font-bold">{`${userData.firstName} ${userData.lastName}`}</h2>
                                <p className="text-sm text-gray-500">{userData.role || "User"}</p>
                            </div>
                        </div>

                        {/* Personal Details */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-700">Personal Details</h3>
                            <ul className="text-sm text-gray-600">
                                <li><strong>Age:</strong> {userData.age}</li>
                                <li><strong>Gender:</strong> {userData.gender}</li>
                                <li><strong>Blood Group:</strong> {userData.bloodGroup}</li>
                                <li><strong>Height:</strong> {userData.height} cm</li>
                                <li><strong>Weight:</strong> {userData.weight} kg</li>
                                <li><strong>Eye Color:</strong> {userData.eyeColor}</li>
                                <li><strong>Hair:</strong> {userData.hair?.color}, {userData.hair?.type}</li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-700">Contact Information</h3>
                            <ul className="text-sm text-gray-600">
                                <li><strong>Email:</strong> {userData.email}</li>
                                <li><strong>Phone:</strong> {userData.phone}</li>
                                <li><strong>IP Address:</strong> {userData.ip}</li>
                                <li><strong>MAC Address:</strong> {userData.macAddress}</li>
                            </ul>
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                            <ul className="text-sm text-gray-600">
                                <li><strong>Home:</strong> {userData.address?.address}, {userData.address?.city}, {userData.address?.state} {userData.address?.postalCode}</li>
                                <li><strong>Country:</strong> {userData.address?.country}</li>
                                <li><strong>Coordinates:</strong> Lat: {userData.address?.coordinates?.lat}, Lng: {userData.address?.coordinates?.lng}</li>
                            </ul>
                        </div>

                        {/* Professional Details */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-700">Professional Details</h3>
                            <ul className="text-sm text-gray-600">
                                <li><strong>University:</strong> {userData.university}</li>
                                <li><strong>Company:</strong> {userData.company?.name}</li>
                                <li><strong>Department:</strong> {userData.company?.department}</li>
                                <li><strong>Title:</strong> {userData.company?.title}</li>
                            </ul>
                        </div>

                        {/* Bank Details */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-700">Bank Details</h3>
                            <ul className="text-sm text-gray-600">
                                <li><strong>Card Type:</strong> {userData.bank?.cardType}</li>
                                <li><strong>Card Number:</strong> {userData.bank?.cardNumber}</li>
                                <li><strong>Expiry:</strong> {userData.bank?.cardExpire}</li>
                                <li><strong>Currency:</strong> {userData.bank?.currency}</li>
                                <li><strong>IBAN:</strong> {userData.bank?.iban}</li>
                            </ul>
                        </div>

                        {/* Crypto Details */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-700">Crypto Details</h3>
                            <ul className="text-sm text-gray-600">
                                <li><strong>Coin:</strong> {userData.crypto?.coin}</li>
                                <li><strong>Wallet:</strong> {userData.crypto?.wallet}</li>
                                <li><strong>Network:</strong> {userData.crypto?.network}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}