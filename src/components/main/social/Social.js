import { Container, Row, Col } from "react-bootstrap";

// component
import { RepeatIcon } from "../repeatIcon/repeatIcon";

const Social = (props) => {
    return(
        <RepeatIcon>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="social">
                            <h1>Sosial məsuliyyət</h1>
                            <p>Sahibkar olaraq təkcə qazanc əldə etmək deyil həmdə cəmiyyətə müxtəlif sahələrdə faydalı olmağın zəruriliyini anlayırıq və bu istiqamətdə fəaliyyətlərimiz davam edir. Əhalinin müəyyən təbəqələrinin həyatını yaxşılaşdırmaq üçün sosial əhəmiyyətli proqramlar həyata keçirik.
                                <br /><br />
                                Dostlarımız və çevrəmiz bizi yaxşı tanıyır.
                                <br /><br />
                                Və biz sosial yönümlü şirkət olmaqdan qürur duyuruq.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </RepeatIcon>
    )
}
export default Social;