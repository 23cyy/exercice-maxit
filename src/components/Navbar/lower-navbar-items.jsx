import "./lower-navbar.css"

function LowerNavbarItems (){

    return(
        <>
        <div className="lower-navbar-container">
                <div className="lower-navbar-item" id="lower-navbar-item-1">
                    <div className="lower-navbar-item-1-image">
                    <img src="src\assets\wireframe\Building Blocks\atom_primaryicon_grid_filled.png" alt="orange-logo" />
                    </div>
                    <p className="footer-text">
                        Welcome
                    </p>
            </div>

            <div>
                <div className="lower-navbar-item">
                    <img src="src\assets\wireframe\Building Blocks\icon-container.png" alt="search" />
                </div>
                <p className="footer-text">
                    Marketplace
                </p>
            </div>
            <div>
                <div className="lower-navbar-item">
                    <img src="src\assets\wireframe\Building Blocks\icon-container-1.png" alt="search" />
                </div>
                <p className="footer-text">
                    Mobile
                </p>
            </div>
            <div>
                <div className="lower-navbar-item">
                    <img src="src\assets\wireframe\Building Blocks\icon-container-2.png" alt="search" />
                </div>
                <p className="footer-text">
                    My wallet
                </p>
            </div>
            <div>
                <div className="lower-navbar-item">
                    <img src="src\assets\wireframe\Building Blocks\icon-container-3.png" alt="search" />
                </div>
                <p className="footer-text">
                    My points
                </p>
            </div>
        </div>

      </>
    )
}

export default LowerNavbarItems