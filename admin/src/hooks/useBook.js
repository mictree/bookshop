import { useMutation, useQuery } from "@tanstack/react-query";
import bookService from "../services/bookService";

//paginate in useQuery https://tanstack.com/query/v4/docs/guides/paginated-queries
export const useBook = (page) =>
  useQuery(["books", page], () => bookService.getBook(page), {
    keepPreviousData: true,
  });

export const useAddBook = () => useMutation(bookService.addBook)

export const useUpdateBook = () => useMutation(bookService.updateBook)