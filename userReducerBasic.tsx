import { useReducer, type JSX } from "react"
import styles from "./app.module.css"
import axios from "axios";


const ACTION_TYPES = {
    Fetch_start: "Fetch_start",
    Fetch_success: "Fetch_success",
    Fetch_error: "Fetch_error"

}

interface RootState {
  loading: boolean;
  fact: string;
  error: boolean;
}

const initalState: RootState = {
  loading: false,
  fact: '',
  error: false,
};

const factReducer = (state: RootState, action: { type: string; data: string }): RootState => {
  switch(action.type) {
    case ACTION_TYPES.Fetch_start:
      return { ...state, loading: true, fact: '', error: false };
    case ACTION_TYPES.Fetch_success:
      return { ...state, loading: false, fact: action.data, error: false };
    case ACTION_TYPES.Fetch_error:
      return { ...state, loading: false, fact: '', error: true };
    default:
      return state;
  }
}

const App = (): JSX.Element => {
    const [state, dispatch] = useReducer(factReducer, initalState);

    ////initalState مقدار اولیه,نقطه شروع
    ///state داده ای که باید کنترل بشه,وضعیت فعلی
    ///reducer یک تابع با دو مقدار state,action      state وضعیت فعلی /////   action پیام ارسال شده
    /////////////////////////////////////////////////////////
    ///dispatch پیک و ارسال کننده action به reducer
    ///action در state ابجکت توضیح تغییر 

    const handlerFact = async () => {
        dispatch({ type: ACTION_TYPES.Fetch_start, data: '' });
        try {
            const res = await axios.get("https://catfact.ninja/fact");
            dispatch({ type: ACTION_TYPES.Fetch_success, data: res.data.fact });
        } catch (error) {
            dispatch({ type: ACTION_TYPES.Fetch_error, data: '' });
            console.log(error);
        }
    }

    return (
        <div className={styles.center}>
            <button onClick={handlerFact}>
                {state.loading ? "is loading..." : "fetch cat Fatc"}
            </button>
            <p>  {state.error && (<p>error</p>)}  </p>
            <h1>{state.fact}</h1>
        </div>

    )

}



export default App