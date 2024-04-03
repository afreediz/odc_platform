import {createContext, useState} from 'react'

export const usercontext = createContext()

export const UsercontextWrapper = ({children}) => {
    const [user, setUser] = useState()
    return(<usercontext.Provider value={{user, setUser}}>
        {children}
    </usercontext.Provider>)
}

export default UsercontextWrapper