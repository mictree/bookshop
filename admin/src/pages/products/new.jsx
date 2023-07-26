import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {productInputs} from "../../formSource"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAddBook } from "../../hooks/useBook";
import uploadImageService from "../../services/uploadImageService";
import styled from "@emotion/styled";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewBook = () => {
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");
  const [value, setValue] = useState({})

  const inputs = productInputs
  const {mutate: addBook, isSuccess, isError, isLoading} = useAddBook()

  const Message = styled.div`
  color: ${props => (props.success ? 'green' : 'red')};
`
  useEffect(()=>{
    if(isSuccess)
    toast.success(`Update order success`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }, [isSuccess])

  useEffect(()=>{
    if(isError)
    toast.error(`Update order fail`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }, [isError])

  const onChange = (ev, type) => {
    value[type] = ev.target.value
    setValue(value)
    if(type === "active")
    {
      value[type] = ev.target.checked
      setValue(value)
    }
    console.log(value)
  }

  // if submit a form using event.preventDefault();
  const onSend = async() => {
      const bodyFormData = new FormData()
      bodyFormData.append('file', file)
      bodyFormData.append('upload_preset', 'wb0t30bu')
      const data = await uploadImageService.uploadImage(bodyFormData)
      addBook({...value, category: value?.category?.split(','), description: content.toString(), imageUrl: data.url})
  }

  const title = "New Book"
  return (
    <div className="new">
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
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} onChange={(ev) => onChange(ev, input.value)}/>
                </div>
              ))}
            </form>
          </div>
        </div>
            <div className="quill-button">
              <div>Description: </div>
              <ReactQuill theme="snow" value={content} onChange={setContent}/>
            </div>
            {
              isSuccess?
                <Message success>Add book success</Message> : ""
            }
            {
              isError ? 
              <Message success={false}>Add book fail</Message> : ""
            }
              <button disabled={isLoading} onClick={onSend} className="send-button">{isLoading ? "Creating ...": "Send"}</button>
      </div>
    </div>
  );
};

export default NewBook;
