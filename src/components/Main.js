import profile from "../images/profile-logo.jpg"


export default function MainContent(){
    return(
        <div  className="card">
            <img src={profile}
                alt="Harika Penukonda"
                className="pic"
            />
            <h1 className="card--title">Harika Penukonda</h1>
            <h5 className="card--position">Full Stack Java Developer</h5>
            <p className="card--website">harikapenukonda.website</p>
            
            <button className="fas fa-envelope-square">Email</button>
            <button className="fa fa-linkedin">LinkedIn</button>
            <h3>About</h3>
            <p>
                I am a full stack developer with over 5 years of experience, 
                who loved to code and enjoys new challenges.
            </p>
            <h3>My Interests</h3>
            <p>
                Reader, Mural Arts, Yoga, Carnatic Music, Traveller
            </p>
        </div>
    )
}