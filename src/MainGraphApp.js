

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
    return list.map((e, i) => {
        return EachGraph(i, 1/list.length, (e-min)/(max-min))
    })
}

function EachGraph(index, width, height) {
    return (
        <div className="graph" style={{ left: `calc(10% + ${width*index*100}%)`, width: `${width*100}%`, height: `${height*100}%` }}></div>
    );

}