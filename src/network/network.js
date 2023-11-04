import axios from 'axios' 

// 配置axios
const service = axios.create({ 
    baseURL: 'http://localhost:8080'
})