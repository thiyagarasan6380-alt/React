import {useState,useEffect} from "react";
import ProjectCard from "../components/ProjectCard";

function CreateProject(){
    const [projectName,setProjectName]=useState("");
    const [skillName,setSkillName]=useState("");

    const [description,setDescription]=useState("");
   

    const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects")) || [];
    });
    useEffect(()=>{
        localStorage.setItem("projects",JSON.stringify(projects));
    },[projects]);

    function Submit(){
        const newProject = {
            id: Date.now(),
            projectName: projectName,
            skillName: skillName.split(","),
            description:description,
            status: "Open",
            applicants: [],
            teamMembers: [],
            owner: localStorage.getItem("user")
        };
        setProjects([...projects, newProject]);
        setProjectName("");
        setSkillName("");
        setDescription("");
    }

    function Delete(indexToDelete){
        const updateProjects=projects.filter(
            (_,index)=>index!==indexToDelete
    );
        setProjects(updateProjects);
    }

    function Update(index){
        alert("Enter new Project name and Skill : ");
        const newName=prompt("Enter project name : ");
        const newSkill=prompt("Enter skill name : ");

        const updateProjects=[...projects];
        
        updateProjects[index]={
            ...updateProjects[index],
            projectName:newName,
            skillName:newSkill
        };
        setProjects(updateProjects);

    }

    function changeStatus(index) {
        const updated = [...projects];

        updated[index].status =
            updated[index].status === "Open"
            ? "Closed"
            : "Open";

        setProjects(updated);
        }
    function applyProject(index){
        const studentName=prompt("Enter your name");
        if(!studentName)
            return;
        const updated=[...projects];
        updated[index].applicants.push(studentName);
        setProjects(updated);
    }

    const [searchTerm, setSearchTerm] = useState(""); 
    const filteredProjects = projects.filter((project) =>
    project.projectName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    function acceptApplicant(projectIndex, applicantName) {

    const updated = [...projects];

    updated[projectIndex].teamMembers.push(applicantName);

    updated[projectIndex].applicants =
        updated[projectIndex].applicants.filter(
            (name) => name !== applicantName
        );

    setProjects(updated);
    }
    
    return(
        
        <div className="min-h-screen bg-orange-50 p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-orange-600">
                    Student Project Hub</h1>
                <p className="text-gray-600 mt-2">
                    Find. Collaborate. Build.</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto flex flex-col gap-4">
            
            <input type="text" placeholder="Enter project name..." value={projectName} onChange={(e)=>setProjectName(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"/>

            <textarea placeholder="Enter project description..." value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3"/>
          
            <input type="text" placeholder="Enter skill name..." value={skillName} onChange={(e)=>setSkillName(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"/> 
            
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 rounded-lg p-3" onClick={Submit} >Create Project</button>
            </div>
            <div className="grid ">
            <input
                type="text"
                placeholder="Search Project..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border p-2 rounded-lg w-full mt-4 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"/>
            
            </div>

            {filteredProjects.map((project,index) => (
                <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        Delete={Delete}
                        Update={Update}
                        changeStatus={changeStatus}
                        applyProject={applyProject}
                        acceptApplicant={acceptApplicant}
                />     
            ))
            }
            
        </div>
    );
}

export default CreateProject;