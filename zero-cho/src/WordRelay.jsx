const { useState, useRef, useEffect } = require('react');
const React = require('react');



const WordRelay = () => {

    const props = {
        word : "제로초",
        value : '',
        result : ''
    }

    const [state, setState] = useState(props);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(state.value);
        if(state.word[state.word.length - 1] === state.value[0]){
            setState(current => {
                current.result = '합격',
                current.word = current.value,
                current.value = ''
            })
        } else {
            setState(current => {
                current.result = '땡';
                current.value = '';
            });
        }
    }

    const onChange = () => {
        setState(current => {
            current.value = element.current.value;
        });
    }

    const onRefInput = () => {
        const element = useRef();
        
        
        return {ref : element, value: state.value, onChange : doing}
    }

    return (
        <div>
            {state.word}
            <form onSubmit={onSubmit}>
                <input onChange={onChange} />
                <button>입력!</button>
            </form>
            <div>{state.result}</div>
        </div>
    )
}

export default WordRelay;