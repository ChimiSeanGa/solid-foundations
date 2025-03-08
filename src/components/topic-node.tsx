import React from 'react';
import { Handle, Position, Node, NodeProps } from "@xyflow/react";

export type TopicNode = Node<{ topic: string, videoURL: string, clicked: boolean }, 'topic'>;

export function TopicNode({data} : NodeProps<TopicNode>) {
    return (
        <div className={`p-2 shadow-md rounded-2xl border-2 border-stone-400 hover:ring-1 transition-colors ${data.clicked ? "bg-blue-300" : "bg-white"}`}>
            <div className="text-sm font-bold">
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