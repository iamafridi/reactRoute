import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, website, username, email, phone } = user;

    const userStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h4>{name}</h4>
            <p>Website :{website}</p>
            <p>Email :{email}</p>
            <p>Phone :{phone}</p>
            <p>UserName : {username}</p>
            <Link to={`/user/${id}`} >Show Details</Link>

        </div>
    );
};

export default User;