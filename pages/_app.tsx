import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
