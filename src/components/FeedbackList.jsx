import React from 'react';
import { useSelector } from 'react-redux';

const FeedbackList = () => {
    const entries = useSelector((state) => state.feedback.entries || []);

    if (!entries.length) return <p className="text-center text-gray-600 mt-6">No feedback yet.</p>;

    return (
        <ul className="max-w-xl mx-auto mt-6 space-y-3">
            {entries.map((item) => (
                <li key={item.id} className="p-3 border rounded bg-white">
                    <div className="text-sm text-gray-500">Rating: {item.rating}</div>
                    <div className="mt-1">{item.comment}</div>
                </li>
            ))}
        </ul>
    );
};

export default FeedbackList;