import { Heading, Box, Stack, Image, Skeleton } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { RootState } from "../../logic/redux/store";
import { PetImgState } from "../../types/common";

export const Labour = () => {
  const { image, error, pending } = useSelector<RootState, PetImgState>((state) => state.petImage);

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
          <Skeleton h="334px" w="544px" />
        </>
      )}
      {image && (
        <>
          <Heading mb="24px" fontSize={["20px", "32px"]} lineHeight={["24px", "32px"]}>
            Sales page
          </Heading>
          <Image src={image} h={["187px", "334px"]} w={["304px", "544px"]} objectFit="cover" />
        </>
      )}
    </Box>
  );
};
