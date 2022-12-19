import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//components
import footerLogo from '../../img/footerLogo.png'

const Footer = (props) => {
    return(
        <>
            <div className="footerImg"></div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={3} md={12} className="mbCol">
                            <div className="footer_logo">
                                <img src={footerLogo} alt={`meladora`} />
                            </div>
                        </Col>
                        <Col lg={3} md={12} className="mbCol">
                            <div className="footer_info">
                                <h3>Menyular</h3>
                                <ul>
                                    <li><Link to="/">Biz kimik?</Link></li>
                                    <li><Link to="/garden">Bağlarımız</Link></li>
                                    <li><Link to="/products">Məhsullarımız</Link></li>
                                    <li><Link to="/service">Xidmətlərimiz</Link></li>
                                    <li><Link to="/social">Sosial məsuliyyət</Link></li>
                                    <li><Link to="/support">Əlaqə</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={12} className="mbCol">
                            <div className="footer_info">
                                <h3>Faydalı linklər</h3>
                                <ul>
                                    <li>Tez-tez soruşulanlar</li>
                                    <li>Karyera</li>
                                    <li>Xidmət şəbəkəsi</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={12} className="mbCol">
                            <div className="footer_info">
                                <h3>FAQ</h3>
                                <ul>
                                    <li>Təhlükəsizlik</li>
                                    <li>Şərtlər və qaydalar</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="footer_copyright">
                                <div></div>
                                <p>Copyright 2022</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;