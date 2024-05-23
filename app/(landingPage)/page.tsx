"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useMyContext } from "@/lib/reduxProvider";
import { RootState } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUserQuery } from "@/app/(landingPage)/(login)/(features)/apiSlice";
import { setUser } from "@/app/(landingPage)/(login)/(features)/userSlice";

const LandingPage = () => {
  const userImage = useSelector((state: RootState) => state.user.image);
  const { token } = useMyContext();
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = React.useState(false);
  const {
    data: user,
    error,
    isLoading,
  } = useFetchUserQuery(token, {
    skip: !token, // skip the query if no token
  });
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);
  if (!isMounted) {
    return null;
  }
  return <></>;
};
export default LandingPage;
