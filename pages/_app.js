import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

<Script
   id="Adsense-id"
   data-ad-client="ca-pub-1384109634555011"
   async="true"
   strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
