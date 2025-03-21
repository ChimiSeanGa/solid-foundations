import type {Edge} from "@xyflow/react";
import { MarkerType } from '@xyflow/react';
import { type CustomNodeType } from "@/components/flow-chart";



export const algebraNodes : CustomNodeType[] = [
    // Subject: Operations
    {
        id: "subject:ops",
        position: { x: 0, y: 0 },
        type: "subject",
        data: {subject: "Operations"},
        style: {
            width: 500,
            height: 310,
        },
    },
    {
        id: "topic:eq-iff",
        position: { x: 250, y: 55 },
        type: "topic",
        data: {
            topic: "Equality and Implication",
            videos: [
                {
                    title: "Equality and Implication",
                    url: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
                    description: "In this video, explain the mathematical meaning of equality and implication, and introduce their notation.",
                }
            ],
            clicked: false,
        },
        parentId: "subject:ops",
        extent: "parent",
    },
    {
        id: "topic:alg-ops",
        position: { x: 250, y: 125 },
        type: "topic",
        data: {
            topic: "Algebraic Operations",
            videos: [
                {
                    title: "Properties of Algebraic Operations 1",
                    url: "https://www.youtube.com/embed/QQPpLG6HOtg?si=mdtLu7Wrae0XFAFj",
                    description: "In this video, we introduce the basic algebraic operations of addition, subtraction, multiplication, and division. We also study their core properties."
                },
                {
                    title: "Properties of Algebraic Operations 2",
                    url: "https://www.youtube.com/embed/j6OzlcBCC6g?si=4H3lo-fJG6v8HISb",
                    description: "In this video, we study the more advanced consequences of the core properties.  In particular, we give a comprehensive overview, along with examples and common misconceptions, of the most frequently used properties of algebraic expressions and equations."
                }
            ],
            clicked: false,
        },
        parentId: "subject:ops",
        extent: "parent",
    },
    {
        id: "topic:exponents",
        position: { x: 130, y: 195 },
        type: "topic",
        data: {
            topic: "Exponents",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ops",
        extent: "parent",
    },
    {
        id: "topic:logarithms",
        position: { x: 130, y: 265 },
        type: "topic",
        data: {
            topic: "Logarithms",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ops",
        extent: "parent",
    },
    {
        id: "topic:polynomials",
        position: { x: 370, y: 195 },
        type: "topic",
        data: {
            topic: "Polynomials",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ops",
        extent: "parent",
    },
    {
        id: "topic:rational-fns",
        position: { x: 370, y: 265 },
        type: "topic",
        data: {
            topic: "Rational Functions",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ops",
        extent: "parent",
    },
    // Subject: Inequalities and Distance
    {
        id: "subject:ineq-dist",
        position: { x: 0, y: 350 },
        type: "subject",
        data: {subject: "Inequalities and Distance"},
        style: {
            width: 500,
            height: 240,
        },
    },
    {
        id: "topic:ineq-abs",
        position: { x: 250, y: 55 },
        type: "topic",
        data: {
            topic: "Inequalities and Absolute Value",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ineq-dist",
        extent: "parent",
    },
    {
        id: "topic:alg-with-ineq",
        position: { x: 130, y: 125 },
        type: "topic",
        data: {
            topic: "Algebra with Inequalities",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ineq-dist",
        extent: "parent",
    },
    {
        id: "topic:alg-with-abs",
        position: { x: 370, y: 125 },
        type: "topic",
        data: {
            topic: "Algebra with Absolute Values",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ineq-dist",
        extent: "parent",
    },
    {
        id: "topic:sign-analysis",
        position: { x: 130, y: 195 },
        type: "topic",
        data: {
            topic: "Sign Analysis",
            videos: [],
            clicked: false,
        },
        parentId: "subject:ineq-dist",
        extent: "parent",
    },
    // Subject: Geometry
    {
        id: "subject:geom",
        position: { x: 0, y: 665 },
        type: "subject",
        data: {subject: "Geometry"},
        style: {
            width: 500,
            height: 240,
        },
    },
    {
        id: "topic:2d-geom",
        position: { x: 130, y: 55 },
        type: "topic",
        data: {
            topic: "2D Geometry",
            videos: [],
            clicked: false,
        },
        parentId: "subject:geom",
        extent: "parent",
    },
    {
        id: "topic:3d-geom",
        position: { x: 370, y: 55 },
        type: "topic",
        data: {
            topic: "3D Geometry",
            videos: [],
            clicked: false,
        },
        parentId: "subject:geom",
        extent: "parent",
    },
    {
        id: "topic:similarity",
        position: { x: 250, y: 125 },
        type: "topic",
        data: {
            topic: "Similarity",
            videos: [],
            clicked: false,
        },
        parentId: "subject:geom",
        extent: "parent",
    },
    {
        id: "topic:coords",
        position: { x: 250, y: 195 },
        type: "topic",
        data: {
            topic: "Coordinates",
            videos: [],
            clicked: false,
        },
        parentId: "subject:geom",
        extent: "parent",
    },
];

export const algebraEdges : Edge[] = [
    // Subject: Operations
    {
        id: 'eq-iff->alg-ops',
        source: 'topic:eq-iff',
        target: 'topic:alg-ops',
        sourceHandle: "bottom",
        targetHandle: "top",
		 type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'alg-ops->exponents',
        source: 'topic:alg-ops',
        target: 'topic:exponents',
        sourceHandle: "left",
        targetHandle: "top",
	    type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'alg-ops->polynomials',
        source: 'topic:alg-ops',
        target: 'topic:polynomials',
        sourceHandle: "right",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'exponents->logarithms',
        source: 'topic:exponents',
        target: 'topic:logarithms',
        sourceHandle: "bottom",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'exponents->polynomials',
        source: 'topic:exponents',
        target: 'topic:polynomials',
        sourceHandle: "right",
        targetHandle: "left",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'polynomials->rationals-fns',
        source: 'topic:polynomials',
        target: 'topic:rational-fns',
        sourceHandle: "bottom",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    // Subject: Inequalities and Distance
    {
        id: 'ops->ineq-dist',
        source: 'subject:ops',
        target: 'subject:ineq-dist',
        sourceHandle: "bottom",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'ineq-abs->alg-with-ineq',
        source: 'topic:ineq-abs',
        target: 'topic:alg-with-ineq',
        sourceHandle: "left",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'ineq-abs->alg-with-abs',
        source: 'topic:ineq-abs',
        target: 'topic:alg-with-abs',
        sourceHandle: "right",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'alg-with-ineq->alg-with-abs',
        source: 'topic:alg-with-ineq',
        target: 'topic:alg-with-abs',
        sourceHandle: "right",
        targetHandle: "left",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: 'alg-with-ineq->sign-analysis',
        source: 'topic:alg-with-ineq',
        target: 'topic:sign-analysis',
        sourceHandle: "bottom",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    // Subject: Geometry
    {
        id: 'ineq-dist->geom',
        source: 'subject:ineq-dist',
        target: 'subject:geom',
        sourceHandle: "bottom",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: '2d-geom->similarity',
        source: 'topic:2d-geom',
        target: 'topic:similarity',
        sourceHandle: "right",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
    {
        id: '3d-geom->similarity',
        source: 'topic:3d-geom',
        target: 'topic:similarity',
        sourceHandle: "left",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
	  type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
},
    },
    {
        id: 'similarity->coords',
        source: 'topic:similarity',
        target: 'topic:coords',
        sourceHandle: "bottom",
        targetHandle: "top",
		type: "simplebezier",
		markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#4c6f91',
    },
	style: {
      strokeWidth: 3,
      stroke: '#4c6f91',
},
    },
];