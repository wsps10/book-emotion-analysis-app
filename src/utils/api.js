import { enhanceMethods } from './object';

const addDomain = str => `http://api-analise-sentimento.mybluemix.net/${str}`;
const endpoints = {
	booklist: (userId) => `lista_livro_usuario/?id_usuario=${userId}`,
	login: (email, password) => `login/?email=${email}&senha=${password}`,
	recommendationById: (userId) => `recomendacao_id_usuario/?id=${userId}`,
	recommendationByFeeling: (
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