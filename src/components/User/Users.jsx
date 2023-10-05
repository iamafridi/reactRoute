import { useLoaderData } from "react-router-dom";
import User from "../Users/User";
import './Users.css';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>YO!!!!! <br />
                My Fucking Bitches, <b>WELCOME HERE</b></h2>
            <h3>MY TOTAL BITCHES : {users.length}</h3>
            <div className="users">

                {
                  users.map(user => <User key={user.id} user={user}></User>)
                }


            </div>

        </div>
    );
};

export default Users;