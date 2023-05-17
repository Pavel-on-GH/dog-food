import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BsCard from "../components/BsCard";
import Ctx from "../ctx";


const Catalog = ({ goods, userId }) => {
	const { searchResult } = useContext(Ctx);
	return <Container className="d-block">
		<Row className="g-4">
			{searchResult && <Col xs={12} className="search-result">
				{searchResult}
			</Col>}
			<Col xs={12}>
				<h1 style={{ margin: 0, gridColumnEnd: "span 3", textAlign: 'center'}}>Каталог</h1>
			</Col>
			{goods.map((pro, i) => (
				<Col key={i} xs={12} sm={6} md={4} lg={3}>
					<BsCard img={pro.pictures} {...pro} user={userId} />
				</Col>
			))}
		</Row>
	</Container>
}

export default Catalog;