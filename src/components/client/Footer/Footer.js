import React, {Component} from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class Footer extends Component{
  render(){
    return (
    <footer>
        <div className="clear"></div>
        <div class="content-footer">
            <div class="footer-top">
                <Container>
                    <Row>
                        <Col xs="12" sm="6" md="3" lg="3">
                            <div class="img-footer pl">
                                <img className="img-respon" src="./../../assets/images/logo.png"/>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md="3" lg="3">
                            <div class="pl mt">
                                <h3 class="title-menu">
                                    The logde
                                </h3>
                                <div class="list-menu">
                                    <a href="#" class="items-menu" title="">
                                        <h2>Add: Penny Rafferty, Executive Officer, Luxury Lodges of Australia Ltd</h2>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <h2>Phone: 0123.456.789</h2>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <h2>Email: penny@luxurylodgesofaustralia.com.au</h2>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <h2>Website: www.demo.com</h2>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md="3" lg="3">
                            <div class="footer-menu mt">
                                <h3 class="title-menu">
                                    userful links
                                </h3>
                                <div class="list-menu">
                                    <a href="#" class="items-menu" title="">
                                        <h2>About us</h2>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <h2>Gallery</h2>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <h2>Packege tour</h2>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <h2>Book now</h2>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md="3" lg="3">
                            <div class="footer-icon mt">
                                <h3 class="title-menu">
                                    Follow us
                                </h3>
                                <div class="list-menu">
                                    <a href="#" class="items-menu" title="">
                                        <img src="./../../assets/images/fb.png"/>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <img src="./../../assets/images/tw.png"/>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <img src="./../../assets/images/yt.png"/>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <img src="./../../assets/images/ma.png"/>
                                    </a>
                                    <a href="#" class="items-menu" title="">
                                        <img src="./../../assets/images/p.png"/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <div class="clearfix"></div>
                    </Row>
                </Container>
            </div>
        </div>
        <section class="bottom-footer">
            <div class="container">
                <div class="row">
                    <div class="content-footert">
                        <div class="copyright">
                            Copyright © 2019 Anlogde Ltd.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    );
  }
}


// function loadJS(src) {
//     var ref = window.document.getElementsByTagName("script")[0];
//     var script = window.document.createElement("script");
//     script.src = src;
//     script.async = true;
//     ref.parentNode.insertBefore(script, ref);
// }
export default Footer;