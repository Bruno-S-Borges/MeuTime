export const CardJogadores =({player}) =>{
    return(
        <div className="m-5 max-w-md max-h-44 flex flex-row justify-center items-center border gap-6 p-4 bg-neutral-100 hover:bg-neutral-400">
            <div>
                <img className="w-24" src={player.player.photo} alt={player.player.name} />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h2 className="font-semibold">{player.player.name}</h2>
                <p>Idade: {player.player.age}</p>
                <p>Nacionalidade: {player.player.nationality}</p>
            </div>
        </div>
    )
}