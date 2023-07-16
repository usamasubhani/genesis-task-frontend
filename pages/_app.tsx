import classNames from "classnames";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import styles from "../styles/Home.module.css";
import "../styles/globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames([styles.main, roboto.className])}>
      <Component {...pageProps} />
    </main>
  );
}
export default MyApp;
