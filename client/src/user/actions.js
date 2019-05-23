import axios from 'axios'

export const fetchUser = async setUser => {
  const res = await axios.get('/api/users/details')
  setUser({ type: 'SET_USER', user: res.data })
}
