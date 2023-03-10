import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "../../../style/swiper-bundle.min.css";

//component
import {RepeatIcon} from "../repeatIcon/repeatIcon";

import vegetable from '../../../img/vegetable.png';
import fruit from  '../../../img/fruits.png';
import sheet from '../../../img/sheet.png';
import orqanik from '../../../img/orqanik.png';
import memnuniyyet from '../../../img/memnuniyyet.png';
import lorem from '../../../img/lorem.png';
import keyfiyyet from '../../../img/keyfiyyet.png';

import infinity2 from '../../../img/infinity2.png';

import suvarma from '../../../img/suvarma.png';
import layihe from '../../../img/layihe.png';
import bag from '../../../img/bag.png';

//Desktop
import qal1 from '../../../img/qal1.png';
import qal2 from '../../../img/qal2.png';
import qal3 from '../../../img/qal3.png';
import qal4 from '../../../img/qal4.png';
import qal5 from '../../../img/qal5.png';
import qal6 from '../../../img/qal6.png';
//Mobile
import qalM1 from '../../../img/qalM1.jpg';
import qalM2 from '../../../img/qalM2.jpg';
import qalM3 from '../../../img/qalM3.jpg';

const About = (props) => {

    let galery = [
        [qal1, qal2],
        [qal3, qal4],
        [qal5, qal6]
    ];

    let galerySlide = galery.map((item, i) => {
        return(
            <div key={i}>
                {
                    item.map((image, i) => <img key={i} src={image} alt={`galery`} />)
                }
            </div>
        )
    })

    return(
        <>
            <RepeatIcon>
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="mbCol">
                            <div className="about">
                                <div className="about_headerText">
                                    <h1>Biz Kimik?</h1>
                                </div>
                                <div className="about_text">
                                    <p>??slind?? h??r ??ey ill??r ??vv??l ??smay??ll?? rayonunda  ail??vi g??zintid?? oldu??umuz zaman ba?? verdi. ??smay??ll?? rayonunun f??sunkar t??bi??tinin g??z??lliyi bizim bir g??n burda k??nd t??s??rufat?? il?? m????qul olmaq arzusunu oyatd??. Daha sonra dostlar??m??zla bu m??s??l??ni m??zakir?? ed??r??k ??smay??ll??da t??s??ruffat qurma??a q??rar verdik.
                                        B??y??k u??urlar vaxt??nda v?? yerind?? veril??n q??rarlarla ??ox ba??l??d??r.
                                        El?? bizd?? ilk s??f??rd?? q??rar verdik v?? ba??lad??q.??ll??r ??ox ser??tli ke??di.Bizd?? b??y??m??d?? zaman??n s??r??tind??n geri qalmad??q.Q??sa zaman m??dd??tind?? ??ld?? etdiyimiz u??urlar v?? daha s??r??tl?? b??y??m??y?? davam etm??yimiz i??imiz?? olan sevginin g??st??ricisidir.
                                        Alma,armud,nektarin,gaval??,gilas v?? qoz yeti??dirm??kl?? qalmad??q,ting??ilik v?? toxum??uluqla m??hsul s??ram??z?? geni??l??ndirdik.
                                        q??sa zamanda ??n son texnoloji yenilikl??rl?? damla suvarma sisteml??rinin qurulmas?? BA??LARIN layih??l??ndirilm??si,sal??nmas?? kimi ????tin i??l??rin ??d??sind??n u??urla g??ldik.
                                        2022 ci ild?? ??sas  h??d??fimiz brendimizin "made in AZERBA??JAN" ad??na layiq ??lk?? k??nar??nda r??fl??rd?? g??r??nm??sidir.
                                        n??vb??ti h??d??fl??ri sizl??rl?? payla??maq arzusuyla. <br /> <br/> H??rm??tl?? MELADORA kollektivi</p>
                                </div>
                                <div className="about_line">
                                    <div>
                                        <img src={sheet} alt={`sheet`}/>
                                    </div>
                                </div>
                                <div className="about_part">
                                    <ul>
                                        <li>
                                            <div>
                                                <img src={orqanik} alt={`orqanik`} />
                                            </div>
                                            <h5>Orqanik</h5>
                                        </li>
                                        <li>
                                            <div>
                                                <img src={memnuniyyet} alt={`memnuniyyet`} />
                                            </div>
                                            <h5>M??mnuniyy??t</h5>
                                        </li>
                                        <li>
                                            <div>
                                                <img src={lorem} alt={`lorem`} />
                                            </div>
                                            <h5>Lorem</h5>
                                        </li>
                                        <li>
                                            <div>
                                                <img src={keyfiyyet} alt={`keyfiyyet`} />
                                            </div>
                                            <h5>Y??ks??k keyfiyy??t</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="mbCol">
                            <div className="aboutImg">
                                <div>
                                    <img src={vegetable} alt={`img1`} />
                                    <img src={fruit} alt={`img2`} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </RepeatIcon>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} md={12} sm={12}>
                        <div className="aboutService">
                            <h1>Xidm??tl??rimiz</h1>
                            <div>
                                <img src={infinity2} alt={`infinity`} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mbCol">
                        <div className="aboutServiceSection">
                            <div>
                                <img src={suvarma} alt={`suvarma`} />
                            </div>
                            <h2>Damc?? suvarma sisteml??ri</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mbCol">
                        <div className="aboutServiceSection">
                            <div>
                                <img src={layihe} alt={`suvarma`} />
                            </div>
                            <h2>Layih??l??ndirm??</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mbCol">
                        <div className="aboutServiceSection">
                            <div>
                                <img src={bag} alt={`suvarma`} />
                            </div>
                            <h2>A??ar t??slim ba??lar??n sal??nmas??</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <RepeatIcon>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="aboutService">
                                <h1>Qalereya</h1>
                                <div>
                                    <img src={infinity2} alt={`infinity`} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="galerySlider">{galerySlide}</div>
                        <div className="galerySliderForMobile">
                            <img src={qalM1} alt="GaleryMobile"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="galerySlider">{galerySlide}</div>
                        <div className="galerySliderForMobile">
                            <img src={qalM2} alt="GaleryMobile" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="galerySlider">{galerySlide}</div>
                        <div className="galerySliderForMobile">
                            <img src={qalM3} alt="GaleryMobile" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </RepeatIcon>
        </>
    )
}
export default About;