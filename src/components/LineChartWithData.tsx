import useDbQuery from "../hooks/useDbQuery";
import { Chart } from "../types";
import LineChart from "./LineChart";

function LineChartWithData(props: Chart) {
  const { data, isLoading } = useDbQuery(props.query);

  if (isLoading) {
    return <div>Loading...</div>;
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