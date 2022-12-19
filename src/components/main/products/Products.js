import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";
import { fetchProducts } from "../../../actions";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";

//components
import { RepeatIcon } from "../repeatIcon/repeatIcon";

const Products = (props) => {
    const { products, productLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const [typeProduct, setTypeProduct] = useState("all");

    useEffect(() => {
        dispatch(fetchProducts(request))
    }, []);

    const productType = [
        {
            type: "all",
            name: "Hamısı"
        },
        {
            type: "fruit",
            name: "Meyvələr"
        },
        {
            type: "vegetable",
            name: "Tərəvəzlər"
        },
        {
            type: "grain",
            name: "Taxıllar"
        },
        {
            type: "other",
            name: "Digər"
        }
    ];
    const filteredCondition = (item) => {
        if(typeProduct === "all"){
            return item;
        }else if(item.type === typeProduct){
            return item;
        }
    }
    const productTypeNav = productType.map(({type, name}) => {
        return(
            <li key={name}>
                <button type="button" className={type === typeProduct ? "activeBtn" : null} onClick={() => setTypeProduct(typeProduct => type)}>{name}</button>
            </li>
        )
    })

    const renderProducts = products.filter(item => filteredCondition(item)).map(({id, img, name, price}) => {
        return(
            <React.Fragment key={id}>
                <Col lg={3} md={6} sm={12} className="mbCol">
                    <Link to={`/product/${id}`}>
                        <div className="products_box">
                            <div className="products_box_img">
                                <img src={img} alt={name} />
                            </div>
                            <div className="products_box_info">
                                <div>
                                    <h1>{name}</h1>
                                    <h2>{price} ₼</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </React.Fragment>
        )
    })

    return(
        <RepeatIcon>
            <div className="products">
                <Container>
                    <div className="products_fruitGroupUpRight"></div>
                    <Row>
                        <Col lg={12}>
                            <h1 className="products_text">Məhsullarımız</h1>
                        </Col>
                    </Row>
                    <Row>
                        <ul className="products_typeList">
                            {productTypeNav}
                        </ul>
                    </Row>
                    <Row>
                        {
                            productLoadingStatus === "error"
                                ? <h5>Error</h5>
                                : productLoadingStatus === "loading"
                                ? <h5>Loading</h5>
                                : renderProducts
                        }
                    </Row>
                </Container>
                <div className="products_fruitGroupDownLeft"></div>
            </div>
        </RepeatIcon>
    )
}
export default Products;