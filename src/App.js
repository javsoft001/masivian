import { useEffect, useState } from "react";
import "./sass/App.scss";
import clienteAxios from "./config/axios";

//components
import DataSheet from "./components/DataSheet";
import StarRating from "./components/StarRating";
import Spinner from "./components/Spinner";

import axios from "axios";

function App() {
  //State
  const [comic, setComic] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const consultaComic = async () => {
      //Llamado al API
      const respuesta = await clienteAxios.get();
      setComic(respuesta.data);
      setLoading(false);
    };

    consultaComic();
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <DataSheet comic={comic} /> <StarRating />
          <button
            className={"Btn"}
            style={{ marginTop: 10 }}
            onClick={() => (window.location.href = "/")}
          >
            NEXT
          </button>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;
