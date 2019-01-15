import React from 'react';
import axios from 'axios';

import Field from '../components/Field';
import RoundIcon from '../components/RoundIcon';

const LoginPage = () => {
	return (
    	<main>
            <form>
                <h1>Kanoon</h1>
                <Field 
                    type = "email"
                    label = "email: "
                    id = "email"
                    onChange = { e => {
                        const { value } = e.target;
                        axios.get("https://api-analise-sentimento.mybluemix.net/busca_email/?email=" + value)
                        .then(response => response.data)
                        .then(data => console.log(data))
                    }}
                />
                <Field 
                    type = "password"
                    label = "password: "
                    id = "password"
                />
            </form>
        </main>
	);
}

export default LoginPage;