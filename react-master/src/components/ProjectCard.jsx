

function ProjectCard({
    project,
    index,
    Delete,
    Update,
    changeStatus,
    applyProject,
    acceptApplicant
}) {
    
const currentUser = localStorage.getItem("user");
const isOwner = currentUser === project.owner;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-4">

    <div className="flex justify-between items-start mb-4">

    <div>
        <h2 className="text-2xl font-bold text-orange-600">
            🚀 {project.projectName}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
            Created by: 👤 {project.owner}
        </p>

        <p className="text-gray-600 mt-2 max-w-lg">
            {project.description}
        </p>
    </div>

    <span
        className={
            project.status === "Open"
            ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
            : "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
        }
    >
        {project.status}
    </span>

</div>

    <div className="mt-5">

    <p className="text-gray-500 text-sm mb-3">
        Required Skills
    </p>

    <div className="flex flex-wrap gap-2">

        {project.skillName.map((skill, i) => (
            <span
                key={i}
                className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
            >
                {skill.trim()}
            </span>
        ))}

    </div>

</div>

    <div className="mt-6 border-t pt-4">

    <p className="text-gray-700 font-medium">
        👥 {project.applicants.length} Applicants
    </p>

</div>
    <div className="mt-4">

    <h3 className="font-semibold text-gray-800 mb-2">
        Applicants
    </h3>

    {project.applicants?.length === 0 ? (
        <p className="text-gray-400">
            No applicants yet
        </p>
    ) : (
        project.applicants.map((name, i) => (
            <div
                key={i}
                className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mb-2"
            >
                <span>👤 {name}</span>

                {isOwner && (
                    <button
                        onClick={() => acceptApplicant(index, name)}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg"
                    >
                        Accept
                    </button>
                )}
            </div>
            
        ))
    )}


</div>
<div className="mt-4">

    <p className="font-semibold">
        Team Members
    </p>

    {project.teamMembers?.length === 0 ? (
        <p className="text-gray-400">
            No team members yet
        </p>
    ) : (
        project.teamMembers.map((member, i) => (
            <p key={i}>
                👨‍💻 {member}
            </p>
        ))
    )}

</div>

    <div className="mt-6">
    <button
        onClick={() => applyProject(index)}
        className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600"
    >
        Apply
    </button>
</div>

<div className="flex gap-2 mt-4">

    {isOwner && (
    <>
        <button
            onClick={() => Update(index)}
            className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg"
        >
            Edit
        </button>

        <button
            onClick={() => changeStatus(index)}
            className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg"
        >
            Status
        </button>

        <button
            onClick={() => Delete(index)}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg"
        >
            Delete
        </button>
    </>
)}

</div>

</div>
  );
}

export default ProjectCard;