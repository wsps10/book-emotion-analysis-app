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
            <main>
                <form className="tc">
                    <h1>Kanoon</h1>
                    <Field 
                        value = { email }
                        type = "email"
                        label = "email: "
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
                        label = "password: "
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
                    >"Login"</button>
                    <RoundIcon
                        family = "fab"
                        name = "facebook-f"
                    />
                     <RoundIcon
                        family = "fab"
                        name = "goodreads-g"
                    />
                     <RoundIcon
                        family = "fab"
                        name = "twitter"
                    />
                </form>
            </main>
        );
    }
}

export default LoginPage;