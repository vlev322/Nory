import { VStack, Box, Img, Center, Link } from "@chakra-ui/react";
import { NavBarItem } from "./NavBarItem/NavBarItem";

export const NavBar = () => {
  return (
    <VStack direction="column" justify="space-between" width={100} background="#F0F5F9" height="100vh" pl="16px" py="18.8" pb="54px">
      <Box w="100%">
        <Center>
          <Link href="/" title="Home">
            <Img alt="Nory Logo" src="https://nory.ai/static/media/n-logo.34190c70.svg" _hover={{ cursor: "pointer" }} h="27px" w="32px" />
          </Link>
        </Center>
        <NavBarItem href="/sales" imgSrc="/images/icons/alarm.svg" imgActiveSrc="/images/icons/alarm-active.svg" />
        <NavBarItem href="/labour" imgSrc="/images/icons/calendar.svg" imgActiveSrc="/images/icons/calendar-active.svg" />
      </Box>

      <Box w="100%">
        <NavBarItem href="/settings" imgSrc="/images/icons/settings.svg" imgActiveSrc="/images/icons/settings-active.svg" />
      </Box>
    </VStack>
  );
};
