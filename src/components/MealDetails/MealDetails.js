import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const MealDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => res.json())
            .then((data) => setMeal(data.meals[0]));
    }, []);

    return (
        <Card
            className="text-center border-0 shadow h-100 mx-auto my-3"
            style={{ width: "24rem" }}
        >
            <Card.Img variant="top" src={meal.strMealThumb} />
            <Card.Body>
                <Card.Title>{meal?.strMeal}</Card.Title>
                <Card.Text>{meal?.strInstructions?.slice(0, 200)}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MealDetails;
