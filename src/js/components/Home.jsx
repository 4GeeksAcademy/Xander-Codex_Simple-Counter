import React, { useEffect, useState } from "react";
import Contador from "./SecondsCounter";

const Home = () => {
  const [segundos, setsegundos] = useState(0);
//Hookk
  useEffect(() => {
    const interval = setInterval(() => {
      setsegundos(anterior => anterior + 1);
    }, 1000); //suma 1 cada 1000ms (1s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Contador segundos={segundos} />
    </div>
  );
};

export default Home;