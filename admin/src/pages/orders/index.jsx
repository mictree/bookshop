import "./list.scss";
import { useMutation } from "@tanstack/react-query";
import DatatableTemplate from "../../components/datatableTemplate/DatatableTemplate";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import orderService from "../../services/orderService";
import { useOrder } from "../../hooks/useOrder";
import { orderActionColumn, orderColumns } from "../../constants/column/orderColumn";
const Books = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)
  // const [data, setData] = useState()
  const {data: orders, isLoading, refetch: fetchOrder} = useOrder(page)

  const deleteOrderMutation = useMutation({
    mutationFn: (id) => orderService.deleteOrder(id),
  });
  
  useEffect(()=>{
    setTotalPage(orders?.paginate?.totalPage || 1)
  })

  console.log(orders)
  const onPageChange = (event, value)=> setPage(value)

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "200px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="listContainer">
          <DatatableTemplate
            title={"Orders"}
            dataRows={orders?.data}
            columns={orderColumns}
            actionColumn={orderActionColumn}
            deleteMutation={deleteOrderMutation}
            addNew={false}
            refetch={fetchOrder}
          />
        </div>
      )}
      <div className="paginate-wrapper">
        <Pagination count={totalPage} variant="outlined" color="primary" onChange={onPageChange}/>
      </div>
    </>
  );
};

export default Books;
