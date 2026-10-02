"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop",
];

const specs = [
  { label: "Driver Size", value: "40mm Dynamic" },
  { label: "Frequency", value: "20Hz – 20kHz" },
  { label: "Battery Life", value: "30 Hours" },
  { label: "Connectivity", value: "Bluetooth 5.3" },
  { label: "ANC", value: "Adaptive Hybrid" },
  { label: "Weight", value: "250g" },
];

const colors = [
  { name: "Midnight Black", hex: "#2D3436" },
  { name: "Silver Mist", hex: "#B0B8C4" },
  { name: "Violet", hex: "#6C63FF" },
];

export default function ProductView() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="flex flex-col gap-6">
          <div className="neu-extruded rounded-[32px] p-4 bg-[#E0E5EC]">
            <div className="neu-inset-deep rounded-3xl overflow-hidden aspect-square">
              <img
                src={images[selectedImage]}
                alt="Premium Noise-Canceling Headphones"
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedImage === i
                    ? "neu-inset-deep scale-95"
                    : "neu-extruded-sm hover:-translate-y-0.5"
                }`}
              >
                <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          {/* Title & Price */}
          <div>
            <p className="text-sm font-medium text-[#6C63FF] uppercase tracking-wider mb-2">
              JEV Audio Pro Series
            </p>
            <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold tracking-tight text-[#3D4852]">
              Premium Noise-Canceling Headphones
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className={s <= 4 ? "fill-[#6C63FF] text-[#6C63FF]" : "text-[#B0B8C4]"}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B7280]">4.0 (128 reviews)</span>
            </div>
            <div className="flex items-baseline gap-3 mt-4">
              <span className="font-[var(--font-display)] text-4xl font-bold text-[#3D4852]">
                $349.99
              </span>
              <span className="text-lg text-[#6B7280] line-through">$449.99</span>
              <span className="text-sm font-semibold text-[#38B2AC] bg-[#38B2AC]/10 px-3 py-1 rounded-full">
                Save 22%
              </span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="neu-extruded-sm rounded-2xl px-5 py-3 bg-[#E0E5EC] flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#38B2AC] animate-pulse-dot" />
            <span className="text-sm font-medium text-[#3D4852]">
              In Stock — <span className="text-[#38B2AC]">12 units</span> available
            </span>
            <span className="ml-auto text-xs text-[#6B7280]">Ships in 1–2 days</span>
          </div>

          {/* Color Selection */}
          <div>
            <p className="text-sm font-medium text-[#6B7280] mb-3">
              Color: <span className="text-[#3D4852]">{colors[selectedColor].name}</span>
            </p>
            <div className="flex gap-3">
              {colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`w-10 h-10 rounded-full transition-all duration-300 cursor-pointer ${
                    selectedColor === i
                      ? "neu-inset scale-90 ring-2 ring-[#6C63FF] ring-offset-2 ring-offset-[#E0E5EC]"
                      : "neu-extruded-sm hover:scale-105"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="neu-inset rounded-2xl flex items-center bg-[#E0E5EC]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center text-lg font-bold text-[#6B7280] hover:text-[#3D4852] transition-colors cursor-pointer"
              >
                −
              </button>
              <span className="w-12 text-center font-semibold text-[#3D4852]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center text-lg font-bold text-[#6B7280] hover:text-[#3D4852] transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
            <button className="flex-1 h-12 rounded-2xl bg-[#6C63FF] text-white font-semibold text-base transition-all duration-300 neu-extruded hover:-translate-y-0.5 hover:bg-[#8B84FF] active:translate-y-[0.5px] active:neu-inset-sm cursor-pointer">
              Add to Cart — ${(349.99 * quantity).toFixed(2)}
            </button>
          </div>

          {/* Specs */}
          <div className="neu-extruded rounded-[32px] p-6 md:p-8 bg-[#E0E5EC]">
            <h3 className="font-[var(--font-display)] text-lg font-bold text-[#3D4852] mb-4">
              Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="neu-inset rounded-2xl px-4 py-3 bg-[#E0E5EC]">
                  <p className="text-xs text-[#6B7280]">{spec.label}</p>
                  <p className="text-sm font-semibold text-[#3D4852]">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
