import axios from 'axios'

console.log(process.env)

const httpRequest = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
})

export default httpRequest

// Local / Development
// Test / Staging
// UAT
// Production
