import { Container, Row } from "react-bootstrap";
import './partcontainer.css';
function Partofheader(){
    return(
        <>
        <div className="part-container ">
            <Row>
                <div className="col-md-3">
                   <div className="info">
                        <h2>
                            1287+
                        </h2>
                        <span className="fw-bold">savings</span>
                   </div>
                </div>
                <div className="col-md-3">
                   <div className="info">
                        <h2>
                            5475+
                        </h2>
                        <span className="fw-bold">Photos</span>
                   </div>
                </div>
                <div className="col-md-3">
                   <div className="info">
                        <h2>
                            7657+
                        </h2>
                        <span className="fw-bold">Rockets</span>
                   </div>
                </div>
                <div className="col-md-3">
                   <div className="info">
                        <h2>
                            3487+
                        </h2>
                        <span className="fw-bold">Grobes</span>
                   </div>
                </div>
            </Row>
        </div>
        </>
    );
}
export default Partofheader;