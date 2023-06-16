import {
    bodyOptions,
    elementOptions,
    genderOptions,
    rarityOptions,
    regionOptions,
    versionOptions,
    weaponOptions,
} from "../constants";
import Select, { components } from "react-select";
import { usePageContext } from "../mainPage";

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

const CustomMultiValue = (props) => <components.MultiValue {...props}>{props.data.label}</components.MultiValue>;

const CustomOption = ({ children, ...props }) => {
    return <components.Option {...props}>{children}</components.Option>;
};

function FilterSelect() {
    const { state, dispatch, actionType } = usePageContext();

    return (
        <Select
            className="setting-input"
            options={filterOptions}
            isMulti
            defaultValue={state.settings.filters}
            onChange={(data) => dispatch({ type: actionType.updateFilters, payload: data })}
            hideSelectedOptions={false}
            closeMenuOnSelect={false}
            components={{ Option: CustomOption, MultiValue: CustomMultiValue }}
        />
    );
}

export default FilterSelect;
