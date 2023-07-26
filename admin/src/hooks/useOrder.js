import { useMutation, useQuery } from "@tanstack/react-query";
import orderService from "../services/orderService";

//paginate in useQuery https://tanstack.com/query/v4/docs/guides/paginated-queries
export const useOrder = (page) =>
  useQuery(["order", page], () => orderService.getOrder(page), {
    keepPreviousData: true,
  });

export const useOrderDetail = (id) => useQuery(["book-detail", id], () => orderService.getOrderById(id));

export const useUpdateOrder = () => useMutation(orderService.updateOrder)

export const useDeleteOrder = () => useMutation(orderService.deleteOrder)

