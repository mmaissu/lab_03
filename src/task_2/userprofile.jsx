import React, {useState, useEffect} from "react";
function Userprofile({userId = 1 }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState(null)

useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
})
.then((data) => {
    setUser(data);
    setLoading(false);
})
.catch((err) => {
    if (err.name !== "AbortError") {
    setError(err.message);
    setLoading(false);
    }
});

return () => controller.abort();
}, [userId]);

const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1; // 1-10
    setUser(null);
    setError(null);
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    };

    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "300px" }}>
      <h2>User Profile (ID: {userId})</h2>

      {loading && <p>loading ...</p>}
      {error && <p style={{color: "red" }}>Error: {error}</p>}

      {user && (
        <div>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Website:</b> {user.website}</p>
        </div>
      )}

      <button onClick={handleRefresh} style={{ marginTop: "10px" }}>Refresh Random User</button>
    </div>
    );
  }

export default Userprofile;