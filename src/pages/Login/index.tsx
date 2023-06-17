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
                navigate('/private');
            } else{
                alert("Key Invalida");
            }
        }


    }
    return(
        <div>
            <div className="mt-56 pb-96">
                <h2 className="text-white text-5xl font-bold m-4">Fazer Login</h2>

                <div className="flex flex-col items-center justify-center gap-4 mt-12">
                    <input className="text-3xl px-6 py-4 w-96"
                    type="text" 
                    value={key} 
                    onChange={handleKeyInput}
                    placeholder="Digite sua Key" 
                    />
                    <button className='py-2 px-6 bg-white text-emerald-950 rounded hover:bg-green-500' onClick={handleLogin}>Logar</button>
                    <p>Não tem uma Key? <span> <a className="hover:text-white" href="https://www.api-football.com/documentation-v3">Crie a sua aqui!</a></span></p>
                </div>
            </div>
        </div>
    )
}