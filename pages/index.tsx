import type { NextPage } from "next";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ConnectButton from "../components/ConnectButton";
import "@fontsource/inter";
import theme from "./theme";
import AccountModal from "../components/AccountModal";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
};

export default Home;
