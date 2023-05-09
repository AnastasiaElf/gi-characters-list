import { usePageContext } from "../mainPage";

function List() {
    const { state, dispatch, actions } = usePageContext();

    return (
        <div>
            List:
            {/* {context} */}
        </div>
    );
}

export default List;
