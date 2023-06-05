import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import { CardLigas } from "../../components/CardLigas";


export const Ligas =() =>{
    const api = useApi();
    const [ligas, setLigas]: any = useState([]);
    const{name}: any = useParams()

    useEffect(()=>{
        const getLigas = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.getLigas(storageData, name);
                setLigas(data.response)
            }
        }
        getLigas()
    },[]);

    return(
        <div>
            <div>Ligas</div>
            <div className="grid grid-cols-6 gap-8 px-20 py-10">
                {ligas && ligas.map((liga) =><CardLigas key={liga.league.name} liga={liga}/>)}
            </div>
        </div>
    )
}