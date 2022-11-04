import { useEffect, useMemo, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import ThemeContext from "utils/context/themeContext";
import Layout from "components/feature/layout";
import "antd/dist/antd.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState<boolean>(false);
  const value = useMemo(() => ({ dark, setDark }), [dark, setDark]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark';
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute('data-theme', isDark ? 'dark' : '');
    setDark(isDark);
  }, []);

  return (
    <><Head>
      <title>Sagol</title>
    </Head><ThemeContext.Provider value={value}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider></>
  );
}

export default MyApp;
