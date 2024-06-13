export type Chart = {
  query: string;
  name: string;
  position: {
    row: number;
    column: number;
  };
};

export type Dashboard = {
  name: string;
  id: number;
  charts: Chart[];
};
