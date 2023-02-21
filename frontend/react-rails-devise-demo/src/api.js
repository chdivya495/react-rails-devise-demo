import axios from 'axios';
const base_url = "http://localhost:3000/auth"
export const signUp = async (data) => {
  const response = await axios.post(base_url + '.json', data, { headers: { 'Content-Type': 'application/json' } })
  if (response.data.status === 'success') {
    localStorage.setItem('uid', response.headers['uid'])
    localStorage.setItem('client', response.headers['client'])
    localStorage.setItem('access-token', response.headers['access-token'])
    localStorage.setItem('expiry', response.headers['expiry'])
    return response.data.data
  }
  else {
    return null
  }
}

export const signIn = async (data) => {
  const response = await axios.post(base_url + '/sign_in.json', data, { headers: { 'Content-Type': 'application/json' } })
  if (response.data) {
    localStorage.setItem('uid', response.headers['uid'])
    localStorage.setItem('client', response.headers['client'])
    localStorage.setItem('access-token', response.headers['access-token'])
    localStorage.setItem('expiry', response.headers['expiry'])
    return response.data
  }
  else {
    return null
  }
}

export const signOut = async (data) => {
  const uid = localStorage.getItem('uid')
  const client = localStorage.getItem('client')
  const accessToken = localStorage.getItem('access-token')
  const config = { headers: { uid, client, 'access-token': accessToken, 'Content-Type': 'application/json' } }
  const response = await axios.get(base_url + '/sign_out.json', config)
  if (response.data.success) {
    localStorage.setItem('uid', '')
    localStorage.setItem('client', '')
    localStorage.setItem('access-token', '')
    localStorage.setItem('expiry', '')
  }
  return response.data.success
}

export const getUser = async () => {
  const uid = localStorage.getItem('uid')
  const client = localStorage.getItem('client')
  const accessToken = localStorage.getItem('access-token')
  const expiry = localStorage.getItem('expiry')
  const config = { headers: { uid, client, 'access-token': accessToken, expiry, 'Content-Type': 'application/json' } }
  if (uid && client && accessToken) {
    try {
      const response = await axios.get(base_url + '/validate_token.json', config)
      if (response.data.success) {
        localStorage.setItem('uid', response.headers['uid'])
        localStorage.setItem('client', response.headers['client'])
        localStorage.setItem('access-token', response.headers['access-token'])
        localStorage.setItem('expiry', response.headers['expiry'])
        return response.data.data
      } else {
        return null
      }
    } catch(e){
      console.log("Error: ", e)
    }
  } else {
    return null
  }
}