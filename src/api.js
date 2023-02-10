import axios from "axios";
export async function getRequests() {
    const res = await axios.get('/credit-requests');
    return res.data;
}

export async function getClients() {
    const res = await axios.get('/clients');
    return res.data;
}