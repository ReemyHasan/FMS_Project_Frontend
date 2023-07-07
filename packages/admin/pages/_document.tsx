import { Html, Head, Main, NextScript } from "next/document";
import AppLogo from "@/src/components/layout/components/app-logo";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="globalLoader">
          <div>
            <div>
              <AppLogo />
            </div>
            <div className="loader-spin">
              <span className="ant-spin-dot ant-spin-dot-spin">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
