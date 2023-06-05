import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/user"
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({children}: {children: JSX.Element}) =>{
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(()=>{
        const validateToken = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validateToken(storageData);
                if(data.get){
                    setUser(data.get);
                }
            }
        }
        validateToken()

    },[]);

    const signin = async (key: string) =>{
        const data = await api.signin(key);

        if (data){
            if(data.get){
            setUser(data.get);
            setToken(key);
            return true;
        }}
            return false;
    }

    const signout = async () =>{
        setUser(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }



    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )

}