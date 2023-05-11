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

export const groupOptionsData = {
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
    const { state, dispatch, actionType } = usePageContext();

    return (
        <Select
            className="setting-input"
            options={groupOptions}
            defaultValue={state.settings.groupBy}
            onChange={(data) => dispatch({ type: actionType.updateGrouping, payload: data })}
        />
    );
}

export default GroupSelect;
