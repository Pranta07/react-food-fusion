import React from "react";

const Meal = (props) => {
    const { meal } = props;
    const { strMealThumb, strCategory, strMeal, strArea } = meal;

    return (
        <div className="col">
            <div className="text-center border-0 shadow card h-100">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="text-warning fw-bold">
                        <span className="text-dark">Category:</span>{" "}
                        {strCategory}
                    </p>
                    <p className="text-warning fw-bold">
                        <span className="text-dark">Area:</span> {strArea}
                    </p>
                </div>
                <button id="button-details" className="m-2 btn btn-warning">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Meal;
