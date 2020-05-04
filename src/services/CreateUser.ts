// Aqui setamos os tipos das variáveis.
interface CreateUserData {
  name?: String; // exclamação significa que name não é obrigatório mas tem seu valor setado com uma string vazia.
  email: String;
  password: String;
  techs: Array<String>;
}

const CreateUser = ({ name = "", email, password, techs }: CreateUserData) => {
  const user = {
    name,
    email,
    password,
    techs,
  };
  return user;
};

export default CreateUser;
