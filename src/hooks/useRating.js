import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const useRating = (initialState) => {
  //State
  const [rating, setRating] = useState(initialState);
  const [hover, setHover] = useState(null);

  const sendRating = (ratingValue) => {
    setRating(ratingValue);
    //Ventana confirmacion
    Swal.fire({
      title: "¿Estás seguro de enviar esta calificación?",
      text: "¡No podrás revertir esto!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Calificado!",
          "Sigue puntuando tus comics favoritos",
          "success"
        ).then((result) => {
          //Siguiente Comic
          window.location.href = "/";
        });
      } else {
        setRating(null);
      }
    });
  };

  const StarRating = () => (
    <div className="rating">
      <h3>Deja tu calificación...</h3>
      {[...Array(5)].map((star, i) => {
        const value = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={value}
              onClick={() => sendRating(value)}
            />
            <FaStar
              color={value <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className="star"
              size={50}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );

  return [rating, StarRating];
};

export default useRating;
