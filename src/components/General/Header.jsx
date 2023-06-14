import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
    Heart,
    Cart4,
    PersonCircle,
    BuildingUp,
    Book
} from "react-bootstrap-icons";
import Ctx from "../../ctx"

import Search from "../Search";
const Header = ({
    user,
    searchArr,
    setGoods,
    setModalOpen
}) => {
    const { basket } = useContext(Ctx);
    const login = () => {
        setModalOpen(true)
    }
    return <header>
        <Logo />
        <div className="search-block">
            <Search
                data={searchArr}
                setGoods={setGoods}
            />
        </div>
        <nav className="header__menu">
            {user && <>

                <Link to="/catalog">
                    <Book title="Каталог" />
                </Link>

                <Link to="/favorites">
                    <Heart title="Избранное" />
                </Link>
                
                <Link to="/profile">
                    <PersonCircle title="Личный кабинет" />
                </Link>

                <Link to="/basket" className="header__link">
                    <Cart4  title="Корзина"/>
                    {basket.length > 0 && <span className="header__badge">
                        {basket.reduce((acc, el) => acc + el.cnt, 0)}
                    </span>}
                </Link>

            </>}
            <span>
                {!user && <BuildingUp title="Войти" onClick={login} />}
            </span>
        </nav>
    </header>
}

export default Header;