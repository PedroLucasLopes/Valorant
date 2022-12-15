export const Maps = async (setMaps) => {
    const api = await fetch('https://valorant-api.com/v1/maps');
    const response = await api.json();
    return setMaps(response.data);
}