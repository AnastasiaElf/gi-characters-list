import { bodyOptions, elementOptions, genderOptions, rarityOptions, regionOptions, weaponOptions } from "../constants";

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
    return <div>OrderSelect</div>;
}

export default OrderSelect;
