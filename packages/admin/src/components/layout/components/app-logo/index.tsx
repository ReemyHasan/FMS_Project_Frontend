import React from "react";
import Image from "next/image";

type AppLogoProps = {
  darkMode?: boolean;
};
const AppLogo = ({ darkMode = false }: AppLogoProps) => {
  return (
    <div className="app-logo">
      {darkMode ? (
        <Image
          src="/images/logo.svg"
          alt="fms-logo"
          width={50}
          height={50}
        />
      ) : (
        <Image
          src="/images/logo.svg"
          alt="fms-logo"
          width={50}
          height={50}
        />
      )}
    </div>
  );
};

export default AppLogo;
