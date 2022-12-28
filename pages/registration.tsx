import React, { useState } from "react";
import { InferGetStaticPropsType } from "next";
import { PrismaClient } from "@prisma/client";

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
  console.log(users);
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
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const userExist = users.find((user) => user.email === email);
        console.log(userExist);
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
      }}
    >
      <input
        type="text"
        name="First name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        name="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        name="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        name="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="date"
        name="Birth date"
        onChange={(e) => setBirth(new Date(e.target.value))}
      />
      <input type="text" name="Sex" onChange={(e) => setSex(e.target.value)} />
      <input
        type="text"
        name="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Submit</button>
      <h1>{message}</h1>
    </form>
  );
};

export default Registration;
