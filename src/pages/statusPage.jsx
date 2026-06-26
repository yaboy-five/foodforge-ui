import { useEffect, useState } from "react";

import {
    getStatus,
    updateStatus,
    nextStatus,
    resetStatus
} from "../services/statusService";

function StatusPage() {

    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState("");

    const loadStatus = async () => {
        const data = await getStatus();
        setStatus(data);
    };

    useEffect(() => {
        loadStatus();
    }, []);

    const handleNext = async () => {
        const data = await nextStatus();
        setStatus(data.data);
        setMessage(data.message);
    };

    const handleReset = async () => {
        const data = await resetStatus();
        setStatus(data.data);
        setMessage(data.message);
    };

    const handleSetPreparing = async () => {
        const data = await updateStatus("Preparing");
        setStatus(data.data);
        setMessage(data.message);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Order Status Tracker</h1>

            <button onClick={handleNext}>Next Status</button>
            <button onClick={handleSetPreparing}>Set Preparing</button>
            <button onClick={handleReset}>Reset</button>

            <h3>{message}</h3>

            {status && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Order #{status.orderId}</h2>
                    <p>
                        <strong>Status:</strong> {status.status}
                    </p>
                    <p>
                        <strong>Last Updated:</strong>{" "}
                        {new Date(status.lastUpdated).toLocaleString()}
                    </p>
                </div>
            )}
        </div>
    );
}

export default StatusPage;