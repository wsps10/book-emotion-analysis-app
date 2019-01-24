import React from 'react';
import axios from 'axios';

import Field from '../components/Field';
import Link from '../components/Link';
import RoundIcon from '../components/RoundIcon';

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
            password: ""
        };
    }

    render() {
        const { handleStateChange, state } = this;
        const { email, password } = state;
        return (
            <main className="vh-100 vw-100">
                <form className="bg-white pa3 tc w-300">
                    <h1>Kanoon</h1>
                    <Field 
                        value = { email }
                        type = "email"
                        label = "e- mail: "
                        id = "email"
                        placeholder = "my@mail.me"
                        onChange = { e => {
                            const { value } = e.target;
                            handleStateChange("email", value);

                            axios.get("https://api-analise-sentimento.mybluemix.net/busca_email/?email=" + value)
                            .then(response => response.data)
                            .then(data => console.log(data));
                        }}
                    />
                    <Field
                        value = { password }
                        type = "password"
                        label = "password: "
                        id = "password"
                        onChange = { e => handleStateChange("password", e.target.value) }
                    />
                    <button
                        type = "button"
                        className = "bg-purple-to-blue bn br-pill dim f3 fw4 h3 link w-90-ns white-90"
                        onClick = { () => {
                                axios.get(`https://api-analise-sentimento.mybluemix.net/login/?email=${email}&senha=${password}`)
                                .then(response => response.data)
                                .then(data => console.log(data));
                            }
                        }
                    >signin</button>
                    <strong>
                        {`Already have an account? Click `}<Link text="here" href="#" />
                        </strong>
                    <section className="ma4">
                        <RoundIcon
                            family = "fab"
                            name = "facebook-f"
                            title = "Facebook"
                            classes = "bg-facebook"
                            onClick = {() => console.log("facebook")}
                        />
                         <RoundIcon
                            family = "fab"
                            name = "goodreads-g"
                            title = "Goodreads"
                            classes = "bg-goodreads"
                        />
                         <RoundIcon
                            family = "fab"
                            name = "twitter"
                            title = "Twitter"
                            classes = "bg-twitter"
                        />
                    </section>
                </form>
            </main>
        );
    }
}

export default LoginPage;