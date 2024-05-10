import "./navbar.css";

function UpperNavbarItems() {
  
    return (
      <>
        <div className="navbar-left-group">
            <div className="navbar-item">
                <img src="src\assets\wireframe\atom_orangelogo_small.png" alt="orange-logo" />
            </div>
        </div>

        <div className="navbar-right-group">
            <div className="navbar-item">
                <a href="#"><img src="src\assets\wireframe\atom_primaryicon_search_outlined.png" alt="search" /></a>
            </div>
            <div className="navbar-item">
            <a href="#"><img src="src\assets\wireframe\Notification.png" alt="notifications" /></a>
            </div>
            <div className="navbar-item">
            <a href="#"><img src="src\assets\wireframe\atom_primaryicon_assistance_outlined.png" alt="questions" /></a>
            </div>
            <div className="navbar-item">
            <a href="#"><img src="src\assets\wireframe\Profil.png" alt="profil" /></a>
            </div>
        </div>
      </>
    )
  }
  
  export default UpperNavbarItems
  