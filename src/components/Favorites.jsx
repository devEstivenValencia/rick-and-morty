import Card from "./Card"
import { connect } from "react-redux"

const Favorites = ({ myFavorites }) => {
  return (
    <div className='cards'>
      {

        myFavorites?.map(({ id, name, status, species, gender, origin, image, onClose, location }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
              location={location}
            />
          )
        })

      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, null)(Favorites)
