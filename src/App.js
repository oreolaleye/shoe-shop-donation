import React, {useState} from "react";
import logo from "./img/logo.jpg"
import menu from "./img/menu.svg";
import closeicon from "./img/close.png";
import { PaystackButton } from 'react-paystack';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';




function App() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        amount: "",
    });
    const handleName = (event) => {
        setValues({...values, name: event.target.value})
    }
    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }
    const handleAmount = (event) =>{
        setValues({...values, amount: event.target.value})
    }

    // eslint-disable-next-line no-unused-vars
    // const [submitted, setSubmitted] = useState(false);
    // eslint-disable-next-line no-unused-vars
    // const [valid, setValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const refreshPage = ()=>{
        values.name = ("");
        values.email = ("");
        values.amount = ("");
    }
    const handlePaystackCloseAction = () => {

    };

    const [show, setShow] = useState(false);
    const [unhide, setUnhide] = useState(false);
    const [close, setClose] = useState(true);

    const componentProps = {
    text: 'Donate Now',
    onClose: handlePaystackCloseAction,
};
  return (
    <div className="App">
        <div className="inner">
            <header className="rows nav-row">
                <div className="brand-logo">
                    <a href="https://theshoeshop.ng/" target="blank"><img id="logo" src={logo} alt="the shoe shop" /></a>
                </div>
                <div className="links">
                    <a href="https://theshoeshop.ng/" target="blank">shop</a>
                    <a href="https://theshoeshop.ng/pages/about-us" target="blank">about us</a>
                    <a href="https://theshoeshop.ng/pages/contact-us" target="blank">contact us</a>
                </div>
                {unhide ?
                <ul className="menu-list">
                    <li><a href="https://theshoeshop.ng/" target="blank">shop</a>
                    </li>
                    <li><a href="https://theshoeshop.ng/pages/about-us" target="blank">about us</a></li>
                    <li><a href="https://theshoeshop.ng/pages/contact-us" target="blank">contact us</a></li>
                </ul>
                    : null}
                {close ?
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a id="menu-icon" href="#" onClick={() => {setUnhide(true); setClose(false)}}>
                    <img src={menu} alt=""/></a> : null}
                {unhide ?
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a id="close-icon" href="#" onClick={() => {setUnhide(false); setClose(true)}}>
                    <img src={closeicon} alt=""/></a> : null}

            </header>
            <Alert id="alert" show={show} variant="success">
                <Alert.Heading id="alert-heading">❤️️<br />Thank you for you donation!</Alert.Heading>
                <p id="alert-para">
                    You are eligible for a 5% discount on your next visit
                    to the shoe shop
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => {setShow(false); refreshPage()}} variant="outline-success">
                        Close
                    </Button>
                </div>
            </Alert>
            <section id="main-body">
                <main>
                    <h1>Help Fund Our New Space</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras tincidunt pharetra dapibus. Etiam risus purus, mattis
                            ut bibendum at, facilisis ac risus.
                        </p>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia curae.
                        </p>

                    </div>
                </main>
                <aside>
                    <form className="form" onSubmit={handleSubmit}>
                            <legend>Donor's Information</legend>
                            <div>Please fill the fields below</div>
                            <div className="form-div">
                                <input id="name"  type="text" placeholder="name"
                                       value={values.name}
                                       onChange={handleName} />
                            </div>
                        {!values.name ?<span className="danger">Please enter a name</span>:null}

                            <div className="form-div">
                                <input id="email"  type="email" placeholder="email"
                                       value={values.email}
                                       onChange={handleEmail}/>
                            </div>
                        {!values.email ?<span className="danger">Please enter an email address</span>:null}


                        <div className="form-div">
                            <span className="input-group-addon">₦</span>
                            <input id="amount" type="text" placeholder="50,000"
                                   pattern="^\d{3}[\s-]?\d{3}$"
                                               value={values.amount} onChange={handleAmount} />
                        </div>
                        {!values.amount ?<span className="danger">Please enter an amount</span>:null}

                    </form>
                    {/*{submitted  && valid ?  :null}*/}



                    <PaystackButton email={values.email} firstname={values.name} amount={values.amount * 100}
                                                    publicKey="pk_test_fe47aba6d899383b7806e6c78772290937232986"
                                                    onSuccess={() => setShow(true) && refreshPage} {...componentProps} className="green block"/>

                </aside>

            </section>
            <footer>Copyright 2021. Designed by <a href="https://oreolaleye.com.ng">Ore Olaleye</a> for The Shoe Shop Nig.</footer>
        </div>

    </div>
  );
}

export default App;

