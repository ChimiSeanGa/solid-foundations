"use client";

import React, {useCallback, useState, useEffect, memo} from "react";
import {
    ConnectionMode,
    ReactFlow,
    ReactFlowProvider,
    MarkerType,
    useReactFlow,
    useStore,
    useNodesState,
    type Node,
    type Edge,
    type NodeTypes,
    type DefaultEdgeOptions,
} from "@xyflow/react";
import TopicNode from "@/components/topic-node";
import SubjectNode from "@/components/subject-node";
import "@xyflow/react/dist/style.css";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const nodeTypes : NodeTypes = {
    topic: memo(TopicNode),
    subject: SubjectNode,
};

const connectionLineStyle = { stroke: '#000', strokeWidth: 2 };

const edgeOptions : DefaultEdgeOptions = {
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000",
    },
    style: connectionLineStyle,
    zIndex: 3000,
};

function FlowChartContent({initialNodes, initialEdges} : {initialNodes: Node[], initialEdges: Edge[]}) {
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const [sideBarContent, setSideBarContent] = useState(false);
    const [currentNode, setCurrentNode] = useState<Node>();
    const reactFlowInstance = useReactFlow();
    const [nodes, setNodes] = useNodesState(initialNodes);

    const widthSelector = (state: { width: number }) => state.width;
    const heightSelector = (state: { height: number }) => state.height;
    const reactFlowWidth = useStore(widthSelector);
    const reactFlowHeight = useStore(heightSelector);

    useEffect(() => {
        reactFlowInstance.fitView().then();
    }, [reactFlowWidth, reactFlowHeight, reactFlowInstance]);

    const onNodeClick = useCallback((_ : React.MouseEvent<Element,MouseEvent>, node : Node) => {
        console.log('Node clicked:', node);
        if (node.type === "topic") {
            setSideBarVisible(true);
            setSideBarContent(false);

            setNodes((nds) =>
                nds.map((n) => {
                    if (n.id === node.id) {
                        return { ...n, data: { ...n.data, clicked: true } };
                    } else {
                        return { ...n, data: { ...n.data, clicked: false } };
                    }
                })
            );

            setTimeout(() => {
                setCurrentNode(node);
                setSideBarContent(true);
            }, 500);
        }
    }, [setNodes]);

    const closeSideBar = () => {
        setSideBarVisible(false);
        setSideBarContent(false);

        setNodes((nds) =>
            nds.map((n) => {
                return { ...n, data: { ...n.data, clicked: false } };
            })
        );
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="flex flex-row justify-between relative">
            <div className={`flex-1 rounded border bg-gray-100`}>
                <div style={{ width: '100%', height: '70vh' }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={initialEdges}
                        defaultEdgeOptions={edgeOptions}
                        connectionLineStyle={connectionLineStyle}
                        nodeTypes={nodeTypes}
                        nodesDraggable={false}
                        panOnDrag={false}
                        zoomOnDoubleClick={false}
                        zoomOnPinch={false}
                        zoomOnScroll={false}
                        connectionMode={ConnectionMode.Loose}
                        onNodeClick={onNodeClick}
                        nodeOrigin={[0.5,0.5]}
                        fitView
                    />
                </div>
            </div>
            <div className={`${sideBarVisible ? "block" : "hidden"} lg:hidden fixed top-0 left-0 w-screen h-screen bg-black/50`}></div>
            <Transition show={sideBarVisible}>
                <div className={"absolute left-0 right-0 h-5/6 lg:h-auto lg:static lg:flex-1 rounded bg-gray-100 ml-3 mr-3 lg:ml-2 lg:mr-0 overflow-hidden transition-all duration-500 ease-in-out data-[closed]:grow-0 data-[closed]:opacity-0"}>
                    <div className="text-right p-1">
                        <button onClick={closeSideBar}>
                            <Image
                                src="/close-x-svgrepo-com.svg"
                                alt="x button to close sidebar"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <Transition show={sideBarContent}>
                        <div
                            className="text-center p-4 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0">
                            {currentNode && currentNode.data.topic}

                            {(currentNode && typeof currentNode.data.videoURL === "string") && <iframe className="aspect-video w-full p-3" src={currentNode.data.videoURL}></iframe>}
                        </div>
                    </Transition>
                </div>
            </Transition>
        </div>
    );
}

export default function FlowChart({initialNodes, initialEdges}: { initialNodes: Node[], initialEdges: Edge[] }) {
    return (
        <ReactFlowProvider>
            <FlowChartContent
                initialNodes={initialNodes}
                initialEdges={initialEdges}
            />
        </ReactFlowProvider>
    );
}
