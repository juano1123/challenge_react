import './Items.css';
function Items(props) {
    const { items, removeFunction } = props;

    return (
        items && items.map((item, index) => (
            <div key={`item_${item}_${index}`} className='item'>
                {item} <button onClick={() => removeFunction(item)}>x</button>
            </div>
        ))
    );
}

export default Items;