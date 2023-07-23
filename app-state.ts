import { signal } from "@preact/signals";

export function createAppState() {
  const status = signal(false);
  const data = signal({});

  return { status, data };
}
