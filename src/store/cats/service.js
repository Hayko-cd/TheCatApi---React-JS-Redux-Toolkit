import axios from "axios";
import { API } from "configs/api";

export const CatService = {
    cats: () => axios.get(API.cats)
};
