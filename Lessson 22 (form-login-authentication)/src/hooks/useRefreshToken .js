import axios from "../api/axios"
import useAuth from "./useAuth"
import setAuth from "./useAuth"



const useRefreshToken  = () => {
    const {setAuth} = useAuth()

    const refresh = async () => {
        const response = await axios.get('/refresh', )
    }
  return (
    <div>useRefreshToken </div>
  )
}

export default useRefreshToken 