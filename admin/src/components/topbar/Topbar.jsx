import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">adminpanel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fccu1-1.fna.fbcdn.net/v/t1.6435-9/39753186_2137170529841005_5393503017012035584_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WjC5Y7nS6NAAX_gTcm2&_nc_ht=scontent.fccu1-1.fna&oh=0aece99d2a7baa2f3e1058e0433975ec&oe=614D43E6" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
