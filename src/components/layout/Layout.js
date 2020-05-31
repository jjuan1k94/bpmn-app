import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBarLayout from './NavBarLayout';
import BodyLayout from './BodyLayout';
import '../../assets/css/components/Layout.css'

const Layout = ({children}) => (
    <BrowserRouter>
        <NavBarLayout />
        <BodyLayout>
            {children}            
        </BodyLayout>
    </BrowserRouter>
)
export default Layout;
