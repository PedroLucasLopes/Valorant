export const Agent = async (setAgent, uuid) => {
    const api = await fetch(`https://valorant-api.com/v1/agents/${uuid}?language=pt-BR`);
    const response = await api.json();
    return setAgent(response.data);
}