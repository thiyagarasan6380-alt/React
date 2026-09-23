import {useState} from "react";
import ProjectCard from "../components/ProjectCard";
function CreateProject(){
    const [projectName,setProjectName]=useState("");
    const [skillName,setSkillName]=useState("");
    

    const [projects,setProjects]=useState([]);
    function Submit(){
        const newProject = {
                id: Date.now(),
                projectName: projectName,
                skillName: skillName,
                status: "Open",
                application:0
            };
        setProjects([...projects, newProject]);
        setProjectName("");
        setSkillName("");
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
        const applicant=[...projects];
        applicant[index].application=applicant[index].application+1;
        setProjects(applicant);
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
          
            <input type="text" placeholder="Enter skill name..." value={skillName} onChange={(e)=>setSkillName(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"/> 
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 rounded-lg p-3" onClick={Submit} >Create Project</button>
            </div>
            
            {projects.map((project,index) => (
                <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        Delete={Delete}
                        Update={Update}
                        changeStatus={changeStatus}
                        applyProject={applyProject}
                />     
            ))
            }
            
        </div>
    );
}

export default CreateProject;