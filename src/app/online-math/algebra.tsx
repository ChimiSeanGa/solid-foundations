import type {Edge} from "@xyflow/react";
import {TopicNode} from "@/components/topic-node";
import {SubjectNode} from "@/components/subject-node";

type CustomNodeType = TopicNode | SubjectNode;

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
            topic: "Equals, Implies, and If and Only If",
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/_K3aY50R9rU?si=rahfX5cITe4DTxyJ",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
            videoURL: "https://www.youtube.com/embed/6fk9ZZ4193c?si=uEGuLj1zQuuHchtO",
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
    },
    {
        id: 'alg-ops->exponents',
        source: 'topic:alg-ops',
        target: 'topic:exponents',
        sourceHandle: "left",
        targetHandle: "top",
    },
    {
        id: 'alg-ops->polynomials',
        source: 'topic:alg-ops',
        target: 'topic:polynomials',
        sourceHandle: "right",
        targetHandle: "top",
    },
    {
        id: 'exponents->logarithms',
        source: 'topic:exponents',
        target: 'topic:logarithms',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    {
        id: 'exponents->polynomials',
        source: 'topic:exponents',
        target: 'topic:polynomials',
        sourceHandle: "right",
        targetHandle: "left",
    },
    {
        id: 'polynomials->rationals-fns',
        source: 'topic:polynomials',
        target: 'topic:rational-fns',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    // Subject: Inequalities and Distance
    {
        id: 'ops->ineq-dist',
        source: 'subject:ops',
        target: 'subject:ineq-dist',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    {
        id: 'ineq-abs->alg-with-ineq',
        source: 'topic:ineq-abs',
        target: 'topic:alg-with-ineq',
        sourceHandle: "left",
        targetHandle: "top",
    },
    {
        id: 'ineq-abs->alg-with-abs',
        source: 'topic:ineq-abs',
        target: 'topic:alg-with-abs',
        sourceHandle: "right",
        targetHandle: "top",
    },
    {
        id: 'alg-with-ineq->alg-with-abs',
        source: 'topic:alg-with-ineq',
        target: 'topic:alg-with-abs',
        sourceHandle: "right",
        targetHandle: "left",
    },
    {
        id: 'alg-with-ineq->sign-analysis',
        source: 'topic:alg-with-ineq',
        target: 'topic:sign-analysis',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    // Subject: Geometry
    {
        id: 'ineq-dist->geom',
        source: 'subject:ineq-dist',
        target: 'subject:geom',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
    {
        id: '2d-geom->similarity',
        source: 'topic:2d-geom',
        target: 'topic:similarity',
        sourceHandle: "right",
        targetHandle: "top",
    },
    {
        id: '3d-geom->similarity',
        source: 'topic:3d-geom',
        target: 'topic:similarity',
        sourceHandle: "left",
        targetHandle: "top",
    },
    {
        id: 'similarity->coords',
        source: 'topic:similarity',
        target: 'topic:coords',
        sourceHandle: "bottom",
        targetHandle: "top",
    },
];