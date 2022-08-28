import React, { useState } from 'react'

export const Context = React.createContext({})

export function UserContextProvider({ children }) {
  const [id, setId] = useState(null)
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);


  return <Context.Provider value={{
    id,
    setId,
    name,
    setName,
    lastName,
    setLastName
  }}>
    {children}
  </Context.Provider>
}

export default Context