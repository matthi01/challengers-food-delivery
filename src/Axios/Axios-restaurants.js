import axios from "axios";

const instance = axios.create({
    baseURL: "https://huddolapi-next.herokuapp.com/v1/"
});

export default instance;
