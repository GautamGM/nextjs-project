"use client";
import React from "react";
import Image from "next/image";
import GradientButton from "../Buttons/GradientButton";
import { useRouter } from "next/navigation";

export const data = [
  {
    id: 1,
    title: "Oceanfront Villa",
    price: "$15M",
    location: "Monaco",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    description: "6 bedrooms, infinity pool, private beach access, and panoramic Mediterranean views"
  },
  {
    id: 2,
    title: "Bugatti Chiron",
    price: "$3.2M",
    location: "Dubai",
    imageUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
    description: "1578 HP, 0-60 mph in 2.3s, limited edition supercar with carbon fiber body"
  },
  {
    id: 3,
    title: "Gulfstream G700",
    price: "$78M",
    location: "Global",
    imageUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
    description: "Ultra-long-range business jet with private suite and conference room"
  },
  {
    id: 4,
    title: "Patek Philippe Grandmaster",
    price: "$1.2M",
    location: "Geneva",
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    description: "Handcrafted mechanical masterpiece with perpetual calendar and moonphase"
  },
  {
    id: 5,
    title: "Michelin Star Experience",
    price: "$25K/night",
    location: "Paris",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    description: "Private 10-course tasting menu by 3-star chef with wine pairing"
  },
  {
    id: 6,
    title: "Super Yacht",
    price: "$120M",
    location: "Mediterranean",
    imageUrl: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f",
    description: "85m luxury yacht with helipad, submarine, and 12 guest suites"
  },
  {
    id: 7,
    title: "Alpine Chalet",
    price: "$8.5M",
    location: "Swiss Alps",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
    description: "Ski-in/ski-out retreat with spa, private lift, and mountain views"
  },
  {
    id: 8,
    title: "Vintage Wine Collection",
    price: "$2.8M",
    location: "Bordeaux",
    imageUrl: "https://images.unsplash.com/photo-1551537367-d6dac7e93bf0",
    description: "500-bottle cellar including 1945 Château Mouton Rothschild"
  },
  {
    id: 9,
    title: "Private Island Retreat",
    price: "$50M",
    location: "Maldives",
    imageUrl: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    description: "20-acre private island with luxury villas, coral reefs, and white sand beaches"
  },
  {
    id: 10,
    title: "Rolls-Royce Phantom",
    price: "$500K",
    location: "London",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    description: "Ultimate luxury sedan with bespoke interiors and state-of-the-art technology"
  },
  {
    id: 11,
    title: "Art Deco Penthouse",
    price: "$22M",
    location: "New York",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    description: "5-bedroom penthouse with Central Park views, private elevator, and rooftop terrace"
  },
  {
    id: 12,
    title: "Luxury Safari Experience",
    price: "$100K/week",
    location: "Kenya",
    imageUrl: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7",
    description: "Private guided safari with luxury tented camps and exclusive wildlife encounters"
  },
  {
    id: 13,
    title: "Diamond Necklace",
    price: "$8M",
    location: "Antwerp",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    description: "Exquisite 50-carat diamond necklace crafted by master jewelers"
  },
  {
    id: 14,
    title: "Luxury Ski Resort",
    price: "$35M",
    location: "Aspen",
    imageUrl: "https://images.unsplash.com/photo-1519817914152-22d216bb9170",
    description: "Exclusive ski resort with private slopes, chalets, and spa facilities"
  },
  {
    id: 15,
    title: "Classic Art Collection",
    price: "$150M",
    location: "Florence",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "Rare collection of Renaissance masterpieces including works by Michelangelo and Da Vinci"
  },
  {
    id: 16,
    title: "Luxury Submarine",
    price: "$25M",
    location: "Monaco",
    imageUrl: "https://images.unsplash.com/photo-1622737133809-d95047b9e673",
    description: "Personal submarine for underwater exploration with luxury interiors"
  },
  {
    id: 17,
    title: "Private Concert Experience",
    price: "$1M/event",
    location: "Global",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    description: "Exclusive private concert by world-renowned artists in your chosen location"
  },
  {
    id: 18,
    title: "Luxury Golf Course",
    price: "$45M",
    location: "Scotland",
    imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
    description: "Championship golf course with clubhouse, spa, and ocean views"
  },
  {
    id: 19,
    title: "Custom Superyacht",
    price: "$250M",
    location: "Mediterranean",
    imageUrl: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f",
    description: "Fully customizable 100m superyacht with helipad, cinema, and infinity pool"
  },
  {
    id: 20,
    title: "Luxury Space Travel",
    price: "$55M/seat",
    location: "Space",
    imageUrl: "https://images.unsplash.com/photo-1457364887197-9150188c107b",
    description: "Exclusive orbital space travel experience with breathtaking views of Earth"
  }
];

const ProductList = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gold-500 mb-4">
            Curated Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover world-class luxury experiences reserved for the discerning few
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-gold-500/20 cursor-pointer"
              onClick={() => router.push(`/product/${product.id}`)}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-black px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-[--lux-gold-600]">
                    {product.location}
                  </span>
                  <span className="bg-emerald-500/90 text-black px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    Verified
                  </span>
                </div>
                
                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-gold-500 font-bold text-xl">{product.price}</p>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 relative">
                <h2 className="text-2xl font-playfair font-semibold text-white mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Rating and Details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <svg 
                        key={star}
                        className="w-4 h-4 text-gold-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="text-gray-400 text-sm ml-1">(24 reviews)</span>
                  </div>
                  <button className="text-gold-500 hover:text-gold-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <GradientButton 
                  className="w-full text-center justify-center hover:bg-gold-600 group-[.active]:bg-emerald-500"
                  onClick={() => {
                    router.push(`/product/${product.id}`);
                  }}
                >
                  Exclusive Preview
                </GradientButton>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/50 transition-all duration-300 pointer-events-none rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;