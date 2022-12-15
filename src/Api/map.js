export const Map = async (setMap, uuid) => {
    const api = await fetch(`https://valorant-api.com/v1/maps/${uuid}`);
    const response = await api.json();
    return setMap(response.data);
}