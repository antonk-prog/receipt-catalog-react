import { Link } from "react-router-dom";
import { CategoryItem } from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.id} {...el} />
      ))}
    </div>
  );
}

export { CategoryList };
