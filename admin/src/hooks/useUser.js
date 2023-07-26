import { useMutation, useQuery } from "@tanstack/react-query";
import userService from "../services/userService";

//paginate in useQuery https://tanstack.com/query/v4/docs/guides/paginated-queries
export const useUser = (page) =>
  useQuery(["uses", page], () => userService.getUser(page), {
    keepPreviousData: true,
  });

export const useAddUser = () => useMutation(userService.addUser)