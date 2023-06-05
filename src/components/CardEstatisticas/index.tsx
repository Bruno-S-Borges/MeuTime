export const CardEstatisticas =({statistics, valor}) =>{
    return(
        <div className="w-36 h-16 px-4 py-1 flex flex-col justify-center items-center border bg-neutral-100 hover:bg-neutral-400">
            <p>{valor}</p>
            <h1 className="text-lg font-bold">{statistics}</h1>
        </div>
    )
}