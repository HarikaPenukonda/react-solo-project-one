import profile from "../images/profile-logo.jpg"


export default function MainContent(){
    return(
        <main>
            <img src={profile}
                alt="Harika Penukonda"
                className="pic"
            />
            <h1 className="card--title">Harika Penukonda</h1>
            <h5 className="card--position">Full Stack Java Developer</h5>
            <p className="card--website">harikapenukonda.website</p>
            
            
                <button className="button button-email">Email</button>
                <button className="button button-linkedin">LinkedIn</button>
            {/* <button className="fas fa-envelope-square">Email</button>
            <button className="fas fa-linkedin">LinkedIn</button> */}
            <h3 className="about--title">About</h3>
                <p className="p1">
                    I am a full stack developer with over 5 years of experience, 
                    who loved to code and enjoys new challenges.
                </p>
            <h3 className="interest--title">Interests</h3>
                <p className="p2">
                    Reader, Mural Arts, Yoga, Carnatic Music, Traveller
                </p>  
        
            
        </main>
    )
}