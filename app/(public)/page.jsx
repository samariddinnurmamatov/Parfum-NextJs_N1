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
  const { data: last } = await getData2();

  return (
    <main style={{padding: "20px 10px"}}>
      <h2 className="container" style={{padding: "20px 10px", textAlign: "center"}}>Yangi Mahsulotlar 👇👇👇</h2>
      <div className="all_card_category container" style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", justifyContent: "space-between", width: "100%"}}>
        {last.map((item) => (
          // Check if the item exists and has a 'title' property before rendering
          item && item.title ? (
            <div key={item.id} className="card_category">
              <Image className="img" width={200} height={400} src={item.images.url} alt="Image" />
            </div>
          ) : null
        ))}
      </div>
      <h2 className="container" style={{padding: "20px 10px", textAlign: "center"}}>Mahsulotlar Categoriasi 👇👇👇</h2>
      <div className="all_card_category container" style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)",gap: "20px", justifyContent: "space-between", width: "100%", padding: "20px 10px"}}>
        {categories.map((category) => (
          <div key={category.id} className="card_category">
            <Image className="img" width={200} height={400} src={category.images.url} alt="Image" />
            <Link href={`category/${category._id}`} style={{padding: "5px"}}>{category.name}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
