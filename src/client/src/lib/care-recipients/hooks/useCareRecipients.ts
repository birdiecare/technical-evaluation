import {useEffect, useState} from "react";
import axios from "axios";
import {CareRecipient} from "../types";

export function useCareRecipients() {
    const [data, setData] = useState<CareRecipient[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<CareRecipient[]>('/api/care-recipients');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return data;
}