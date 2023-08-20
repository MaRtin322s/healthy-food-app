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
                return res;
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
                return res.json();
            }

        } catch (err) {
            return err;
        }
    }
};

export default requester;