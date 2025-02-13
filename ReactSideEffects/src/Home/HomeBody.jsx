import Container from "../UI/Container";

const HomeBody = (props) => {
  return (
    <Container>
      <div className=" flex justify-around mt-20">{`Welcome Back ${props.userName}`}</div>
    </Container>
  );
};

export default HomeBody;
