import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { CardPaises } from "../../components/CardPaises";

export const Private =() =>{
    const api = useApi();
    const [paises, setPaises]: any = useState([]);
    console.log(paises)

    useEffect(()=>{
        const getPaises = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.getPaises(storageData);
                console.log(data)
                setPaises(data.response)
            }
        }
            getPaises()
    },[]);

    return(
        <div>
            <h2 className="text-white text-5xl font-bold">Selecione o País</h2>
            <div className="grid grid-cols-6 gap-8 px-20 py-10">
                {paises && paises.map((pais) =><CardPaises key={pais.name} pais={pais}/>)}
            </div>


        </div>
    )
}