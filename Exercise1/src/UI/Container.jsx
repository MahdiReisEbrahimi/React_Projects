const Container = (props) => {
    let className = `${props.bg} rounded-2xl shadow-2xl p-10 m-2`;
    return (
        <div className={className}>{props.children}</div>
    );
}

export default Container;