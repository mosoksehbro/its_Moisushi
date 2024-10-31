import { Button, Card, Col, Container, Row } from "react-bootstrap";
const CardMenu = ({ sushi }) => {
  return (
    <Col md={"auto"} key={sushi.name}>
      <div className="responsiveImage">
        <Card
          style={{
            width: "250px",
            color: "black",
            margin: "20px",
            textAlign: "left",
          }}
        >
          <Card.Img src={sushi.img} className="sushiImage" />
          <Card.Body>
            <Card.Title className="text-center">{sushi.nama}</Card.Title>
            <Card.Text className="cardText">{sushi.desc}</Card.Text>
            {/* <Button variant="dark">Yummy It !</Button> */}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default CardMenu;
