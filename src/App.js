//components
import Cadastro from "./components/Cadastro";
import Inicio from "./components/Inicio";
import BarraTopo from "./components/BarraTopo";
import ListaGeral from "./components/ListaGeral";
import Adivinhe from "./components/Adivinhe";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

//context
import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//css
import './index.css';
import ListarJogos from "./components/ListarJogos";
import NotFound from "./components/NotFound";
import SearchForm from "./components/SearchForm";
import BarraRodape from "./components/BarraRodape";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import CreatePost from "./Pages/CreatePost/CreatePost";
import Dashboard from "./Pages/Dashboard/Dashboard";
import About from "./Pages/About/About";

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <BarraTopo />
          <div className="container">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/listar" element={<ListaGeral />} />
              <Route path="/listar/:id" element={<ListarJogos />} />
              <Route path="/edit" element={<Cadastro />} />
              <Route path="/adivinhe" element={<Adivinhe />} />
              <Route path="/search" element={<SearchForm />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/posts/create" element={user ? <CreatePost />  : <Navigate to="/login" />} />
              <Route path="/dashboard" element={user ? <Dashboard />  : <Navigate to="/login" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <BarraRodape />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;