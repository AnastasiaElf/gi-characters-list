import { usePageContext } from "../mainPage";
import FilterSelect from "./filterSelect";
import OrderSelect from "./orderSelect";
import GroupSelect from "./groupSelect";

function Settings() {
    const { state, dispatch, actionType } = usePageContext();

    return (
        <div className="settings">
            <div className="setting-item">
                <div className="setting-label">Order by:</div>
                <OrderSelect />
            </div>

            <div className="setting-item">
                <div className="setting-label">Group by:</div>
                <GroupSelect />
            </div>

            <div className="setting-item">
                <div className="setting-label">Show only:</div>
                <FilterSelect />
            </div>

            <div className="setting-item">
                <div>
                    <label htmlFor="traveler">
                        <input
                            type="checkbox"
                            id="traveler"
                            name="traveler"
                            checked={state.settings.isCombineTravelers}
                            onChange={() => dispatch({ type: actionType.updateTravelersCombine })}
                        />
                        Hide all traveler variants
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Settings;
