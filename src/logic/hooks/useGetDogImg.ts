import useSwr from "swr";

import { DocApiResponse } from "../../types/common";

export const useGetDogImg = () => useSwr<DocApiResponse>("https://dog.ceo/api/breeds/image/random");
