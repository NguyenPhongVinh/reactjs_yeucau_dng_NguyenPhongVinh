import * as type from "../constans/index";
export const addTodo = value => ({
    type: type.ADD_TODO,
    payload: value,
})