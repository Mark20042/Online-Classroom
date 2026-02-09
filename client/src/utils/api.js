// API Base Configuration
const API_BASE_URL = '';

// API Endpoints
export const API_PATHS = {
    // Authentication
    auth: {
        login: `${API_BASE_URL}/auth/login`,
        register: `${API_BASE_URL}/auth/register`,
        logout: `${API_BASE_URL}/auth/logout`,
        me: `${API_BASE_URL}/auth/me`,
    },

    // Users
    users: {
        list: `${API_BASE_URL}/users`,
        detail: (id) => `${API_BASE_URL}/users/${id}`,
        create: `${API_BASE_URL}/users`,
        update: (id) => `${API_BASE_URL}/users/${id}`,
        delete: (id) => `${API_BASE_URL}/users/${id}`,
    },


}

export default API_PATHS
