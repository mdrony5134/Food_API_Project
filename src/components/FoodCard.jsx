import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ meal, isLoading }) => {
  const [searchFood, setSearchFood] = useState("");
  const [filterFood, setFilterFood] = useState(meal);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  // search functionality
  const handleFoodSearch = () => {
    const filterMeal = meal.filter((food) =>
      food.strMeal.toLowerCase().includes(searchFood.toLowerCase())
    );
    setFilterFood(filterMeal);
  };

  useEffect(() => {
    setFilterFood(meal);
  }, [meal]);

  // if (isLoading) {
  //   return (

  //   );
  // }
  return (
    <div className="min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2 py-40">
      <div>
        <h1 className="text-center text-4xl font-bold mb-16 text-gray-700">
          Our Food Menu
        </h1>
        <div className="relative w-2/4 mx-auto flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2 mb-20">
          <input
            value={searchFood}
            onChange={(e) => setSearchFood(e.target.value)}
            placeholder="Your favorite food"
            className="w-full p-4 rounded-full focus:outline-none"
            type="text"
          />
          <button
            onClick={handleFoodSearch}
            type="button"
            title="Start buying"
            className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
          >
            <span className="hidden text-yellow-900 font-semibold md:block">
              Search
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 mx-auto text-yellow-900 md:hidden bi bi-search"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filterFood.length > 0 ? (
          filterFood.map((meals, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div
                className="h-[236px]"
                style={{
                  backgroundImage: `url(${meals.strMealThumb})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-4 sm:p-6">
                <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                  {meals.strMeal}
                </p>
                <div className="flex flex-row">
                  <p className="text-[17px] font-bold text-[#0FB478]">
                    {meals.strCategory}
                  </p>
                </div>
                <p className="text-[#7C7C80] font-[15px] mt-6">
                  {truncateText(meals.strInstructions, 100)}
                </p>
                <Link
                  to={`/foodDetails/${meals.idMeal}`}
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  View on foodies
                </Link>
              </div>
            </div>
          ))
        ) : isLoading ? (
          <div className="text-center ml-[600px]">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No Food found for your search !
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
