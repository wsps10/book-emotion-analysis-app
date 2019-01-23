import React from 'react';
import axios from 'axios';

import Field from '../components/Field';
import RoundIcon from '../components/RoundIcon';

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
            <main className="bg vh-100 vw-100">
                <form className="tc">
                    <h1>Kanoon</h1>
                    <Field 
                        value = { email }
                        type = "email"
                        label = "Email: "
                        id = "email"
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
                        label = "Password: "
                        id = "password"
                        onChange = { e => handleStateChange("password", e.target.value) }
                    />
                    <button
                        type = "button"
                        onClick = { () => {
                                axios.get(`https://api-analise-sentimento.mybluemix.net/login/?email=${email}&senha=${password}`)
                                .then(response => response.data)
                                .then(data => console.log(data));
                            }
                        }
                    >Login</button>
                    <section className="flex justify-center">
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