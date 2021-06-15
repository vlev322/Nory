import { Heading, Box, Image, Skeleton } from "@chakra-ui/react";

import { useGetDogImg } from "../../logic/hooks/useGetDogImg";

export const Labour = () => {
  const { data, error } = useGetDogImg();

  if (error) {
    return <Heading>Something went wrong..</Heading>;
  }

  return (
    <Box py="80px" px="31px">
      <Heading mb="24px" fontSize="32px">
        Home page
      </Heading>
      {data ? <Image src={data.message} h="334px" w="544px" objectFit="cover" /> : <Skeleton h="334px" w="544px" />}
    </Box>
  );
};
