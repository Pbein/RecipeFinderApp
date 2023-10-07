// src/routes/Profile.js
import useAuthStore from "../stores/authStore";

function Profile() {
  const user = useAuthStore((state) => state.user);

  const token = useAuthStore((state) => state.token);
  console.log("token", token);
  console.log("user", user);

  const logout = () => {
    useAuthStore.getState().clearToken();
    useAuthStore.getState().clearUser();
  };

  if (!token) {
    // If there's no token, redirect to HomePage or Login.
    window.location.href = "/";
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <p>
        <strong>Username:</strong> {user?.username}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
// end of src/routes/Profile.js
