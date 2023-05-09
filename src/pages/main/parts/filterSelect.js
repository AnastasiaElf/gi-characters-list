import {
    bodyOptions,
    elementOptions,
    genderOptions,
    rarityOptions,
    regionOptions,
    versionOptions,
    weaponOptions,
} from "../constants";

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

function FilterSelect() {
    return <div>FilterSelect</div>;
}

export default FilterSelect;
