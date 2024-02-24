import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsViewStacked, BsDashCircle, BsApple, BsFiletypeAi, BsLaptop, BsPersonCheck, BsSafe2Fill, BsSafe, BsFillStopwatchFill, BsCloud, BsCurrencyBitcoin}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsViewStacked  className='icon_header'/> VISUALIZER
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsApple className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFiletypeAi className='icon'/> END YEAR
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsLaptop className='icon'/> TOPICS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> SECTORS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> REGIONS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonCheck className='icon'/> PEST 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsSafe className='icon'/> SOURCE  
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillStopwatchFill className='icon'/>SWOT 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCloud className='icon'/>COUNTRY 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCurrencyBitcoin className='icon'/>CITY 
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar