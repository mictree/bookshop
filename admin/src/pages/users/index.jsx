import "./list.scss";
import { useMutation, useQuery } from "@tanstack/react-query";
import DatatableTemplate from "../../components/datatableTemplate/DatatableTemplate";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import userService from "../../services/userService";
import { useEffect, useState } from "react";
import {
  userColumns,
  userActionColumn,
} from "../../constants/column/userColumn";

const User = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState()
  const {
    data: users,
    isLoading,
    refetch: fetchUser
  } = useQuery(["users"], () => userService.getUser(page));

  useEffect(()=>{
    userService.getUser().then(res => setData(res.data))
    }, [])

    console.log('da', data)
  const deleteUserMutation = useMutation({
    mutationFn: (id) => userService.deleteUser(id),
  });
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
            dataRows={users?.data}
            columns={userColumns}
            actionColumn={userActionColumn}
            deleteMutation={deleteUserMutation}
            rowHeight={50}
            refetch={fetchUser}
          />
        </div>
      )}
    </>
  );
};

export default User;
