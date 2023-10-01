import React from 'react';
import './SidebarOptions.css';

const SidebarOptions = ({active, text, Icon}) => {
    return (
        <div className={`SidebarOptions ${ active && 'sidebarOptions_active'}`}>
            <Icon />            
        </div>
    );
}

export default SidebarOptions;
