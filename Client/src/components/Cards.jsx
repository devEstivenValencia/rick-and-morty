import Card from './Card';

const Cards = ({ characters, onClose }) => {
   return (
      <div className='cards'>
         {
            characters.map(({ id, name, status, species, gender, origin, image, location }) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin?.name}
                     image={image}
                     onClose={onClose}
                     location={location?.name}
                  />
               )
            })
         }
      </div>
   );
}

export default Cards
