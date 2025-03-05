import Image from "next/image";

export default function Page() {
    return (
        <div>
            <main>
                <div className="flex p-4">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">Overview</h1>
                        <p className="text-lg mt-4">Our mission is to empower students with a strong foundation in mathematics by providing clear, engaging, and accessible learning resources. We believe that math is a crucial skill for problem-solving, critical thinking, and real-world applications. Through interactive lessons, step-by-step explanations, and practice exercises, we strive to make learning math enjoyable and approachable for all students. Our goal is to build confidence, foster curiosity, and help learners of all backgrounds master the fundamentals that will support their academic and professional success.</p>
                    </div>
                    <div className="p-4">
                        <Image
                            src="/support.jpg"
                            alt="Berkeley students in math classroom"
                            width={400}
                            height={300}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
