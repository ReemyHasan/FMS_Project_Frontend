import React from "react";
import Image from "next/image";
const AppLogoMaark = () => {
  return (
    <div className="app-logo">
      <Image
        src="/images/logo.svg"
        alt="fms-logo"
        width={100}
        height={80}
      />
    </div>
  );
};

export default AppLogoMaark;
