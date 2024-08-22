import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button disabled={true}>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModel, setIsOpenModel] = useState(false);

//   return (
//     <div>
//       <Button
//         onClick={() => setIsOpenModel((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {isOpenModel && (
//         <Modal onClose={() => setIsOpenModel(false)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModel(false)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
