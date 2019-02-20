import { enhanceMethods } from './object';

const addDomain = str => `http://api-analise-sentimento.mybluemix.net/${str}`;
const endpoints = {
	addBookToTheBase: (
		userId,
		title,
		author,
		status
	) => `/add_livro_base/?id_usuario=${userId}&status=${status}&titulo=${title}&autor=${author}`,
	addBookToTheBookList: (
		userId,
		bookId,
		plataform,
		status
	) => `/add_livro_usuario/?id_usuario=${userId}&id_livro=${bookId}&plataforma=${plataform}&status=${status}`,
	getUserBooklist: (userId) => `lista_livro_usuario/?id_usuario=${userId}`,
	login: (email, password) => `login/?email=${email}&senha=${password}`,
	recommendationsById: (userId) => `recomendacao_id_usuario/?id=${userId}`,
	recommendationsByFeeling: (
		feeling,
		userId,
		mustHaveSinopsis,
		mustHaveBeenFullyAnalyzed
	) => `recomendacao_emocao/?emocao=${feeling}&id_usuario=${userId}&sinopse=${mustHaveSinopsis}&analise_total=${mustHaveBeenFullyAnalyzed}`,
	searchEmail: (email) => `busca_email/?email=${email}`,
	signUp: (email, password) => `cadastro/?email=${email}&senha=${password}`
};

const fetchJson = url => fetch(url).then(request => request.json())
const api = enhanceMethods(endpoints, addDomain, fetchJson);
export default api;