import Link from "next/link";
import React from "react";
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

const LoginForm = () => {
  return (
    <Container>
      <Form>
        <Label>Корисничко име или емаил адреса</Label>
        <Input type="text" />
        <Label>Лозинка</Label>
        <Input type="password" />
        <CheckboxContainer>
          <Checkbox type="checkbox" />
          <Label>запомни ме</Label>
        </CheckboxContainer>
        <Link href="/new-password">
          <Text>Ја заборави лозинката?</Text>
        </Link>
      </Form>
    </Container>
  );
};

export default LoginForm;
