import React from "react";
import Card from "../../../library/card/card";
import { usePageContext } from "../mainPage";

function List() {
    const { state } = usePageContext();

    return (
        <>
            {state.data.map(({ group, data }) => {
                const groupId = group ? group.value : "all";
                const cards = (
                    <div className="cards" key={groupId + "-cards"}>
                        {data.map((elem) => (
                            <Card data={elem} key={elem.id} />
                        ))}
                    </div>
                );

                if (group) {
                    return (
                        <React.Fragment key={groupId + "-group"}>
                            <div className="cards-divider" key={groupId + "-divider"}>
                                {group.label}
                            </div>
                            {cards}
                        </React.Fragment>
                    );
                } else {
                    return cards;
                }
            })}
        </>
    );
}

export default List;
