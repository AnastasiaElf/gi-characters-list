import initialData from "../../data/data";
import { orderOptions, orderOptionsData } from "./components/orderSelect";
import { groupOptions, groupOptionsData } from "./components/groupSelect";

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
        data: getData(initialData, settings),
        settings,
    };
}

function getData(data, settings) {
    let filteredData = filterData(data, settings);
    let processedData = groupAndSortData(filteredData, settings);

    return processedData;
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

function groupAndSortData(data, settings) {
    let result = [];
    let groupId = settings.groupBy.value;
    let groups = groupOptionsData[groupId];

    if (groups) {
        result = groups.reduce((result, group) => {
            const filteredData = data.filter((elem) => elem[groupId].toLowerCase() === group.value);
            const sortedData = sortData(filteredData, settings);
            result.push({
                group,
                data: sortedData,
            });
            return result;
        }, []);
    } else {
        result.push({ data: sortData(data, settings) });
    }

    return result;
}

function sortData(data, settings) {
    let newData = [...data];
    let orderId = settings.orderBy.value;
    let orderData = orderOptionsData[orderId];

    if (orderData) {
        newData.sort(
            (a, b) =>
                orderData.indexOf(a[orderId].toLowerCase()) - orderData.indexOf(b[orderId].toLowerCase()) ||
                a.name.localeCompare(b.name)
        );
    } else {
        switch (orderId) {
            case "name":
                newData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "releasedate":
                newData.sort((a, b) => a[orderId] - b[orderId] || a.name.localeCompare(b.name));
                break;
            default:
                break;
        }
    }

    return newData;
}
