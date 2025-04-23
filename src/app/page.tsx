import Image from "next/image";
import * as motion from "motion/react-client"

export default function Page() {
    return (
        <div>
            <main>
                <div className="flex mt-4">
                    <div className="flex-1 bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3 mr-2 rounded">
                        <h1 className="text-2xl font-bold">Overview</h1>
                        <p className="text-lg mt-4">Our mission is to empower students with a strong foundation in mathematics by providing clear, engaging, and accessible learning resources. We believe that math is a crucial skill for problem-solving, critical thinking, and real-world applications. Through interactive lessons, step-by-step explanations, and practice exercises, we strive to make learning math enjoyable and approachable for all students. Our goal is to build confidence, foster curiosity, and help learners of all backgrounds master the fundamentals that will support their academic and professional success.</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 ml-2 rounded">
                        <Image
                            src="/support.jpg"
                            alt="Berkeley students in math classroom"
                            width={400}
                            height={300}
                        />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="w-full bg-gradient-to-br from-bk-gold-800 to-bk-gold-300 p-3 rounded mt-8">
                        <h1 className="text-2xl font-bold">Why Solid Foundations?</h1>
                        <p className="text-lg mt-4">Struggling to keep up with college math courses or just want a solid head start? Our site is your go-to resource for learning the essential building blocks of college-level mathematics—clear explanations, step-by-step examples, and practice problems designed to build real understanding. Whether you&apos;re prepping for exams, brushing up on rusty skills, or aiming to boost your confidence, this is where clarity replaces confusion. Start mastering math today—because the stronger your foundation, the higher you can go.</p>
                        <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="w-full mt-8">
                        <Image
                            src="/math.png"
                            alt="Various math symbols, equations, and shapes"
                            width={800}
                            height={200}
                            className="m-auto"
                        />
                    </div>
                </motion.div>

                <div className="w-full flex mt-8">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                        viewport={{once:true, amount: 0.7}}
                    >
                        <div className="bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3 mr-6 rounded">
                            <h1 className="text-2xl font-bold">Wow!</h1>
                            <p className="text-lg mt-4">Something cool can go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 }}}
                        viewport={{once:true, amount: 0.7}}
                    >
                        <div className="bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3 mr-6 rounded">
                            <h1 className="text-2xl font-bold">Wow!</h1>
                            <p className="text-lg mt-4">Something cool can go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.9 }}}
                        viewport={{once:true, amount: 0.7}}
                    >
                        <div className="bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3 mr-6 rounded">
                            <h1 className="text-2xl font-bold">Wow!</h1>
                            <p className="text-lg mt-4">Something cool can go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="w-full bg-gradient-to-br from-bk-gold-800 to-bk-gold-300 p-3 rounded mt-8 mb-20">
                        <h1 className="text-2xl font-bold">Rad Title</h1>
                        <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
