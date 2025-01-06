import { useParams } from 'react-router-dom';

export function CategoryPage() {
  const { category } = useParams();

  return (
    <div className="responsive-container">
      <h1 className="responsive-text-center responsive-text-3xl responsive-font-bold">{category}</h1>
      <p className="responsive-text-center">Content for {category} will be displayed here.</p>
    </div>
  );
}
