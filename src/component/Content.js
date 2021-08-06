
import '../app.css'
import profile from '../Images/profile.jpeg'
import second from '../Images/second.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { MdPhoneInTalk, MdMailOutline, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"


export default function Content() {
    return (
            <Container>
                <Row style={{ margin: '17% 0%' }}>
                    <Col lg={6} className="text-center">
                        <Image style = {{ width:'36%', height :'auto'}} src={profile} roundedCircle thumbnail />

                    </Col>
                    <Col lg={6} >
                        <h1><span className="mainHeading"> Hi, I'm </span><span style ={{color :'#548CA8'}}> ABHIJEET KUMAR</span></h1>
                        <h3 className="data">Full Stack Developer</h3>
                        <h5 className="data"><MdMailOutline /> abhijeetk9911@gmail.com</h5>
                        <h5 className="data"><MdPhoneInTalk /> +91-8762600352</h5>
                        <h5 className="data"><MdLocationOn /> Bangalore, India</h5>

                    </Col>
                </Row>

                <hr></hr>
                <Row className="about" style={{ margin: '15% 9%' }}>

                    <Col sm={12} lg={7} >
                        <h1 style ={{color :'#548CA8'}}>About  me</h1>

                        <h4 className="about">
                            <span className="aboutLeft">Experience </span>- 1 year as Programmer analyst
                        </h4>
                        <h4 className="about">
                            <span className="aboutLeft">Programming language </span>
                            - Java, Javascript
                        </h4>
                        <h4 className="about"><span className="aboutLeft">Skills</span>- 
                            <Badge variant="secondary">DSA</Badge> {'   '}
                            <Badge variant="secondary">Problem solving</Badge>{'   '}
                            <Badge variant="secondary">MERN</Badge> {'   '}
                            <Badge variant="secondary">Design</Badge> {'   '}
                            <Badge variant="secondary">Deployment </Badge> {'   '}
                        </h4>

                        <h5><span className="aboutLeft about">Contacts  - </span>
                            <a href ="https://github.com/webAbhi" target="_blank" rel="noopener noreferrer">
                                <Button variant="light" size="lg"> <FaGithub /> </Button>{'   '}
                            </a>
                            <a href ="https://www.linkedin.com/in/abhijeet-kumar-074924145/" target="_blank" rel="noopener noreferrer">
                                <Button variant="light" size="lg"> <FaLinkedin /> </Button>{'   '}
                            </a>
                            <a href ="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                                <Button variant="light" size="lg"> <FaInstagram /> </Button>{'   '}
                            </a>
                        </h5>

                    </Col>
                    <Col style = {{ margin: '0 auto' }} sm={9} lg={3}>
                        
                        <Image src={second} roundedCircle thumbnail />

                    </Col>
                </Row>
            </Container>
    )
}
