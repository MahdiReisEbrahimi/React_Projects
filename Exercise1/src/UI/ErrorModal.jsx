import Button from "./Button";
import Container from "./Container";

const ErrorModal = (props) => {
    const clickHandler = (click) => {
        props.onOkClick(click);
    };
    const clickedAround = (click) => {
        props.onOkClick(click);
    }

    return (
        <div onClick={clickedAround} className="fixed top-0 left-0 w-full h-screen bg-black-200 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <Container bg={"bg-red-400 border-6 border-black-500 p-6 shadow-lg rounded-lg"}>
                <header>
                    <h2 className="font-bold mb-4">{props.title}</h2>
                </header>
                <div>
                    <p className="mb-5 text-xs">{props.errorMessage}</p>
                </div>
                <footer className="ml-auto mr-auto">
                    <Button onButtonClick={clickHandler} text={"   Ok   "} type={"submit"} />
                </footer>
            </Container>
        </div>
    );
};

export default ErrorModal;
