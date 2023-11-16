import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from "../hooks/useRefreshToken "
import useAuth from "../hooks/useAuth"

const PersistLogin = () => {
    const [isLoading, setisLoading] = useState(true)
    const refresh = useRefreshToken()

    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (error) {
                console.log(error);
                
            }finally{
                setisLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setisLoading()
    })
}

export default PersistLogin