const dataReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MORE_DATA':
            return { ...state, type: "add_more_data", loading: true, startDisplay: state.startDisplay, endDisplay: state.endDisplay }
        case 'FETCH_DATA':
            return { ...state, type: "fetching", dataTitle: action.dataTitle, loading: true }
        case 'SUCCESS_GET_DATA':
            return { ...state, type: null, newsIds: action.newsIds, loading: false, dataDisplay: action.dataDisplay, startDisplay: action.startDisplay, endDisplay: action.endDisplay }
        default:
            return state;
    }
}

export default dataReducer