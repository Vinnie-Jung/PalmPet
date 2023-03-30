// Validação dos dados da tela de cadastro

export default function handleRegister(formInputs, navigation) {
    formInputs.email = formInputs.email.toLowerCase().trim();
    formInputs.emailConfirm = formInputs.emailConfirm.toLowerCase().trim();

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
        navigation.navigate('LogIn');
        
        alert('Conta criada com sucesso!');
    }
    return;
};