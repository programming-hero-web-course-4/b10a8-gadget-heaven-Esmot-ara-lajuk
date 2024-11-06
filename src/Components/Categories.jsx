import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted font-semibold text-2xl p-5">
      {categories.map((category) => (
        <NavLink
          key={category.id || category.category}  // Unique key for each category
          to={`/Category/${category.category}`}   // Ensure this matches the route path
          role="tab"
          className= {({isActive})=> `tab ${isActive ? 'tab-active' : ""}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
