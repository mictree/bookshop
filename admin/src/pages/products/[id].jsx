import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { productInputs } from "../../formSource";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { useBookDetail } from "../../hooks/useBookDetail";
import Loading from "../../components/Loading";
import { useUpdateBook } from "../../hooks/useBook";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uploadImageService from "../../services/uploadImageService";

const BookDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useBookDetail(id);
  const [file, setFile] = useState("");
  const [fileRaw, setFileRaw] = useState();

  const [content, setContent] = useState("");
  const [value, setValue] = useState({});

  const inputs = productInputs;
  const book = data?.data;
  const {
    mutate: updateBook,
    isSuccess: isUploadSuccess,
    isError: isUpdateError,
    isLoading: isUpdating,
  } = useUpdateBook();

  useEffect(() => {
    setFile(book?.imageUrl);
    setContent(book?.description);
  }, [book]);

  useEffect(() => {
    if (isUploadSuccess)
      toast.success(`Update book success`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, [isUploadSuccess]);

  useEffect(() => {
    if (isUpdateError)
      toast.error(`Update book fail`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, [isUpdateError]);

  const onChange = (ev, type) => {
    value[type] = ev.target.value;
    setValue(value);
    if (type === "active") {
      value[type] = ev.target.checked;
      setValue(value);
    }
    console.log(value);
  };

  const onUpdate = async () => {
    let data = ""
    let updateData = {
      ...value
    }
    if(fileRaw)
    {
      const bodyFormData = new FormData();
      bodyFormData.append("file", fileRaw);
      bodyFormData.append("upload_preset", "wb0t30bu");
      data = await uploadImageService.uploadImage(bodyFormData);
      updateData.imageUrl = data.url
    }

    if(value.category)
    {
      updateData.category = value.category.split(",")
    }

    if(content){
      updateData.content = content.toString()
    }

    updateBook(updateData);
  };

  const title = "New Book";
  return (
    <div className="new">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="newContainer">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
          <div className="top">
            <h1>{(book.title || title) + ` - ID#${book._id}`}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                className="book-image"
                src={
                  file
                    ? file
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      setFileRaw(e.target.files[0])
                      setFile(URL.createObjectURL (e.target.files[0]))
                    }}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      defaultValue={book[input.value]}
                      onChange={(ev) => onChange(ev, input.value)}
                    />
                  </div>
                ))}
              </form>
            </div>
          </div>
          <div className="quill-button">
            <div>Description: </div>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
          </div>
          <button
            className="send-button"
            disabled={isUpdating}
            onClick={onUpdate}
          >
            {isUpdating ? "Updating..." : "Update"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
