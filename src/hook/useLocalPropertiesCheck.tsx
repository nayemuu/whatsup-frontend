"use client";
import { useAppDispatch } from "@/lib/redux-hooks";
import { userLoggedIn } from "@/redux/features/auth/authSlice";
import { initiateProfileInfo } from "@/redux/features/profile/profileSlice";
import { useEffect, useState } from "react";

const useLocalPropertiesCheck = () => {
  const [propertiesChecked, setPropertieshChecked] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Checking user was logged in or not
    const localAuth = localStorage.getItem("auth");
    const localProfile = localStorage.getItem("profile");
    // console.log("localAuth = ", localAuth);
    // console.log("localProfile = ", localProfile);

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.refreshToken) {
        // console.log(auth);
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            refreshToken: auth.refreshToken,
          })
        );
      }
    }

    if (localProfile) {
      const profile = JSON.parse(localProfile);
      if (profile) {
        // console.log("profile = ", profile);
        dispatch(
          initiateProfileInfo({
            name: profile.name,
            email: profile.email,
            picture: profile.picture,
          })
        );
      }
    }

    // console.log('LocalPropertiesChecked');
    setPropertieshChecked(true);
  }, []);

  return propertiesChecked;
};

export default useLocalPropertiesCheck;
