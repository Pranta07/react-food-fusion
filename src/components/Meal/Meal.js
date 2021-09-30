import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Meal = (props) => {
    const { meal } = props;
    const { idMeal, strMealThumb, strCategory, strMeal, strArea } = meal;

    const history = useHistory();
    const handleDetails = () => {
        history.push(`/meal/${idMeal}`);
    };

    return (
        <Col>
            <Card className="text-center border-0 shadow h-100">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text className="text-warning fw-bold">
                        <span className="text-dark">Category: </span>
                        {strCategory}
                    </Card.Text>
                    <Card.Text className="text-warning fw-bold">
                        <span className="text-dark">Area: </span>
                        {strArea}
                    </Card.Text>
                </Card.Body>
                <button
                    onClick={handleDetails}
                    id="button-details"
                    className="m-2 btn btn-warning"
                >
                    Details
                </button>
            </Card>
        </Col>
    );
};

export default Meal;
