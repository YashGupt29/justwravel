"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useMyContext } from "@/lib/reduxProvider";
import { RootState } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUserQuery } from "@/app/(landingPage)/(login)/(features)/apiSlice";
import { setUser } from "@/app/(landingPage)/(login)/(features)/userSlice";
import { Body } from "./_components/body";

const LandingPage = () => {
  const userImage = useSelector((state: RootState) => state.user.image);
  const { token, isLargeScreen, setIsLargeScreen } = useMyContext();
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
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsLargeScreen(width >= 1024);
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <Body />
    </div>
  );
};
export default LandingPage;
