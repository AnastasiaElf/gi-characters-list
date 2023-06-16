import { createContext, useContext, useReducer } from "react";
import "./mainPage.css";
import List from "./components/list";
import Settings from "./components/settings";
import { initialState, mainReducer, actionType } from "./reducer";

export const PageContext = createContext({});

export function usePageContext() {
    return useContext(PageContext);
}

function MainPage() {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <PageContext.Provider value={{ state, dispatch, actionType }}>
            <div className="main">
                <Settings />
                <List />
            </div>
        </PageContext.Provider>
    );
}

export default MainPage;
