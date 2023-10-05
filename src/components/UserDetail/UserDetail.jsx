import { useLoaderData } from "react-router-dom";
const UserDetail = () => {



const user =useLoaderData();
const {name,address,company} =user;
    return (
        <div>
            <h5>Bitch GOT YOUUUUUUUU!!!!
                <br />
                LOOLLLLLL!!! <br /> 
            </h5>
            <h3 className="">{name}</h3>
            <p>{address.street}, {address.city}, {address.zipcode} </p>
            <p>Company Name :{company.name},<br />Bs: {company.bs} ,CatchPhrase: {company.catchPhrase}</p>
            </div>
    );
};

export default UserDetail;