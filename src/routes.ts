import { Request, Response } from "express";
import CreateUser from "./services/CreateUser";

const helloWorld = (request: Request, response: Response) => {
  const user = CreateUser({
    email: "email@email.com",
    password: "123456789990",
    techs: ["nodeJS", "React Native"],
  });
  return response.json(user);
};

export default helloWorld;
