import "./TopResult.css"
import Slider from "rc-slider";
import 'rc-slider/assets/index.css'

function TopResult({ value, state }) {
    var [ num, setNum ] = state
    const handleChange = (e) => {
        setNum(e.target.value)
    };
    return (
        <div className="top-result">
            <div>
                {value}
            </div>
            <Slider className="top-slider" min={ 10 } max={ 1000 } step={ 10 } onChange={ handleChange } value={ num } />
        </div>
    );
}


export default TopResult;