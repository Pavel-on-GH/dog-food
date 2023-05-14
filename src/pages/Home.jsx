import { Link } from "react-router-dom";
// import { Journals } from "react-bootstrap-icons";
//Заметка: может переместить в шапку

import firstPromoBanner from "./pagesImages/firstPromoBanner.png";
import secondPromoBanner from "./pagesImages/secondPromoBanner.png";
import thirdPromoBanner from "./pagesImages/thirdPromoBanner.png";
import fourthPromoBanner from "./pagesImages/fourthPromoBanner.png";

//Заметка: возможно, позже сделать слайдер с прокруткой картинок

const Home = ({ user, setActive }) => {
	return <>
		<div className="home-banner">
			<div className="banner">

				<div className="promotion">
					<img src={firstPromoBanner} alt="Информационный баннер №2" />
				</div>

				<div className="info">
					<h5>Хит сезона:</h5>
					<div className="card-with-grid">
					{user && <Link to="/product/622c779c77d63f6e70967d1c">
						<div className="card-lite">
							<img src="https://react-learning.ru/image-compressed/1.jpg" alt="Желудки утиные сушено-вяленые" />
							<h4>4500 ₽</h4>
							<h6>Желудки утиные сушено-вяленые:</h6>
							<button>Подробнее</button>
						</div>
						</Link>}
						{user && <Link to="/product/622c77dc77d63f6e70967d20">
						<div className="card-lite">
							<img src="https://react-learning.ru/image-compressed/3.jpg" alt="Калтык говяжий для собак" />
							<h4>290 ₽</h4>
							<h6>Калтык говяжий для собак:</h6>
							<button>Подробнее</button>
						</div>
					</Link>}
					</div>

					{!user && <>
						<span className="info-link" onClick={() => setActive(true)}>Авторизуйтесь</span>,
						чтобы получить полный доступ к сайту</>}
				</div>
					

				<div className="promotion-second">
					<img src={secondPromoBanner} alt="Информационный баннер №2" />
					<img src={fourthPromoBanner} alt="Информационный баннер №4" />
				</div>


				<div className="info">
					<h5>Популярно у покупателей:</h5>

					<div className="card-with-grid">
					{user && <Link to="/product/622c77f677d63f6e70967d24">
						<div className="card-lite">
							<img src="https://react-learning.ru/image-compressed/9.jpg" alt="Рубец говяжий для собак" />
							<h4>290 ₽</h4>
							<h6>Рубец говяжий для собак:</h6>
							<button>Подробнее</button>
						</div>
						</Link>}
						{user && <Link to="/product/622c77e277d63f6e70967d21">
						<div className="card-lite">
							<img src="https://react-learning.ru/image-compressed/6.jpg" alt="Бублик из бычьего корня" />
							<h4>340 ₽</h4>
							<h6>Бублик из бычьего корня</h6>
							<button>Подробнее</button>
						</div>
					</Link>}
					</div>

					{!user && <>
						<span className="info-link" onClick={() => setActive(true)}>Авторизуйтесь</span>,
						чтобы получить полный доступ к сайту</>}
				</div>



				<div className="promotion">
					<img src={thirdPromoBanner} alt="Информационный баннер №3" />
				</div>


			</div>
		</div>
	</>
}


export default Home;