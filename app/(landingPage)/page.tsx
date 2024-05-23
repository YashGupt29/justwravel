"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const userImage = useSelector((state: RootState) => state.user.image);
  console.log(userImage);

  return (
    <div>
      <Avatar>
        <AvatarImage src={userImage} alt="image" />
      </Avatar>
    </div>
  );
};
export default LandingPage;
