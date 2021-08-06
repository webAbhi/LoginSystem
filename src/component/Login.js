// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';


const Login = (props) =>{
    //form styling
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        emailError,
        passwordError,
        hasAccount,
        setHasAccount} = props;
        
    const formBackground = {

        backgroundImage: "url(https://cdn.pixabay.com/photo/2017/09/07/14/33/cloud-2725520_960_720.jpg)",
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition:'center',
        padding:'4%'

    };
    const formStyle = {
        margin: '5% 0',
        fontFamily: 'Uchen , serif',
    };
    // rgba(248, 249, 250, 1.0)
    const overallStyle = {
        margin: '0 auto',
        width: '30%',
        background:'transparent',
        padding: '2%',
        borderRadius: '7%'
    };
    const formImage = {
        width: '30%',
        height: 'auto'
    };
    const toggle = {
        cursor: 'pointer',
        color: '#007bff'
    }

    return (
        <div style={formBackground}>
            <Form style={overallStyle} >
                <div className='text-center'>
                    <Image style={formImage}
                        src={'https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318011_960_720.png'} roundedCircle thumbnail
                    />
                </div>
                {
                    hasAccount ? (
                        <h2 className="text-center" style={formStyle}>Login to Your Account</h2>
                    ) :
                        (
                            <h2 className="text-center" style={formStyle}>Create Your Account</h2>
                        )}


                <Form.Group style={formStyle} className="mb-6">
                    <Form.Label > Email address</Form.Label>
                    <Form.Control type="text"  placeholder="Enter email" value={email} onChange= {(e) => setEmail(e.target.value)}/>
                    <p style={{ color: 'red' }}> {emailError} </p>
                </Form.Group>

                <Form.Group style={formStyle} className="mb-6">
                    <Form.Label  >Password</Form.Label>
                    <Form.Control type="password"   placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
                    <p style={{ color: 'red' }}> {passwordError} </p>
                </Form.Group>
                {

                    hasAccount ? (
                        <>
                            <Button variant="primary"  style={{width: "100%"}}  onClick = {handleLogin}> Login </Button>
                            <p className='text-right'> Dont't have an account ? <span style={toggle} onClick={() => setHasAccount(!hasAccount)}> Signup</span></p>
                        </>
                    ) :
                        (
                            <>
                                <Button variant="primary" style={{ width: "100%" }} onClick = {handleSignup}> Signup </Button>
                                <p className='text-right'>  Have an account ?
                                    <span style={toggle} onClick={() => setHasAccount(!hasAccount)}> Login</span>
                                </p>
                            </>
                        )}
            </Form>

        </div>
    )
}


export default Login;