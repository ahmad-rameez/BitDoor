import React from 'react';
import Menu from './Menu';

const NavbarTop = () =>  {   
    let links = [
        { label: 'Home', link: '/' },
        { label: 'Experiences', link: 'experiences' },
        { label: 'Companies', link: 'companies' },
        { label: 'Contact Us', link: 'contact' },
      ];     
    return <Menu links={links} />
}

export default NavbarTop;