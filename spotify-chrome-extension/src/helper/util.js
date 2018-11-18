export const stringify = (params) => {
    return Object.keys(params).map(key => key + "=" + encodeURIComponent(params[key])).join('&');
}

export const setPage = (page) => {
    localStorage.setItem("page", page);
}

export const sendRefreshRequest = (token) => {
    const data = new URLSearchParams();
    data.append('refresh_token', token);

    return window.fetch('http://localhost:3001/refreshtoken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
        mode: 'cors'
    });
}