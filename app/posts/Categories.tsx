type CategoriesProps = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

const Categories = ({ categories, selected, onClick }: CategoriesProps) => {
  return (
    <section>
      <ul className="flex gap-4 justify-center cursor-pointer text-lg font-bold">
        {categories.map((category) => (
          <li
            className={`hover:text-green-500 ${
              category === selected && "text-green-500"
            }`}
            onClick={() => onClick(category)}
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
