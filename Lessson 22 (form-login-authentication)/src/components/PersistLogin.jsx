import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from "../hooks/useRefreshToken "
import useAuth from "../hooks/useAuth"

const PersistLogin = () => {
    const [isLoading, setisLoading] = useState(true)
    const refresh = useRefreshToken()

    const { auth } = useAuth();

    useEffect(() => {
    let isMounted = true

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

        return() => isMounted = false
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${loaing}`);
        console.log();
    })

}

export default PersistLogin