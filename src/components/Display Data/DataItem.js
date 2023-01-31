import './DataItem.css';

function DataItem(props) {
    return (
        <li className='data-item'>
            {props.children}
        </li>
    );
}

export default DataItem;