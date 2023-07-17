let BASE_URL = 'https://app.revolut.com/api/revolut-secure/retail';

export default {
    BASE_URL,
    signin: `${BASE_URL}/signin`,
    token: `${BASE_URL}/token`,
    current: `${BASE_URL}/user/current`,
    all: `${BASE_URL}/my-card/all`,
    issue_virtual: `${BASE_URL}/my-card/issue/virtual`,
    getCardDetailsURL(UUID: string): string {
        return `${BASE_URL}/my-card/${UUID}/details`;
    },
    getCardDeleteURL(UUID: string): string {
        return `${BASE_URL}/my-card/${UUID}`;
    },
};
