import React, { memo } from 'react';
import { Handle, Position, Node, NodeProps } from "@xyflow/react";

type TopicNode = Node<{ topic: string, topicName: string, clicked: boolean }, 'topic'>;

function TopicNode({data} : NodeProps<TopicNode>) {
    return (
        <div className={`p-4 shadow-md rounded-2xl border-2 border-stone-400 hover:ring-1 transition-colors ${data.clicked ? "bg-blue-300" : "bg-white"}`}>
            <div className="flex">
                <div className="ml-2">
                    <div className="text-lg font-bold">
                        {data.topicName}
                    </div>
                </div>
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

export default memo(TopicNode);