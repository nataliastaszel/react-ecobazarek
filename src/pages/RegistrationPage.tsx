import { useNavigate } from "react-router-dom";
import { Content } from "../components";
import { RegistrationForm } from "../components/index";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.userProfile.isAuthenticated
  );

  useEffect(() => {
    if (isUserLoggedIn) navigate("/profile");
  }, [navigate, isUserLoggedIn]);

  return (
    <Content
      title="Registration page"
      className="flex flex-col items-center justify-center"
    >
      <RegistrationForm />
    </Content>
  );
};
