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
          src="/images/logoSider.png"
          alt="fms-logo"
          width={120}
          height={120}
        />
      ) : (
        <Image
          src="/images/logoSider.png"
          alt="fms-logo"
          width={120}
          height={120}
        />
      )}
    </div>
  );
};

export default AppLogo;
