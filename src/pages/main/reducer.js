import initialData from "../../data/data";
import { orderOptions } from "./parts/orderSelect";
import { groupOptions } from "./parts/groupSelect";

const defaultGroupOption = groupOptions.find((elem) => elem.value === null);
const defaultOrderOption = orderOptions.find((elem) => elem.value === "name");

export const actionType = {
    updateOrdering: "UPDATE_ORDERING",
    updateGrouping: "UPDATE_GROUPING",
    updateFilters: "UPDATE_FILTERS",
    updateTravelersCombine: "UPDATE_TRAVELER_COMBINE",
};

const initialSettings = {
    orderBy: defaultOrderOption,
    groupBy: defaultGroupOption,
    filters: [],
    isCombineTravelers: true,
};

export const initialState = {
    data: getData(initialData, initialSettings),
    settings: initialSettings,
};

export function mainReducer(state, action) {
    let settings = { ...state.settings };

    switch (action.type) {
        case actionType.updateOrdering:
            settings.orderBy = action.payload;
            break;

        case actionType.updateGrouping:
            settings.groupBy = action.payload;
            break;

        case actionType.updateFilters:
            settings.filters = action.payload;
            break;

        case actionType.updateTravelersCombine:
            settings.isCombineTravelers = !settings.isCombineTravelers;
            break;

        default:
            return;
    }

    return {
        data: getData(state.data, settings),
        settings,
    };
}

function getData(data, settings) {
    // let newData = [];
    // return newData;

    // TODO:
    return [{ group: null, data: initialData }];
}
