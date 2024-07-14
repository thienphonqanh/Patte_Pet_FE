import { useMatch } from 'react-router-dom'

const useMatchRoute = (path: string) => {
  const isMatch = useMatch(path)
  return Boolean(isMatch)
}
export default useMatchRoute
