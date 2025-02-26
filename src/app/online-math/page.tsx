"use client";

import FlowChart from "@/components/flow-chart";
import {algebraNodes, algebraEdges} from "@/app/online-math/algebra";
import {precalculusNodes, precalculusEdges} from "@/app/online-math/pre-calculus";
import {calculusNodes, calculusEdges} from "@/app/online-math/calculus";
import {linearAlgebraNodes, linearAlgebraEdges} from "@/app/online-math/linear-algebra";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
    const [flowName, setFlowName] = useState<string>("algebra");

    const renderFlowChart = () => {
        switch (flowName) {
            case "algebra":
                return <FlowChart initialNodes={algebraNodes} initialEdges={algebraEdges}></FlowChart>
            case "pre-calculus":
                return <FlowChart initialNodes={precalculusNodes} initialEdges={precalculusEdges}></FlowChart>
            case "calculus":
                return <FlowChart initialNodes={calculusNodes} initialEdges={calculusEdges}></FlowChart>
            case "linear-algebra":
                return <FlowChart initialNodes={linearAlgebraNodes} initialEdges={linearAlgebraEdges}></FlowChart>
        }
    }

    const variants = {
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    return (
        <div>
            <main>
                <ul className="flex flex-row w-full p-4">
                    <li className="flex-1 text-center">
                        <button
                            className={`px-3 py-2 rounded-2xl transition-colors ${flowName === "algebra" ? "bg-blue-300" : "bg-gray-200"}`}
                            onClick={() => setFlowName("algebra")}
                        >
                            Algebra
                        </button>
                    </li>
                    <li className="flex-1 text-center">
                        <button
                            className={`px-3 py-2 rounded-2xl transition-colors ${flowName === "pre-calculus" ? "bg-blue-300" : "bg-gray-200"}`}
                            onClick={() => setFlowName("pre-calculus")}
                        >
                            Pre-calculus
                        </button>
                    </li>
                    <li className="flex-1 text-center">
                        <button
                            className={`px-3 py-2 rounded-2xl transition-colors ${flowName === "calculus" ? "bg-blue-300" : "bg-gray-200"}`}
                            onClick={() => setFlowName("calculus")}
                        >
                            Calculus
                        </button>
                    </li>
                    <li className="flex-1 text-center">
                        <button
                            className={`px-3 py-2 rounded-2xl transition-colors ${flowName === "linear-algebra" ? "bg-blue-300" : "bg-gray-200"}`}
                            onClick={() => setFlowName("linear-algebra")}
                        >
                            Linear Algebra
                        </button>
                    </li>
                </ul>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={flowName}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ type: "linear" }}
                        className="overflow-hidden"
                    >
                        {renderFlowChart()}
                    </motion.div>
                </AnimatePresence>

            </main>
        </div>
    );
}
