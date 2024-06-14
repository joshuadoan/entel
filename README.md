# Dashboard with charts

```
npm install
npm run dev
```

## How it works

- The page loads while we fetch the user's dashboards
- The first dashboard in the list is selected by default
- Each dashboard contains a list of charts to render

```ts
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
```

- Each chart has a query for the database, a name, and some layout information.
- We use the layout information to scaffold the charts on the page while the data for each chart fetches independently.
- Each chart has its own layout information. Right now it is just row and column, but this could be expanded to size, chart type etc.

  ![Screen Recording 2024-06-13 at 05 23 15 PM](https://github.com/joshuadoan/entel/assets/5114910/92b0daf1-5a2e-401a-a8c5-6f5e76532164)



## Things to note
- You can switch between dashboards with the dropdown. In this example data we have two.
- We only sees spinners once on the initial load, then `react-query` will refetch in the background as needed
- Typescript will need some work. Maybe we can use generics somehow (maybe infer the types from the chart data we get back?).
