"use client";

import React, {useCallback, useState, useEffect, useMemo, useRef} from "react";
import {
    ConnectionMode,
    ReactFlow,
    ReactFlowProvider,
    MarkerType,
    useReactFlow,
    useStore,
    useNodesState,
    getNodesBounds,
    type Edge,
    type NodeTypes,
    type DefaultEdgeOptions,
} from "@xyflow/react";
import { TopicNode } from "@/components/topic-node";
import { SubjectNode } from "@/components/subject-node";
import "@xyflow/react/dist/style.css";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { VideoContainer } from "@/components/video-container";

const connectionLineStyle = { stroke: '#000', strokeWidth: 2 };

const edgeOptions : DefaultEdgeOptions = {
    type: "simplebezier",
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "#4c6f91",
    },
    style: {
        strokeWidth: 3,
        stroke: "#4c6f91",
    },
    zIndex: 3000,
};

export type CustomNodeType = TopicNode | SubjectNode;

function isTopicNode(node: CustomNodeType): node is TopicNode {
    return node.type === 'topic';
}

function FlowChartContent({initialNodes, initialEdges, flowId} : {initialNodes: CustomNodeType[], initialEdges: Edge[], flowId: string}) {
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const [sideBarContent, setSideBarContent] = useState(false);
    const [flowVisible, setFlowVisible] = useState(true);
    const [currentNode, setCurrentNode] = useState<TopicNode>();
    const reactFlowInstance = useReactFlow();
    const [nodes, setNodes] = useNodesState(initialNodes);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const widthSelector = (state: { width: number }) => state.width;
    const heightSelector = (state: { height: number }) => state.height;
    const reactFlowWidth = useStore(widthSelector);
    const reactFlowHeight = useStore(heightSelector);

    const nodeTypes : NodeTypes = useMemo<NodeTypes>(() => ({
        topic: TopicNode,
        subject: SubjectNode,
    }), []);

    useEffect(() => {
        reactFlowInstance.fitView().then();
    }, [reactFlowWidth, reactFlowHeight, reactFlowInstance]);

    // We want the ReactFlow container div dimensions to match the aspect
    // ratio of the nodes bounding box.
    //
    // Note: this will only take effect when the container height is set to "auto".
    //
    // Essentially, when the bounding box becomes too thin, we want the height
    // to decrease, otherwise the nodes will be centered too low.
    const containerAspect = () => {
        const nodesBounds = getNodesBounds(nodes);
        return nodesBounds.width / nodesBounds.height;
    }

    // When the flow container becomes thinner than the nodes bounding box,
    // the container should match the aspect ratio of the bounding box.
    //
    // The exception to this is if the resulting height of the flow container
    // is larger than 150% of the height of the parent container, in which
    // case we cap the height at 150%.
    //
    // Otherwise, we can set the height to be 150%.
    const containerHeight = () => {
        const heightCap = 1.5;
        const nodesBounds = getNodesBounds(nodes);
        const nodesRatio = nodesBounds.width / nodesBounds.height;
        const flowRatio = reactFlowWidth / reactFlowHeight;

        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const containerHeight = containerRef.current.clientHeight;
            if (flowRatio < nodesRatio && containerWidth/nodesRatio < containerHeight*heightCap) {
                return "auto";
            }
        }
        return (heightCap*100).toFixed(0)+"%";
    }

    const onNodeClick = useCallback((_ : React.MouseEvent<Element,MouseEvent>, node : CustomNodeType) => {
        console.log('Node clicked:', node);
        if (isTopicNode(node)) {
            setSideBarVisible(true);
            setSideBarContent(false);

            setNodes((nds) =>
                nds.map((n) => {
                    if (isTopicNode(n)) {
                        if (n.id === node.id) {
                            return { ...n, data: { ...n.data, clicked: true } };
                        } else {
                            return { ...n, data: { ...n.data, clicked: false } };
                        }
                    } else {
                        return n;
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
        setFlowVisible(true);

        setNodes((nds) =>
            nds.map((n) => {
                if (isTopicNode(n)) {
                    return { ...n, data: { ...n.data, clicked: false } };
                } else {
                    return n;
                }
            })
        );
    }

    const expandSideBar = () => {
        setFlowVisible(false);
    }

    const unexpandSideBar = () => {
        setFlowVisible(true);
    }

    return (
        <div className="flex flex-row justify-between">
            <Transition show={flowVisible}>
                <div className={`flex-1 rounded bg-gradient-to-br from-gray-100 to-gray-200 overflow-y-scroll h-[70vh] transition-all duration-500 ease-in-out data-[closed]:grow-0 data-[closed]:opacity-0`} ref={containerRef}>
                    <div style={{ width: '100%', aspectRatio: containerAspect(), height: containerHeight() }}>
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
                            preventScrolling={false}
                            fitView
                            id={flowId}
                        />
                    </div>
                </div>
            </Transition>
            <div className={`${sideBarVisible ? "block" : "hidden"} lg:hidden fixed top-0 left-0 w-screen h-screen bg-black/50`}></div>
            <Transition show={sideBarVisible}>
                <div className={"absolute left-0 right-0 top-0 mt-10 h-[90svh] lg:h-[70svh] lg:static lg:flex-1 rounded bg-gradient-to-br from-gray-100 to-gray-200  ml-3 mr-3 lg:ml-2 lg:mr-0 lg:mt-0 overflow-y-scroll transition-all duration-500 ease-in-out data-[closed]:grow-0 data-[closed]:opacity-0"}>
                    <div className="flex p-2 text-lg bg-gradient-to-br from-bk-blue-800  to-bk-blue-500
					align-middle text-white sticky top-0 shadow-lg shadow-gray-400 z-10 text-center h-12">
                        <div className="flex-1 invisible lg:visible">
                            {
                                flowVisible ?
                                    <button onClick={expandSideBar} className="float-left h-full">
                                        <Image
                                            src="/left-arrow-backup-2-svgrepo-com.svg"
                                            alt="button to expand the sidebar"
                                            width={25}
                                            height={25}
                                            className="invert"
                                        />
                                    </button> :
                                    <button onClick={unexpandSideBar} className="float-left h-full">
                                        <Image
                                            src="/right-arrow-backup-2-svgrepo-com.svg"
                                            alt="button to un-expand the sidebar"
                                            width={25}
                                            height={25}
                                            className="invert"
                                        />
                                    </button>
                            }
                        </div>
                        <Transition show={sideBarContent}>
                            <div className="flex flex-4 font-bold items-center justify-center h-full transition-opacity duration-500 ease-in-out data-[closed]:opacity-0">
                                {currentNode && currentNode.data.topic}
                            </div>
                        </Transition>
                        <button onClick={closeSideBar} className="flex-1">
                            <Image
                                src="/close-x-svgrepo-com.svg"
                                alt="x button to close sidebar"
                                width={28}
                                height={28}
                                className="invert float-right"
                            />
                        </button>
                    </div>
                    <Transition show={sideBarContent}>
                        <div className="transition-opacity duration-500 ease-in-out data-[closed]:opacity-0 relative p-4">
                            {currentNode && currentNode.data.videos.map(videoData => <VideoContainer key={videoData.url} {...videoData} />)}
                        </div>
                    </Transition>
                </div>
            </Transition>
        </div>
    );
}

export default function FlowChart({initialNodes, initialEdges, flowId}: { initialNodes: CustomNodeType[], initialEdges: Edge[], flowId: string }) {
    return (
        <ReactFlowProvider>
            <FlowChartContent
                initialNodes={initialNodes}
                initialEdges={initialEdges}
                flowId={flowId}
            />
        </ReactFlowProvider>
    );
}
