import { Link } from "react-router-dom"

export const CardTimes =({time, liga, season}) =>{
    
    return(
        <div className="flex justify-center items-center border bg-neutral-100 hover:bg-neutral-400">
            <Link to={`/equipe/${liga}/${season}/${time.team.id}`}>
                <img className="w-60 p-4" src={time.team.logo} alt={time.team.name} />
                <h2 className="text-lg font-semibold">{time.team.name}</h2>
            </Link>
        </div>
    )
}