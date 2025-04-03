"use client";

import FlowChart from "@/components/flow-chart";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { onlineMathTabs } from "@/app/online-math/online-math-tabs";

export default function Page() {
    const searchParams = useSearchParams();
    const [flowName, setFlowName] = useState<string>(searchParams.get("initFlow") || onlineMathTabs[0].id);

    const variants = {
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    useEffect(() => {
        setFlowName(searchParams.get("initFlow") || onlineMathTabs[0].id);
    }, [searchParams]);

    const renderFlowChart = () => {
        const currentTab = onlineMathTabs.find(tab => tab.id === flowName);
        if (currentTab) {
            return <FlowChart initialNodes={currentTab.nodes} initialEdges={currentTab.edges} flowId={currentTab.id} />
        }
        return null;
    }

    return (
        <div>
            <main>
                <ul className="flex flex-row w-full p-1 mb-2">
                    {onlineMathTabs.map(onlineMathTab => (
                        <li className="flex-1 text-center" key={onlineMathTab.id}>
                            <button
                                className={`px-3 py-2 ${flowName === onlineMathTab.id ? "text-white font-bold" : ""} relative bg-transparent rounded-full h-full text-sm sm:text-base`}
                                onClick={() => setFlowName(onlineMathTab.id)}
                            >
                                {flowName === onlineMathTab.id &&
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-[-10] bg-gradient-to-br from-[#003262]/100   to-[#003262]/70  mix-blend-difference"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 1 }}
                                    />
                                }
                                {onlineMathTab.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={flowName}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ type: "linear", duration: 0.5 }}
                        className="overflow-hidden"
                    >
                        {renderFlowChart()}
                    </motion.div>
                </AnimatePresence>

            </main>
        </div>
    );
}
