import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    const [text, setText] = useState("");
    const handleSearch = (ev) => {
        const searchText = ev.target.value;
        setText(searchText);
    };

    return (
        <div>
            <Header handleSearch={handleSearch}></Header>
            <Main searchText={text}></Main>
        </div>
    );
}

export default App;
