export const changeHandler = (ev, dispatch) => {
    const { name, value } = ev.target;
    dispatch({ type: "SET_FIELD", field: name, value });
};