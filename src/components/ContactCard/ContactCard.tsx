import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slice/contactSlice";

interface PageProps {
  id: number;
  firstname: string;
  lastname: string;
  status: string;
}

const ContactCard = ({ id, firstname, lastname, status }: PageProps) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const data = { id, firstname, lastname, status };
    dispatch(deleteContact(data));
  };
  return (
    <div className="w-80 bg-indigo-100 shadow-md flex flex-col gap-1 m-4 p-4">
      <p className="text-gray-600 text-sm font-light">{`#${id}`}</p>
      <h2 className="font-medium capitalize break-words">{`${firstname} ${lastname}`}</h2>
      <p>status: {status}</p>
      <div className="flex justify-center items-center gap-4">
        <Link className="text-blue-500" to={`/contact/${id}`}>
          Edit
        </Link>{" "}
        <button onClick={handleDelete} type="button" className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
