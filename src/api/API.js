import axios from "axios";

const sv = "http://localhost:8080"

const getUsers = () => axios.get(`${sv}/all`);
const postUser = (body) => axios.post(`${sv}/create`, body);

export default {
    getUsers, postUser
}