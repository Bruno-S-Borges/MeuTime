import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { CardTimes } from "../../components/CardTimes";

export const Times =() =>{
    const api = useApi();
    const [times, setTimes]: any = useState([]);
    const{liga, season}: any = useParams()
    
    useEffect(()=>{
        const getTimes = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.getTimes(storageData, liga, season);
                setTimes(data.response)
            }
        }
        getTimes()
    },[]);



    return(
        <div>
            <h2 className="text-white text-5xl font-bold">Selecione o Time</h2>
            
            <div className="grid grid-cols-6 gap-8 px-20 py-10">
                {times && times.map((time) =>
                <CardTimes key={time.team.id} time={time} liga={liga} season={season} />
                )}
            </div>
            
        </div>
    )
}