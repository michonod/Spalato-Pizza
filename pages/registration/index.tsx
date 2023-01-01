import React, { useState } from "react";
import { InferGetStaticPropsType } from "next";
import { PrismaClient } from "@prisma/client";
import { Button, Form, Input, Label } from "./styles";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const users = await prisma.users.findMany();
  return {
    props: { users },
  };
};

const Registration = ({
  users,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [birth, setBirth] = useState<Date>();
  const [sex, setSex] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [message, setMessage] = useState<string>();
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const userExist = users.find((user) => user.email === email);
        if (userExist) {
          setMessage("User email already exist");
          return;
        }
        setMessage("You are registered successfully");
        await fetch("/api/registration", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            username,
            lastName,
            firstName,
            birth,
            sex,
            address,
          }),
        });
        router.push("/");
      }}
    >
      <Label htmlFor="first name">First name</Label>
      <Input
        type="text"
        name="First name"
        id="first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Label htmlFor="last name">Last name</Label>
      <Input
        type="text"
        name="Last name"
        id="last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Label htmlFor="username">Username</Label>
      <Input
        type="text"
        name="Username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        name="Email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        name="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Label htmlFor="date">Date of birth</Label>
      <Input
        type="date"
        id="date"
        name="Birth date"
        onChange={(e) => setBirth(new Date(e.target.value))}
      />
      {/* here make a radiobuttons */}
      <Label htmlFor="sex">Sex</Label>
      <Input
        type="text"
        name="Sex"
        id="sex"
        onChange={(e) => setSex(e.target.value)}
      />
      <Label htmlFor="address">Address</Label>
      <Input
        type="text"
        name="Address"
        id="address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button type="submit">Submit</Button>
      <h1>{message}</h1>
    </Form>
  );
};

export default Registration;
