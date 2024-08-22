import { useState } from "react"
import axios from 'axios'
import Button from "./Button"
import styled from "styled-components"
import Modal from "./Modal";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background: #6d6b78;
    border-radius: 10px;
    border: 3px solid #070708;
    margin: 10px;
    padding: 10px;
    gap: 10px;
    color: #070708;
`;

const TextArea = styled.textarea`
    resize: none;
    height: 50vh;
    padding: 5px;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confirmEmail: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setOpenModal(true);
            setIsLoading(true);
            setModalMessage("Please fill out all form fields and try again");
            return;
        }

        if (formData.email != formData.confirmEmail) {
            setOpenModal(true);
            setIsLoading(true);
            setModalMessage("Please make sure emails match and try again"); 
            return;
        }

        try {
            setIsLoading(true);
            const res = await axios.post('http://127.0.0.1:3000/api/contact', formData);
            if (res) {
                setOpenModal(true);
                setModalMessage("Success! Your enquiry has been sent");
            }

            setFormData({
                name: '',
                email: '',
                confirmEmail: '',
                subject: '',
                message: ''
            })
        } catch(err) {
            setOpenModal(true);
            setModalMessage(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <StyledForm>
                {openModal && (<ModalContainer><Modal setIsLoading={setIsLoading} setOpenModal={setOpenModal} modalMessage={modalMessage} /></ModalContainer>)}
                <h1>Contact Me:</h1>
                <input type="text"  placeholder="Please enter your name" name="name" value={formData.name} onChange={handleChange} disabled={isLoading} />
                <input type="email"  placeholder="Please enter your email" name="email" value={formData.email} onChange={handleChange} disabled={isLoading} />
                <input type="email"  placeholder="Please confirm your email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} disabled={isLoading} />
                <input type="text"  placeholder="Enquiry subject" name="subject" value={formData.subject} onChange={handleChange} disabled={isLoading} />
                <TextArea type="text" placeholder="Your enquiry here" name="message" value={formData.message} onChange={handleChange} disabled={isLoading} />
                <Button handleClick={handleSubmit} disabled={isLoading}>Submit</Button>
            </StyledForm>
        </div>
    )
}

export default ContactForm
