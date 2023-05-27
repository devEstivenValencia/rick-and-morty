import "../assets/css/About.css"
import avatar_dev from "../assets/img/avatar_dev.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <main id="About">
      <Link to="https://estivenvalencia.co/" target="blank">
        <div class="card">
          <h1>Hola! Soy Estiven Valencia</h1>
          <img src={avatar_dev} alt="" id="avatar" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic necessitatibus quod temporibus excepturi. Molestias veniam eum debitis, nesciunt enim, rerum eius quibusdam cum consequuntur, doloremque ipsum! Deleniti explicabo accusantium consequuntur.</p>
        </div>
      </Link>
    </main>
  )
}

export default About