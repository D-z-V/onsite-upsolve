import Link from "next/link";

import  { SearchOutlined }  from "@ant-design/icons";

const Nav = () => {

    const inputStyle = {
        backgroundColor: "black",
        color: "white",
        border: "1px",
        width: "80%"
    }

    const searchBtnStyle = {
        backgroundColor: "hsl(0, 0%, 18.82%)",
        border: "none",
        width: "5rem",
        height: "2.25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const searchIconStyle = {
        fontSize: "1.25rem",
        color: "white"
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        
            <a className="navbar-brand" href="#"  style={{ margin: "0rem 15% 0rem 1.5rem" }}>Slambook</a>

            <form className="d-flex flex-direction-row my-0" style={{ width: "35%" }}>
                <input type="search" placeholder="Search" style={ inputStyle }/>
                <button type="submit" style={ searchBtnStyle }> <SearchOutlined style = { searchIconStyle }  /> </button>
            </form>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-lg-0">
                    <li className="nav-item">
                        <Link href="/"> 
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login">
                            <a className="nav-link">Login</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  href="/register">
                            <a className="nav-link">Register</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;