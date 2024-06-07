import { RecommendedGoods } from "../../components/RecommendedGoods";


export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="title">Phone Catalog</h1>;
      <RecommendedGoods />
    </div>
  );
};
