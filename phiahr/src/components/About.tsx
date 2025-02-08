const About = () => {
    return (
        <section id="about" className="py-20 bg">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                        Hi! I am a robotics and AI engineer with a passion for building intelligent systems that bridge traditional engineering with modern machine learning techniques. I hold a master&apos;s degree in Autonomous Systems and Intelligent Robots from KTH Royal Institute of Technology and Polytech Nice Sophia, where my thesis focused on altitude-adaptive methods to enhance small object detection on UAVs.

                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Most recently, I worked as a Research Engineer at Flox Robotics, where I developed techniques to incorporate UAV altitude information into object detection models, improving precision and significantly optimizing model efficiency. Prior to that, I contributed to natural language processing advancements at SoundHound and co-founded Ayrendoo, a social meetup app with location-based features, group chat functionality, and a scalable backend infrastructure.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        My interests lie at the intersection of robotics, machine learning and control. I enjoy solving challenging problems in perception, planning, and control for autonomous systems. Some of my recent projects have included designing a 4DoF robotic crane simulator with real-time 3D visualization and developing a speaker recognition system for secure access control.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        I earned my bachelor&apos;s degree in Electrical Engineering and Computer Science from Karlsruhe Institute of Technology, where I researched brain-computer interfaces for detecting higher cognitive functions.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Outside of work, I&apos;m an avid tennis player and always on the lookout for new skills to learn. I&apos;m driven by curiosity and a desire to build systems that push boundaries and have a real-world impact.

                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;