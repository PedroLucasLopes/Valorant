export const Characters = async (setData) => {
    const api = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
    const response = await api.json();
    return setData(response.data);
}