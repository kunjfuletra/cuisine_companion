import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/searched.css";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=b3323153e6674bfda11a94971ab06ace&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <div className="Grid">
      {searchedRecipes.map((item) => {
        return (
          <div className="Card" key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="not found" />
              <h4>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
