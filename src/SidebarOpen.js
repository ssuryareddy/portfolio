import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function SidebarOpen({open,setOpen}) {
    const style = {
        position:'absolute',
        top:'10px',
        right:'26px',
        color:'#fff',
        zIndex:'9',
    }
    return (
        <div style={style} className="bars">
            {
                open ? <FaTimes open={open} onClick={()=>setOpen(!open)}/> :<FaBars open={open} onClick={()=>setOpen(!open)}/>          
            }
        </div>
    );
}

export default SidebarOpen;