import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealsByCategory } from "../Api";
import FoodCard from "../Components/FoodCard";
import  "../CSS/Foods.css";




function Foods() {
  const { category } = useParams();

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      const data = await getMealsByCategory(category);

      setFoods(data || []);
    }

    fetchFoods();
  }, [category]);

  return (
    <div className="foods-page">
      <h1>{category} Foods</h1>

      <div className="foods-container">
        {foods.map((food) => (
          <FoodCard
            key={food.idMeal}
            food={food}
          />
        ))}
      </div>
    </div>
  );
}

export default Foods;