import { useState } from "react";
import { Link } from "react-router-dom"

export const CardLigas =({liga}) =>{
    const [season, setSeason]: any = useState([]);
    const seasons = liga.seasons

    return(
        <div className="flex flex-col justify-between items-center border bg-neutral-100">
            
            <div className="flex justify-center items-center p-2">
                <img className="max-w-52 max-h-52" src={liga.league.logo} alt={liga.league.name} />
            </div>

            <div className="flex flex-col justify-end items-center">
                <h2 className="text-lg font-semibold">{liga.league.name}</h2>

                 <select name="Ano" id={liga.league.name} onChange={season => setSeason(season.target.value)}>
                    {seasons && seasons.map((season) =>
                     <option value={season.year}>{season.year}</option>
                      )}
                </select>

                 <Link className="text-white my-2 text-lg font-semibold bg-indigo-500 px-6 py-1 rounded-lg hover:bg-indigo-600" to={`/times/${liga.league.id}/${season}`}>Ver Times</Link>   

            </div>
              
        </div>
    )
}

