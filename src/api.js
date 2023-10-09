import axios from 'axios';

function getData(){
axios.get('https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&hourly=temperature_2m,relativehumidity_2m')
.then(function (response) {
    let data = response.data;
    return data
})}

getData()

const Api = getData()

console.log(Api)


export default getData;