// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import API_BASE_URL from "../config/api";

// const staticTestimonials = [
//   {
//     _id: "s1",
//     description:
//       "Working with Wheedle Technologies has been a great experience for our company. Their custom AI platform streamlined our workflow and matched our productivity output.",
//     name: "Jordan M.",
//     position: "IT Manager, BrightWave Solutions",
//     image: null,
//     createdAt: "2025-07-22",
//   },
//   {
//     _id: "s2",
//     description:
//       "Collaborating with them has been a good tactical decision for us. They delivered everything as promised. We are definitely looking forward to working with them again.",
//     name: "Bessie Cooper",
//     position: "Operations Director",
//     image: null,
//     createdAt: "2025-06-18",
//   },
//   {
//     _id: "s3",
//     description:
//       "It has been a pleasure to work with Wheedles. They have helped us identify our potential vulnerabilities and enhance our autonomous AI framework.",
//     name: "Jane Cooper",
//     position: "Cybersecurity Analyst",
//     image: null,
//     createdAt: "2025-05-03",
//   },
// ];

// const staticAvatars = ["/Term1.png", "/Term2.png", "/Term3.png"];

// function Testimonials() {
//   const [testimonials, setTestimonials] = useState(null); // null = loading

//   useEffect(() => {
//     axios
//       .get(`${API_BASE_URL}/testimonial/`)
//       .then((res) => setTestimonials(res.data))
//       .catch(() => setTestimonials([])); // trigger static fallback
//   }, []);

//   const useStatic = !testimonials || testimonials.length === 0;
//   const displayData = useStatic ? staticTestimonials : testimonials;

//   return (
//     <section className="w-full py-16 lg:py-24">
//       <div className="px-5 lg:px-24">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-Gotham text-white">
//             Hear What Our Clients Have to Say:
//             <br className="hidden md:block" />
//             <span className="text-white/70">Real Result, Real Impact</span>
//           </h2>
//           <br />
//           <p className="text-[14px] lg:text-[15px] text-white max-w-[700px] mx-auto">
//             Be a part of our happy, successful client family. Discover why
//             Businesses choose us to partner with them in their Transformation
//             Journey.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">
//           {displayData.map((item, index) => (
//             <div
//               key={item._id || index}
//               className="relative w-[360px] h-[300px] group [perspective:1200px] cursor-pointer"
//             >
//               {/* Back Card */}
//               <div
//                 className="absolute inset-[10px] rounded-[26px]
//                 bg-gradient-to-l from-[#0B2CC3] via-[#5D75E4] to-[#3352DF]
//                 translate-y-[26px]
//                 opacity-0 group-hover:opacity-100
//                 transition-opacity duration-200
//                 shadow-[0_0_15px_rgba(90,130,255,0.45),0_0_70px_rgba(90,130,255,0.25)]"
//               >
//                 <div className="absolute bottom-5 left-0 right-0 text-center text-sm text-[#f4f6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   On{" "}
//                   {new Date(item.createdAt).toLocaleDateString("en-GB", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </div>
//               </div>

//               {/* Front Card */}
//               <div
//                 className="relative z-10 h-full w-full rounded-[26px]
//                 bg-gradient-to-b from-[#0c122b] to-[#06081a]
//                 px-8 py-7
//                 transition-all duration-300
//                 group-hover:-translate-y-[35px]
//                 group-hover:-rotate-[5deg]
//                 group-hover:shadow-[0_0_40px_rgba(80,120,255,0.35),0_0_80px_rgba(80,120,255,0.25),0_0_140px_rgba(80,120,255,0.15)]"
//               >
//                 <p className="mb-8 text-[15px] leading-[1.65] text-[#f1f3ff]/90">
//                   "{item.message || item.description}"
//                 </p>

//                 <div className="flex items-center gap-3.5">
//                   <div className="h-12 w-12 overflow-hidden rounded-full border border-white/20">
//                     <img
//                       src={
//                         useStatic
//                           ? staticAvatars[index]
//                           : `${API_BASE_URL}/uploads/${item.image}/`
//                       }
//                       alt={item.name}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <div className="text-[15px] font-semibold text-white">
//                       {item.name}
//                     </div>
//                     <div className="text-[13px] text-[#c5ccff]">
//                       {item.position}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;
import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";

const staticTestimonials = [
  {
    _id: "s1",
    description:
      "Wheedle helped us effectively showcase our solar EPC projects and strengthen our digital presence. Their solutions have enabled us to generate quality leads and communicate our value more clearly.",
    name: "Savorka Solar",
    image: null,
    createdAt: "2025-07-22",
  },
  {
    _id: "s2",
    description:
      "Wheedle brings a strong understanding of complex operational needs and delivers efficient digital solutions. Their structured approach and technical expertise make them a reliable technology partner.",
    name: "NCCL",
    image: null,
    createdAt: "2025-06-18",
  },
  {
    _id: "s3",
    description:
      "Wheedle streamlined our online service platform, making it more efficient and user-friendly. Their work has significantly improved our customer interaction and service delivery.",
    name: "Printer Experts Online",
    image: null,
    createdAt: "2025-05-03",
  },
  {
    _id: "s4",
    description:
      "Wheedle understood the technical nature of our industrial water purification business from the start. Their solutions helped us present our offerings clearly and connect with the right audience.",
    name: "Purifier India",
    image: null,
    createdAt: "2025-05-03",
  },
];

const staticAvatars = ["/Term1.png", "/Term2.png", "/Term3.png", "/Term1.png"];

function Testimonials() {
  const [testimonials, setTestimonials] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/testimonial/`)
      .then((res) => setTestimonials(res.data))
      .catch(() => setTestimonials([]));
  }, []);

  const useStatic = !testimonials || testimonials.length === 0;
  const displayData = useStatic ? staticTestimonials : testimonials;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % displayData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + displayData.length) % displayData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Get visible cards (current, next, previous for 3D effect)
  const getVisibleCards = () => {
    const cards = [];
    const total = displayData.length;
    
    // Previous card (left)
    const prevIndex = (currentIndex - 1 + total) % total;
    // Current card (center)
    const currentCard = displayData[currentIndex];
    // Next card (right)
    const nextIndex = (currentIndex + 1) % total;
    
    cards.push({
      index: prevIndex,
      card: displayData[prevIndex],
      position: "left",
    });
    cards.push({
      index: currentIndex,
      card: currentCard,
      position: "center",
    });
    cards.push({
      index: nextIndex,
      card: displayData[nextIndex],
      position: "right",
    });
    
    return cards;
  };

  const getCardStyles = (position, cardIndex) => {
    const baseStyles = {
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "absolute",
      top: 0,
      width: "360px",
      height: "300px",
    };

    if (position === "center") {
      return {
        ...baseStyles,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3,
        opacity: 1,
      };
    } else if (position === "left") {
      return {
        ...baseStyles,
        left: "calc(50% - 380px)",
        transform: "scale(0.85)",
        zIndex: 2,
        opacity: 0.6,
        cursor: "pointer",
      };
    } else {
      return {
        ...baseStyles,
        left: "calc(50% + 20px)",
        transform: "scale(0.85)",
        zIndex: 2,
        opacity: 0.6,
        cursor: "pointer",
      };
    }
  };

  const handleCardClick = (position, cardIndex) => {
    if (position === "left") {
      prevSlide();
    } else if (position === "right") {
      nextSlide();
    }
  };

  const visibleCards = getVisibleCards();

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

        {/* Carousel Container */}
        <div className="relative flex justify-center items-center min-h-[400px]">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 lg:left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 lg:right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-[400px] flex justify-center items-center">
            {visibleCards.map(({ card, position, index }) => (
              <div
                key={card._id || index}
                onClick={() => handleCardClick(position, index)}
                style={getCardStyles(position, index)}
                className="group [perspective:1200px]"
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
                    {new Date(card.createdAt).toLocaleDateString("en-GB", {
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
                  <p className="mb-8 text-[15px] leading-[1.65] text-[#f1f3ff]/90 line-clamp-5">
                    "{card.message || card.description}"
                  </p>

                  <div className="flex items-center gap-3.5">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-white/20">
                      <img
                        src={
                          useStatic
                            ? staticAvatars[index % staticAvatars.length]
                            : `${API_BASE_URL}/uploads/${card.image}/`
                        }
                        alt={card.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.src = staticAvatars[index % staticAvatars.length];
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-white">
                        {card.name}
                      </div>
                      <div className="text-[13px] text-[#c5ccff]">
                        {card.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-1 left-0 right-0 flex justify-center gap-2">
            {displayData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setDirection(idx > currentIndex ? "next" : "prev");
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-[#3352DF]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;