export const stringify = (params) => {
    return Object.keys(params).map(key => key + "=" + encodeURIComponent(params[key])).join('&');
}