import Form from "./Components/Form";
import Header from "./Components/Header";
import SimpleForm from "./Components/SimpleForm";

export default function App() {
  return (
    <div className="m-auto w-3/4 text-center mt-10">
      <Header />
      <SimpleForm />
      <Form />
    </div>
  );
}
