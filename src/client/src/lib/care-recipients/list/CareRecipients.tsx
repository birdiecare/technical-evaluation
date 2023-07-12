import React from 'react';
import {CareRecipient} from "../types";
import {useCareRecipients} from "../hooks/useCareRecipients";
import {Link, useNavigate} from "react-router-dom";
import "./CareRecipients.css";
const CareRecipients: React.FC = () => {
    const navigate = useNavigate();
    const careRecipients = useCareRecipients();

    const handleRowClick = (recipient: CareRecipient) => {
        navigate(`edit/${recipient.id}`)
    };

    return (
        <>
            <header className="container grid">
                <hgroup>
                    <h1>Care recipients</h1>
                    <h2>The details of all of the care recipients that your agency looks after. Click <Link to='/add'>here</Link> to add a new care recipient</h2>
                </hgroup>
            </header>

            <table role="grid">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {careRecipients.map(recipient => (
                    <tr key={recipient.id} onClick={() => handleRowClick(recipient)}>
                        <td>
                            <div className="name-cell">
                                <div className="profile-circle">
                                    <img src={`https://i.pravatar.cc/40?u=${recipient.id}`} alt={recipient.first_name} />
                                </div>
                                {recipient.first_name} {recipient.last_name}
                            </div>
                        </td>
                        <td>Active</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default CareRecipients;