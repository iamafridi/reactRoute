import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Tu Jaareee,<br />
                idaar jeher khane ki paise nei hain,
                tu jaa,<br /> AYYY rajuuu,iskoo baghaa</h2>

        </div>
    );
};

export default ErrorPage;