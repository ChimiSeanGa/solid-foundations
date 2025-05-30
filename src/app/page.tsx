import Image from "next/image";
import * as motion from "motion/react-client"
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <main>
                <div className="bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3">
                    <h1 className="text-2xl font-bold">Overview</h1>
                    <p className="text-lg mt-4">Our mission is to empower students with a strong foundation in mathematics by providing clear, engaging, and accessible learning resources. We believe that math is a crucial skill for problem-solving, critical thinking, and real-world applications. Through interactive lessons, step-by-step explanations, and practice exercises, we strive to make learning math enjoyable and approachable for all students. Our goal is to build confidence, foster curiosity, and help learners of all backgrounds master the fundamentals that will support their academic and professional success.</p>
                </div>

                <div className="m-10">
                    <Image
                        src="/math-symbols.png"
                        alt="Math symbols for addition, subtraction, multiplication, division, and square root."
                        width={400}
                        height={300}
                        className="m-auto"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="w-full bg-gradient-to-br from-bk-gold-500 to-bk-gold-100 p-3">
                        <h1 className="text-2xl font-bold">Who is this site for?</h1>
                        <p className="text-lg mt-4">You! Really, anyone who is interested in strengthening their foundational knowledge of math can get something out of this website. You might be an incoming freshman in college, and you want to revisit pre-calculus before the semester begins. Maybe you already took a calculus course, but it&apos;s been a while, and you need to brush up. Or perhaps you need to learn some linear algebra so that you can apply it in statistics or machine learning. Solid Foundations has resources for all of this!</p>
                        <p className="text-lg mt-4">Our online video lectures and other materials can be found in the <Link href="/online-math">Online Math</Link> page. There, you&apos;ll see our recommended paths for each subject. Clicking on a specific topic will open a pane containing video lectures for that topic, along with any supplemental material. Feel free to explore all the material we have to offer!</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="m-10">
                        <Image
                            src="/quadratic-formula.png"
                            alt="Quadratic formula"
                            width={400}
                            height={300}
                            className="m-auto"
                        />
                    </div>
                </motion.div>

                <div className="w-full flex flex-col lg:flex-row mt-2 gap-4">
                    <motion.div
                        className="flex-1 bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                        viewport={{once:true, amount: 0.7}}
                    >
                        <h1 className="text-2xl font-bold">Learn at your pace</h1>
                        <p className="text-lg mt-4">While an in-person lecture is a great setting to ask questions and fix misunderstandings, it can be difficult to follow along, especially if the material is brand new to you. Everybody learns at their own pace. Our lecture videos are intended to be paused at any moment, giving you time to think through a definition or attempt a calculation before moving on.</p>
                    </motion.div>
                    <motion.div
                        className="flex-1 bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 }}}
                        viewport={{once:true, amount: 0.7}}
                    >
                        <h1 className="text-2xl font-bold">Study with direction</h1>
                        <p className="text-lg mt-4">It can be quite intimidating to figure out which order you should learn math concepts. Textbooks contain so much material that it&apos;s not always clear which topics can be skipped, and which topics are of fundamental importance. Our website makes use of flowcharts for each subject, so that you have a clear direction for studying. Each topic node in a flowchart has one or more self-contained video lectures. The video lectures are designed to filter the concepts down to a digestible amount of information.</p>
                    </motion.div>
                    <motion.div
                        className="flex-1 bg-gradient-to-br from-bk-blue-300 to-bk-blue-100 p-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.9 }}}
                        viewport={{once:true, amount: 0.7}}
                    >
                        <h1 className="text-2xl font-bold">Watch lectures from anywhere</h1>
                        <p className="text-lg mt-4">Whether you are sitting at a desktop computer at home, using a laptop at the coffee shop, or scrolling your phone on the train, you have easy access to our material. Solid Foundations was designed with a mobile-first mindset, so navigating the subject flowcharts and watching video lectures is seamless no matter where you are.</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="m-10">
                        <Image
                            src="/integral.png"
                            alt="Formula for the indefinite integral of x"
                            width={350}
                            height={300}
                            className="m-auto"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="w-full bg-gradient-to-br from-bk-gold-500 to-bk-gold-100 p-3">
                        <h1 className="text-2xl font-bold">Learn from a distinguished teacher</h1>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <div className="flex justify-center content-center flex-col text-center">
                                <Image
                                    src="/alexander_paulin_2.jpg"
                                    alt="Headshot of Alexander Paulin"
                                    width={300}
                                    height={200}
                                    className="m-auto"
                                />
                                <p>Professor Alexander Paulin</p>
                            </div>
                            <div className="flex-1 flex justify-center content-center flex-col">
                                <p className="text-lg">The lecture videos on this site were written and recorded by Professor Alexander Paulin of the UC Berkeley math department. Professor Paulin is highly acclaimed for his teaching on campus, having received the <Link href="https://math.berkeley.edu/news/alexander-paulin-has-been-awarded-2020-distinguished-teaching-award-congratulations">2020 Distinguished Teaching Award</Link> and being selected as Best Instructor by the Daily Cal in <Link href="https://www.dailycal.org/best_of_berkeley/best-of-berkeley-campus-2023/article_a99a0c35-f43d-5e30-9e8c-6a09aff0fcdb.html">2023</Link>, <Link href="https://www.dailycal.org/2024-best-of-berkeley-campus-edition/article_651b1736-0339-11ef-b162-47db00181821.html">2024</Link>, and <Link href="https://www.dailycal.org/2025-best-of-berkeley-campus-edition/article_b0e81787-3081-4299-a38f-69d896531f9c.html">2025</Link>. On his teaching style, Professor Paulin says &quot;Teaching is so much more than standing in front of a class and explaining something you understand and they do not. It is about the most basic human urge - to connect and share a common passion. Done well, it is of lasting significance for everyone involved.&quot;</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once:true, amount: 0.7}}
                >
                    <div className="m-10">
                        <Image
                            src="/sphere-volume.png"
                            alt="Formula for the volume of a sphere"
                            width={250}
                            height={200}
                            className="m-auto"
                        />
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
