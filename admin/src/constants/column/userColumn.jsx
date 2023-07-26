import { generatePath, Link } from "react-router-dom";
import { USER_DETAIL_PATH } from "../path";

export const userColumns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.avatarUrl || "/images/avatar.svg"} alt="avatar" />
                {`${params.row.last_name} ${params.row.middle_name} ${params.row.first_name}`}
              </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

export const userActionColumn = (handleDelete) => [
{
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
    return (
        <div className="cellAction">
        <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
        </Link>
        <div
            className="deleteButton"
            onClick={(event) => handleDelete(event, params.row._id)}
        >
            Delete
        </div>
        </div>
    );
    },
},
];