import {
    bodyOptions,
    elementOptions,
    genderOptions,
    rarityOptions,
    regionOptions,
    versionOptions,
    weaponOptions,
} from "../constants";
import Select from "react-select";
import { usePageContext } from "../mainPage";

export const groupData = {
    element: elementOptions,
    weapontype: weaponOptions,
    rarity: rarityOptions,
    region: regionOptions,
    releaseversion: versionOptions,
    body: bodyOptions,
    gender: genderOptions,
};

export const groupOptions = [
    { value: null, label: "None" },
    { value: "element", label: "Element" },
    { value: "weapontype", label: "Weapon" },
    { value: "rarity", label: "Rarity" },
    { value: "region", label: "Region" },
    { value: "releaseversion", label: "Release version" },
    { value: "gender", label: "Gender" },
    { value: "body", label: "Body type" },
];

function GroupSelect() {
    const { state, dispatch, actions } = usePageContext();

    return (
        <Select
            className="setting-input"
            options={groupOptions}
            defaultValue={state.groupBy}
            onChange={(data) => dispatch({ type: actions.updateGrouping, payload: data })}
        />
    );
}

export default GroupSelect;
