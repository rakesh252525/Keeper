import React,{useEffect} from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css";
import {useNavigate} from 'react-router-dom';
export const LandingPage = () => {
    const userInfo = localStorage.getItem('userInfo');
   const navigate = useNavigate()
  useEffect(() => {
    if(userInfo){
        navigate('/mynotes');
     }
  }, [navigate])
 

    return (
        <div className='main'>
            <Container>
                <Row>
                   <div className='intro-text'>
                       <Container>
                        <div className='text'>
                            <h1 className='title'>Welcome to KeeperApp</h1>
                            <p className='subtitle'>One Safe place for all your notes.</p>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size='lg' className='landingbutton'>
                                    Login
                                </Button>
                            </a>

                            <a href='/register'>
                                <Button size='lg' className='landingbutton' variant='outline-primary'>
                                    Signup
                                </Button>
                            </a>

                        </div>
                        </Container>
                   </div>
                </Row>
            </Container>
        </div>
    )
}
export default LandingPage;