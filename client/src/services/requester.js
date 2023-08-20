export const requester = {
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
    }
};