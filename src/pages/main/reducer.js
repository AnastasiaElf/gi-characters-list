import initialData from "../../data/data";
import { orderOptions } from "./parts/orderSelect";
import { groupOptions, groupOptionsData } from "./parts/groupSelect";

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
    let filteredData = filterData(initialData, settings);
    let newData = groupData(filteredData, settings);
    
    return newData;
}

function filterData(data, settings) {
    let result;
    let { filters, isCombineTravelers } = settings;

    let filterParams = filters.reduce((result, item) => {
        let key = item.dataKey;

        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);

        return result;
    }, {});

    result = data.filter((elem) => {
        return Object.entries(filterParams).every(([filterKey, filterOptions]) => {
            return filterOptions.some((filterOption) => {
                return elem[filterKey].toLowerCase() === filterOption.value;
            });
        });
    });

    if (isCombineTravelers) {
        result = result.filter(
            (elem) => !elem.isTraveler || (elem.characterId === "aether" && elem.element === "Anemo")
        );
    }

    return result;
}

function groupData(data, settings) {
    let result = [];
    let groupId = settings.groupBy.value;
    let groups = groupOptionsData[groupId];

    if (groups) {
        result = groups.reduce((result, group) => {
            result.push({
                group,
                // TODO: sort data
                data: data.filter((elem) => elem[groupId].toLowerCase() === group.value),
            });
            return result;
        }, []);
    } else {
        result.push({ data });
    }

    return result;
}
