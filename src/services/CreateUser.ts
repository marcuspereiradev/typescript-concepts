// Aqui setamos os tipos das variáveis.
interface CreateUserData {
  name?: String; // exclamação significa que name não é obrigatório mas tem seu valor setado com uma string vazia.
  email: String;
  password: String;
}

const CreateUser = ({ name = "", email, password }: CreateUserData) => {
  const user = {
    name,
    email,
    password,
  };
  return user;
};

export default CreateUser;
