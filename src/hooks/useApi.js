import { useEffect, useState } from "react";

// Enkel data-hook med loading/error-state.
export function useApi(fetcher, deps = []) {
  const [state, setState] = useState({ loading: true, data: null, error: null });
  useEffect(() => {
    let mounted = true;
    setState({ loading: true, data: null, error: null });
    fetcher()
      .then((res) => mounted && setState({ loading: false, data: res, error: null }))
      .catch((e) => mounted && setState({ loading: false, data: null, error: e }));
    return () => (mounted = false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}
