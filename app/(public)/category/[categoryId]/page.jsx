"use client";
import { request } from "@/server/request";
import { Pagination } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [products, setProducts] = useState({ total: 0, products: [] });
  const [page, setPage] = useState(1);
  const { categoryId } = useParams();
  const Limit = 10;
  const getCateProducts = async ({ categoryId }) => {
    try {
      const { data } = await request(`product?category=${categoryId}`);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCateProducts({ categoryId });
  }, [categoryId]);

  return (
    <div className="container" style={{ padding: "20px 10px" }}>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-b-[1.4px]"
        />
      </div>
      <div className="all_card_category">
        {products?.products?.slice((page - 1) * Limit, Limit).map((pr) => (
          <div
            key={pr._id}
            style={{ border: "1px solid gray" }}
          >
            <Image
              src={pr?.images?.url}
              alt="img"
              height={200}
              width={300}
              style={{
                objectFit: "cover",
                height: "250px",
                width: "100%",
                borderRadius: "3px 3px 0px 0px",
              }}
            />
            <div className="py-2 px-5">
              <h1 style={{fontWeight: "700"}} className="text-center">
                {pr?.title}
              </h1>
              <p className="text-center">Miqdor: {pr?.sold}</p>
              <p className="text-center">Narx: {pr?.price}</p>
              <button
                style={{ border: "1px solid gray", width: "100%" }}
              >{`Qo'shish`}</button>
            </div>
          </div>
        ))}
      </div>
      {products.total !== 0 && (
        <div className="py-5 flex justify-center">
          <Pagination
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
