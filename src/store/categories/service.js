import axios from "axios";
import { API } from "configs/api";

export const CategoriesService = {
    categories: () => axios.get(API.categories)
};
