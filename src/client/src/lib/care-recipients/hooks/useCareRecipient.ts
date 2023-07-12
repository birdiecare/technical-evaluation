import {useEffect, useState} from "react";
import axios from "axios";
import {CareRecipient} from "../types";

export function useCareRecipient(id?: string) {
    const [data, setData] = useState<CareRecipient | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                return;
            }

            try {
                const response = await axios.get<CareRecipient[]>('/api/care-recipients');
                setData(response.data.find((careRecipient) => careRecipient.id === id));
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, [id]);

    return data;
}