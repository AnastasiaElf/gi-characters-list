import React, { useMemo, useState } from "react";
import "./App.css";
import data from "./data/data";
import Card from "./library/card/card";
import Select, { components } from "react-select";

const sortOptions = [
    { value: "name", label: "Name" },
    { value: "element", label: "Element" },
    { value: "weapontype", label: "Weapon" },
    { value: "rarity", label: "Rarity" },
    { value: "region", label: "Region" },
    { value: "releasedate", label: "Release date" },
    { value: "gender", label: "Gender" },
    { value: "body", label: "Body type" },
];

const groupOptions = [
    { value: null, label: "None" },
    { value: "element", label: "Element" },
    { value: "weapontype", label: "Weapon" },
    { value: "rarity", label: "Rarity" },
    { value: "region", label: "Region" },
    { value: "releaseversion", label: "Release version" },
    { value: "gender", label: "Gender" },
    { value: "body", label: "Body type" },
];

const rarityOptions = [
    { value: "5", label: "5 star", dataGroup: "rarity" },
    { value: "4", label: "4 star", dataGroup: "rarity" },
];

const elementOptions = [
    { value: "pyro", label: "Pyro", dataGroup: "element" },
    { value: "hydro", label: "Hydro", dataGroup: "element" },
    { value: "anemo", label: "Anemo", dataGroup: "element" },
    { value: "electro", label: "Electro", dataGroup: "element" },
    { value: "dendro", label: "Dendro", dataGroup: "element" },
    { value: "cryo", label: "Cryo", dataGroup: "element" },
    { value: "geo", label: "Geo", dataGroup: "element" },
];

const weaponOptions = [
    { value: "sword", label: "Sword", dataGroup: "weapontype" },
    { value: "claymore", label: "Claymore", dataGroup: "weapontype" },
    { value: "polearm", label: "Polearm", dataGroup: "weapontype" },
    { value: "catalyst", label: "Catalyst", dataGroup: "weapontype" },
    { value: "bow", label: "Bow", dataGroup: "weapontype" },
];

const genderOptions = [
    { value: "male", label: "Male", dataGroup: "gender" },
    { value: "female", label: "Female", dataGroup: "gender" },
];

const bodyOptions = [
    { value: "small", label: "S", dataGroup: "body" },
    { value: "medium", label: "M", dataGroup: "body" },
    { value: "large", label: "L", dataGroup: "body" },
];

const regionOptions = [
    { value: "mondstadt", label: "Mondstadt", dataGroup: "region" },
    { value: "liyue", label: "Liyue", dataGroup: "region" },
    { value: "inazuma", label: "Inazuma", dataGroup: "region" },
    { value: "sumeru", label: "Sumeru", dataGroup: "region" },
    { value: "snezhnaya", label: "Snezhnaya", dataGroup: "region" },
    { value: "fontaine", label: "Fontaine", dataGroup: "region" },
    { value: "natlan", label: "Natlan", dataGroup: "region" },
    { value: "noregion", label: "No region", dataGroup: "region" },
];

const versionOptions = [
    { value: "1.0", label: "Version 1.0", dataGroup: "releaseversion" },
    { value: "1.1", label: "Version 1.1", dataGroup: "releaseversion" },
    { value: "1.2", label: "Version 1.2", dataGroup: "releaseversion" },
    { value: "1.3", label: "Version 1.3", dataGroup: "releaseversion" },
    { value: "1.4", label: "Version 1.4", dataGroup: "releaseversion" },
    { value: "1.5", label: "Version 1.5", dataGroup: "releaseversion" },
    { value: "1.6", label: "Version 1.6", dataGroup: "releaseversion" },
    { value: "2.0", label: "Version 2.0", dataGroup: "releaseversion" },
    { value: "2.1", label: "Version 2.1", dataGroup: "releaseversion" },
    { value: "2.2", label: "Version 2.2", dataGroup: "releaseversion" },
    { value: "2.3", label: "Version 2.3", dataGroup: "releaseversion" },
    { value: "2.4", label: "Version 2.4", dataGroup: "releaseversion" },
    { value: "2.5", label: "Version 2.5", dataGroup: "releaseversion" },
    { value: "2.6", label: "Version 2.6", dataGroup: "releaseversion" },
    { value: "2.7", label: "Version 2.7", dataGroup: "releaseversion" },
    { value: "2.8", label: "Version 2.8", dataGroup: "releaseversion" },
    { value: "3.0", label: "Version 3.0", dataGroup: "releaseversion" },
    { value: "3.1", label: "Version 3.1", dataGroup: "releaseversion" },
    { value: "3.2", label: "Version 3.2", dataGroup: "releaseversion" },
];

const sortOptionsOrder = {
    rarity: rarityOptions.map((elem) => elem.value),
    element: elementOptions.map((elem) => elem.value),
    weapontype: weaponOptions.map((elem) => elem.value),
    gender: genderOptions.map((elem) => elem.value),
    body: bodyOptions.map((elem) => elem.value),
    region: regionOptions.map((elem) => elem.value),
};

const groupOptionsValues = {
    element: elementOptions,
    weapontype: weaponOptions,
    rarity: rarityOptions,
    region: regionOptions,
    releaseversion: versionOptions,
    body: bodyOptions,
    gender: genderOptions,
};

const filterOptions = [
    {
        label: "Rarity",
        options: rarityOptions,
    },
    {
        label: "Element",
        options: elementOptions,
    },

    {
        label: "Weapon",
        options: weaponOptions,
    },
    {
        label: "Gender",
        options: genderOptions,
    },
    {
        label: "Body size",
        options: bodyOptions,
    },
    {
        label: "Region",
        options: regionOptions,
    },
    {
        label: "Version",
        options: versionOptions,
    },
];

function App() {
    const charactersData = useMemo(() => {
        let result = [];
        Object.entries(data).forEach(([key, value]) => {
            result.push({
                id: key,
                ...value,
                releasedate: new Date(value.releasedate),
                region: value.region || "noregion",
                body:
                    value.body === "BOY" || value.body === "GIRL"
                        ? "medium"
                        : value.body === "LADY" || value.body === "MALE"
                        ? "large"
                        : "small",
            });
        });

        return result;
    }, []);

    const [selectedSortOptions, setSelectedSortOptions] = useState(sortOptions[0]);
    const [selectedGroupOptions, setSelectedGroupOptions] = useState(groupOptions[0]);
    const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);
    const [isCombineTravelers, setIsCombineTravelers] = useState(true);

    const characters = useMemo(() => {
        let data = [...charactersData];
        if (isCombineTravelers) {
            data = data.filter((elem) => (elem.name === "Aether" ? elem.element === "Anemo" : elem.name !== "Lumine"));
        }
        let sortOption = selectedSortOptions.value;
        let groupOption = selectedGroupOptions.value;

        let filterData = selectedFilterOptions.reduce((result, item) => {
            let key = item.dataGroup;

            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(item);

            return result;
        }, {});

        data = filterItems(data, filterData);

        if (groupOption) {
            // TODO: refactor
            let groupData = groupOptionsValues[groupOption];
            let groupedData = groupData.reduce((result, group) => {
                result.push({
                    groupInfo: group,
                    data: sortItems(
                        data.filter((elem) => elem[groupOption].toLowerCase() === group.value),
                        sortOption
                    ),
                });
                return result;
            }, []);
            data = groupedData;
        } else {
            data = sortItems(data, sortOption);
        }

        return data;
    }, [charactersData, selectedSortOptions, selectedFilterOptions, selectedGroupOptions, isCombineTravelers]);

    function filterItems(items, filterData) {
        // TODO: refactor
        return items.filter((elem) => {
            return Object.entries(filterData).every(([filterKey, filterOptions]) => {
                return filterOptions.some((filterOption) => {
                    return elem[filterKey].toLowerCase() === filterOption.value;
                });
            });
        });
    }

    function sortItems(items, option) {
        let data = [...items];
        let optionOrder = sortOptionsOrder[option];

        if (optionOrder) {
            data.sort(
                (a, b) =>
                    optionOrder.indexOf(a[option].toLowerCase()) - optionOrder.indexOf(b[option].toLowerCase()) ||
                    a.name.localeCompare(b.name)
            );
        } else {
            switch (option) {
                case "name":
                    data.sort((a, b) => a.name.localeCompare(b.name));

                    break;

                case "releasedate":
                    data.sort((a, b) => a[option] - b[option] || a.name.localeCompare(b.name));
                    break;

                default:
                    break;
            }
        }

        return data;
    }

    const CustomMultiValue = (props) => <components.MultiValue {...props}>{props.data.label}</components.MultiValue>;

    const CustomOption = ({ children, ...props }) => {
        return <components.Option {...props}>{children}</components.Option>;
    };

    return (
        <div className="main">
            <div className="settings">
                <div className="setting-item">
                    <div className="setting-label">Order by:</div>
                    <Select
                        className="setting-input"
                        options={sortOptions}
                        defaultValue={selectedSortOptions}
                        onChange={setSelectedSortOptions}
                    />
                </div>
                <div className="setting-item">
                    <div className="setting-label">Group by:</div>
                    <Select
                        className="setting-input"
                        options={groupOptions}
                        defaultValue={selectedGroupOptions}
                        onChange={setSelectedGroupOptions}
                    />
                </div>
                <div className="setting-item">
                    <div className="setting-label">Show only:</div>
                    <Select
                        className="setting-input"
                        options={filterOptions}
                        isMulti
                        defaultValue={selectedFilterOptions}
                        onChange={setSelectedFilterOptions}
                        hideSelectedOptions={false}
                        closeMenuOnSelect={false}
                        components={{ Option: CustomOption, MultiValue: CustomMultiValue }}
                    />
                </div>
                <div className="setting-item">
                    <div>
                        <label htmlFor="traveler">
                            <input
                                type="checkbox"
                                id="traveler"
                                name="traveler"
                                checked={isCombineTravelers}
                                onChange={() => setIsCombineTravelers(!isCombineTravelers)}
                            />
                            Hide all traveler variants
                        </label>
                    </div>
                </div>
            </div>
            {selectedGroupOptions.value ? (
                characters.map((groupItems, id) => {
                    return (
                        <React.Fragment key={id}>
                            <div className="cards-divider" key={groupItems.groupInfo.value}>
                                {groupItems.groupInfo.label}
                            </div>
                            <div className="cards" key={groupItems.groupInfo.value + "-cards"}>
                                {groupItems.data.map((elem) => (
                                    <Card data={elem} key={elem.id} />
                                ))}
                            </div>
                        </React.Fragment>
                    );
                })
            ) : (
                <div className="cards">
                    {characters.map((elem) => (
                        <Card data={elem} key={elem.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
