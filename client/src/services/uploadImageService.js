import cloudinaryApi from "../constants/cloudinaryApi";
const config = {
	headers: { "Content-Type": "multipart/form-data" },
  };
// const token = getLocalStorage(LOGIN_LS)
// const config = {
// 	headers: { Authorization: `Bearer ${token?.accessToken}` },
// }

const uploadImageService = {
    uploadImage(data) {
        return cloudinaryApi.post("/", data, config);
    },
};

export default uploadImageService;
