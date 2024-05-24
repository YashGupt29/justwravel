"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FormInput } from "@/components/ui/form-input";
import { Credentials } from "../(features)/types";
import { useLoginUserMutation } from "../(features)/apiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../(features)/userSlice";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/lib/reduxProvider";

export function LoginCard() {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const { setToken } = useMyContext();
  const onSubmit = async (formData: FormData) => {
    console.log("clicked");
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const credentials: Credentials = { username, password, expiresInMins: 30 };
    try {
      const user = await loginUser(credentials).unwrap();
      console.log(user);
      dispatch(setUser(user));
      setToken(user.token);
      router.push("/");
    } catch (error) {
      console.error("Failed to login: ", error);
    }
  };
  return (
    <Card className="w-[70%]  md:w-[50%]  lg:w-[30%] lg:h-[55%] lg:mt-[-50px] bg-blue-200 border-none">
      <CardHeader>
        <CardTitle className="text-center text-lg">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="flex flex-col gap-5">
          <FormInput
            id="username"
            label="UserName"
            placeholder="enter your username"
            defaultValue="kminchelle"
            className="text-lg font-normal text-neutral-700 px-[7px] py-1 h-10 focus-visible:outline-none focus-visible:ring-transparent border-none"
          />
          <FormInput
            id="password"
            label="Password"
            placeholder="enter your password"
            defaultValue="0lelplR"
            className="text-lg font-normal text-neutral-700 px-[7px] py-1 h-10 focus-visible:outline-none focus-visible:ring-transparent border-none"
          />
          <Button className="bg-blue-600 hover:bg-blue-200">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
}
