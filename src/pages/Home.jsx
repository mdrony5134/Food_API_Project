import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const fetchMealData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.meals) {
        setMeal(data.meals);
        setIsLoading(false);
      } else {
        setMeal([]);
      }

      console.log(data);
      // console.log(fetchData)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };
  // console.log(meal);
  useEffect(() => {
    fetchMealData();
  }, []);
 

  return (
    <div>
      <Hero/>
      <FoodCard meal={meal} isLoading={isLoading} />
      <Footer/>
    </div>
  );
};

export default Home;
