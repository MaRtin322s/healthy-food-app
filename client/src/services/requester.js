const requester = {
    get: async (url, headers = {}) => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    ...headers
                }
            });

            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
            } else {
                return res.json();
            }

        } catch (err) {
            return err;
        }
    },

    post: async (url, data = {}, headers = {}) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
            } else {
                if (res.url.includes('download')) {
                    return res.blob();
                } else {
                    return res.json();
                }
            }
        } catch (err) {
            return err;
        }
    },

    put: async (url, headers = {}, data = {}) => {
        try {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
            } else {
                return res.json();
            }
        } catch (err) {
            return err;
        }
    },

    delete: async (url, headers = {}) => {
        try {
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    ...headers
                }
            });

            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
            } else {
                return res.json();
            }
        } catch (err) {
            return err;
        }
    }
};

export default requester;