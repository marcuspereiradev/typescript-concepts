import { Request, Response } from "express";
const helloWorld = (request: Request, response: Response) => {
  return response.json({ ok: "true" });
};

export default helloWorld;
