import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
                                    <p>Əslində hər şey illər əvvəl İsmayıllı rayonunda  ailəvi gəzintidə olduğumuz zaman baş verdi. İsmayıllı rayonunun füsunkar təbiətinin gözəlliyi bizim bir gün burda kənd təsərufatı ilə məşqul olmaq arzusunu oyatdı. Daha sonra dostlarımızla bu məsələni müzakirə edərək İsmayıllıda təsəruffat qurmağa qərar verdik.
                                        Böyük uğurlar vaxtında və yerində verilən qərarlarla çox bağlıdır.
                                        Elə bizdə ilk səfərdə qərar verdik və başladıq.İllər çox serətli keçdi.Bizdə böyümədə zamanın sürətindən geri qalmadıq.Qısa zaman müddətində əldə etdiyimiz uğurlar və daha sürətlə böyüməyə davam etməyimiz işimizə olan sevginin göstəricisidir.
                                        Alma,armud,nektarin,gavalı,gilas və qoz yetişdirməklə qalmadıq,tingçilik və toxumçuluqla məhsul sıramızı genişləndirdik.
                                        qısa zamanda ən son texnoloji yeniliklərlə damla suvarma sistemlərinin qurulması BAĞLARIN layihələndirilməsi,salınması kimi çətin işlərin ödəsindən uğurla gəldik.
                                        2022 ci ildə əsas  hədəfimiz brendimizin "made in AZERBAİJAN" adına layiq ölkə kənarında rəflərdə görünməsidir.
                                        növbəti hədəfləri sizlərlə paylaşmaq arzusuyla. <br /> <br/> Hörmətlə MELADORA kollektivi</p>
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
                                            <h5>Məmnuniyyət</h5>
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
                                            <h5>Yüksək keyfiyyət</h5>
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
                            <h1>Xidmətlərimiz</h1>
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
                            <h2>Damcı suvarma sistemləri</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mbCol">
                        <div className="aboutServiceSection">
                            <div>
                                <img src={layihe} alt={`suvarma`} />
                            </div>
                            <h2>Layihələndirmə</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mbCol">
                        <div className="aboutServiceSection">
                            <div>
                                <img src={bag} alt={`suvarma`} />
                            </div>
                            <h2>Açar təslim bağların salınması</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
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