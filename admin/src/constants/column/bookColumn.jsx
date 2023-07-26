import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/fmt";

export const bookColumns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "title",
      headerName: "Title",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.imageUrl || "/images/avatar.svg"} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      valueGetter: (params) => formatPrice(params.row.price) + "đ"
      
    },
    {
      field: "sale",
      headerName: "Sale",
      width: 100,
      //
      valueGetter: (params) => Math.ceil(params.row.sale * 100) + "%"
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    
    },
    {
      field: "inventory",
      headerName: "Inventory",
      width: 100,
    },
    {
      field: "sold",
      headerName: "Sold",
      width: 100,
    },
    {
      // render raw html: https://stackoverflow.com/questions/27934238/rendering-raw-html-with-reactjs 
      // or package https://www.npmjs.com/package/html-react-parser
      field: "description",
      headerName: "Description",
      width: 400,
      renderCell: (params) => {
        <div dangerouslySetInnerHTML>{{__html: params.row.description}}</div>
      }
    }
  ];

export const bookActionColumn = (handleDelete) => [
{
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
    return (
        <div className="cellAction">
        <Link to={`/books/${params.row._id}`} style={{ textDecoration: "none" }}>
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