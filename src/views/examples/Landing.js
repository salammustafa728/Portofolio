/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/welc2.jpg";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Salam Mustaf{" "}
                        <span> Software Developer</span>
                      </h1>
                      <p className="lead text-white">
                            Sowftware Developer wth background in computer science, I have passion in codeing,
                            now I'm taking an advanced Full-Stack Web Development Internship for ASAC, I always adding new skills 
                            to my reporitore, Also I'm familier with a variety of progrramming languages CSS, JavaScript,HTML and Java. 
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://github.com/salammustafa728"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">My GitHub</span>
                        </Button>
                        {/* <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Game-Learn Project
                          </h6>
                          <p className="description mt-3">
                            An asowsome learning project for kids with interactive and attractive web pages to catch the kids eyes
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                            <a href='https://github.com/Dcode-Team'> Github page</a> 
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            <a href='https://dcode-team.github.io/Game-Learn/creators.html'> creators page</a>
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              <a href='https://dcode-team.github.io/Game-Learn/index.html'> Project page</a>
                             
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more <a href='https://dcode-team.github.io/Game-Learn/index.html'>  </a>
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Salmon Cookie
                          </h6>
                          <p className="description mt-3">
                           A website for cookie shop that count the number of cookie per hour and to count
                           the customer per hours for each loction for the shop
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                             
                              <a href='https://salammustafa728.github.io/cookie-stand/'> Home page</a>
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                              <a href='https://salammustafa728.github.io/cookie-stand/sales.html'> Sales page</a>
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                              <a href='https://github.com/salammustafa728/cookie-stand'> Repo page</a>
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            BusMall Project
                          </h6>
                          <p className="description mt-3">
                              A project for BusMall that display 3 items randomly anmd the user can choose favirout item 
                              and he have a 25 choose then a chart of the # of votes for each item display and a list for the vote and the shown items
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                            
                              <a href='https://salammustafa728.github.io/bus-mall/'> Home page</a>
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                            
                              <a href='https://github.com/salammustafa728/bus-mall'> Repo page</a>
                            </Badge>
                            {/* <Badge color="warning" pill className="mr-1">
                             
                              <a href='https://github.com/salammustafa728/cookie-stand'> Repo page</a>
                            </Badge> */}
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>My Background</h3>
                    <p>
                    A passionate programmer, I’m familiar with a variety of programming languages, including JavaScript, HTML, CSS and Java,  but I'm always adding new skills to my repertoire.
                           Today, I’m taking an advanced internship in software development for ASAC, I'm interested to learn full stack web development. Also I interested in learning codeing. 
                          
                    </p>
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
         
        
       
        
         
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
