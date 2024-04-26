import { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <span className="title">Welcome.</span>
        <span className="subTitle">
          Millions of movies, TV Shows and people to discover. Explore now.
        </span>{" "}
        <div className="searchInput">
          <input
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            type="text"
            placeholder="Search for a movie or tv show...."
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
