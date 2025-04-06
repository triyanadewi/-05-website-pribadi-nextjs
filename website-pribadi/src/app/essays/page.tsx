import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai",
  description: "Halaman esai.",
  openGraph: {
    title: "Esai",
    description: "Halaman esai.",
  },
};

type EssayItemProps = {
  title: string;
  excerpt: string;
};

function EssayItem({ title, excerpt }: EssayItemProps) {
  return (
    <li className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-left space-y-3">
      <h2 className="text-xl font-bold text-teal-600">{title}</h2>
      <p className="text-zinc-600">{excerpt}</p>
      <a href="#" className="text-sm text-teal-600 hover:text-teal-800 transition inline-flex items-center gap-1">
        Selengkapnya <span>→</span>
      </a>
    </li>
  );
}

export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
        <p className="mt-2 text-zinc-600">Berikut adalah beberapa esai yang telah saya tulis.</p>
      </header>

      <div className="mt-6">
        <ul className="grid grid-cols-1 gap-5">
          <EssayItem
            title="Membangun Web Pribadi dengan Next.js"
            excerpt="Teknologi web terus berkembang. Next.js menjadi pilihan modern dalam membangun web statis dan dinamis dengan performa tinggi..."
          />
          <EssayItem
            title="Peran Mahasiswa dalam Inovasi Digital"
            excerpt="Mahasiswa tidak hanya sebagai pengguna teknologi, tetapi juga sebagai agen perubahan melalui solusi kreatif dan inovatif..."
          />
        </ul>
      </div>
    </div>
  );
}
