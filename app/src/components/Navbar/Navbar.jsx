import Screenshot from "./../../assets/instant-camera-icon.png"
import GitHubImg from "./../../assets/github-icon.png"
import styles from "./Navbar.module.css"

function Navbar() {

    return (
        <div>
            <ul>
                <li><img className={styles.img1} src={Screenshot}></img></li>
                <li><p>Monster Hunter Rise Sunbreak Set Builder, currently in alpha development. If you have a suggestion or issue, let us know by opening a GitHub PR or issue! </p></li>
                <li><img src={GitHubImg}></img></li>
            </ul>
            <p></p>
            
        </div>
    );
}

export default Navbar;
