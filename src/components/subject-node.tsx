"use client";

import React from 'react';
import {
    Handle,
    Position,
    Node,
    NodeProps,
} from "@xyflow/react";
import { BaseNode } from "@/components/base-node";

export type SubjectNode = Node<{subject: string}, "subject">

export function SubjectNode({ data, selected } : NodeProps<SubjectNode>) {
    return (
        <BaseNode selected={selected} className="bg-gradient-to-br from-bk-gold-800/40 from-10% via-bk-gold-300 via-20%  to-bk-gold-100 to-100% border-hidden h-full rounded-lg shadow-xl overflow-hidden p-0">
            <div className="w-fit p-2 text-xs rounded-br-lg	bg-secondary text-card-foreground">
                {data.subject}
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