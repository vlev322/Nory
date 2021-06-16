import { PetImgState } from "../../../../types/common";
import { RootState } from "../../store";

export const getPetImgData = (state: RootState): PetImgState => state.petImage;
