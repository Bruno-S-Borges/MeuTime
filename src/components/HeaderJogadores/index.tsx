export const HeaderJogadores =({statistics}) =>{
    return(
        <div className="bg-green-100">
            <div className="mx-48 p-4 flex justify-between items-center">
                <div className="flex gap-4">
                    <div>
                        <img className="w-32" src={statistics.team.logo} alt={statistics.team.name} />
                    </div>
                    <div className="flex flex-col justify-items-start items-start">
                        <h1 className="text-4xl font-bold">{statistics.team.name}</h1>
                        <h2 className="text-2xl font-bold">{statistics.league.season}</h2>
                    </div>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-red-800" >Estatísticas</h1>
                </div>

                <div className="flex flex-row-reverse gap-4">
                    <div>
                        <img className="w-32" src={statistics.league.logo} alt={statistics.league.name} />
                    </div>
                    <div className="flex flex-col justify-items-start items-end">
                        <h1 className="text-4xl font-bold">{statistics.league.country}</h1>
                        <h2 className="text-2xl font-bold">{statistics.league.name}</h2>
                    </div>
                </div>
            </div>
 
        </div>
    )
}