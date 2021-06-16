export type DogApiResponse = {
  message: string;
  status: string;
};

export type DogApiErrorResponse = {
  status: string;
  message: string;
  code: number;
};

export type PetImgState = {
  pending: boolean;
  error: null | DogApiErrorResponse;
  image: null | string;
};
