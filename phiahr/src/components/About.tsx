const About = () => {
    return (
        <section id="about" className="py-20 bg">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        I am a software engineer with experience across machine learning, computer vision, and distributed systems. I enjoy building systems that bridge research and practical engineering, especially when they can solve meaningful real-world challenges.

                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        I currently work at SEMRON, where I design and build modular R&D systems for geographically distributed training and LLM quantization research. My recent work includes orchestration and scheduling components for cross-region ML workloads as well as experimentation frameworks for benchmarking quantization methods from current literature.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Before SEMRON, I worked on altitude-adaptive object detection for UAVs at Flox Robotics, extended German-language voice assistant capabilities at SoundHound, and built software in both startup and robotics environments.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        I hold a double-degree MSc in Intelligent Autonomous Systems from KTH Royal Institute of Technology and Polytech Nice Sophia, and a BSc in Electrical Engineering and Computer Science from Karlsruhe Institute of Technology.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Outside of engineering, I enjoy tennis, effective altruism, and continuously learning new skills.

                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;