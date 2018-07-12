const AUTH_TOKEN = 'auth'

/**
|--------------------------------------------------
| Authentication Token
|--------------------------------------------------
*/
const setToken = token => localStorage.setItem(AUTH_TOKEN, token)

// const getToken = () => localStorage.getItem(AUTH_TOKEN)

 const getToken = state => state.getIn(['auth', 'token'])

const removeToken = () => localStorage.removeItem(AUTH_TOKEN)

export { setToken, getToken, removeToken }
