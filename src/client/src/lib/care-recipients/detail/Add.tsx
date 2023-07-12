import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./Add.css";
interface FormData {
    id: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    email: string;
    phone: string;
    address: string;
    postcode: string;
}

const AddCareRecipient: React.FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<FormData>({
        id: `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`,
        first_name: '',
        last_name: '',
        date_of_birth: '',
        email: '',
        phone: '',
        address: '',
        postcode: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('/api/care-recipients', form);
        navigate('/');
    };

    return (
        <>
            <header className="container">
                <hgroup>
                    <h1>Add a new care recipient</h1>
                    <h2>You are currently in the process of adding a new care recipient to your agency.</h2>
                </hgroup>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="grid">
                    <label>
                        First Name:
                        <input name="first_name" type="text" value={form.first_name} onChange={handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input name="last_name" type="text" value={form.last_name} onChange={handleChange} />
                    </label>
                </div>
                <label>
                    Date of Birth:
                    <input name="date_of_birth" type="date" value={form.date_of_birth} onChange={handleChange} />
                </label>
                <div className="grid">
                    <label>
                        Email:
                        <input name="email" type="email" value={form.email} onChange={handleChange} />
                    </label>
                    <label>
                        Phone:
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} />
                    </label>
                </div>
                <div className="grid">
                    <label>
                        Address:
                        <input name="address" type="text" value={form.address} onChange={handleChange} />
                    </label>
                    <label>
                        Postcode:
                        <input name="postcode" type="text" value={form.postcode} onChange={handleChange} />
                    </label>
                </div>
                <div id="form-submission-buttons" className="grid">
                    <button type="button" className="secondary outline" onClick={() => { navigate('/') }}>Cancel</button>
                    <button type="submit">Add Care Recipient</button>
                </div>
            </form>
        </>
    );
};

export default AddCareRecipient;