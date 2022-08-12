import { Btn } from "./styles";

export const Button = ({ type, children }) => {
  return <Btn type={type}> {children} </Btn>;
};
