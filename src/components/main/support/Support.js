import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// components
import { RepeatIcon } from "../repeatIcon/repeatIcon";
import sup1 from "../../../img/support1.png";
import sup2 from "../../../img/support2.png";
import sup3 from "../../../img/support3.png";

const Support = (props) => {
    const support = [
        {
            id: 1,
            icon: sup1,
            a: "MELADORA MMC Baş ofis:",
            b: "Bakı"
        },
        {
            id: 2,
            icon: sup2,
            a: "+994 (70) 5555777",
            b: "+994 (012) 5555777"
        },
        {
            id: 3,
            icon: sup3,
            a: "İstehsal",
            b: "İSMAYILLI ray, Qalıncaq kəndi"
        }
    ];
    const supportRender = support.map(({id, icon, a, b}) => {
        return(
            <React.Fragment key={id}>
                <Col lg={4} md={6} sm={12} className="mbCol">
                    <div className="support">
                        <div className="support_icon">
                            <img src={icon} alt={`support`} />
                        </div>
                        <div className="support_info">
                            <h3>{a}</h3>
                            <h3>{b}</h3>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        )
    })

    return(
        <RepeatIcon>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="supportHeader">
                            <h1>Əlaqə</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {supportRender}
                </Row>
            </Container>
        </RepeatIcon>
    )
}
export default Support;