// src/stores/authStore.js

import { create } from 'zustand';

const useAuthStore = create((set) => ({
  token: localStorage.getItem('authToken') || null,  // Initialize token from localStorage
  user: localStorage.getItem('user') || null,  // Initialize user to null

  setUser: (user) => set({ user }),

  clearUser: () => set({ user: null }),
  
  setToken: (token) => {
    localStorage.setItem('authToken', token);
    set({ token });
  },

  clearToken: () => {
    localStorage.removeItem('authToken');
    set({ token: null });
  },
}));

export default useAuthStore;

// end of src/stores/authStore.js