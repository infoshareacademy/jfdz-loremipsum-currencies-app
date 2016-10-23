/**
 * Created by nataliaslugocka on 23.10.16.
 */
const initialState = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "US Dolars",
            fillColor: "rgba(38,186,38,0.2)",
            strokeColor: "rgba(38,186,38,1)",
            pointColor: "rgba(38,186,38,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(38,186,38,1)",
            data: [40, 70, 80, 60, 30, 50, 20]
        },
        {
            label: "Euro",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 65, 75, 95, 25, 25, 35]
        },
        {
            label: "Polish ZLOTY",
            fillColor: "rgba(191,63,63,0.2)",
            strokeColor: "rgba(191,63,63,1)",
            pointColor: "rgba(191,63,63,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(191,63,63,1)",
            data: [45, 50, 70, 80, 55, 75, 40]
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
        default:
            return state
    }
}