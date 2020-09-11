import axios from 'axios';

class ApiService {
  instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
  })

  getUsers =  (count) => {
    return this.instance.get(`/users?page=1&count=${count}`)
      .then((res) => res.data);
  }

  getPosition = () => {
    return this.instance.get('/positions')
      .then((res) => res.data);
  }

  getToken = () => {
    return this.instance.get('/token')
      .then((res => res.data.token))

  }

  postUser = (formData, token) => {
    return this.instance
      .post('/users', formData,  { headers: {"Token": token} })
      .then(res => res.data)
  }

}

export const apiService = new ApiService();
