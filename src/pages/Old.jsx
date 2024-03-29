import {useContext} from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card/Card";
import Ctx from "../ctx";

const OldPage = ({goods}) => {
    const {searchResult} = useContext(Ctx)
	return <>
		<h1>Старые данные</h1>
        <nav>
            <Link to="/">Стр 1</Link>
            <Link to="/catalog">Стр 2</Link>
            <Link to="/old">Стр 3</Link>
        </nav>
		<div className="container">
        {searchResult && <p className="search-result">{searchResult}</p>}            {goods.map((pro, i) => (
                <Card key={i} img={pro.pictures} name={pro.name} price={pro.price} />
            ))}
        </div>
	</>
}

export default OldPage;