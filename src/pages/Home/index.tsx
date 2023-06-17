import { Link } from "react-router-dom"


export const Home =() =>{
    return(
        <div className="mt-16">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-6xl font-bold">Faça login com a sua Key e tenha <br /> acesso as dados de diversos clubes do Mundo</h1>
                <Link className='mt-12 mb-40 w-36 py-2 px-6 bg-white text-black rounded hover:bg-emerald-950' to="/private">Login</Link>
            </div>
            

            <footer className="mt-96">
                <p>Criado por Bruno Borges</p>
            </footer>
        </div>
    )
}