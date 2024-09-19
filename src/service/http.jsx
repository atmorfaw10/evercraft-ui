import axios from "axios";
// http://localhost:8080/person?name=Asong

const BASE_URL = 'http://localhost:8080/'

export async function httpGet(personName) {
   // const url = `${BASE_URL}${personName ? `person?name=${personName}` : ''}`
    const url = `${personName ? (BASE_URL + 'person?name=' + personName) : BASE_URL}`
    try {
        const response = await axios.get(url);
        console.log("response", response.data)
        return response.data
      } catch (error) {
        console.error(error);
      }
}