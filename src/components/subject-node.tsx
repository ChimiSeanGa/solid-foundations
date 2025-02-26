"use client";

import React, { memo } from 'react';
import {
    Handle,
    Position,
    Node,
    NodeProps,
} from "@xyflow/react";
import { BaseNode } from "@/components/base-node";

type SubjectNode = Node<{subjectName: string}>

function SubjectNode({ data, selected } : NodeProps<SubjectNode>) {
    return (
        <BaseNode selected={selected} className="bg-gray-200/50 h-full rounded-2xl overflow-hidden p-0">
            <div className="bg-gray-300 w-fit p-2 text-xs rounded-br-sm bg-secondary text-card-foreground">
                {data.subjectName}
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
        </BaseNode>
    );
}

SubjectNode.displayName = "SubjectNode";

export default memo(SubjectNode);