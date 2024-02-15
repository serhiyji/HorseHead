import axios from "axios"

const instance = axios.create({
    baseURL: "https://localhost:5001/api/Competence",
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

const Competence = {
    getall: () => requests.get("getall"),
    getbyuserid: (userid: string) => requests.get("getbyuserid?userid=" + userid),
    getbyid: (id: number) => requests.get("getbyid?id=" + id),

    create: (competence: any) => requests.post("create", competence),
    update: (competence: any) => requests.post("update", competence),
    delete: (id: number) => requests.post("delete", id),
}

export async function GetAllCompetence() {
    const data = await Competence.getall()
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

export async function GetByUserIdCompetence(userid: string) {
    const data = await Competence.getbyuserid(userid)
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

export async function GetByIdCompetence(id: number) {
    const data = await Competence.getbyid(id)
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

export async function CreateCompetence(competence: any) {
    const data = await Competence.create(competence)
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

export async function UpdateCompetence(competence: any) {
    const data = await Competence.update(competence)
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

export async function DeleteCompetence(id: number) {
    const data = await Competence.delete(id)
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