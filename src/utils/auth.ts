export const setAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token')

export const clearLS = () => {
  localStorage.removeItem('access_token')
}
