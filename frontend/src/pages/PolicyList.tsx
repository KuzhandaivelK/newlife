import React, { useEffect, useState } from 'react';

const PolicyList: React.FC = () => {
    const [policies, setPolicies] = useState<any[]>([]);

    useEffect(() => {
        // Fetch life insurance policies from Backend Node/Spring BFF
    }, []);

    return (
        <div className="policy-container">
            <h1>Active Insurance Policies</h1>
            <ul>
                {policies.length > 0 ? (
                    policies.map(p => <li key={p.id}>{p.policyNumber} - {p.insuredName}</li>)
                ) : (
                    <p>No active policies found.</p>
                )}
            </ul>
        </div>
    );
};

export default PolicyList;
