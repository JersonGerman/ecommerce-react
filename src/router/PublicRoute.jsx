import { Route } from "react-router-dom";

const PublicRoute = (props) => {

    return(
        <Route path={props.path} element={props.element} />
    )
}
export default PublicRoute;