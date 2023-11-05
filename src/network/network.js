import axios from 'axios' 

// 配置axios
const ajax = axios.create({ 
    baseURL: 'http://localhost:8081',
    timeout: 30000
})

export default ajax