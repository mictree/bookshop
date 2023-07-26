import { useQuery } from "@tanstack/react-query";
import bookService from "../services/bookService";

//paginate in useQuery https://tanstack.com/query/v4/docs/guides/paginated-queries
export const useBookDetail = (id) =>
  useQuery(["book-detail", id], () => bookService.getBookById(id), {
    keepPreviousData: true,
  });
