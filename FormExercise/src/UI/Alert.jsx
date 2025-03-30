import Button from "./Button";
import Modal from "./Modal";

export default function Alert({
  alertMessage,
  onConfirm,
  ConfirmButtonMessage,
}) {
  function ButtonClickHandler() {
    onConfirm();
  }
  return (
    <Modal>
      <div className="flex justify-center items-center p-5 bg-amber-50">
        {alertMessage}
        <Button
          onClick={ButtonClickHandler}
          type={""}
          buttonText={ConfirmButtonMessage}
        />
      </div>
    </Modal>
  );
}
