import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Main = (props) => {
    let { searchText } = props;
    const [meals, setMeals] = useState([]);
    // console.log(searchText);
    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        )
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    }, [searchText]);

    return (
        <div className="m-5 row">
            <div className="col-9">
                <div className="row row-cols-lg-4 g-4">
                    {meals.map((meal) => (
                        <Meal key={meal.idMeal} meal={meal}></Meal>
                    ))}
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    );
};

export default Main;
