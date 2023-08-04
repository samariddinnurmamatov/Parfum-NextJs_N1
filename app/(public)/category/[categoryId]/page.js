"use client";

import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const {categoryId} = useParams();
  console.log(categoryId);
  return (
    <main className="container" style={{padding: "20px 15px"}}>
      Category ! 
      bu holi bitadi
    </main>
  )
}
