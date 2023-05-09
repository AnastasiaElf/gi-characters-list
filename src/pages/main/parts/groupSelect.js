import {
    bodyOptions,
    elementOptions,
    genderOptions,
    rarityOptions,
    regionOptions,
    versionOptions,
    weaponOptions,
} from "../constants";

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
    return <div>GroupSelect</div>;
}

export default GroupSelect;
