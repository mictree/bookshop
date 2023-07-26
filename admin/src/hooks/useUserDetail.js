import { useMutation, useQuery } from "@tanstack/react-query";
import userService from "../services/userService";

export const useUserDetail = (id) =>
  useQuery(["user-detail", id], () => userService.getUserById(id));

