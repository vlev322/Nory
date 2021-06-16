import { Heading, Box, Image, Skeleton, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { getPetImgData } from "../../logic/redux/modules/dogImgsContent/selectors";

export const Settings = () => {
  const { image, error, pending } = useSelector(getPetImgData);

  if (error) {
    return <Heading>Something went wrong..</Heading>;
  }

  return (
    <Box py={["30px", "80px"]} px={["8px", "32px"]} rounded="4px" background="#fff" w="100%" h="100vh" shadow={["base", "none"]}>
      {pending && (
        <>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
          <Skeleton h={["187px", "334px"]} w={["304px", "544px"]} />
        </>
      )}
      {image && (
        <>
          <Heading mb={["10px", "24px"]} fontSize={["20px", "32px"]} lineHeight={["24px", "32px"]}>
            Settings page
          </Heading>
          <Image src={image} h={["187px", "334px"]} w={["304px", "544px"]} objectFit="cover" />
        </>
      )}
    </Box>
  );
};
