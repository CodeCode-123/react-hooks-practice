import React, { useState, useTransition } from "react";

export const TransitionExample = () => {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTransition] = useTransition();

    const items = Array.from({ length: 10000}, (_, i) => `Item ${i + 1}`);

    const handleFilter = (e) => {
        const value = e.target.value;
        setQuery(value);
        // allows you to mark certain state updates as non-urgent (transitions) so that urgent user interactions
        // (like typing or clicking) are prioritized, if a high-priority update comes in while the transition is running
        // React can pause or restart the transition work to handle the urgent update first. 
        startTransition(() => {
            const filtered = items.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        });
    };

    return (
        <div>
            <input
              type="text"
              value={query}
              onChange={handleFilter}
              placeholder="Search items..."
            />

            {isPending && <p>Loading...</p>}

            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>  
        </div>
    );
};