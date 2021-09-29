import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    h="100vh"
    bg="#19202d"
  >
    {children}
  </Flex>
);

export default Layout;
