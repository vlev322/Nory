import { Heading, Box, Image, Skeleton } from "@chakra-ui/react";

import { useGetDogImg } from "../../logic/hooks/useGetDogImg";

export const Settings = () => {
  const { data, error } = useGetDogImg();

  if (error) {
    return <Heading>Something went wrong..</Heading>;
  }

  return (
    <Box py="30px" px="31px" rounded="4px" background="#fff" h="100vh" shadow="2xl">
      <Heading mb="24px" fontSize={["20px", "32px"]}>
        Settings page
      </Heading>
      {data ? <Image src={data.message} h="334px" w="544px" objectFit="cover" /> : <Skeleton h="334px" w="544px" />}
    </Box>
  );
};
