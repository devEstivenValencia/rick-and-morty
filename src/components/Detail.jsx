import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import "../assets/css/Detail.css"

export default function Detail() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  const { name, status, species, gender, image, origin } = character
  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <main>
        <div className="description">
          <p><b>Status:</b> {status}</p>
          <p><b>Specie:</b> {species}</p>
          <p><b>Gender:</b> {gender}</p>
          <p>{origin?.name}</p>
        </div>
        <div>

        </div>
        <div className='character'>
          <i className={status}></i>
          <i className={status}></i>
          <p className={status}>{name}</p>
          <img src={image} alt={name} className={status}/>
        </div>
      </main>

    </div>

  )
}