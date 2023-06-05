import { Link } from "react-router-dom"

export const CardPaises =({pais}) =>{
    
    return(
        <div className="flex justify-center items-center border bg-neutral-100 hover:bg-neutral-400">
            <Link to={`/pais/${pais.name}`}>
                <img className="w-60 p-4" src={pais.flag} alt={pais.name} />
                <h2 className="text-lg font-semibold">{pais.name}</h2>
            </Link>
        </div>
    )
}