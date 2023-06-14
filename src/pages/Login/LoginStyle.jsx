import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Loginh1 = styled.h1`
  margin-top: 54px;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: bold;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 3.4rem;
  color: #767676;
`;

const StyleInput = styled.input`
  margin: 10px 0 16px;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  padding: 0 0;
  font-size: 1.3rem;

  &:focus {
    border-color: var(--main-color);
  }
`;

const LoginButton = styled.button`
  border-radius: 30px;
  color: #fff;
  padding: 20px 0;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  height: 44px;
  margin-top: 20px;
  padding: 15px;
`;

const NavStyle = styled(NavLink)`
  display: block;
  list-style: none;
  text-align: center;
  margin-top: 20px;
  color: #767676;
  text-decoration: none;
  font-size: 0.8rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const FormBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 428px;
  height: 926px;
`;

export { Loginh1, LoginForm, StyleInput, LoginButton, NavStyle, Label, FormBox };
