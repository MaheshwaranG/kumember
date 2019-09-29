let initialState = {
    check: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "change":
            return {
                check: action.value
            }

        default:
            return state;
    }
}

