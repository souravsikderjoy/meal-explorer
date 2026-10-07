import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Home.css";


function Home() {
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  function handleSearch() {
    if (category.trim() === "") {
      return;
    }

    navigate(`/foods/${category}`);
  }

  return (
    <div className="home">
      <h1>Meal Explorer</h1>

      <input
        type="text"
        placeholder="Enter a category..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Home;