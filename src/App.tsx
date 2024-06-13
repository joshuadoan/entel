import { useEffect, useState } from "react"
import useDashboards from "./hooks/useDashboards"
import LineChartWithData from "./components/LineChartWithData"
import { Chart } from "./types"

function App() {
  // State to keep track of the selected dashboard
  // TODO Use a route like /dashboard/:id to keep track of the selected dashboard
  const [state, setState] = useState<{
    selectedDashboard: null | number

  }>({
    selectedDashboard: null,
  })

  // List of dashboards with chart layout data and chart queries for the database
  const dashboards = useDashboards()

  // Get the selected dashboard
  const selectedDashboard = dashboards
    .data?.find(d => d.id === state.selectedDashboard)

  // Map the charts into a 2D array based on their row and column positions
  const chartsByROwAndColumn = selectedDashboard?.charts.reduce(mapByRowAndColumn(), [[]])

  // Set the default dashboard to the first dashboard in the list
  useEffect(function setDefaultDashboard() {
    if (dashboards.data?.length) {
      setState(prev => ({
        ...prev,
        selectedDashboard: dashboards.data[0].id
      }))
    }
  }, [dashboards.data])


  return (
    <main className="h-screen">
      <header className="p-2">
        <select
          className="select w-full max-w-xs border-primary"
          onChange={(e) => setState(prev => ({
            ...prev,
            selectedDashboard: Number(e.target.value)
          }))}
          value={state.selectedDashboard ?? "choose"}
        >
          {
            dashboards.data?.map((dashboard) => (
              <option key={dashboard.id} value={dashboard.id}>{dashboard.name}</option>
            ))
          }
        </select>
      </header>
      <div className="flex flex-col gap-4 ">
        {
          chartsByROwAndColumn?.map((charts: Chart[], i) => {
            console.log("charts", charts)
            if (!charts.length) {
              return null
            }
            return <ul className="flex w-full  gap-4" key={i}>
              {

                charts.map((chart, j) => {
                  return <li className="flex-1 h-48" key={j}>
                    <LineChartWithData {...chart} />
                  </li>
                })
              }
            </ul>
          })
        }
      </div>

    </main>
  )


  /**
   * Maps an array of `Chart` objects into a 2D array based on their row and column positions.
   * @returns A function that can be used as a callback for the `Array.reduce` method.
   */
  function mapByRowAndColumn(): (previousValue: [Chart[]], currentValue: Chart, currentIndex: number, array: Chart[]) => [Chart[]] {
    return (acc: [
      Chart[]
    ], chart) => {
      const { row, column } = chart.position
      if (!acc[row]) {
        acc[row] = []
      }
      acc[row][column] = chart

      return acc
    }
  }
}

export default App