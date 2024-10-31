import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex text-start justify-content-center">
        <Row>
          <Col>
            <div className="tittle">Choice Your</div>
            <div className="tittle">
              Favorit <span style={{ color: "tomato" }}>Sushi</span> !
            </div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Oishi</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
