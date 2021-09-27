import React from "react";
import logo from "../../logo.jpg";
const Header = (props) => {
    const { handleSearch } = props;
    return (
        <nav className="px-5 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="/brand">
                    <img src={logo} alt="" width="40" height="40" />
                    {" Food Fusion"}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul
                        className="my-2 navbar-nav me-auto my-lg-0 navbar-nav-scroll"
                        // style={{--bs-scroll-height: 100px}}
                    >
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/home"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/menu">
                                Menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/orders">
                                Orders
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">
                                About us
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            onChange={handleSearch}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-warning" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
