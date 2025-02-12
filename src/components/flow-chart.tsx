"use client";

import React, {useCallback, useState} from "react";
import {
    ConnectionMode,
    ReactFlow,
    ReactFlowProvider,
    MarkerType,
    type Node,
    type Edge,
    type NodeTypes,
    type DefaultEdgeOptions,
} from "@xyflow/react";
import TopicNode from "@/components/topic-node";
import "@xyflow/react/dist/style.css";
import Image from "next/image";

const nodeTypes : NodeTypes = {
    topic: TopicNode,
};

const connectionLineStyle = { stroke: '#000', strokeWidth: 2 };

const edgeOptions : DefaultEdgeOptions = {
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000",
    },
    style: connectionLineStyle,
};

const initialNodes : Node[] = [
    {
        id: "A",
        position: { x: 0, y: 0 },
        type: "group",
        data: {},
        style: {
            width: 500,
            height: 300,
        },
    },
    {
        id: "B",
        position: { x: 0, y: 380 },
        type: "group",
        data: {},
        style: {
            width: 500,
            height: 300,
        },
    },
    {
        id: "1",
        position: { x: 60, y: 30 },
        type: "topic",
        data: { topic: "subj1-topic1", topicName: "Topic 1" },
        parentId: "A",
        extent: "parent",
    },
    {
        id: '2',
        position: { x: 335, y: 30 },
        type: "topic",
        data: { topic: "subj1-topic2", topicName: "Topic 2" },
        parentId: "A",
        extent: "parent",
    },
    {
        id: '3',
        position: { x: 60, y: 210 },
        type: "topic",
        data: { topic: "subj1-topic3", topicName: "Topic 3" },
        parentId: "A",
        extent: "parent",
    },
    {
        id: '4',
        position: { x: 335, y: 210 },
        type: "topic",
        data: { topic: "subj1-topic4", topicName: "Topic 4" },
        parentId: "A",
        extent: "parent",
    },
    {
        id: "5",
        position: { x: 60, y: 30 },
        type: "topic",
        data: { topic: "subj2-topic1", topicName: "Topic 5" },
        parentId: "B",
        extent: "parent",
    },
    {
        id: '6',
        position: { x: 335, y: 30 },
        type: "topic",
        data: { topic: "subj2-topic2", topicName: "Topic 6" },
        parentId: "B",
        extent: "parent",
    },
    {
        id: '7',
        position: { x: 60, y: 210 },
        type: "topic",
        data: { topic: "subj2-topic3", topicName: "Topic 7" },
        parentId: "B",
        extent: "parent",
    },
    {
        id: '8',
        position: { x: 335, y: 210 },
        type: "topic",
        data: { topic: "subj2-topic4", topicName: "Topic 8" },
        parentId: "B",
        extent: "parent",
    },
];
const initialEdges : Edge[] = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        sourceHandle: "right",
        targetHandle: "left",
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    {
        id: 'e2-4',
        source: '2',
        target: '4',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    {
        id: 'e5-6',
        source: '5',
        target: '6',
        sourceHandle: "right",
        targetHandle: "left",
    },
    {
        id: 'e6-7',
        source: '6',
        target: '7',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    {
        id: 'e6-8',
        source: '6',
        target: '8',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    {
        id: 'eA-B',
        source: 'A',
        target: 'B',
    },
];

function FlowChartContent() {
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const [currentNode, setCurrentNode] = useState<Node>();

    const onNodeClick = useCallback((event : React.MouseEvent<Element,MouseEvent>, node : Node) => {
        console.log('Node clicked:', node);
        setCurrentNode(node);
        setSideBarVisible(true);
    }, []);

    return (
        <div className="flex flex-row">
            <div className="flex-1 rounded border border-black">
                <div style={{ width: '100%', height: '80vh' }}>
                    <ReactFlow
                        nodes={initialNodes}
                        edges={initialEdges}
                        defaultEdgeOptions={edgeOptions}
                        connectionLineStyle={connectionLineStyle}
                        nodeTypes={nodeTypes}
                        nodesDraggable={false}
                        // panOnDrag={false}
                        // zoomOnDoubleClick={false}
                        // zoomOnPinch={false}
                        // zoomOnScroll={false}
                        connectionMode={ConnectionMode.Loose}
                        onNodeClick={onNodeClick}
                        fitView
                    />
                </div>
            </div>
            {sideBarVisible &&
                <div className="flex-1 rounded border border-black ml-2">
                    <div className="text-right">
                        <button onClick={() => setSideBarVisible(false)}>
                            <Image
                                src="/close-x-svgrepo-com.svg"
                                alt="x button to close sidebar"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <div className="text-center p-4">
                        Video for Topic {currentNode && currentNode.id} will go here!
                    </div>
                </div>
            }
        </div>
    );
}

export default function FlowChart() {
    return (
        <ReactFlowProvider>
            <FlowChartContent />
        </ReactFlowProvider>
    );
}