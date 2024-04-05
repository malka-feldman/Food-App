import React, { useState, useEffect } from 'react';

const CheckingAPI = () => {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch("/users")
            .then(response => response.json())
            .then(data => {
                setBackendData(data); // Set backendData to the array received from the server
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    return (
        <div>
            {backendData.length === 0 ? (
                <p>Loading...</p>
            ) : (
                backendData.map((user, i) => (
                    <p key={i}>{user.name}</p> // Render the phone property of each user
                ))
            )}
        </div>
    )
}

export default CheckingAPI;