function Profile({profile}){
    return (
        <div>
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
        </div>
    );
}

export default Profile;