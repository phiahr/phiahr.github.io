const Interests = () => {
    const interests = [
        { name: "Robotics", link: "https://github.com/phiahr/robotic-crane" },
        { name: "Machine Learning", link: "https://github.com/phiahr/OpenSesame" },
        { name: "Computer Vision", link: "https://github.com/phiahr/Altitude-Adaptive-Object-Detection" },
        { name: "Control", link: "https://github.com/phiahr/robotic-crane" }, // You can adjust this link accordingly
    ];

    return (
        <section id="interests" className="py-20 bg-secondary">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8">Interests</h2>
                <div className="grid grid-cols-1 gap-4">
                    {interests.map((interest, index) => (
                        <a href={interest.link} key={index}>
                            <div
                                className="p-4 bg-background rounded-lg text-center hover:bg-primary/10 transition-colors"
                            >
                                <span className="text-lg">{interest.name}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
