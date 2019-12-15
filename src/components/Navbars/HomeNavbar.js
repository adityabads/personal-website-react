import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip
} from "reactstrap";
import Resume from '../../assets/documents/WENQIU-Resume.pdf'
import Index from '../../views/Index.js'

function HomeNavBar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    function scrollToTop(e) {
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} color="white" expand="lg">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
                            onClick={e => scrollToTop(e)}
                        >
                            Home
                        </NavbarBrand>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            <NavItem>
                                <NavLink href={Resume} target="_blank">
                                    Resume
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#projects">
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#artwork">
                                    Artwork
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://medium.com/@wenqiu97" target="_blank">
                                    Blog
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://github.com/LuckyQXW"
                                    target="_blank"
                                >
                                    <i className="fab fa-github mr-2"/>
                                    Github
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.linkedin.com/in/wen-qiu/"
                                    target="_blank"
                                >
                                    <i className="fab fa-linkedin mr-2"/>
                                    LinkedIn
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default HomeNavBar;