import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { apiFetch } from "@/lib/api";

export default function PublicPortfolioPage() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    apiFetch(`/api/portfolio/public/${slug}`).then(setData).catch(() => setData(null));
  }, [slug]);

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Portfolio not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="p-8 border-b">
        <h1 className="text-3xl font-bold">{data.content?.schoolName ?? data.school.name}</h1>
      </header>
      <main className="p-8">
        <section className="rounded-2xl p-8 text-white" style={{ backgroundColor: data.content?.primaryColor ?? "#00A8FF" }}>
          <h2 className="text-3xl font-bold mb-3">{data.content?.heroTitle}</h2>
          <p>{data.content?.heroSubtitle}</p>
        </section>
      </main>
    </div>
  );
}
