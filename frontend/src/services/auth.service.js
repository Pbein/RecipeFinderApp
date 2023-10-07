//./src/services/auth.service.js
import axios from "axios";

export const login = async (user) => {
    try {
        const response = await axios.post("http://localhost:5000/api/users/login", {
            email: user.email,
            password: user.password,
        });

        return response.data.token
            ? response.data
            : undefined;
    } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        throw error; // Propagate the error so you can handle it where this function is called
    }
};

export const register = async (user) => {
    try {
        const response = await axios.post("http://localhost:5000/api/users/register", {
            username: user.username,
            email: user.email,
            password: user.password,
        });

        return response.data.token ? response.data : undefined;
    } catch (error) {
        console.error('Registration Error:', error.response?.data || error.message);
        throw error; // Propagate the error so you can handle it where this function is called
    }
};

// end of ./src/services/auth.service.js
