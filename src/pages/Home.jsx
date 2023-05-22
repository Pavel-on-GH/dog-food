import { Link } from "react-router-dom";
import Slider from "../components/Slider";
// import { Journals } from "react-bootstrap-icons";
//Заметка: может переместить в шапку

import firstPromoBanner from "./pagesImages/firstPromoBanner.png";
import secondPromoBanner from "./pagesImages/secondPromoBanner.png";
import thirdPromoBanner from "./pagesImages/thirdPromoBanner.png";

const Home = ({ user, setActive }) => {
	return <>

		<div className="home-banner">


			<div className="promotion">
				<img src={firstPromoBanner} alt="Информационный баннер №2" />
			</div>

			<div className="info">
				<h5>Хит сезона:</h5>
				{user && <Link to="/product">
				</Link> && <Slider desktop={4} mobile={2} />}

				{!user && <>
					<span className="info-link" onClick={() => setActive(true)}>Недоступно для незарегестрированных пользователей.
						Авторизуйтесь, чтобы получить полный доступ.</span></>}
			</div>


			<div className="promotion">
				<img src={secondPromoBanner} alt="Информационный баннер №2" />
			</div>


			<div className="info">
				<h5>Популярно у покупателей:</h5>
				<div className="card-with-grid">
					{user && <Link to="/product">
					</Link> && <Slider desktop={3} mobile={1} />
					}
				</div>

				{!user && <>
					<span className="info-link" onClick={() => setActive(true)}>Недоступно для незарегестрированных пользователей.
						Авторизуйтесь, чтобы получить полный доступ.</span></>}
			</div>


			<div className="promotion">
				<img src={thirdPromoBanner} alt="Информационный баннер №3" />
			</div>


		</div>
	</>
}


export default Home;