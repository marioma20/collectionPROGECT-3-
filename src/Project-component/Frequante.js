import { Container, Row } from "react-bootstrap";
import './Frequantite.css';
function Frequante(){
    return(
        <>
        <Container className="frequantite">
            <h3 className="pb-5 fw-bold">Frequently Asked Questions </h3>
            <Row>
                <div className="col-md-6 gap-3">
                    <div className="fed">
                    <span>~</span>
                    <h4> Is Foodera Bread really baked fresh each day?</h4>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                    there live the blind texts.
                     Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                    </div>
            
                </div>
                <div className="col-md-6 gap-3">
                    <div className="fed">
                    <span>~</span>
                     <h4> Do you bake breads containing animal fats or products?</h4>
                     <p>
                     Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts. 
                     Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                     </p>
                    </div>
            
                </div>
            </Row>
            <Row>
                <div className="col-md-6 gap-3">
                    <div className="fed">
                    <span>~</span>
                    <h4> Can I order your products online?</h4>
                    <p>
                    Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia, there live the blind texts. 
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                    </div>
                </div>
                <div className="col-md-6 gap-3">
                    <div className="fed">
                    <span>~</span>
                     <h4>  When are you opening a shop near me?</h4>
                     <p>
                     Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                     there live the blind texts. 
                     Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                     </p>
                    </div>
               
                </div>
            </Row>
                <div className="box">
                <div className="overlay">           
                </div>
                <Row className="row-last mt-5 pt-5 pb-5 ">
                <div className="col-md-8">
                     <h4 className="fw-bold">
                     Baked fresh daily by bakers with passion.
                     </h4>
                </div>
                <div className="col-md-4">
                <button type="button" className="btn btn-outline-danger">Learn More</button>

                </div>
            </Row>
                </div>

                <div className="forms-1 mt-5 mb-5">
                   <h1>
                   Hurry up! Subscribe our newsletter 
                   <br/>
                   and get
                   <span> 25% Off</span>
                   </h1>
                   <p>
                   Limited time offer for this month. No credit card required.
                   </p>
                   <div className="forms text-center">
                   <form>
                <div class="mb-3">
               <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email ADress Here"/>
                   </div>
                <button type="submit" class="btn btn-danger w-50 ">Submitt</button>
               </form>

                   </div>
                   
                </div>
          
           
        </Container>
        </>
    );
}
export default Frequante;