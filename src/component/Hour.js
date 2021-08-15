import {AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area} from "recharts";
import Card from "../ui/Card";

const Hour = (props) => {
    const { data } = props;
    let d;
    if(data.hourly) {
        d = data.hourly.map((v,i)=> {
            return {
                x: new Date(v.dt * 1000).toLocaleDateString("en-GB", {
                    hour12: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }).split(',')[1],
                Temp: v.temp,
                Feedlike: v['feels_like']
            }
        })
    }
  return (
    <div className="row">
      {data.hourly? (
          <Card>
          <AreaChart
            width={800}
            height={400}
            data={d}
            margin={{ top: 10, right: 50, left: 10, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Temp"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="Feedlike"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </Card>
      ) : ''}
    </div>
  );
};

export default Hour;
