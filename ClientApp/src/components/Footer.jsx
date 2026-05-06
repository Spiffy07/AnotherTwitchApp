import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  // const navigate = useNavigate();

  return (
    <footer
      className="col-span-12 w-full text-center text-sm py-4 
                   bg-linear-to-r from-gray-950/0 via-slate-900/80 to-gray-950/0 backdrop-blur-sm"
    >
      <p>Copyright © 2026 Thomas T.</p>
      <p>All Rights Reserved</p>
      <div className="grid grid-cols-2">
        <div className="col-span-1 text-left ml-10 text-sm text-blue-300">
          <Link
            to="https://www.vecteezy.com/free-vector/blue-space"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Blue Space Vectors by Vecteezy
          </Link>
          <br />
          <Link
            to="https://www.vecteezy.com/free-vector/space-background"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Space Background Vectors by Vecteezy
          </Link>
        </div>
      </div>
    </footer>
  );
}
