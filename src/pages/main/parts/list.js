import React from "react";
import Card from "../../../library/card/card";
import { usePageContext } from "../mainPage";

function List() {
    const { state } = usePageContext();

    return (
        <div>
            <div className="cards">
                {state.data[0].data.map((elem) => (
                    <Card data={elem} key={elem.id} />
                ))}
            </div>
        </div>
    );
}

export default List;
