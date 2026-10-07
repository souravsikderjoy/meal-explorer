import { useNavigate } from "react-router-dom";
import "../CSS/FoodCard.css";

function FoodCard({ food }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe/${food.idMeal}`);
  }

  return (
    <div className="food-card" onClick={handleClick}>
      <img
        className="food-img"
        src={food.strMealThumb}
        alt={food.strMeal}
      />

      <h3 className="food-name">
        {food.strMeal}
      </h3>
    </div>
  );
}

export default FoodCard;