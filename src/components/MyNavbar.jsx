import React from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom'

const MyNavbar = () => {
    // state = {
    //     searchString: "",
    // };

    // searchStringHandler = (e) => {
    //     if (e.keyCode === 13) {
    //         // WHEN ENTER KEY IS PRESSED
    //         this.props.showSearchResult(this.state.searchString);
    //     } else {
    //         this.setState({ searchString: e.currentTarget.value });
    //     }
    // };
    const location = useLocation()
    //console.log(location)
    const navigate = useNavigate()

    return (
        <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
            <Link to="/">
                <img
                    src="../public/assets/logo.png"
                    alt="logo"
                    style={{ width: "100px", height: "55px" }}
                />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="font-weight-bold custom-links">
                        <div
                            className={
                                location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </div>
                    </Link>
                    <Link to="/TvShow" className="font-weight-bold custom-links">
                        <div
                            className={
                                location.pathname === '/TvShow' ? 'nav-link active' : 'nav-link'}
                        >
                            TV Shows
                        </div>
                    </Link>
                    <Link to="/Movies" className="font-weight-bold custom-links">
                        <div
                            className={
                                location.pathname === '/Movies' ? 'nav-link active' : 'nav-link'}
                        >
                            Movies
                        </div>
                    </Link>

                    {/* <Nav.Link className="font-weight-bold" href="/">
                        TV Shows
                    </Nav.Link>
                    <Nav.Link className="font-weight-bold" href="/">
                        Movies
                    </Nav.Link>
                    <Nav.Link className="font-weight-bold" href="/">
                        Recently Added
                    </Nav.Link>
                    <Nav.Link className="font-weight-bold" href="/">
                        My List
                    </Nav.Link> */}
                </Nav>
                <span className="d-flex align-items-center">
                    <InputGroup className="icons">
                        <FormControl
                            placeholder="Search and press enter"
                            aria-label="search"
                            aria-describedby="basic-addon1"
                        // onKeyDown={this.searchStringHandler}
                        // onChange={this.searchStringHandler}
                        // value={this.state.searchString}
                        />
                    </InputGroup>
                    <div id="kids">KIDS</div>
                    <i className="fa fa-bell icons"></i>
                    <i className="fa fa-user icons"></i>
                </span>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default MyNavbar;
