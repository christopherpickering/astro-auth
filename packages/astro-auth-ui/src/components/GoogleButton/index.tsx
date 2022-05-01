import { signIn } from "@astro-auth/client";
import React, { FC, useEffect } from "react";
import styles from "../socialButtons.module.css";

interface GoogleButtonProps {
  children?: string;
  onClick?: () => void;
  callbackURL?: string;
}

const GoogleButton: FC<GoogleButtonProps> = ({
  children = "Login With Google",
  callbackURL,
  onClick = () =>
    signIn({
      provider: "google",
      callbackURL: callbackURL,
    }),
}) => {
  // TODO: Uncomment If pixelated border isn't working
  // useEffect(() => {
  //   if ("paintWorklet" in CSS) {
  //     // @ts-ignore
  //     CSS.paintWorklet.addModule(
  //       "http://yourjavascript.com/12922541814/pixel.js"
  //     );
  //   }
  // }, []);

  return (
    <button className={styles.button} onClick={onClick}>
      <img
        src="https://img.icons8.com/ios-glyphs/280/ffffff/google-logo--v1.png"
        style={{
          width: "20px",
        }}
      />
      <span>{children}</span>
    </button>
  );
};

export default GoogleButton;
