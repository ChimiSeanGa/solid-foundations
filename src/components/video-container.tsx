import React from "react";

export type VideoContainer = {title: string, url: string, description: string};

export function VideoContainer({title, url, description}: VideoContainer) {
    return (
        <div>
            <div className="text-center text-lg mt-3 mb-3">{title}</div>
            <div className="pl-3 pr-3">{description}</div>
            <iframe className="aspect-video w-full p-3" src={url}></iframe>
            <hr className="border-gray-400 mt-2 mb-2" />
        </div>
    );
}