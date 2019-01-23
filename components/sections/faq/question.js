const question = props => {
    let size = {
        height: "3rem"
    };
    return (
        <div style={size} className="w-full shadow-md bg-grey-lighter">
            <p>{props.question}</p>
        </div>
    );
};

export default question;
