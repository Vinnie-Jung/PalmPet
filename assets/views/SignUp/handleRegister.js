// Validação dos dados da tela de cadastro

export default function handleRegister(formInputs, navigation) {

    // salva os campos principais inseridos no cadastro
    const registerData = {
        email: formInputs.email,
        password: formInputs.password
    }

    formInputs.email = formInputs.email.toLowerCase().trim();
    formInputs.emailConfirm = formInputs.emailConfirm.toLowerCase().trim();

    // valida formatação de e-mail
    function validateEmail(email) {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    validateEmail(formInputs.email);
    
    if (formInputs.email !== formInputs.emailConfirm) {
        alert('Os e-mails não coincidem!');
    } else if (!validateEmail(formInputs.email)) {
        alert('E-mail inserido é inválido!');
    } else if (formInputs.password.length < 8) {
        alert('A senha deve conter ao menos oito caracteres!');
    } else if (formInputs.password !== formInputs.passwordConfirm) {
        alert('As senhas não coincidem!');
    } else {
        navigation.navigate('LogIn', { registerData }); // registerData é passado para a tela de login
        alert('Conta criada com sucesso!');
    }
    return;
};