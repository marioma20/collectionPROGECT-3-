import { Container, Row } from "react-bootstrap";
import './Header.css';
function Header(){
    return(
        <>
        <div className="header mt-5">
        <Container  className="mt-5">
            <Row className="row-header py-5 ">
                <div className="col-mod-5 col-sm-6 info">
                    <h3 className="mt-5">
                    Good food choices are good investments.
                    </h3>
                    <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. 
                    </p>
                    <button type="button" className="btn btn-danger mt-2 button-header">Orer Now</button>
                    <button type="button" className="btn btn-outline-danger ms-3 mt-2 button-header">Learn More</button>
                </div>
                <div className="col-mod-5 col-sm-6">

                </div>
            </Row>
          </Container>

        </div>
     
        </>
    );
}

export default Header;