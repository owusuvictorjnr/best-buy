import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
import {
  getAllCategories,
  getAllProductsForCard,
} from "@/lib/actions/product.actions";
import data from "@/lib/data";
import { toSlug } from "@/lib/utils";

export default async function Home() {
  const categories = (await getAllCategories()).slice(0, 4);
  const newArrival = await getAllProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });

  const featured = await getAllProductsForCard({
    tag: "featured",
    limit: 4,
  });

  const bestSellers = await getAllProductsForCard({
    tag: "best-seller",
    limit: 4,
  });

  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "See More",
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },

    {
      title: "Explore New Arrivals",
      items: newArrival,
      link: {
        text: "See all",
        href: "/search?tag=new-arrival",
      },
    },

    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "See all",
        href: "/search?tag=best-seller",
      },
    },

    {
      title: "Featured Products",
      items: featured,
      link: {
        text: "See all",
        href: "/search?tag=featured",
      },
    },
  ];
  return (
    <>
      <HomeCarousel items={data.carousels} />;
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
      </div>
    </>
  );
}
