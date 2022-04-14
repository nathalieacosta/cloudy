import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <div>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
