import { Flex, Box, Img, Center } from "@chakra-ui/react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

import { NavBarItem } from "./NavBarItem/NavBarItem";

export const NavBar = () => {
  const dispatch = useDispatch();

  const handleGoTo = (href: string) => () => {
    dispatch(push(href));
  };

  return (
    <Flex
      direction={["row", "column"]}
      justify={["flex-end", "flex-start"]}
      width={["100%", "64px"]}
      background="#F0F5F9"
      height={["40px", "100vh"]}
      py={[0, "18.8px"]}
      pb={[0, "28px"]}
      pl={["8px", 0]}
      data-testid="testNavbar"
    >
      <Flex w={["32px", "100%"]} mb={[0, "19px"]} flexGrow={[1, 0]} justifyContent={["flex-start", "center"]} onClick={handleGoTo("/")}>
        <Center>
          <Img alt="Nory Logo" src="https://nory.ai/static/media/n-logo.34190c70.svg" _hover={{ cursor: "pointer" }} h="27px" w="32px" />
        </Center>
      </Flex>
      <Flex w={["auto", "100%"]} direction={["row", "column"]} flexGrow={[0, 1]}>
        <NavBarItem
          onClick={handleGoTo("/labour")}
          href="/labour"
          imgSrc="/images/icons/calendar.svg"
          imgActiveSrc="/images/icons/calendar-active.svg"
        />
        <NavBarItem
          onClick={handleGoTo("/sales")}
          href="/sales"
          imgSrc="/images/icons/alarm.svg"
          imgActiveSrc="/images/icons/alarm-active.svg"
        />
      </Flex>
      <Box w={["auto", "100%"]} h={["100%", "auto"]} alignSelf="flex-end">
        <NavBarItem
          onClick={handleGoTo("/settings")}
          href="/setting"
          imgSrc="/images/icons/settings.svg"
          imgActiveSrc="/images/icons/settings-active.svg"
        />
      </Box>
    </Flex>
  );
};
