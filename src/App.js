import { useMemo } from "react";
import "./App.css";
import data from "./data/data";
import Card from "./library/card/card";

function App() {
    const characters = useMemo(() => {
        let result = [];
        Object.entries(data).forEach(([key, value]) => {
            result.push({
                id: key,
                ...value,
            });
        });
        return result;
    }, []);

    return (
        <div className="main">
            {characters.map((elem) => (
                <Card data={elem} />
            ))}
        </div>
    );
}

export default App;
