import React from "react";
import context from './context'

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <context.Provider value={{user, setUser}}>
            {children}
        </context.Provider>
    )
}