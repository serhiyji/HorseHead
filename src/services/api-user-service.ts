import axios from "axios"

const instance = axios.create({
    baseURL: "https://localhost:5001/api/Auth",
    headers: {
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use(
    (config: any) => {
        const token = getAccessToken();
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (err.response) {
            // Validation failed, ...
            if (err.response.status === 400 && err.response.data) {
                return Promise.reject(err.response.data);
            }
            // Access Token was expired
            if (
                err.response.status === 401 &&
                !originalConfig._retry &&
                getAccessToken() != null
            ) {
                originalConfig._retry = true;
                try {
                    const rs = await refreshAccessToken();
                    const { accessToken, refreshToken } = rs.data;
                    setRefreshToken(refreshToken);
                    setAccessToken(accessToken);
                    instance.defaults.headers.common["Authorization"] =
                        "Bearer " + accessToken;
                    return instance(originalConfig);
                } catch (_error: any) {
                    if (_error.response && _error.response.data) {
                        return Promise.reject(_error.response.data);
                    }
                    return Promise.reject(_error);
                }
            }
            if (err.response.status === 403 && err.response.data) {
                return Promise.reject(err.response.data);
            }
            if (err.response.status === 404) {
                if (axios.isAxiosError(err)) {
                    return Promise.reject(err.response.data);
                }
                return;
            }
        }
        return Promise.reject(err);
    }
);


const responseBody: any = (response: any) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then().then(responseBody),
    post: (url: string, body?: any) => instance.post(url, body).then().then(responseBody)
}

const User = {
    login: (user: any) => requests.post(`/login`, user),
    logout: (userId: string) => requests.get(`/logout?userId=` + userId),
    registrationuniversity: (user: any) => requests.post("/registrationuniversity", user),
}

export async function login(user: any) {
    const data = await User.login(user)
        .then((response) => {
            return {
                response
            }
        })
        .catch((error) => {
            return error.response
        })
    return data
}

export async function logout(userId: string) {
    const data = await User.logout(userId)
        .then((response) => {
            return {
                response
            }
        })
        .catch((error) => {
            return error.response
        })
    return data
}

export async function RegistrationUniversityUser(user: any) {
    const data = await User.registrationuniversity(user)
        .then((response) => {
            return {
                response
            }
        })
        .catch((error) => {
            return error.response
        })
    return data
}

export function refreshAccessToken() {
    return instance.post("/RefreshToken", {
        token: getAccessToken(),
        refreshToken: getRefreshToken(),
    });
}

export function setAccessToken(token: string) {
    window.localStorage.setItem("accessToken", token)
}

export function setRefreshToken(refreshToken: string) {
    window.localStorage.setItem("refreshToken", refreshToken)
}

export function getAccessToken(): null | string {
    const token = window.localStorage.getItem("accessToken")
    return token;
}

export function getRefreshToken(): null | string {
    const token = window.localStorage.getItem("refreshToken")
    return token;
}

export function removeTokens() {
    window.localStorage.removeItem("accessToken")
    window.localStorage.removeItem("refreshToken")
}