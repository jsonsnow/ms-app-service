import React from 'react'


interface IndexProps {
    detail: any
}

const [message, setMessage] = React.useState('waiting...');

// const onClick = () => setMessage('This is a react-ssr!');

// return (
//   <React.Fragment>
//     <p>Hello {user.name}!</p>
//     <button onClick={onClick}>Click Me</button>
//     <p>Message from state: {message}</p>
//   </React.Fragment>
// );
const Index = ({detail} : IndexProps) => {
    return (
        <React.Fragment>
            <p>Hello snow {detail.name}!</p>
            {/* <button onClick={onClick}>Click Me</button> */}
            <p>Message from state: {message}</p>
        </React.Fragment>
    )
}