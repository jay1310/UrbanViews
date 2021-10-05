import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export default function Home() {
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {


        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjE1Njg2OGU0ZWEyMjBmY2NhZThjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTk3ODQxNSwiZXhwIjoxNjMwNDEwNDE1fQ.bLnF4OdEf9SWeF4-cxjQHl-WU9vhKmNcr6L1oDMwdwI"
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map(item => setUserStats(prev => [
          ...prev, {
            name: MONTHS[item._id - 1], "New User": item.total
          },
        ]))
      } catch (err) {
        console.log(err);
      }
    }
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
