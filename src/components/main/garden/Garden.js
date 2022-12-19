import React from "react";
import {Container, Row, Col} from "react-bootstrap";

//Component
import {RepeatIcon} from "../repeatIcon/repeatIcon";
import bag1 from '../../../img/bag1.png';
import bag2 from '../../../img/bag2.png';
import bag3 from '../../../img/bag3.png';

const Garden = (props) => {
    let garden = [
        {
            id: 1,
            img: bag1,
            num: "01",
            name: "BAĞ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            img: bag2,
            num: "02",
            name: "BAĞ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 3,
            img: bag3,
            num: "03",
            name: "BAĞ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];

    const gardenRender = garden.map(({id, img, num, name, description}) => {
        return(
            <React.Fragment key={id}>
                <Col lg={6} md={6} sm={12} className="mbCol">
                    <div className="garden_infoImg">
                        <img src={img} alt={name} />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="mbCol">
                    <ul className="garden_info">
                        <li><h1>{num}</h1></li>
                        <li><h2>{name}</h2></li>
                        <li><p>{description}</p></li>
                    </ul>
                </Col>
            </React.Fragment>
        )
    })

    return(
        <RepeatIcon>
            <div className="garden">
                <div className="garden_fruitsGroup"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="garden_header">Bağlarımız</h1>
                        </Col>
                    </Row>
                    <Row className="gardenAndService_row">
                        {gardenRender}
                    </Row>
                </Container>
            </div>
        </RepeatIcon>
    )
}
export default Garden;