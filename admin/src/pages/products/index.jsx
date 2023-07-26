import "./list.scss";
import { useMutation } from "@tanstack/react-query";
import DatatableTemplate from "../../components/datatableTemplate/DatatableTemplate";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import {bookActionColumn, bookColumns} from '../../constants/column/bookColumn'
import { useBook } from "../../hooks/useBook";
import bookService from "../../services/bookService";
import { Pagination } from "@mui/material";
const Books = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)
  // const [data, setData] = useState()
  const {data: books, isLoading, refetch: fetchBooks} = useBook(page)
  useEffect(()=>{
  }, [page])
  
  const deleteUserMutation = useMutation({
    mutationFn: (id) => bookService.deleteBook(id),
    refetchQueries: [{ query: 'books'}]
  });
  
  useEffect(()=>{
    setTotalPage(books?.paginate?.totalPage || 1)
  })

  console.log(books)
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
            title={"Books"}
            dataRows={books?.data}
            columns={bookColumns}
            actionColumn={bookActionColumn}
            deleteMutation={deleteUserMutation}
            refetch={fetchBooks}
            rowHeight={50}
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
