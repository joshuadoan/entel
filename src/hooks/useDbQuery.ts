import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = ["chart"];

type QueriedData = {
  label: string;
  primaryAxis: string;
  secondaryAcis: string;
  data: {
    date: Date;
    cost: number;
  }[];
};

const fetchDashboards = async (dbQuery: string): Promise<QueriedData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // This is a mock implementation of a database query
      switch (dbQuery) {
        case "SELECT * FROM table1":
          resolve(mockData1);
          break;
        case "SELECT * FROM table2":
          resolve(mockData2);
          break;
        case "SELECT * FROM table3":
          resolve(mockData3);
          break;
        case "SELECT * FROM table4":
          resolve(mockData4);
          break;
        case "SELECT * FROM table5":
          resolve(mockData5);
          break;
        case "SELECT * FROM table6":
          resolve(mockData6);
          break;
      }
    }, 1000);
  });
};

export default function useDbQuery(dbQuery: string) {
  return useQuery<QueriedData, Error>({
    queryKey: [QUERY_KEY, dbQuery],
    queryFn: () => fetchDashboards(dbQuery),
  });
}

const mockData1: QueriedData = {
  label: "Cost",
  primaryAxis: "date",
  secondaryAcis: "cost",
  data: [
    {
      date: new Date(2012, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2013, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2014, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2015, 0, 1),
      cost: Math.random() * 1000,
    },
  ],
};

const mockData2: QueriedData = {
  label: "Cost",
  primaryAxis: "date",
  secondaryAcis: "cost",
  data: [
    {
      date: new Date(2012, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2013, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2014, 0, 1),
      cost: Math.random() * 1000,
    },
  ],
};

const mockData3: QueriedData = {
  label: "Cost",
  primaryAxis: "date",
  secondaryAcis: "cost",
  data: [
    {
      date: new Date(2012, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2013, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2014, 0, 1),
      cost: Math.random() * 1000,
    },
  ],
};

const mockData4: QueriedData = {
  label: "Cost",
  primaryAxis: "date",
  secondaryAcis: "cost",
  data: [
    {
      date: new Date(2012, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2013, 0, 1),
      cost: Math.random() * 1000,
    },
    {
      date: new Date(2014, 0, 1),
      cost: Math.random() * 1000,
    },
  ],
};

const mockData5: QueriedData = {
  label: "Cost",
  primaryAxis: "date",
  secondaryAcis: "cost",
  data: [
    {
      date: new Date(2012, 0, 1),
      cost: 300,
    },
    {
      date: new Date(2013, 0, 1),
      cost: 100,
    },
    {
      date: new Date(2014, 0, 1),
      cost: 10,
    },
  ],
};

const mockData6: QueriedData = {
  label: "Cost",
  primaryAxis: "date",
  secondaryAcis: "cost",
  data: [
    {
      date: new Date(2012, 0, 1),
      cost: 300,
    },
    {
      date: new Date(2013, 0, 1),
      cost: 100,
    },
    {
      date: new Date(2014, 0, 1),
      cost: 10,
    },
  ],
};
