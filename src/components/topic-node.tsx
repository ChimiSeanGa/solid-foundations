import React from 'react';
import { Handle, Position, Node, NodeProps } from "@xyflow/react";
import { VideoContainer } from "@/components/video-container";

export type TopicNode = Node<{ topic: string, videos: VideoContainer[], clicked: boolean }, 'topic'>;

export function TopicNode({data} : NodeProps<TopicNode>) {
    return (
        <div className={`font-main-font p-2 shadow-md rounded-md border-hidden bg-gradient-to-br ${data.clicked ? "from-bk-blue-800  to-bk-blue-500 text-white font-bold" : "from-bk-blue-300  to-bk-blue-100"} hover:from-bk-blue-800 hover:to-bk-blue-500 hover:text-white`}>
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
            <div className="absolute top-0 right-2">
                <Handle
                    id="top-right"
                    type="source"
                    position={Position.Top}
                    className="invisible"
                />
            </div>
            <div className="absolute top-0 left-2">
                <Handle
                    id="top-left"
                    type="source"
                    position={Position.Top}
                    className="invisible"
                />
            </div>
            <div className="absolute bottom-0 right-2">
                <Handle
                    id="bottom-right"
                    type="source"
                    position={Position.Bottom}
                    className="invisible"
                />
            </div>
            <div className="absolute bottom-0 left-2">
                <Handle
                    id="bottom-left"
                    type="source"
                    position={Position.Bottom}
                    className="invisible"
                />
            </div>
        </div>
    );
}