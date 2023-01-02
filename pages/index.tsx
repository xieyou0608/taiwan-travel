import { Flex, Heading, Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Welcome!</Heading>
        <Button mb={6} colorScheme="teal" as={Link} href="/news">
          News
        </Button>
        <Button mb={6} colorScheme="teal" as={Link} href="/travel">
          Travel
        </Button>
      </Flex>
    </Flex>
  );
};
export default IndexPage;
