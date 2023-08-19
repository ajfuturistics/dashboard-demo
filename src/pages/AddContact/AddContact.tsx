import Form from "../../components/Form/Form";

const AddContact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-4 p-2">
      <h2 className="text-2xl font-bold my-2">Add Contact</h2>
      <Form Type="add" />
    </div>
  );
};

export default AddContact;
