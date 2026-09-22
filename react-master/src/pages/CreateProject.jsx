import {useState} from "react";
function CreateProject(){
    const [projectName,setProjectName]=useState("");
    const [skillName,setSkillName]=useState("");
    const [editIndex,setEditIndex]=useState(null);

    const [projects,setProjects]=useState([]);
    function Submit(){
        const newProject={
            ProjectName:projectName,
            SkillName:skillName
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
            ProjectName:newName,
            SkillName:newSkill
        };
        setProjects(updateProjects);

    }
    return(
        <div>
            <h3>Project Name</h3>
            <input type="text" placeholder="Enter project name..." value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
            <h3>Required Skills</h3>
            <input type="text" placeholder="Enter skill name..." value={skillName} onChange={(e)=>setSkillName(e.target.value)}/> 
            <button onClick={Submit}>Submit</button>
            <h2>------------------------</h2>
            {projects.map((project,index) => (
                <div key={index}>
                <p>Project Name : {project.ProjectName}</p>
                <p>Skill Required : {project.SkillName}</p>
                <button onClick={()=>Delete(index)}>Delete</button>
                <button onClick={()=>Update(index)}>Edit</button>
                </div>
            ))
            }
            
        </div>
    );
}

export default CreateProject;