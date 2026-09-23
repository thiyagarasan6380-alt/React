function ProjectCard({
    project,
    index,
    Delete,
    Update,
    changeStatus,
    applyProject
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mt-4">
        <h2 className="text-xl font-bold text-orange-600">Project Name :  {project.projectName}</h2>
        <p className="text-gray-700">Skill Required : {project.skillName}</p>
        <p className="font-semibold">Status:{project.status}</p>
        <p>Application:{project.application}</p>
        <div className="flex gap-2 mt-3">
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={()=>Delete(index)}>Delete</button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={()=>Update(index)}>Edit</button>
        <button className="bg-orange-500 text-white px-3 py-1 rounded" onClick={() => changeStatus(index)}>
         Change Status</button>  
         <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={()=>applyProject(index)}>Apply</button>  
         </div> 
    </div>
  );
}

export default ProjectCard;