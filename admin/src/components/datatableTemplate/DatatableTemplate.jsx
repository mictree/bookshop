import "./datatableTemplate.scss";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DatatableTemplate = ({title, dataRows, columns, deleteMutation, actionColumn=[], rowHeight, addNew=true, refetch}) => {
  const [data, setData] = useState(dataRows);

  useEffect(()=>{
    setData(dataRows)
  }, [dataRows])

  const handleDelete = async (event, id) => {
    event.stopPropagation()
    setData(data.filter((item) => item.id !== id));
    await deleteMutation.mutate(id)
    refetch()
  };

  const _actionColumn = actionColumn(handleDelete)

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        {
          addNew ? 
        <Link to='new' className="link">
          Add New
        </Link>
        :
        ""
        }
      </div>
      {
        deleteMutation.isSuccess ?
        <div>Success</div>
        :
        ""
      }
      {!data ? 
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
       :
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(_actionColumn)}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        getRowId={(row) => row._id}
        rowHeight={rowHeight}
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = data.filter((row) =>
            selectedIDs.has(row._id.toString())
          )
          console.log(selectedRowData);
        }}
      />}
    </div>
  );
};

export default DatatableTemplate;
