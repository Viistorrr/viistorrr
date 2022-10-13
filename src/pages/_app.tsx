import "../styles/globals.css";
import { MentorshipContextProvider } from "@context/MentorshipContext";

function MyApp({ Component, pageProps }) {
  return (
    <MentorshipContextProvider>
      <Component {...pageProps} />
    </MentorshipContextProvider>
  );
}

export default MyApp;
