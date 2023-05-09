import { usePageContext } from "../mainPage";
import FilterSelect from "./filterSelect";
import OrderSelect from "./orderSelect";
import GroupSelect from "./groupSelect";

function Settings() {
    const { state, dispatch, actions } = usePageContext();

    return (
        <>
            <div>
                Settings:
                {/* {context} */}
            </div>
            <OrderSelect />
            <GroupSelect />
            <FilterSelect />
        </>
    );
}

export default Settings;
