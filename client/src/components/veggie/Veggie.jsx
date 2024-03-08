import React, { useEffect, useState} from "react";
import "../veggie/veggie.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  const [perPage, setPerPage] = useState(3);
 

  useEffect(() => {
    getVeggie();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleResize = () => {
    const width = window.innerWidth;
    let newPerPage = 3;
    if (width < 768) {
      newPerPage = 2;
    }
    if (width < 480) {
      newPerPage = 1;
    }
    if (perPage !== newPerPage) {
      setPerPage(newPerPage);
    }
  };

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=b3323153e6674bfda11a94971ab06ace&number=9&tags=vegetarian"
      );

      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <div className="wrapper">
      <h3>Vegetarian Picks</h3>

      <Splide
        options={{
          perPage: perPage,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="card">
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="gradient" />
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Veggie;

