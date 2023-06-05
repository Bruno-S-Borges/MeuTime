import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { CardJogadores } from "../../components/CardJogadores";
import { HeaderJogadores } from "../../components/HeaderJogadores";
import { CardEstatisticas } from "../../components/CardEstatisticas";

export const Equipe =() =>{
    const api = useApi();
    const [players, setPlayers]: any = useState([]);
    const [statistics, setStatistics]: any = useState([]);
    const{time, season, liga}: any = useParams()
    console.log(players)
    console.log(statistics)

    useEffect(()=>{
        const getPlayer = async (page = 1) =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.getPlayer(storageData, time, season, page);
                console.log(data)
                setPlayers(previousData => [...previousData, ...data.response])

                if (data.paging.current < data.paging.total) {
                    setTimeout(() => {
                    getPlayer(page + 1);
                    }, 1000);
                }
                const data1 = await api.getStatistics(storageData, time, season, liga);
                console.log(data1)
                setStatistics(data1.response)
            }
        };
        getPlayer();
    },[]);

    return(
        <div >
            {statistics != 0?
            <div>
                <HeaderJogadores statistics={statistics}></HeaderJogadores>
            
                <div className="flex mx-48">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold">JOGADORES</h1>
                        <div className="max-h-96 max-w-md overflow-y-auto">
                        {players && players.map((player) =><CardJogadores key={player.player.id} player={player}/>)}
                        </div>
                    </div>
                    
                    
                    <div>
                        <div className="flex gap-8">
                            <CardEstatisticas statistics={statistics && statistics.fixtures.wins.total} valor = 'Vitórias'></CardEstatisticas>
                            <CardEstatisticas statistics={statistics && statistics.fixtures.loses.total} valor = 'Derrotas'></CardEstatisticas>
                            <CardEstatisticas statistics={statistics && statistics.fixtures.draws.total} valor = 'Empates'></CardEstatisticas>
                            <CardEstatisticas statistics={statistics && statistics.fixtures.played.total} valor = 'Total de Jogos'></CardEstatisticas>
                        </div>
                        <div className="flex gap-8">
                            <CardEstatisticas statistics={statistics.goals.for.total.total} valor = 'Gols Marcados'></CardEstatisticas>
                            <CardEstatisticas statistics={statistics.goals.against.total.total} valor = 'Gols Sofridos'></CardEstatisticas>
                        </div>
                            <CardEstatisticas statistics={statistics && statistics.lineups[0].formation} valor = 'Formação mais Jogada'></CardEstatisticas>
                    </div>
                </div>
            </div>:
            <div>
                <p>Carregando...</p>
            </div>
            }
        </div>  
    )
}



                
                

                

                