import * as type from "../constans/index";
const initState = {
    active: false
};
const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case type.ADD_TODO:
            return {
                ...state, active: action.payload
            }
        
        default:
            return state;
    }
}
export default todoReducer;