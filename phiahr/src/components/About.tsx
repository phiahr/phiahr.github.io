const About = () => {
    return (
        <section id="about" className="py-20 bg">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Hi! I am a machine learning engineer with a particular interest in distributed training and efficient model deployment. I enjoy turning ideas from recent research into robust, production-oriented tooling.

                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        At SEMRON, I design and build modular R&D infrastructure for geographically distributed ML across heterogeneous hardware. My work includes orchestration, communication, and scheduling components for cross-region workloads, with a focus on making large-scale experimentation reliable and reproducible.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        A major part of my current work is LLM quantization research: implementing and evaluating methods from recent literature, benchmarking trade-offs between quality, latency, and memory footprint, and building extensible frameworks that accelerate iteration on new quantization ideas.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Previously, I worked on altitude-adaptive object detection for UAVs at Flox Robotics and on natural language capabilities at SoundHound, experiences that shaped how I approach applied ML from both research and engineering perspectives.
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