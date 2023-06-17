import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Ligas } from './pages/Ligas';
import { Times } from './pages/Times';
import { Equipe } from './pages/Equipe';


function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () =>{
    await auth.signout();
    window.location.href = window.location.href;
  }


  return (
    <div className="App bg-emerald-900 h-full">
      <header className='bg-white'>
        <nav className='flex justify-center gap-4 p-4'>
          <Link className='py-2 px-6 bg-emerald-900 text-white rounded hover:bg-emerald-950' to="/">Home</Link>
          <br />
          <Link className='py-2 px-6 bg-emerald-900 text-white rounded hover:bg-emerald-950' to="/private">Acessar</Link>
          <br />
          {auth.user && <button className='py-2 px-6 bg-red-900 text-white rounded hover:bg-red-950' onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route 
          path="/private" 
          element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }/>
        <Route path='/pais/:name' element={<Ligas/>}></Route>
        <Route path='/times/:liga/:season' element={<Times/>}></Route>
        <Route path='/equipe/:liga/:season/:time' element={<Equipe/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
