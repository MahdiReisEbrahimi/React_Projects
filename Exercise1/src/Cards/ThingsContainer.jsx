import ThingsCard from "./ThingsCard";

const ThingsContainer = (props) => {
    return (
        <div className="bg-amber-50 rounded-2xl h-100 p-10">
            {
                props.thingK.map(x => (
                    <ThingsCard
                        thing={x.name}
                        key={x.id}
                    />
                ))
            }
        </div>
    );
}

export default ThingsContainer;