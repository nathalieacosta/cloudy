import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
