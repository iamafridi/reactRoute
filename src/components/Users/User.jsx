const User = ({user}) => {
    const {id, name, website, email, phone } = user;

    const userStyle = {
        border : '2px solid blue',
        padding : '5px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h4>{name}</h4>
            <p>Website :{website}</p>
            <p>Email :{email}</p>
            <p>Phone :{phone}</p>
            {/* <p></p> */}

        </div>
    );
};

export default User;