import { useRouter } from "next/router";
import { useMemo } from 'react';
import { navBarPaths } from "utils/constants/navBarPaths";
import Footer from "../footer";
import Header from "../header";

import styles from "./layout.module.scss";

type LayoutProps = React.PropsWithChildren<unknown>;

export default function Login({ children }: LayoutProps) {
  const router = useRouter();

  const validPathCheaking = useMemo(() => {
    return router.pathname !== navBarPaths.signUp && router.pathname !== navBarPaths.login;
  }, [router.pathname]);

  return (
    <div className={styles.generalModeBg}>
      {validPathCheaking && <Header />}
      {children}
      {validPathCheaking && <Footer />}
    </div>
  );
}
