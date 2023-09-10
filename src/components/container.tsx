import React from "react";
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: String;
}

export default function Container({children, className}: Props) {
    return (
        <>
            <div className={clsx(className, "w-full max-w-[95rem] mx-auto px-2 lg:px-44")}>
                {children}
            </div>
        </>
    )
}