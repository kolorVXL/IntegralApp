import "./MainGraphApp.css"

function MainGraphApp({ min, max, list }) {
    return (
        <div className="graph-app">
            {
                TransferList(min, max, list)
            }
        </div>
    );
}

function TransferList(xmin, xmax, list) {
    var min = Number.MAX_VALUE
    var max = Number.MIN_VALUE
    list.forEach((e) => {
        if (e < min) {
            min = e
        }
        if (max < e) {
            max = e
        }
    })
    var interval = max - min;
    min = min - (interval * 0.1)
    max = max + (interval * 0.1)
    return list.map((e, i) => {
        var style = "graph"
        if (xmin <= i && i <= xmax) {
            style = "focused-graph"
        }
        return EachGraph(i, 1 / list.length, (e - min) / (max - min), style)
    })
}

function EachGraph(index, width, height, style) {
    return (
        <div className={ style } style={{ left: `${width * index * 100}%`, width: `${width * 100}%`, height: `${height * 100}%` }}></div>
    );
}

export default MainGraphApp;