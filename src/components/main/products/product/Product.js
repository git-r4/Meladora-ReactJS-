import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchProducts } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { useEffect } from "react";

//components
import { RepeatIcon } from "../../repeatIcon/repeatIcon";

import garden1 from '../../../../img/productGarden1.jpg';
import garden2 from '../../../../img/productGarden2.jpg';
import garden3 from '../../../../img/productGarden3.jpg';

const Product = () => {
    const { id } = useParams();
    const { products } = useSelector(state => state);
    const dispath = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispath(fetchProducts(request));
    }, [])

    const productGarden = [garden1, garden2, garden3];

    const renderEveryProduct = products.filter(item => item.id === id).map(({id, img, name, price}) => {
        return(
            <React.Fragment key={id}>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h1 className="productText">Məhsullarımız / {name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={5} sm={12} className="mbCol">
                        <div className="productImg">
                            <img src={`../${img}`} alt={name} />
                        </div>
                    </Col>
                    <Col lg={8} md={7} sm={12} className="mbCol">
                        <ul className="productInfo">
                            <li><h1>{name}</h1></li>
                            <li><h2>{price} ₼</h2></li>
                            <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="productFooterImage">
                    <Col lg={12} md={12} sm={12} className="mbCol">
                        <div className="productGardensImg">
                            {
                                productGarden.map((image, i) => {
                                    return(
                                        <div key={i}>
                                            <img src={image} alt="garden" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    })

    return(
        <RepeatIcon>
            <div className="product">
                <div className="product_fruitsGroup"></div>
                <Container>
                    {renderEveryProduct}
                </Container>
            </div>
        </RepeatIcon>
    )
}
export default Product;