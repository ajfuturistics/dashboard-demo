import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addContact,
  updateContact,
  type Contact,
} from "../../redux/slice/contactSlice";
import { useNavigate } from "react-router-dom";

const Form = ({
  contact,
  Type,
}: {
  contact?: Contact;
  Type: "add" | "update";
}) => {
  const [firstname, setFirstname] = useState(contact?.firstname || "");
  const [lastname, setLastname] = useState(contact?.lastname || "");
  const [status, setStatus] = useState(contact?.status || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      status.trim() === ""
    ) {
      alert("fill all fields");
      return;
    }

    const data = {
      id: contact?.id || Date.now(),
      firstname,
      lastname,
      status,
    };

    if (Type === "update") {
      dispatch(updateContact(data));
    } else {
      dispatch(addContact(data));
    }
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-1/3 bg-slate-200 shadow-md flex flex-col gap-4 p-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <label className="font-medium mb-1" htmlFor="firstname">
          Firstname
        </label>
        <input
          className="w-full outline-none p-2 shadow"
          type="text"
          placeholder="Enter firstname"
          name="firstname"
          id="firstname"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label className="font-medium mb-1" htmlFor="lastname">
          Lastname
        </label>
        <input
          className="w-full outline-none p-2 shadow"
          type="text"
          placeholder="Enter lastname"
          name="lastname"
          id="lastname"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <label className="font-medium mb-1" htmlFor="status">
          Status
        </label>
        <div>
          <div>
            <input
              type="radio"
              value="active"
              name="status"
              checked={status === "active"}
              onChange={(e) => setStatus(e.target.value)}
            />{" "}
            Active
          </div>
          <div>
            <input
              type="radio"
              value="inactive"
              name="status"
              checked={status === "inactive"}
              onChange={(e) => setStatus(e.target.value)}
            />{" "}
            Inactive
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-200 rounded-md font-semibold capitalize hover:bg-indigo-300"
        >
          {Type}
        </button>
      </div>
    </form>
  );
};

export default Form;
