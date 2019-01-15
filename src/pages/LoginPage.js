import React from 'react';

import Field from '../components/Field';
import RoundIcon from '../components/RoundIcon';

const LoginPage = () => {
	return (
	<body className="bg"></body>
    	<header>
    	</header>
    	<div>
        	<div>
        	<form method="GET" className="login"> 
            	<h1>Kanoon</h1>
            	Usuário
            	<br/>
            	<input type="text" required name="user"/>
            	<br/>
            	Senha
            	<br/>   
            	<input type="password" required name="senha"/>
            	<br/>
            	<input type="submit" value="Login" name="login"/>
            	<br/>
            	<a href="RegisterPage.js">Cadastre-se aqui!</a>
        	<form/>
        	<div/>
    	<div/>
	<body/>
	);
}

export default RegisterPage;