import './DialogueBox.css';

function DialogueBox(props) {

    const errorCloseHandler = () => {
        props.handleClose();
    }

    return (
        <div className='wrapper'>
            <div className='box'>
                <div className='box-header'>
                    Invalid Input
                </div>
                <div className='box-body'>
                    Please enter valid data!
                </div>
                <button className='btn' onClick={errorCloseHandler}>Okay</button>
            </div>
        </div>
    );
}

export default DialogueBox;