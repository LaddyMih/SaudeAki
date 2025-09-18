/**
 * Esse arquivo é responsável pela as rotas da aplicação.
 */

/**  
 * Um array de rotas que são acessíveis ao público. Essas rotas
 * não precisam de autenticação.
 * @type {string[]}
 * */
export const publicRoutes: string[] = [
    "/",
];

/**
 *  Um array de rotas que são utilizadas para autenticação. Essas rotas
 * irão redirecionar usuários logados para "/dashboard".
 * @type {string[]}
 */
export const authRoutes: string[] = [
    "/auth/login",
    "/auth/error",
]

/**
 * Um prefixo para rotas da API de autenticação. Rotas que começam com esse prefixo
 * são utilizados para propósitos com a API de autenticação.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * O caminho padrão para redirecionar o usuário depois de logar.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
