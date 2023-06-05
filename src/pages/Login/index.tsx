import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login =() =>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [key, setKey] = useState('');

    const handleKeyInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setKey(event.target.value);
    }

    const handleLogin = async () =>{
        if(key) {
            const isLogged = await auth.signin(key);
            if (isLogged){
                navigate('/');
            } else{
                alert("Key Invalida");
            }
        }


    }
    return(
        <div>
            <h2>Página Fechada</h2>

            <input 
                type="text" 
                value={key} 
                onChange={handleKeyInput}
                placeholder="Digite sua Key" 
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}