import { bodyOptions, elementOptions, genderOptions, rarityOptions, regionOptions, weaponOptions } from "../constants";
import Select from "react-select";
import { usePageContext } from "../mainPage";

export const orderOptions = [
    { value: "name", label: "Name" },
    { value: "element", label: "Element" },
    { value: "weapontype", label: "Weapon" },
    { value: "rarity", label: "Rarity" },
    { value: "region", label: "Region" },
    { value: "releasedate", label: "Release date" },
    { value: "gender", label: "Gender" },
    { value: "body", label: "Body type" },
];

export const orderOptionsDataOrder = {
    rarity: rarityOptions.map((elem) => elem.value),
    element: elementOptions.map((elem) => elem.value),
    weapontype: weaponOptions.map((elem) => elem.value),
    gender: genderOptions.map((elem) => elem.value),
    body: bodyOptions.map((elem) => elem.value),
    region: regionOptions.map((elem) => elem.value),
};

function OrderSelect() {
    const { state, dispatch, actionType } = usePageContext();

    return (
        <Select
            className="setting-input"
            options={orderOptions}
            defaultValue={state.settings.orderBy}
            onChange={(data) => dispatch({ type: actionType.updateOrdering, payload: data })}
        />
    );
}

export default OrderSelect;
