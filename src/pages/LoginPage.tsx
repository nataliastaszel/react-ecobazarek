import { useSelector } from "react-redux";
import { Content, LoginForm } from "../components";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { getUserData } from "../api";
import { useDispatch } from "react-redux";
import { userProfileActions } from "../redux/userProfile";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.userProfile.isAuthenticated
  );

  useEffect(() => {
    if (localStorage.getItem("userProfileToken")) {
      const login = async () => {
        await getUserData()
          .then((response) => {
            dispatch(userProfileActions.setUserData(response.data));
            navigate("/profile");
          })
          .catch(() => localStorage.removeItem("userProfileToken"));
      };
      login();
    }
  });

  useEffect(() => {
    if (isUserLoggedIn) navigate("/profile");
  }, [navigate, isUserLoggedIn]);

  return (
    <Content
      title="Login Page"
      className="flex items-center justify-center flex-col"
      isLoading={!!localStorage.getItem("userProfileToken")}
    >
      <LoginForm />
    </Content>
  );
};
