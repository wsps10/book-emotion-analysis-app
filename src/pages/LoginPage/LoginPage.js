import React from 'react';
import axios from 'axios';

import BrandButton from '../../components/custom/BrandButton/BrandButton';
import Field from '../../components/custom/Field/Field';
import Icon from '../../components/custom/Icon/Icon';
import RoundIcon from '../../components/custom/RoundIcon/RoundIcon';

const isEmail = str => {
    const letters = `([a-zA-Z])+`;
    const alphanumericsAndScores = `(\\w|-)+`;
    const email = new RegExp(`${alphanumericsAndScores}@${letters}\\.${letters}`);
    const b = email.test(str);

    return b
        ? str
        : new Error(`This format is not of a valid e-mail. Please check if it follows this@example.here`);
}

    const isNew = email => {
        const api = `https://api-analise-sentimento.mybluemix.net`;
        const service = `/busca_email/?email=${email}`;

        axios.get(api+service)
        .then(response => response.data)
        .then(data => data === "Success" ? console.log("a") : console.log("b"));
    }

const hasError = error => {

}

class LoginPage extends React.Component {
    handleStateChange = (key, val) => this.setState({
        [key]: val
    });

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailStatus: "empty",
            password: "",
            passwordStatus: "empty"
        };
    }

    render() {
        const { handleStateChange, state } = this;
        const { email, password, passwordCheck } = state;
        return (
            <main className="flex flex-column justify-center vh-100">
                <form className="bg-white h100 pa3 tc w-34">
                    <h1 className="mt0">sign in</h1>
                    <Field
                        hint = "my@mail.me"
                        id = "email"
                        label = "e-mail: "
                        onChange = { e => {
                            const { value } = e.target;
                            handleStateChange("email", value);

                            axios.get("https://api-analise-sentimento.mybluemix.net/busca_email/?email=" + value)
                            .then(response => response.data)
                            .then(data => console.log(data));
                        }}
                        value = { email }
                        type = "email"
                    />
                    <Field
                        hint = "must be at least 6 characters long"
                        id = "password"
                        label = "password: "
                        onChange = { e => handleStateChange("password", e.target.value) }
                        value = { password }
                        type = "password"
                    />
                    <BrandButton>
                        <Icon family="fas" icon="arrow-circle-right" className="anima-open" /><span>continue</span>
                    </BrandButton>
                    <section className="mt3">
                        <h2 className="ma0 mb1">you can also use Kanoon with:</h2>
                        <RoundIcon
                            family = "fab"
                            icon = "facebook-f"
                            title = "Facebook"
                            className = "bg-facebook"
                            onClick = {() => console.log("facebook")}
                        />
                         <RoundIcon
                            family = "fab"
                            icon = "goodreads-g"
                            title = "Goodreads"
                            className = "bg-goodreads"
                        />
                         <RoundIcon
                            family = "fab"
                            icon = "twitter"
                            title = "Twitter"
                            className = "bg-twitter"
                        />
                    </section>
                </form>
            </main>
        );
    }
}

export default LoginPage;