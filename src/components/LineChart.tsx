import { useMemo } from "react"
import { Chart } from "react-charts"

type Series = {
  label: string,
  data: unknown
}

function LineChart(props: {
  primaryAxis: string,
  secondaryAxis: string,
  data: Series[],
}) {
  const primaryAxis = useMemo(
    () => ({
      getValue: datum => datum[props.primaryAxis],
    }),
    [props.primaryAxis]
  )

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: datum => datum[props.secondaryAxis],
      },
    ],
    []
  )

  return (
    <Chart
      options={{
        data: props.data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  )
}

export default LineChart