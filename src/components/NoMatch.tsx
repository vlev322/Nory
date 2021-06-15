import { Flex, Heading, Link } from "@chakra-ui/react";

export const NoMatch = () => (
  <Flex direction="column">
    <Heading>No Match</Heading>
    <Link href="/">Go home</Link>
  </Flex>
);
