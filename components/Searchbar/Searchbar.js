import React, { useState } from "react";
import styles from './searchbar.module.css'
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";


function Searchbar( { onSearch } ) {
  const [wantedMovie, setWantedMovie] = useState("");

  const onChange = (e) => {
    setWantedMovie(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onSearch(wantedMovie);
    setWantedMovie("");
  };

  const clear = () => {
    setWantedMovie("");
  }

  return (
    <div>
      <div className={styles.searchDiv}>
        <HiOutlineSearch onClick={onClick} className={styles.icons} />
        <input onChange={onChange} value={wantedMovie} />
        <IoMdClose onClick={clear} className={styles.icons} />
      </div>
    </div>
  );
}

export default Searchbar;
