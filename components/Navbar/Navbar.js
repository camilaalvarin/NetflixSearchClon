import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
// import { BsBellFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import styles from './navbar.module.css'
import image from '../../assets/Miyagi.jpeg'
import netfix from '../../assets/netflix.png'

const Navbar = ( { onSearch } ) => {


    return (
        <div className={styles.navbar}>
            {/* DESKTOP */} 
            <div className={styles.navDesktop}> 
                <div className={styles.navD}> 
                    <img src={netfix} className={styles.netflix} />
                    <p>Home</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>New & Popular</p>
                    <p>My List</p>
                    <p>Watch Again</p>
                </div>
                <div className={styles.navD2}> 
                    <Searchbar onSearch={onSearch} className={styles.search} />  
                    <IoMdNotifications className={styles.bell} />
                    <img src={image} className={styles.image} ></img>
                    <IoMdArrowDropdown className={styles.arrow} />
                    <HiMenu className={styles.menu} />
                </div>
            </div>
            {/* FIN DESKTOP */}
            {/* MOBILE */}
            <div className={styles.navMobile}>
                <div className={styles.navM}> 
                    <img src={netfix} className={styles.netflix} />
                    <div className={styles.navMobileP}> 
                        <p>Home</p>
                        <p>TV Shows</p>
                        <p>Movies</p>
                        <p>New & Popular</p>
                        <p>My List</p>
                        <p>Watch Again</p>
                    </div>
                    <div className={styles.navM2}> 
                        <IoMdNotifications className={styles.bell} />
                        <img src={image} className={styles.image} ></img>
                        <IoMdArrowDropdown className={styles.arrow} />
                        <HiMenu className={styles.menu} />
                    </div>
                </div>
                <div className={styles.navM3}>
                    <Searchbar onSearch={onSearch} className={styles.search} />  
                </div>
            </div>
            {/* FIN MOBILE */}
        </div>
    )
}

export default Navbar;
