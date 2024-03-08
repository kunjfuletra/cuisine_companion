import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";

function Popular() {
  
  const[popular, setPopular] = useState([]);
  const [perPage, setPerPage] = useState(3);
  useEffect(() =>
  {
    getPopular();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

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

  const getPopular = async() =>{


    const check = localStorage.getItem('popular');
    if(check)
    {
      setPopular(JSON.parse(check))
    }
    else
    {
      const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=b3323153e6674bfda11a94971ab06ace&number=9');

      const data = await api.json();
      localStorage.setItem("popular",JSON.stringify(data.recipes));
      setPopular(data.recipes);

    }


  }
  return (
    <div> 
            <Wrapper>
              <h3>Popular Picks</h3>

              <Splide options={{
                perPage : perPage,
                arrows : true,
                pagination : false,
                drag: 'free',
                gap: "5rem",
              }}>
              {popular.map( (recipe) =>{return(
              <SplideSlide key={recipe.id}>  
              <Card>
                <Link to={'/recipe/'+recipe.id}>
                <p>{recipe.title}</p> 
                <img src={recipe.image} alt ={recipe.title}/>
                <Gradient />
                </Link>
              </Card> 

              </SplideSlide>)})}
              </Splide>
            </Wrapper>  
    </div>
  );
}
const Wrapper = styled.div`
  margin:4rem 0rem;
  `;
  const Card = styled.div`
  min-height: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  position : relative;
  img{
      border-radius : 1rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

  }
  p{
    position :absolute;
    z-index : 10;
    left:0%;
    bottom:0%;
    transform: translated(-50%, 0%);
    color :white;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   
  `;
  const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width:100%;
  height:100%;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
  `;
  
export default Popular;
