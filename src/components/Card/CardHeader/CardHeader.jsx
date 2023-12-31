import React from "react";
import { profileImgErrorHandler } from "../../../utils/imageErrorHandler";
import { PostHeader } from "./CardHeaderStyle";
import { Link } from "react-router-dom";

export default function CardHeader({ image, username, accountname, time, children }) {
  return (
    <PostHeader>
      <Link to={`/profile/${accountname}`}>
        <img src={image} alt="프로필 사진" onError={profileImgErrorHandler} />
        <div>
          <h2>
            <span className="a11y-hidden">이름</span>
            {username}
            {time && <time>{time}</time>}
          </h2>
          {accountname && <p>@ {accountname}</p>}
        </div>
        {children}
      </Link>
    </PostHeader>
  );
}
