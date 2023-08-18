import Usuario from "../models/usuario";

export const esEmailValido = async(email = '') => {

    //verificar si el email existe
    const existeEmail = await Usuario.findOne({
        where: {
            email: email
        }
    });

    if(existeEmail){
        throw new Error(`El email ${ email } ya está registrado`);
    }

}

export const existeUsuarioPorId = async(id: number) => {
    const existeUsuario = await Usuario.findByPk(id);
    if(!existeUsuario){
        throw new Error(`El usuario ${ id }, no existe`);
    }
}