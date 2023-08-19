import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiCloseCircleFill } from "react-icons/ri";

import type { RootState } from "../../redux/store";
import ContactCard from "../../components/ContactCard/ContactCard";

const Contact = () => {
  const contact = useSelector((state: RootState) => state.contact);

  return (
    <div className="w-full flex flex-col justify-center items-center py-6">
      <Link
        className="px-6 py-2 bg-indigo-200 rounded-md font-semibold"
        to="/contact/add"
      >
        Create Contact
      </Link>

      {contact.length !== 0 ? (
        <section className="flex flex-wrap justify-center gap-4">
          {contact.map((c) => (
            <ContactCard key={c.id} {...c} />
          ))}
        </section>
      ) : (
        <div className="flex justify-center items-center my-4">
          <div className="bg-indigo-100 shadow-md flex gap-2 p-4">
            <RiCloseCircleFill size={36} />
            <div>
              <h2 className="font-semibold">No contacts found</h2>
              <p className="font-light">
                Please add contacts from create contact button
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
