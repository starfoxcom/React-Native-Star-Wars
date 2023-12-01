import GridViewComponent, { GridViewProps } from "./grid_view";

export function GridView<T extends any>(props: GridViewProps<T>) {
  return <GridViewComponent {...props} />;
}