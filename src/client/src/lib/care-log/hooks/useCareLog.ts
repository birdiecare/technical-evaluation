import {useEffect, useState} from "react";
import axios from "axios";
import {CareLogItem} from "../types";

export function useCareLog() {
    const [data, setData] = useState<CareLogItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<CareLogItem[]>('/api/care-log');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return data;
}