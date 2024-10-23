import { Container, Row } from "react-bootstrap";
import Makeimg from './imgs/2.png';
import './Make.css';
function Make(){
    return(
        <>
        <Container className="py-5 Make">
            <Row>
                <div className="col-md-6">
                     <h3>
                     We make everything by hand with the best possible ingredients.
                     </h3>
                     <p className="mt-3 mb-3">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam et purus a odio finibus bibendum in sit amet leo. 
                      Mauris feugiat erat tellus.Far far away,
                      behind the word mountains,
                       far from the countries Vokalia and Consonantia, there live the blind texts.
                     </p>
                     <button type="button" className="btn btn-danger">Lern More</button>

                     <ul className="mt-3">
                        <li> Etiam sed dolor ac diam volutpat.</li>
                        <li> Erat volutpat aliquet imperdiet.</li>
                        <li> purus a odio finibus bibendum.</li>
                     </ul>
                </div>
                <div className="col-md-6">
                  <img src={Makeimg} className="w-100"/>
                </div>
            </Row>
        </Container>
        </>
    );
}
export default Make;