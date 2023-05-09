import { createContext, useContext, useReducer } from "react";
import "./mainPage.css";
import List from "./parts/list";
import Settings from "./parts/settings";
import { orderOptions } from "./parts/orderSelect";
import { groupOptions } from "./parts/groupSelect";

export const PageContext = createContext({});

export function usePageContext() {
    return useContext(PageContext);
}

const actions = {
    updateOrdering: "UPDATE_ORDERING",
    updateGrouping: "UPDATE_GROUPING",
    updateFilters: "UPDATE_FILTERS",
    updateTravelersCombine: "UPDATE_TRAVELER_COMBINE",
};

function reducer(state, action) {
    switch (action.type) {
        case actions.updateOrdering:
            // TODO: add data update
            return {
                ...state,
                orderBy: action.payload,
                data: [...state.data],
            };

        case actions.updateGrouping:
            return {
                ...state,
                groupBy: action.payload,
                data: [...state.data],
            };

        case actions.updateFilters:
            return {
                ...state,
                filters: action.payload,
                data: [...state.data],
            };

        case actions.updateTravelersCombine:
            return {
                ...state,
                isCombineTravelers: action.payload,
                data: [...state.data],
            };

        default:
            break;
    }
    throw Error("Unknown action.");
}

function MainPage() {
    const [state, dispatch] = useReducer(reducer, {
        data: [],
        orderBy: orderOptions[0],
        groupBy: groupOptions[0],
        filters: [],
        isCombineTravelers: true,
    });

    return (
        <PageContext.Provider value={{ state, dispatch, actions }}>
            <div>MainPage</div>
            <Settings />
            <List />
        </PageContext.Provider>
    );
}

export default MainPage;
