function validate(inputs) {

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /\w/;
    let errors = {
        email: "",
        password: "",
    }

    Object.keys(inputs).forEach(input => {
        let value = inputs[input];
        switch (input) {
            case 'email':
                !value.length && (errors.email = "No puede ser vacío.");
                !value.length > 35 && (errors.email = "Usuario muy largo.");
                const msgError = "Debe ser un correo electrónico.";
                !emailRegex.test(value) && (errors.email = msgError);
                break;
            case 'password':
                !(value.length >= 6 && value.length <= 10) &&
                    (errors.password = "La contraseña debe tener " +
                        "entre 6 y 10 dígitos.");
                !passwordRegex.test(value) && (errors.password =
                    "La contraseña debe tener al menos un dígito.");
                break;
            default:
                break;
        }
    });

    return errors;

}


export default validate;
