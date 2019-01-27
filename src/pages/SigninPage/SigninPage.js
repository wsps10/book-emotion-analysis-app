import React from 'react';
import axios from 'axios';

import Field from '../../components/custom/Field/Field';
import Icon from '../../components/custom/Icon/Icon';
import RoundIcon from '../../components/custom/RoundIcon/RoundIcon';

class SigninPage extends React.Component {   
    isPasswordValid = password => password.length >= 6;
    isEmailValid = email => /^[a-z](\w|\.|-)*@[a-z]+(\.[a-z]+)+$/.test(email.toLowerCase());
    isEmailNew = email => {
        let b = false;
        axios.get(`https://api-analise-sentimento.mybluemix.net/busca_email/?email=${email}`)
        .then(response => response.data)
        .then(data => b = data === "Success");

        return b;
    };

    handleEmailChange = email => {
        const emailIsValid = this.isEmailValid(email);
        this.setState({
            email,
            emailIsValid,
            emailMessage: emailIsValid ? "" : "please doublecheck the exemple above",
            emailStyle: email === ""
                ? ""
                : emailIsValid 
                    ? "ok" 
                    : "error"
        });
    };

    handlePasswordChange = password => {
        const passwordIsValid = this.isPasswordValid(password);
        this.setState({
            password,
            passwordIsValid,
            passwordMessage: passwordIsValid ? "" : "this password is way too short! >////<",
            passwordStyle: password === ""
                ? ""
                : passwordIsValid 
                    ? "ok" 
                    : "error" 
        });
    };

    handlePasswordCheckChange = passwordCheck => {
        const passwordsMatch = passwordCheck === this.state.password;

        this.setState({
            passwordCheck,
            passwordsMatch,
            passwordCheckMessage: passwordsMatch ? "" : "passwords don't match",
            passwordCheckStyle: passwordCheck === ""
                ? ""
                : passwordsMatch 
                    ? "ok" 
                    : "error" 
        });
    };


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailIsValid: false,
            emailMessage: "",
            emailStyle: "",
            password: "",
            passwordIsValid: false,
            passwordMessage: "",
            passwordStyle: "",
            passwordCheck: "",
            passwordCheckMessage: "",
            passwordCheckStyle: "",
            passwordsMatch: false
        };
    }

    render() {
        const { 
            handleEmailChange, 
            handlePasswordChange,
            handlePasswordCheckChange,
            state 
        } = this;
        const { 
            email,
            emailIsValid,
            emailMessage,
            emailStyle,
            password,
            passwordIsValid,
            passwordMessage,
            passwordStyle,
            passwordCheck,
            passwordCheckMessage,
            passwordCheckStyle,
            passwordsMatch,
        } = state;

        return (
            <main className="bg-near-white flex flex-column justify-center vh-100">
                <form className="h100 pa3 tc w-30">
                    <span>
                        <h1 className="font-major-mono f1 ma0 mt0 mb1 purple-to-blue">Kanoon.</h1>
                        Welcome to Kanoon, please feel free to sign up
                    </span><br/>
                    <Field
                        className={`mt4 ${emailStyle}`}
                        error={emailMessage}
                        hint="my@mail.me"
                        id="email"
                        label="e-mail: "
                        onChange={e => handleEmailChange(e.target.value)}
                        value={ email }
                        type="email"
                    />
                    <Field
                        className={passwordStyle}
                        error={passwordMessage}
                        hint="must be at least 6 characters long"
                        id="password"
                        label="password: "
                        onChange={e => handlePasswordChange(e.target.value)}
                        value={password}
                        type="password"
                    />
                    <Field
                        className={passwordCheckStyle}
                        error={passwordCheckMessage}
                        hint="make sure it matches the password above"
                        id="passwordCheck"
                        label="confirm password: "
                        onChange={e => handlePasswordCheckChange(e.target.value)}
                        value={passwordCheck}
                        type="password"
                    />
                    <section className="flex justify-center items-center mb2"> 
                        <RoundIcon
                            classButton="anima-open bg-purple-to-blue"
                            enabled={emailIsValid && passwordIsValid && passwordsMatch}
                            family="fas"
                            icon="arrow-right"
                            title="Sign in"
                        />
                        <section className="tc">
                            <small>you can also connect with</small>
                            <span className="flex justify-center scale--75">
                                <RoundIcon
                                    classButton="b--facebook ba bg-transparent bw1 mr2"
                                    classIcon="facebook"
                                    family="fab"
                                    icon="facebook-f"
                                    title="Facebook"
                                    onClick={() => console.log("facebook")}
                                />
                                 <RoundIcon
                                    classButton="b--goodreads ba bg-transparent bw1 ml2 mr2"
                                    classIcon="goodreads"
                                    family="fab"
                                    icon="goodreads-g"
                                    title="Goodreads"
                                />
                                 <RoundIcon
                                    classButton="b--twitter ba bg-transparent bw1 ml2"
                                    classIcon="twitter"
                                    family="fab"
                                    icon="twitter"
                                    title="Twitter"
                                />
                            </span>
                        </section>
                    </section>
                    <span>Already have an account? Click <a href="#">here</a></span>
                </form>
            </main>
        );
    }
}

export default SigninPage;