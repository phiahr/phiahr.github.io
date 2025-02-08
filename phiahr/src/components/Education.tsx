const Education = () => {
    const education = [
      {
        degree: "MSc: Autonomous Systems",
        institution: "KTH Royal Institute of Technology",
        year: "2024",
        description: "Grade: A. Thesis: Investigating Altitude-Adaptive Methods for Enhancing Small Object Detection on UAVs.",
      },
      {
        degree: "Diplôme d'ingenieur: Electrical Engineering and Embedded Systems",
        institution: "Polytech Nice Sophia",
        year: "2024",
      },
      {
        degree: "BSc: Electrical Engineering and Computer Science",
        institution: "Karlsruhe Institute of Technology",
        year: "2021",
        description: "Thesis: Detection and Classification of Higher Cognitive Functions with SSVEP using a Brain-Computer Interface.",
      },
    ];
    
    return (
      <section id="education" className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/4">
                  <p className="text-primary font-medium">{item.year}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
