import { Link } from "wouter";

export const Menu = () => {
  return (
    <div>
      <h1>Vector search demo</h1>
      <Link to="/simple-search">Node search</Link>
      <br />
      <br />
      <Link to="/advanced-search">Node search with traversal</Link>
    </div>
  );
};
