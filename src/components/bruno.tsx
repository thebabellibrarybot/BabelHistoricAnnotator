import React from "react";

export interface BrunoProps {
    name: string;
}
export function Bruno({name}: BrunoProps) {
    return(
        <div>Hello, {name}</div>
    );
}