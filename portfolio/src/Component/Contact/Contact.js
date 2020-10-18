import React ,{useState}from 'react'
import Header from '../header'
import emailjs from 'emailjs-com';
import{ Form,Col,Row,Button }from 'react-bootstrap'
import './contact.css'

const Contact = () => {
    const [name,setName]=useState()
    const [firstname,setFirstname]=useState()
    const [email,setEmail]=useState()
    const [tel,setTel]=useState()
    const [message,setMessage]=useState()
    const handleMail=()=>{
        emailjs.send("2323","template_yugxhwq",{
            from_name: email,
            name: name,
            firstname: firstname,
            tel: tel,
            message: message,
            },'user_GAd0FZCju9JtfHUX9UhfN');
            window.location.reload()
    }
    return (
        <div id='Contact'>
            <Header/>
            <div id='linkText'>
                <h2 className='contact_title'>Me suivre :</h2>
                <a  href='https://github.com/fredericklouison'><i class="fab fa-github"></i></a>
                <a href='https://www.instagram.com/louison_webdev'><i class="fab fa-instagram"></i></a>
                <a href='https://www.linkedin.com/in/frédérick-louison-0230951ba'><i class="fab fa-linkedin-in"></i></a>
            </div>
            <h2 className='contact_title'>Me contacter:</h2>
            <Form className='form'>
                <Row>
                    <Col>
                        <Form.Control onChange={(e)=>{setFirstname(e.target.value)}}placeholder="Prénom" />
                    </Col>
                    <Col>
                        <Form.Control onChange={(e)=>{setName(e.target.value)}}placeholder="Nom" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className='label'>Email :</Form.Label>
                            <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label className='label'>tel:</Form.Label>
                            <Form.Control onChange={(e)=>{setTel(e.target.value)}}type="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" placeholder="06..." />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='label'>text:</Form.Label>
                    <Form.Control onChange={(e)=>{setMessage(e.target.value)}} as="textarea" rows="3" />
                </Form.Group>
                <Button onClick={handleMail} type="button" className="my-1">
                   Envoyer
                </Button>

            </Form>
        </div>
    )
}

export default Contact