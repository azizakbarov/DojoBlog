import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page has not been found</p>
            <Link to='/'>Back to the home page...</Link>
        </div>
    );
}
 
export default NotFound;