import { RECEIVE_EURO, REQUEST_EURO } from './actionTypes'

const initialState = {
    labels: [/*days of month (evert 4 days) = 30-09 04-10 08-10 12-10 16-10 20-10 24-10 28-10 */ "a", "b", "c"],
    datasets: [
        {
            label: "US Dolars",
            fillColor: "rgba(38,186,38,0.2)",
            strokeColor: "rgba(38,186,38,1)",
            pointColor: "rgba(38,186,38,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(38,186,38,1)",
            data: []
        },
        {
            label: "Euro",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
        },
        {
            label: "Polish ZLOTY",
            fillColor: "rgba(191,63,63,0.2)",
            strokeColor: "rgba(191,63,63,1)",
            pointColor: "rgba(191,63,63,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(191,63,63,1)",
            data: []
        }
    ]
}

function rand(min, max, num) {
    var rtn = [];
    while (rtn.length < num) {
        rtn.push((Math.random() * (max - min)) + min);
    }
    return rtn;
}


export default (state = initialState, action) => {
    switch (action.type){
        case REQUEST_EURO:
            return Object.assign({}, state, {
            isLoading: true
        })
        case RECEIVE_EURO:
            return Object.assign({}, state, {
                isLoading: false,
                euro: action.euro
            })
        default:
            return state
    }
}