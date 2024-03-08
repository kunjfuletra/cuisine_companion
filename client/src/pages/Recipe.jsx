import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async()=> {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=b3323153e6674bfda11a94971ab06ace`);
    const detailData = await data.json();
    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <StyledImage src={details.image} alt="" />
      </div>
      <Info>
        <ButtonWrapper>
          <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instruction</Button>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        </ButtonWrapper>
        <TextWrapper>
          {activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
              <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients && details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </TextWrapper>
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Info = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const TextWrapper = styled.div`
  width: 100%;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 300px; /* Set the max height as per your requirement */
  border-radius: 10px; /* Add border radius if needed */
`;

export default Recipe;
