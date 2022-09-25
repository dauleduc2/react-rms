import { http } from "../core/api";

export const getUserByIdApi = async (id: string) => {
  try {
    const res = await http.get(`/users/${id}`);
    return res;
  } catch (error) {
    return null;
  }
};
