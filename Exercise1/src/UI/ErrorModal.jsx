import Button from "./Button";
import Container from "./Container";

const ErrorModal = (props) => {
    return (
        <Container bg={"bg-red-300 border-6 border-red-500 fixed ml-auto w-100 "}>
            <header>
                <h2 className="font-bold mb-4">{props.title}</h2>
            </header>
            <div>
                <p className="mb-5 text-xs">{props.errorMessage}</p>
            </div>
            <footer className="ml-auto mr-auto">
                <Button text={"   Ok   "} type={"submit"} />
            </footer>
        </Container>
    );
}

export default ErrorModal;