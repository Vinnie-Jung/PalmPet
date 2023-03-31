// Validação de conta admin
export default function adminVal(loginInp, admin) {
    if (loginInp.email === admin.email && loginInp.password === admin.password) {
        return true;
    } else {
        return false;
    }
}