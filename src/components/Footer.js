import fb from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/insta.png"
import github from "../images/GitHub.png"

export default function Footer(){
    return(
        <footer>
        <div class="d-flex">
            <div><img src={fb}
                alt="facebook logo"
                className="item"/></div>
            <div><img src={twitter}
                alt="twitter logo"
                className="item"/></div>
            <div ><img src={instagram}
                alt="instagram logo"
                className="item"/></div>
            <div><img src={github}
                alt="Githubx logo"
                className="item"/></div>
        </div>
            
        </footer>
    )
}