// src/routes/Profile.js
import useAuthStore from "../stores/authStore";

function Profile() {
  const user = useAuthStore((state) => state.user);

  const token = useAuthStore((state) => state.token);

  if (!token) {
    // If there's no token, redirect to HomePage or Login.
    window.location.href = "/";
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default Profile;
// end of src/routes/Profile.js