


const skills =[
  {name: "Wordpress", level: 20, categery: "fronted" },
  {name: "HTML", level: 90, categery: "fronted" },
  {name: "CSS", level: 90, categery: "fronted" },
  {name: "TailwindCSS", level: 75, categery: "fronted" },
  {name: "JavaScript", level: 75, categery: "fronted" },
  {name: "ReactJS", level: 70, categery: "fronted" },
  
]




export const SkillsSection = () => {


  return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

     <div className="container mx-auto max-w-5xl">

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>
     
      <div className="grid gid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-">

        {skills.map((skill, key) => (
          <div key={key} className="bg-card p-5 m-3 rounded-lg shadow-xs card-hover">
            <div className="text-left mb-4">
              <h3 className="font-semibold text-xl">{skill.name}</h3>
            </div>

            <div className="w-full bg-secondary/50 h2 sounded-full overflow-hidden">
             <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}></div>

             <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
             </div>
            </div>
            
          </div>
        ))}

      </div>

     </div>

  </section>
}