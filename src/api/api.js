import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:3010/',

})

// api
export const messageAPI = {
    send(name, mail, message) {
        return instance.post(`sendMessage`, {name,mail,message});
    },
}