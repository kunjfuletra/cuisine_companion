import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../search/search.css";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <div className="searchcontainers">
      <div className="form">
        <form action="" onSubmit={submitHandler}>
          <div>
            <FaSearch />
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              placeholder="apple "
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
