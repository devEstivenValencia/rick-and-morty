import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const Card = ({ id, name, status, species, gender, origin, image, onClose, location, addFav, removeFav, myFavorites }) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose, location });
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='card'>
         <button onClick={handleFavorite} className={isFav ? 'favorite' : 'noFavorite'}>
            <i class="fi fi-sr-heart"></i>
         </button>
         <button onClick={() => onClose(id)}>
            <i class="fi fi-rr-cross-small"></i>
         </button>

         <Link to={`/detail/${id}`}>
            <div className="id">
               <span>{id}</span>
            </div>
            <div className="img">
               <img src={image} alt={name} className={status} />
               <span className={`status ${status}`}>{status}</span>
            </div>
            <div className="name">
               <p className={`character ${status}`}>{name}</p>
               {gender === "Male" ? <i class="fi fi-rs-mars"></i> : <i class="fi fi-rs-venus"></i>}
            </div>
            <div className="card_description">
               <p>{species}</p>
            </div>
            <div className="card_ubication">
               <img src="https://cdn-icons-png.flaticon.com/512/4238/4238269.png" alt="" />
               <p><em>{origin.replace("(Replacement Dimension)", "")}</em></p>
            </div>
            <div className="card_ubication">
               <img src="https://cdn-icons-png.flaticon.com/512/149/149059.png" alt="" />
               <p>{location}</p>
            </div>
         </Link>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)
