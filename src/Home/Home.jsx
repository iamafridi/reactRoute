import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Tham beta aytesi,<br /> GAAND MEIN GUS JAO INSAN KE -.-</p>: <Outlet></Outlet>
            }
            <Footer></Footer>

        </div>
    );
};

export default Home;