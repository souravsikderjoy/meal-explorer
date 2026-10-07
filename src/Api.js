const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function getMealsByCategory(category) {
  const response = await fetch(
    `${BASE_URL}/filter.php?c=${category}`
  );

  const data = await response.json();

  return data.meals;
}

export async function getMealById(id) {
  const response = await fetch(
    `${BASE_URL}/lookup.php?i=${id}`
  );

  const data = await response.json();

  return data.meals[0];
}