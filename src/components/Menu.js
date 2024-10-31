import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Sushi_1 from "../img/main_sushi/flyd-2i0it6LpwsI-unsplash.jpg";
import Sushi_2 from "../img/main_sushi/flyd-eo9SeUWbbSo-unsplash.jpg";
import Sushi_3 from "../img/main_sushi/flyd-kwgCZZrhcp0-unsplash.jpg";
import Sushi_4 from "../img/main_sushi/flyd-loB9-eAYt2k-unsplash.jpg";
import Sushi_5 from "../img/main_sushi/mahmoud-fawzy-EqoCUzG9200-unsplash.jpg";
import Sushi_6 from "../img/main_sushi/tamas-pap-zali_zGDWo8-unsplash.jpg";
import MenuSushi from "../constant/data.json";
import CardMenu from "./sub_components/CardMenu";

const Menu = () => {
  return (
    <Container>
      <h1 className="tittleMenu" id="ourMenu">
        Our Menu
      </h1>
      <Row>
        {MenuSushi.map((sushi, index) => {
          console.log(sushi);

          return <CardMenu sushi={sushi} />;
        })}
      </Row>
    </Container>
  );
};

export default Menu;
