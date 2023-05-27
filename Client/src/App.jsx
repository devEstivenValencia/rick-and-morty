import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import axios from 'axios'

import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'

function App() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  // let EMAIL = "dev@estivenvalencia.co"
  // let PASSWORD = "123456"

  let EMAIL = "123"
  let PASSWORD = "123"

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');

    } else alert('Invalid User')
  }

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(characters.filter(character => character.id !== parseInt(id)))
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <>
      <Nav showNav={useLocation().pathname !== "/"} onSearch={onSearch} />
      <h1 id='MainTittle'>Rick And Morty</h1>
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About style={{ backgroundColor: "blue" }} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
