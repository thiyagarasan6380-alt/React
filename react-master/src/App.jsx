import Profile from "./Profile";
function App(){
  const profiles=[{
        name: "Thiyagarasan",
        role: "Aspiring Full Stack Developer"
      },
      {
        name: "LICET",
        role: "Engineering College"
      },
      {
        name: "Student Project Hub",
        role: "Java + DBMS Project"
      }]
  return(
    
      profiles.map((profile)=>(
        <Profile 
            profile={profile}/>
      ))
    
  );
}

export default App;