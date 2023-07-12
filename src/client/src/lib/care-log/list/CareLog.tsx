import React from "react";
import "./CareLog.css";
import {useCareLog} from "../hooks/useCareLog";
import CareLogItem from "./CareLogItem";

const CareLog: React.FC = () => {
    const careLog = useCareLog();
    return (
        <>
            <header className="container">
                <hgroup>
                    <h1>Care log</h1>
                    <h2>The details of all of the care visits that your agency has made to care recipients.</h2>
                </hgroup>
            </header>
            <div id="care-log-items" className="container">
                {careLog.map(careLogItem => (
                    <CareLogItem key={careLogItem.id} careLogItem={careLogItem} />
                ))}
            </div>
        </>
    );
}

export default CareLog;