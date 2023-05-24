import {useContext, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Ctx from "../ctx";
import {firstUser} from "../App";

const Profile = ({setUser}) => {
	const navigate = useNavigate()
	const { api } = useContext(Ctx);
	const [userData, setUserData] = useState({})
	const logOut = () => {
		setUser("");
		localStorage.removeItem(firstUser);
		navigate("/");
	}
	useEffect(() => {
		api.getAdmin()
			.then(data => {
				setUserData(data);
			})
	}, [])
	return <>
		<h1>Личный кабинет</h1>
		<p>Привет, {userData?.name || "Таинственный незнакомец"}!</p>
		<div>{userData?.email}</div>
		<Button variant="warning" as={Link} to="/add/product">Добавить товар</Button>
		<br/>
		<button onClick={logOut}>Выйти из аккаунта</button>
	</>
}
export default Profile;