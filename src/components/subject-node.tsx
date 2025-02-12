import React, { memo } from 'react';
import { Handle, Position } from "@xyflow/react";

function SubjectNode() {
    return (
        <div className="p-4 shadow-md rounded-2xl bg-gray-200 border-2 border-stone-400">
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

export default memo(SubjectNode);