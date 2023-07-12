import React from "react";
import "./CareLogItem.css";
import {CareLogItem as ICareLogItem} from "../types";
import {useCareRecipient} from "../../care-recipients/hooks/useCareRecipient";

const CareLogItem: React.FC<{ careLogItem: ICareLogItem }> = ({ careLogItem }) => {
    const careRecipient = useCareRecipient(careLogItem.care_recipient_id);

    return (
        <section className="care-log-item">
            <aside className="care-log-meta">
                <p><strong>{careRecipient?.first_name} {careRecipient?.last_name}</strong></p>
                <p>{careLogItem.type}<br />{careLogItem.status}</p>
            </aside>
            <article>
                { careLogItem.note }
            </article>
        </section>
    );
}

export default CareLogItem;