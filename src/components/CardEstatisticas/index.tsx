export const CardEstatisticas =({statistics, valor}) =>{
    return(
        <div className="w-44 h-24 px-4 py-1 flex flex-col justify-center items-center border bg-neutral-100 hover:bg-neutral-400">
            <p className="text-lg">{valor}</p>
            <h1 className="text-3xl font-bold">{statistics}</h1>
        </div>
    )
}