// src/hooks/useLogout.js
import useAuthStore from "../stores/authStore";

function useLogout() {
  const clearToken = useAuthStore((state) => state.clearToken);
  const clearUser = useAuthStore((state) => state.clearUser);

  const logout = () => {
    clearToken();
    clearUser();
    window.location.href = "/";  // Redirect to HomePage after logout
  };

  return logout;
}

export default useLogout;
