import admin from './admin';
import adminVal from './adminVal'; // valida login de admin

export default function handleLogin(route, loginInp, navigation) {

    // retirando espaços à direita e converção de strings para minúsculas
    loginInp.email = loginInp.email.trim().toLowerCase();
    admin.email = admin.email.trim().toLowerCase();

    // variáveis de escopo para os dados da tela de cadastro
    if (!route.params) {
        if (adminVal(loginInp, admin) === true) {
            navigation.navigate('Home');
        } else {
            alert('Os dados inseridos são inválidos!');
        }
    } else {
        let registerEmail = route.params.registerData.email.trim().toLowerCase();
        let registerPassword = route.params.registerData.password;
        
        if (registerEmail === loginInp.email && registerPassword === loginInp.password || adminVal(loginInp, admin) === true) {
            navigation.navigate('Home');
        } else {
            alert('Os dados inseridos são inválidos!');
        }
    }
};