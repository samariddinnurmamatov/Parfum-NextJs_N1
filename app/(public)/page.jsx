import Slic_card from "@/components/Slider_lastP/Slider";
import { request } from "@/server/request";
import Image from "next/image";
import Link from "next/link";



async function getData() {
  try {
    return request("category");
  } catch (err) {
    console.log(err);
  }
}

async function getData2() {
  try {
    return await request("last-products");
  } catch (err) {
    console.log(err);
    return []; // yoki boshqa bir xatolik muharriri bilan bo'sh array qaytarish mumkin
  }
}

export default async function Home() {
  const { data: categories } = await getData();
  const { data: latestProducts } = await getData2();

  return (
    <main style={{padding: "20px 10px"}}>
      <h2 className="container" style={{padding: "20px 10px", textAlign: "center"}}>Yangi Mahsulotlar 👇👇👇</h2>
      <div className="container">
        <Slic_card lastproduc={latestProducts} />
      </div>
      <h2 className="container" style={{padding: "20px 10px", textAlign: "center"}}>Mahsulotlar Categoriasi 👇👇👇</h2>
      <div className="all_card_category container">
        {categories.map((category) => (
          <div key={category.id} className="card_category">
            <Image className="img" width={200} height={400} src={category.images.url} alt="Image" />
            <Link href={`/category/${category._id}`} style={{padding: "12px"}}>{category.name}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
