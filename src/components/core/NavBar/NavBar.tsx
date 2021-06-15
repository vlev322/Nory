import { Flex, Box, Img, Center, Link } from "@chakra-ui/react";
import { NavBarItem } from "./NavBarItem/NavBarItem";

export const NavBar = () => {
  return (
    <Flex
      direction={["row", "column"]}
      justify={["flex-end", "flex-start"]}
      width={["100%", "64px"]}
      background="#F0F5F9"
      height={["40px", "100vh"]}
      py={[0, "18.8px"]}
      pb={[0, "54px"]}
      pl={["8px", 0]}
    >
      <Flex w={["32px", "100%"]} mb={[0, "19px"]} flexGrow={[1, 0]} justifyContent={["flex-start", "center"]}>
        <Center>
          <Link href="/" title="Home">
            <Img alt="Nory Logo" src="https://nory.ai/static/media/n-logo.34190c70.svg" _hover={{ cursor: "pointer" }} h="27px" w="32px" />
          </Link>
        </Center>
      </Flex>
      <Flex w={["auto", "100%"]} direction={["row", "column"]} flexGrow={[0, 1]}>
        <NavBarItem href="/labour" imgSrc="/images/icons/calendar.svg" imgActiveSrc="/images/icons/calendar-active.svg" />
        <NavBarItem href="/sales" imgSrc="/images/icons/alarm.svg" imgActiveSrc="/images/icons/alarm-active.svg" />
      </Flex>
      <Box w={["auto", "100%"]} h={["100%", "auto"]} alignSelf="flex-end">
        <NavBarItem href="/settings" imgSrc="/images/icons/settings.svg" imgActiveSrc="/images/icons/settings-active.svg" />
      </Box>
    </Flex>
  );
};
