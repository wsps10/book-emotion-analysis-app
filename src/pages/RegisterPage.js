import React from 'react';

import Field from '../components/Field';
import RoundIcon from '../components/RoundIcon';

const LoginPage = () => {
	return (
        <body class="bg">
        <header>
            </header>
            <div>
                <div>
                <form method="GET" class="login"> 
                    <h1 class="alignCenter">Cadastro</h1>
                    <label class="alignLeft marginLabel"> Digite seu e-mail: </label>
                    <br/>
                    <input class="alignLeft marginInput" type="mail" required name="email"/>
                    <br/>
                    <label class="alignLeft marginLabel"> Digite seu e-mail novamente: </label>
                    <br/>
                    <input class="alignLeft marginInput" type="mail" required name="email"/>
                    <br/>
                    <label class="alignLeft marginLabel"> Senha: </label>
                    <br/>   
                    <input class="alignLeft marginInput" type="password" required name="senha"/>
                    <br/>
                    <label class="alignLeft marginLabel"> Digite sua senha novamente: </label>
                    <br/>   
                    <input class="alignLeft marginInput" type="password" required name="confirmacaoSenha"/>
                    <br/>
                    <input class="marginLeft" type="submit" value="Registrar-se" name="register"/>
                    <input type="reset" value="Cancelar" name="cancel"/>
                    <br/>
                <form/>
                <div/>
            <div/>
    
<body/>
	);
}

export default LoginPage;