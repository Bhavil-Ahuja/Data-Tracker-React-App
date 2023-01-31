import DataItem from "./DataItem";
import './DisplayData.css';

function DisplayData(props) {
    return (
        <div className='biodata'>
            <ul>
                {props.data.map(datum => (
                    <DataItem key={datum.id}>
                        {datum.username} ({datum.age} years old)
                    </DataItem>
                ))}
            </ul>
        </div>
    );
}

export default DisplayData;