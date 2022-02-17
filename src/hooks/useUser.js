import { useCallback, useContext } from "react";
import Context from "../context/userContext";
import loginServices from "../services/login"

export default function useUser() {
  const { jwt, setJWT } = useContext(Context)

  const login = useCallback(({username, password}) => {
    loginServices({ username, password })
      .then(jwt => {
        console.log("hola")
        console.log(jwt)
        setJWT(jwt)
      })
      .catch(err => {
      console.error(err)
    })
  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])
  
  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}