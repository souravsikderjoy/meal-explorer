import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../Api";
import "../CSS/Recipe.css";

function Recipe() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      const data = await getMealById(id);
      setMeal(data);
    }

    fetchMeal();
  }, [id]);

  if (!meal) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="recipe-page">
      <h1>{meal.strMeal}</h1>

      <img
        className="recipe-img"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <h2>Category: {meal.strCategory}</h2>

      <h2>Area: {meal.strArea}</h2>

      <h2>Instructions</h2>

      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default Recipe;