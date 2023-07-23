import { useContext } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";
import { createAppState } from "../app-state.ts";
import { signal } from "@preact/signals";

const ChartContext = createContext<
  ReturnType<typeof createAppState>
>({ status: signal(false), data: signal({}) });

export default function ChartProvider(props: {
  status?: boolean;
  data?: Record<string, string>;
  children: ComponentChildren;
}) {
  return (
    <ChartContext.Provider value={createAppState()}>
      {props.children}
    </ChartContext.Provider>
  );
}

export function useChart() {
  return useContext(ChartContext);
}
