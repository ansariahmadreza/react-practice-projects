import axios from "axios"
import { useReducer, type JSX } from "react"

const ACTION_TYPE = {
    Fetch_START: "Fetch_Start",
    Fetch_Success: "Fetch_Success",
    Fetch_ERROR: "Fetch_error"
}

interface rootstate {
    loading: boolean,
    data: string,
    error: boolean,
}

const initalstate: rootstate = {
    loading: true,
    data: '',
    error: false
}

const Reducer = (state: rootstate, action: { type: string, data: string }): rootstate => {

    switch (action.type) {
        case ACTION_TYPE.Fetch_START:
            return { ...state, loading: true, data: "", error: false };
        case ACTION_TYPE.Fetch_Success:
            return { ...state, loading: false, data: action.data, error: false }
        case ACTION_TYPE.Fetch_ERROR:
            return { ...state, loading: false, data: '', error: true }
        default:
            return state;
    }

}


const Test = (): JSX.Element => {

    const [state, dispatch] = useReducer(Reducer, initalstate)
    const getData = async () => {
        dispatch({ type: ACTION_TYPE.Fetch_START, data: "" })
        try {
            const res = await axios.get("https://catfact.ninja/fact")
            dispatch({ type: ACTION_TYPE.Fetch_Success, data: res.data.fact })
        } catch (err) {
            dispatch({ type: ACTION_TYPE.Fetch_ERROR, data: "" })
            console.log(err)
        }
    }
    return (
        <div>
            <button className="bg-amber-600 cursor-pointer" onClick={getData}>
                {state.loading ? "is loading..." : "show Data"}
            </button>
            {state.error && (<p>error</p>)}
            <p>{state.data}</p>
        </div>
    )
}

export default Test