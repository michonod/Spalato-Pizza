import { PrismaClient } from "@prisma/client";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Form as FormikForm, Field, Formik } from "formik";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { getStaticProps } from "../../pages";
import {
  Button,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  Close,
  Container,
  Form,
  Input,
  Label,
  Text,
} from "./styles";

const LoginForm = ({
  users,
  showModal,
}: InferGetStaticPropsType<typeof getStaticProps> & {
  showModal: (state: boolean) => void;
}) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [message, setMessage] = useState<string>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    const findUser = users.find(
      (user) =>
        user.email === username ||
        (user.username === username && user.password === password)
    );
    findUser && showModal(false);
    !findUser
      ? setMessage("Wrong password or email, try again!")
      : setMessage("");
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={submitHandler} id="login">
        <Label>Корисничко име или емаил адреса</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Лозинка</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CheckboxContainer>
          <Checkbox type="checkbox" />
          <Label>запомни ме</Label>
        </CheckboxContainer>
        <Link href="/new-password">Ја заборави лозинката?</Link>
        <Link href="/registration">Регистрирај се</Link>
        <p style={{ color: "red" }}> {message}</p>
      </Form>
    </Container>
  );
};

export default LoginForm;
