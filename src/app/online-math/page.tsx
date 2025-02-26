"use client";

import FlowChart from "@/components/flow-chart";
import {algebraNodes, algebraEdges} from "@/app/online-math/algebra";
import {precalculusNodes, precalculusEdges} from "@/app/online-math/pre-calculus";
import {calculusNodes, calculusEdges} from "@/app/online-math/calculus";
import {linearAlgebraNodes, linearAlgebraEdges} from "@/app/online-math/linear-algebra";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Page() {
    const [flowName, setFlowName] = useState<string>("algebra");
    const [transitionDone, setTransitionDone] = useState<boolean>(true);
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
                <Transition
                    show={flowName==="algebra" && transitionDone}
                    beforeLeave={() => setTransitionDone(false)}
                    afterLeave={() => setTransitionDone(true)}
                >
                    <div className="transition-opacity duration-200 data-[closed]:opacity-0">
                        <FlowChart
                            initialNodes={algebraNodes}
                            initialEdges={algebraEdges}
                        />
                    </div>
                </Transition>
                <Transition
                    show={flowName==="pre-calculus" && transitionDone}
                    beforeLeave={() => setTransitionDone(false)}
                    afterLeave={() => setTransitionDone(true)}
                >
                    <div className="transition-opacity duration-200 data-[closed]:opacity-0">
                        <FlowChart
                            initialNodes={precalculusNodes}
                            initialEdges={precalculusEdges}
                        />
                    </div>
                </Transition>
                <Transition
                    show={flowName==="calculus" && transitionDone}
                    beforeLeave={() => setTransitionDone(false)}
                    afterLeave={() => setTransitionDone(true)}
                >
                    <div className="transition-opacity duration-200 data-[closed]:opacity-0">
                        <FlowChart
                            initialNodes={calculusNodes}
                            initialEdges={calculusEdges}
                        />
                    </div>
                </Transition>
                <Transition
                    show={flowName==="linear-algebra" && transitionDone}
                    beforeLeave={() => setTransitionDone(false)}
                    afterLeave={() => setTransitionDone(true)}
                >
                    <div className="transition-opacity duration-200 data-[closed]:opacity-0">
                        <FlowChart
                            initialNodes={linearAlgebraNodes}
                            initialEdges={linearAlgebraEdges}
                        />
                    </div>
                </Transition>
            </main>
        </div>
    );
}
