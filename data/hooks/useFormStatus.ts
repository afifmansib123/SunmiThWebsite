import { useReducer } from "react";

type State = {
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
};

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS" }
  | { type: "ERROR"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true, error: null, isSuccess: false };
    case "SUCCESS":
      return { ...state, isLoading: false, error: null, isSuccess: true };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isSuccess: false,
      };
    default:
      return state;
  }
}

export default function useFormStatus() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null,
    isSuccess: false,
  });

  return { state, dispatch };
}
