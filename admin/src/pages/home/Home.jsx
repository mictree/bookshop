import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useSaleStatistic, useStatisticNumber } from "../../hooks/useStatisticNumber";

const Home = () => {
  const {data: statistic} = useStatisticNumber()
  const {data: saleByMonth} = useSaleStatistic()


  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="user" amount={statistic?.data.user_number}/>
          <Widget type="order" amount={statistic?.data.order_number}/>
          <Widget type="book" amount={statistic?.data.book_number}/>
          <Widget type="sale" amount={statistic?.data.total_sale}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} data={saleByMonth} isMoney/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
