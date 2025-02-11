import Container from "../UI/Container";
import ThingsCard from "./ThingsCard";

const ThingsContainer = (props) => {
    return (

        <Container bg={"bg-amber-200"}>
            <ul>
                {
                    props.thingK.map(x => (
                        <li>
                            <ThingsCard
                                thing={x.name}
                                key={x.id}
                            />
                        </li>
                    ))
                }
            </ul>
        </Container>
    );
}

export default ThingsContainer;