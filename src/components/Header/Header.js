import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "#A52A2A" : "black", borderBottom: match ? "2px solid  #A52A2A" : "2px solid lightgray", paddingBottom: "5px", margin: '5px', fontWeight: match ? 'bold' : '400' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

const Header = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between h-20 mx-auto items-center w-1/4">
                <CustomLink to="/" className="px-3">Home</CustomLink>
                <CustomLink to="/reviews" className="px-3">Reviews</CustomLink>
                <CustomLink to="/dashboard" className="px-3">Dashboard</CustomLink>
                <CustomLink to="/blogs" className="px-3">Blogs</CustomLink>
                <CustomLink to="/about" className="px-3">About</CustomLink>
            </div>
            <div></div>
        </div>
    )
}

export default Header;
