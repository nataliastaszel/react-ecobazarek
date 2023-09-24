import { useSelector } from "react-redux";
import { Content } from "../components";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ProfileTabs } from "../components/profile-tabs/ProfileTabs";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.userProfile.isAuthenticated
  );

  useEffect(() => {
    if (!isUserLoggedIn) navigate("/login");
  }, [navigate, isUserLoggedIn]);

  return (
    <Content
      title="Profile page"
      className="flex items-center justify-center flex-col"
    >
      <h1 className="flex text-[48px] font-bold mt-14 mb-7 w-[90%] sm:w-2/3 text-brown">
        PROFIL
      </h1>
      <ProfileTabs/>
    </Content>
  );
};
