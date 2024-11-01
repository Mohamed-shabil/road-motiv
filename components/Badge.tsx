import React from "react";

const Badge = ({ content }: { content: string }) => {
    return (
        <h5 className="rounded-full bg-primary/20 text-primary px-2 py-1 inline-block my-4 text-sm">
            {content}
        </h5>
    );
};

export default Badge;
