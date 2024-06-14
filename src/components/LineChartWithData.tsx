import useDbQuery from "../hooks/useDbQuery";
import { Chart } from "../types";
import LineChart from "./LineChart";

function LineChartWithData(props: Chart) {
  const { data, isLoading } = useDbQuery(props.query);

  if (isLoading) {
    return <div className="p-4 text-center my-auto h-full flex flex-col justify-center">
      <div className="">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    </div>;
  }

  if (!data) {
    return <div>Error fetching data</div>;
  }

  return (
    <LineChart
      primaryAxis={data?.primaryAxis}
      secondaryAxis={data.secondaryAcis}
      data={[
        {
          label: data.label,
          data: data.data
        }
      ]}
    />
  );
}

export default LineChartWithData; ``