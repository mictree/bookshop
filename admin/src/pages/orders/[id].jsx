import "./new.scss";
import { useEffect, useMemo, useState } from "react";
import { orderInputs } from "../../formSource";
import { generatePath, Link, useParams } from "react-router-dom";
import { useOrderDetail, useUpdateOrder } from "../../hooks/useOrder";
import Loading from "../../components/Loading";
import { formatPrice } from "../../utils/fmt";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BOOK_DETAIL_PATH, ORDER_DETAIL_PATH } from "../../constants/path";

const statusOption = [
  {
    value: "Chờ xác nhân",
  },
  {
    value: "Đang giao",
  },
  {
    value: "Đã nhận",
  },
  {
    value: "Đã hủy",
  },
];

const OrderDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useOrderDetail(id);
  const {mutate: updateOrder, isSuccess: isUploadSuccess, isError: isUpdateError, isLoading: isUpdating} = useUpdateOrder()
  const order = data?.data;
  const [value, setValue] = useState({});

  useEffect(()=>{
    if(isUploadSuccess)
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
  }, [isUploadSuccess])

  useEffect(()=>{
    if(isUpdateError)
    toast.error(`Update order Fail`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }, [isUpdateError])


  const onChange = (ev, type) => {
    value[type] = ev.target.value;
    setValue(value);
    if (type === "is_paid") {
      value[type] = ev.target.checked;
      setValue(value);
    }
    console.log(value);
  };

  const onUpdate = () => {
    updateOrder(value)
  }

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
            <h1>{order._id || "Order"}</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInput">
                  <label>Address</label>
                  <input
                    type="text"
                    defaultValue={order.address}
                    onChange={(ev) => onChange(ev, "address")}
                  />
                </div>

                <div className="formInput">
                  <label>Is paid</label>
                  <input
                    type="checkbox"
                    defaultChecked={order.is_paid}
                    onChange={(ev) => onChange(ev, "is_paid")}
                  />
                </div>

                <div className="formInput">
                  <label>Status</label>
                  <select
                    className="formSelect"
                    onChange={(ev) => onChange(ev, "status")}
                    defaultValue={order.status}
                  >
                    {statusOption.map((option) => (
                      <option
                        selected={option.value === order.status}
                        value={option.value}
                      >
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="formInput"
                  defaultValue="momo"
                  onChange={(ev) => onChange(ev, "payment_type")}
                >
                  <label>Payment type</label>
                  <select>
                    <option value="cash"> Cash </option>
                    <option value="momo"> Momo </option>
                  </select>
                </div>
              </form>
            </div>
          </div>

          <div className="orderItemWrapper">
            <div className="orderListTitle">Order Items</div>
            {order.order_items.map((item) => (
              <div className="orderContainer ">
                <Link to={generatePath(BOOK_DETAIL_PATH, {id: item.info._id})}>
                  <div className="imgContainer">
                    <img src={item.info.imageUrl} />
                  </div>
                </Link>
                <Link to={generatePath(BOOK_DETAIL_PATH, {id: item.info._id})}>
                  <div className="orderItemTitle">
                    {item.info.title?.length > 30
                      ? item.info.title?.slice(0, 30) + "..."
                      : item.info.title}
                  </div>
                </Link>
                <div className="priceItem">
                  <div className="newPrice">
                    {formatPrice(item.price * (1 - item.sale))}đ
                  </div>
                  <div className="oldPrice ">{formatPrice(item.price)}đ</div>
                  <div>x {item.quantity}</div>
                </div>
                <div className="totalPrice">
                  {formatPrice(item.price * (1 - item.sale) * item.quantity)}đ
                </div>
              </div>
            ))}
            <div className="orderFinal">
              <div>Created at: {order.create_at}</div>
              <div className="priceBoxWrapper">
              <span>Total: &nbsp;</span>
              <span className="totalPrice">
                {" "}
                {formatPrice(order.total)}đ &nbsp;
              </span>
              <span className="oldPrice">
                {formatPrice(order.order_total_value)}đ
              </span>
            </div>
            </div>
          </div>
          <button onClick={onUpdate} className="send-button">Update</button>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
