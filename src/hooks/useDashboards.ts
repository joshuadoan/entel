import { useQuery } from "@tanstack/react-query";
import { Dashboard } from "../types";

const QUERY_KEY = ["dashboard"];

const fetchDashboards = async (): Promise<Dashboard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardMockData);
    }, 1000);
  });
};

export default function useDashboards() {
  return useQuery<Dashboard[], Error>({
    queryKey: QUERY_KEY,
    queryFn: () => fetchDashboards(),
  });
}

const dashboardMockData: Dashboard[] = [
  {
    name: "Dashboard 1",
    id: 1,
    charts: [
      {
        name: "Chart 1",
        query: "SELECT * FROM table1",
        position: {
          row: 1,
          column: 0,
        },
      },
      {
        name: "Chart 2",
        query: "SELECT * FROM table2",
        position: {
          row: 2,
          column: 0,
        },
      },
      {
        name: "Chart 3",
        query: "SELECT * FROM table3",
        position: {
          row: 1,
          column: 2,
        },
      },
    ],
  },
  {
    name: "Dashboard 2",
    id: 2,
    charts: [
      {
        name: "Chart 1",
        query: "SELECT * FROM table4",
        position: {
          row: 0,
          column: 1,
        },
      },
      {
        name: "Chart 2",
        query: "SELECT * FROM table5",
        position: {
          row: 1,
          column: 0,
        },
      },
      {
        name: "Chart 3",
        query: "SELECT * FROM table6",
        position: {
          row: 3,
          column: 0,
        },
      },
      {
        name: "Chart 4",
        query: "SELECT * FROM table1",
        position: {
          row: 3,
          column: 1,
        },
      },
      {
        name: "Chart 5",
        query: "SELECT * FROM table1",
        position: {
          row: 3,
          column: 2,
        },
      },
    ],
  },
];
