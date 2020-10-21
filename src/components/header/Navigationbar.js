import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigationbar = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="#">Restaurant</NavbarBrand>
                </div>

            </Navbar>
        </div>
    );
};

export default Navigationbar;