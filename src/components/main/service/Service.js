import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// components
import { RepeatIcon } from "../repeatIcon/repeatIcon";

import serv1 from "../../../img/service1.png";
import serv2 from "../../../img/service2.png";

import suvarma from '../../../img/suvarma.png';
import layihe from '../../../img/layihe.png';
import bag from '../../../img/bag.png';

const Service = (props) => {
    const service = [
        {
            id: 1,
            img: serv1,
            icon: suvarma,
            name: "Damcı suvarma sistemləri",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            img: serv2,
            icon: layihe,
            name: "Layihələndirmə",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 3,
            img: serv1,
            icon: bag,
            name: "Açar təslim bağların salınması",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];

    const serviceRender = service.map(({id, img, icon, name, description}) => {
        return(
            <React.Fragment key={id}>
                <Col lg={6} md={6} sm={12} className="mbCol">
                    <ul className="service_info">
                        <li><img src={icon} alt={name} /></li>
                        <li><h2>{name}</h2></li>
                        <li><p>{description}</p></li>
                    </ul>
                </Col>
                <Col lg={6} md={6} sm={12} className="mbCol">
                    <div className="service_infoImg">
                        <img src={img} alt={bag} />
                    </div>
                </Col>
            </React.Fragment>
        )
    })

    return(
        <RepeatIcon>
            <div className="service">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="service_headerText">Xidmətlərimiz</h1>
                        </Col>
                    </Row>
                    <Row className="gardenAndService_row">
                        {serviceRender}
                    </Row>
                </Container>
            </div>
        </RepeatIcon>
    )
}
export default Service;