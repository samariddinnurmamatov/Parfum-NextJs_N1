"use client";
import { request } from "@/server/request";
import { Pagination } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState({ total: 0, products: [] });
  const [page, setPage] = useState(1);
  const { categoryId } = useParams();
  const Limit = 8;

  const getProducts = async ({ categoryId, search }) => {
    try {
      const { data } = await request(`product?category=${categoryId}`);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts({ categoryId, search });
  }, [search, categoryId]);

  const searchProduct = (e) => {
    setSearch(e.target.value);
  };

  const changePage = (current) => {
    setPage(current);
  };
  return (
    <div className="container" style={{ padding: "20px 10px" }}>
      <div className="flex justify-between py-6">
        <input
          type="text"
          placeholder="Search..."
          onChange={searchProduct}
          className="outline-none border-b-[1.4px]"
        />
       
      </div>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 containr gap-3 p-2">
        {products?.products?.slice((page - 1) * Limit, Limit).map((pr) => (
          <div
            key={pr._id}
            className=" bg-opacity-80 text-black rounded p-0.5 border-black"
            style={{border: "1px solid gray"}}
          >
            <Image
              src={pr?.images?.url}
              alt="product img"
              height={200}
              width={300}
              style={{
                objectFit: "cover",
                height: "250px",
                width: "100%",
                borderRadius: "3px 3px 0px 0px",
              }}
            />
            <div className="py-2 px-4">
              <h3 className="text-center w-full font-semibold text-xl">
                {pr?.title}
              </h3>
              <p className="text-center">Miqdor: {pr?.sold}</p>
              <p className="text-center">Narx: {pr?.price}</p>
              <button className="text-center py-1 px-3 rounded bg-white bg-opacity-20 hover:bg-opacity-30 hover:shadow-black-400 hover:shadow">{`Qo'shish`}</button>
            </div>
          </div>
        ))}
      </div>
      {products.total !== 0 && (
        <div className="py-5 flex justify-center">
          <Pagination
            onChange={changePage}
            defaultCurrent={page}
            pageSize={Limit}
            total={products.total}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
