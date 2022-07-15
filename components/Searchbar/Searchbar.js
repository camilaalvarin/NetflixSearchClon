import React, { useState } from "react";
import styles from './searchbar.module.css'
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";


function Searchbar( { onSearch } ) {
  const [looking, setLooking] = useState("");

  const onChange = (e) => {
    setLooking(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onSearch(looking);
    setLooking("");
  };

  const clear = () => {
    setLooking("");
  }

  return (
    <div>
      <div className={styles.searchDiv}>
        <HiOutlineSearch onClick={onClick} className={styles.icons} />
        <input onChange={onChange} value={looking} />
        <IoMdClose onClick={clear} className={styles.icons} />
      </div>
    </div>
  );
}

export default Searchbar;
