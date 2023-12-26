import "./MainGraphApp.css"

function MainGraphApp({ list }) {
    return (
        <div className="graph-app">
            {
                TransferList(list)
            }
        </div>
    );
}

function TransferList(list) {
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
        return EachGraph(i / list.length, (i + 1) / list.length, (e - min) / (max - min), (0 - min) / (max - min))
    })
}

function EachGraph(first, second, value, zero) {
    var start = 0
    var end = 0
    if (zero < 0) {
        start = 0
        end = value
    } else if (zero > 1) {
        start = value
        end = 1
    } else if (zero < value) {
        start = zero
        end = value
    } else {
        start = value
        end = zero
    }
    return (
        <div className="graph" style={{ left: `${first * 100}%`, right: `${(1 - second) * 100}%`, height: `${(end - start) * 100}%`, bottom: `${start * 100}%` }}></div>
    );
}

export default MainGraphApp;