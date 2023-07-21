import axios from "axios";
import { API } from "configs/api";

export const CatService = {
    cats: (data) => axios.get(`${API.cats}&page=${data.page}${data.id ? `&category_ids=${data.id}` : null}`)
};
