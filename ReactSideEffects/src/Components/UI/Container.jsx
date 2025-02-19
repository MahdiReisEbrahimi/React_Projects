const Container = (props) => {
    const className = `flex flex-col justify-center items-center rounded-2xl shadow-2xl p-5 ${props.className}`
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Container;