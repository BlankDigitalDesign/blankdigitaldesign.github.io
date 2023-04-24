import { MdOutlineClose } from "react-icons/md";

const ContactForm = ({ handleModalStatus }) => {
    return (
        <div>
            <div>
                <button onClick={handleModalStatus}><MdOutlineClose /></button>
            </div>
            
            <h1>Contact Form</h1>
        </div>
    )
}

export default ContactForm;