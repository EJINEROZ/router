// import * as React from "react";
import React, { Suspense,} from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
const About= React.lazy(()=>import('./components/About'));
const Home =React.lazy(()=>import('./components/Home'));
const Navbar=React.lazy(()=>import( './components/Navbar'));
export default function App() {
  return (
    <div>
      <h1>Basic Example!</h1>
      <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="navbar" element={<Navbar />} />
        </Route>
      </Routes>

      </Suspense>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/navbar">Navbar</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}