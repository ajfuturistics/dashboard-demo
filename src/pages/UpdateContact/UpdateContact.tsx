import Form from "../../components/Form/Form";
import { useSelector } from "react-redux";

import type { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";

const UpdateContact = () => {
  const contact = useSelector((state: RootState) => state.contact);
  const { id } = useParams();
  const currentContact = contact.find((c) => c.id.toString() === id);

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-4 p-2">
      <h2 className="text-2xl font-bold my-2">Update Contact</h2>
      <Form Type="update" contact={currentContact} />
    </div>
  );
};

export default UpdateContact;
