import React from 'react';
import { Handle, Position, Node, NodeProps } from "@xyflow/react";
import { VideoContainer } from "@/components/video-container";

export type TopicNode = Node<{ topic: string, videos: VideoContainer[], clicked: boolean }, 'topic'>;

export function TopicNode({data} : NodeProps<TopicNode>) {
    return (
     <div className={`font-main-font p-2 shadow-md rounded-md  border-hidden  hover:bg-[#003262] hover:text-white  ${data.clicked ? "bg-gradient-to-br from-[#003262]  to-[#003262]/50 text-white font-bold" : "bg-gradient-to-br from-[#99adc0]  to-[#e5eaef]"}`}>
            <div className="text-sm">
                {data.topic}
            </div>

            <Handle
                id="top"
                type="source"
                position={Position.Top}
                className="invisible"
            />
            <Handle
                id="bottom"
                type="source"
                position={Position.Bottom}
                className="invisible"
            />
            <Handle
                id="left"
                type="source"
                position={Position.Left}
                className="invisible"
            />
            <Handle
                id="right"
                type="source"
                position={Position.Right}
                className="invisible"
            />
        </div>
    );
}