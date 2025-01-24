import axios from 'axios';

//инстансы
const $host = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

//получение списка всех device
export const fetchDevices = async () => {
  const { data } = await $host.get('api/device/getAll')
  return data
}