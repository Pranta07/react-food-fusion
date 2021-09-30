import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import MealDetails from "./components/MealDetails/MealDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
    const [text, setText] = useState("");
    const handleSearch = (ev) => {
        const searchText = ev.target.value;
        setText(searchText);
    };

    return (
        <Router>
            <Header handleSearch={handleSearch} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/menu">
                    <Main searchText={text}></Main>
                </Route>
                <Route exact path="/meal/:id">
                    <MealDetails></MealDetails>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
