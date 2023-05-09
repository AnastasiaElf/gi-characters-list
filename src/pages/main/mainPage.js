import { createContext, useContext, useReducer } from "react";
import "./mainPage.css";
import List from "./parts/list";
import Settings from "./parts/settings";

export const PageContext = createContext({});

export function usePageContext() {
    return useContext(PageContext);
}

const actions = {
    updateSorting: "UPDATE_SORTING",
    updateGrouping: "UPDATE_GROUPING",
    updateFiltering: "UPDATE_FILTERING",
    updateTravelersCombine: "UPDATE_TRAVELER_COMBINE",
};

function reducer(state, action) {
    switch (action.type) {
        case actions.updateSorting:
            // TODO: add data update
            return {
                ...state,
                selectedSortOptions: action.payload,
                data: [...state.data],
            };

        case actions.updateGrouping:
            return {
                ...state,
                selectedGroupOptions: action.payload,
                data: [...state.data],
            };

        case actions.updateFiltering:
            return {
                ...state,
                selectedFilterOptions: action.payload,
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
        selectedSortOptions: {},
        selectedGroupOptions: {},
        selectedFilterOptions: {},
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
