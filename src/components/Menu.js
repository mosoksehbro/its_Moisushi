import {Button, Card, Col, Container,Row} from 'react-bootstrap';
import Sushi_1 from '../img/main_sushi/flyd-2i0it6LpwsI-unsplash.jpg'
import Sushi_2 from '../img/main_sushi/flyd-eo9SeUWbbSo-unsplash.jpg'
import Sushi_3 from '../img/main_sushi/flyd-kwgCZZrhcp0-unsplash.jpg'
import Sushi_4 from '../img/main_sushi/flyd-loB9-eAYt2k-unsplash.jpg'
import Sushi_5 from '../img/main_sushi/mahmoud-fawzy-EqoCUzG9200-unsplash.jpg'
import Sushi_6 from '../img/main_sushi/tamas-pap-zali_zGDWo8-unsplash.jpg'
 

const Menu = () => {
    return(
        <Container>
        <h1 className='tittleMenu' id = 'ourMenu'>Our Menu</h1>
        <Row>
            <Col md = {'auto'}>
            <div className = 'responsiveImage'>
                <Card style={{ width: '250px', color: 'black', margin:'20px', textAlign:'left'}} >
                <Card.Img src={Sushi_1} className='sushiImage'/>
                <Card.Body>
                    <Card.Title className='text-center'>Sushi Nigiri</Card.Title>
                    <Card.Text className='cardText'>
                    A slice of shrimp on top of a small ball of vinegared rice
                    </Card.Text>
                    {/* <Button variant="dark">Yummy It !</Button> */}
                </Card.Body>
                </Card>
            </div>
            </Col>
            <Col md = {'auto'}>
            <div className = 'responsiveImage'>
                <Card style={{ width: '250px', color: 'black', margin:'20px', textAlign:'left'}} >
                <Card.Img src={Sushi_2} className='sushiImage'/>
                <Card.Body>
                    <Card.Title className='text-center'>Maguro Sushi</Card.Title>
                    <Card.Text className='cardText'>
                    A slice of fish tuna on top of a small ball of vinegared rice
                    </Card.Text>
                    {/* <Button variant="dark">Yummy It !</Button> */}
                </Card.Body>
                </Card>
            </div>
            </Col>
            <Col md = {'auto'}>
            <div className = 'responsiveImage'>
                <Card style={{ width: '250px', color: 'black', margin:'20px', textAlign:'left'}} >
                <Card.Img src={Sushi_3} className='sushiImage'/>
                <Card.Body>
                    <Card.Title className='text-center'>Sushi_1</Card.Title>
                    <Card.Text className='cardText'>
                    ini Sushi_1
                    </Card.Text>
                    {/* <Button variant="dark">Yummy It !</Button> */}
                </Card.Body>
                </Card>
            </div>
            </Col>
            <Col md = {'auto'}>
            <div className = 'responsiveImage'>
                <Card style={{ width: '250px', color: 'black', margin:'20px', textAlign:'left'}} >
                <Card.Img src={Sushi_4} className='sushiImage'/>
                <Card.Body>
                    <Card.Title className='text-center'>Salmon Sushi</Card.Title>
                    <Card.Text className='cardText'>
                    A slice of Salmon on top of a small ball of vinegared rice
                    </Card.Text>
                    {/* <Button variant="dark">Yummy It !</Button> */}
                </Card.Body>
                </Card>
            </div>
            </Col>
            <Col md = {'auto'}>
            <div className = 'responsiveImage'>
                <Card style={{ width: '250px', color: 'black', margin:'20px', textAlign:'left'}} >
                <Card.Img src={Sushi_5} className='sushiImage'/>
                <Card.Body>
                    <Card.Title className='text-center'>Sushi Roll</Card.Title>
                    <Card.Text className='cardText'>
                    A roll of mentai on top small ball of vinegared rice and sesame
                    </Card.Text>
                    {/* <Button variant="dark">Yummy It !</Button> */}
                </Card.Body>
                </Card>
            </div>
            </Col>
            <Col md = {'auto'}>
            <div className = 'responsiveImage'>
                <Card className = 'cardBody' style={{ width: '250px', color: 'black', margin:'20px', textAlign:'left'}} >
                <Card.Img src={Sushi_6} className='sushiImage'/>
                <Card.Body>
                    <Card.Title className='text-center'>Sushi_1</Card.Title>
                    <Card.Text className='cardText'>
                    ini Sushi_1
                    </Card.Text>
                    {/* <Button variant="dark">Yummy It !</Button>   */}
                </Card.Body>
                </Card>
            </div>
            </Col>
        </Row>
      </Container>
    );
}

export default Menu;