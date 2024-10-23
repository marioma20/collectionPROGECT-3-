import { Container, Row } from "react-bootstrap";
import pride from '../imgs/1.png';
import '../Pride.css';
function Pride(){
    return(
        <>
        <Container className="pride">
            <Row>
                <div className="col-md-7">
                    <img src={pride} className="w-100 img "/>
                </div>
                <div className="col-md-5  mt-5">
                    <h3>
                    We pride ourselves on making real food from the best ingredients.
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                    Mauris feugiat erat tellus.
                    </p>
                    <button type="button" className="btn btn-danger">Danger</button>
                </div>
            </Row>
        </Container>
        </>
    );
}
export default Pride;