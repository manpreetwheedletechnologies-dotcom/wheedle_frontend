import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";

const staticTestimonials = [
  {
    _id: "s1",
    description:
      "Working with Wheedle Technologies has been a great experience for our company. Their custom AI platform streamlined our workflow and matched our productivity output.",
    name: "Jordan M.",
    position: "IT Manager, BrightWave Solutions",
    image: null,
    createdAt: "2025-07-22",
  },
  {
    _id: "s2",
    description:
      "Collaborating with them has been a good tactical decision for us. They delivered everything as promised. We are definitely looking forward to working with them again.",
    name: "Bessie Cooper",
    position: "Operations Director",
    image: null,
    createdAt: "2025-06-18",
  },
  {
    _id: "s3",
    description:
      "It has been a pleasure to work with Wheedles. They have helped us identify our potential vulnerabilities and enhance our autonomous AI framework.",
    name: "Jane Cooper",
    position: "Cybersecurity Analyst",
    image: null,
    createdAt: "2025-05-03",
  },
];

const staticAvatars = ["/Term1.png", "/Term2.png", "/Term3.png"];

function Testimonials() {
  const [testimonials, setTestimonials] = useState(null); // null = loading

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/testimonial/`)
      .then((res) => setTestimonials(res.data))
      .catch(() => setTestimonials([])); // trigger static fallback
  }, []);

  const useStatic = !testimonials || testimonials.length === 0;
  const displayData = useStatic ? staticTestimonials : testimonials;

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="px-5 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-Gotham text-white">
            Hear What Our Clients Have to Say:
            <br className="hidden md:block" />
            <span className="text-white/70">Real Result, Real Impact</span>
          </h2>
          <br />
          <p className="text-[14px] lg:text-[15px] text-white max-w-[700px] mx-auto">
            Be a part of our happy, successful client family. Discover why
            Businesses choose us to partner with them in their Transformation
            Journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">
          {displayData.map((item, index) => (
            <div
              key={item._id || index}
              className="relative w-[360px] h-[300px] group [perspective:1200px] cursor-pointer"
            >
              {/* Back Card */}
              <div
                className="absolute inset-[10px] rounded-[26px]
                bg-gradient-to-l from-[#0B2CC3] via-[#5D75E4] to-[#3352DF]
                translate-y-[26px]
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                shadow-[0_0_15px_rgba(90,130,255,0.45),0_0_70px_rgba(90,130,255,0.25)]"
              >
                <div className="absolute bottom-5 left-0 right-0 text-center text-sm text-[#f4f6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  On{" "}
                  {new Date(item.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>

              {/* Front Card */}
              <div
                className="relative z-10 h-full w-full rounded-[26px]
                bg-gradient-to-b from-[#0c122b] to-[#06081a]
                px-8 py-7
                transition-all duration-300
                group-hover:-translate-y-[35px]
                group-hover:-rotate-[5deg]
                group-hover:shadow-[0_0_40px_rgba(80,120,255,0.35),0_0_80px_rgba(80,120,255,0.25),0_0_140px_rgba(80,120,255,0.15)]"
              >
                <p className="mb-8 text-[15px] leading-[1.65] text-[#f1f3ff]/90">
                  "{item.message || item.description}"
                </p>

                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-white/20">
                    <img
                      src={
                        useStatic
                          ? staticAvatars[index]
                          : `${API_BASE_URL}/uploads/${item.image}/`
                      }
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white">
                      {item.name}
                    </div>
                    <div className="text-[13px] text-[#c5ccff]">
                      {item.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;