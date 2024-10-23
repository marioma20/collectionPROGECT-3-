import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foods from "../Data";
import './Box.css';
function Box(){
    return(
        <>
        <Container className="pt-5 mb-5 Box">
            <h3>
            Explore Our Foods 
            </h3>
            <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam et purus a odio finibus <br/> bibendum in sit amet leo. Mauris feugiat erat tellus.
             Far far away, behind the word <br/> mountains, 
             far from the countries Vokalia and Consonantia, there
            </p>
            <Row>
                {foods.map((data) =>{
                    return(
                        <>
                          <div className="col-md-4" key={data.id}>
                <Card className="m-2" key={data.id}>
                   <Card.Img variant="top" src={data.image.image1} />
                    <Card.Body>
                 <Card.Title className="title">{data.title}</Card.Title>
                   <Card.Text className="timer">
                   {data.timer}
                  </Card.Text>
                  <Card.Text className="price fw-bold">
                   {data.price} <span>{data.price2}</span>
                  </Card.Text>
                    <Button variant="danger">Order Now</Button>
                   </Card.Body>
    </Card>
                </div>

                        </>
                    );
                })}
              
            </Row>
        </Container>
        </>
    );
}
export default Box;