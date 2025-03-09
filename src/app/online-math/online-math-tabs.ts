import type {Edge} from "@xyflow/react";
import {algebraEdges, algebraNodes} from "@/app/online-math/algebra";
import { type CustomNodeType } from "@/components/flow-chart";

export type OnlineMathTab = { id: string, label: string, nodes: CustomNodeType[], edges: Edge[] }

export const onlineMathTabs : OnlineMathTab[] = [
    { id: "algebra", label: "Algebra", nodes: algebraNodes, edges: algebraEdges },
    { id: "pre-calculus", label: "Pre-calculus", nodes: algebraNodes, edges: algebraEdges },
    { id: "calculus", label: "Calculus", nodes: algebraNodes, edges: algebraEdges },
    { id: "linear-algebra", label: "Linear Algebra", nodes: algebraNodes, edges: algebraEdges },
];