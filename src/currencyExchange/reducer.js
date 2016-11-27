import { RECEIVE_EURO, REQUEST_EURO } from './actionTypes'

const initialState = {
    labels: ["Date"],
    datasets: [
        {
            label: "Euro", //code: EUR
            fillColor: "rgba(70,84,102,0.2)",
            strokeColor: "rgba(70,84,102,1)",
            pointColor: "rgba(870,84,102,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(38,186,38,1)",
            //data: []
        },
       /* {
            label: "US Dolars", //code: USD
            fillColor: "rgba(38,186,38,0.2)",
            strokeColor: "rgba(38,186,38,1)",
            pointColor: "rgba(38,186,38,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            //data: []
        },
        {
            label: "Great Britain Pound", //code: GBP
            fillColor: "rgba(191,63,63,0.2)",
            strokeColor: "rgba(191,63,63,1)",
            pointColor: "rgba(191,63,63,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(191,63,63,1)",
            //data: []
        }*/
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
                labels: action.euro.rates.map( (e) => e.effectiveDate ),
                datasets: [
                    {
                        data: action.euro.rates.map(rate => rate.mid)
                    }
                ]
            })
        default:
            return state
    }
}