import React, { useEffect, useState } from "react";

const MealDetail = () => {
  const [meal, setMeal] = useState();
  useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
      .then(res => res.json())
      .then(data => {
        console.log(data.meals?.[0]); 
        setMeal(data.meals[0])})
  }, [])
  return (
    <div>
      <h3>This is meal detail</h3>
      <h3>Name : {meal?.strMeal}</h3>
    </div>
  );
};

export default MealDetail;
