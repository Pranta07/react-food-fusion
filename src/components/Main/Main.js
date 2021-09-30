import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        <Container>
            <Row className="my-5">
                <Col>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {meals?.map((meal) => (
                            <Meal key={meal?.idMeal} meal={meal}></Meal>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
