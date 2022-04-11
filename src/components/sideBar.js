import "../css/style.css";
// import Link from 'react-router-dom'
//icons

import { FcDebian } from "react-icons/fc";
import { FaEquals } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FcGrid } from "react-icons/fc";
import { FcPuzzle } from "react-icons/fc";
import { useState } from "react";

function SideBar() {
  // const [option, setOption] = useState(0);
  return (
    <div>
      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span className="ti-unlink"></span>
            <FcDebian />
            <span>UrPixPays</span>
          </h3>
          <label for="sidebar-toggle">
            <FaEquals />
          </label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="">
                <span className="ti-home">
                  <FcHome />
                </span>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="">
                <span>
                  <FcPuzzle />
                </span>
                <span>Challenge</span>
              </a>
            </li>

            <li>
              <a href="">
                <span>
                  <FcGrid />
                </span>
                <span>User Table</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <div className={option === 3 ? 'active': 'inactive'} onClick={() => setOption(1)}>Add new Challenge</div> */}
      </div>
    </div>
  );
}

export default SideBar;
