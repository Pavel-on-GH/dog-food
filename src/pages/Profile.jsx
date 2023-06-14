import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container, Row, Col, Figure } from "react-bootstrap";
import Ctx from "../ctx";
import UpdatedInput from "../components/UpdatedInput";
import BsCard from "../components/BsCard";

const Profile = ({ setUser }) => {
	const navigate = useNavigate()
	const { api, baseData } = useContext(Ctx);
	const [userData, setUserData] = useState({});
	const [inpName, setInpName] = useState(false);
	const [inpEmail, setInpEmail] = useState(false);
	const [inpAbout, setInpAbout] = useState(false);
	const [inpAvatar, setInpAvatar] = useState(false);

	const updUser = (name, val) => {
		let body = {
			name: userData.name,
			about: userData.about
		}
		if (name === "avatar") {
			body = { avatar: userData.avatar };
		}
		body[name] = val;
		console.log(body);
		api.updAdmin(body, name === "avatar").then(data => setUserData(data));
	}

	const logOut = () => {
		setUser("");
		localStorage.removeItem("user12");
		navigate("/");
	}
	useEffect(() => {
		api.getAdmin()
			.then(data => {
				console.log(data);
				setUserData(data);
			})
	}, [])
	return <>
		<Container style={{ gridTemplateColumns: "1fr" }} className="px-0 container-in-profile">
			<Row>
				{userData?.name && <>
					<Col xs={12} sm={1}></Col>
					<Col xs={12} sm={6}><h1>Личный кабинет</h1>
						<div>
							Имя: <UpdatedInput
								val={userData.name}
								isActive={inpName}
								changeActive={setInpName}
								upd={updUser}
								name="name"
							/></div>

						<div>Род деятельности: <UpdatedInput
							val={userData.about}
							isActive={inpAbout}
							changeActive={setInpAbout}
							upd={updUser}
							name="about"
						/></div>

						<div className="py-3">Эл.почта: {userData.email}</div>



					</Col>
					<Col  xs={12} sm={4}>
						<Figure>
							<Figure.Image
								className="picture-in-profile"
								src={userData.avatar}
								alt={userData.email}
							/>
							<Figure.Caption>
								<UpdatedInput
									val={userData.avatar}
									isActive={inpAvatar}
									changeActive={setInpAvatar}
									upd={updUser}
									name="avatar"
								/>
							</Figure.Caption>
						</Figure>
						<Col xs={12} sm={1}></Col>
					</Col>
				</>}
			</Row>
			<Row className="my-products-in-profile">
				<Col xs={12}>
					<h3>Мои товары</h3>
				</Col>
	
				{baseData.filter(el => el.author._id === userData._id).map(el => <Col className="cards-in-profile" xs={12} md={4} key={el._id}>
					<BsCard {...el} />
				</Col>)}
			</Row>

			<Button className="buttons-in-profile" variant="warning" as={Link} to="/add/product">Добавить товар</Button>

			<button className="buttons-in-profile" onClick={logOut}>Выйти из аккаунта</button>
		</Container>
	</>
}
export default Profile;