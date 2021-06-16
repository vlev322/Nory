import axios from "axios";
import { DogApiResponse } from "../types/common";

export const fetchPetDog = (breed?: string) =>
  axios.get<DogApiResponse>(`https://dog.ceo/api/breed/${breed ? breed : "akita"}/images/random`);
