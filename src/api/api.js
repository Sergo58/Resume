import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://nodejs-server-smtp.herokuapp.com/',

})

// api
export const messageAPI = {
    send(name, mail, message) {
        return instance.post(`sendMessage`, {name,mail,message});
    },
}