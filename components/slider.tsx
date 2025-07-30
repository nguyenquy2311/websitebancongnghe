"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from "lucide-react";

const sliderStyles = `
  .slider-container .slick-dots {
    bottom: -50px;
  }
  .slider-container .slick-dots li button:before {
    font-size: 12px;
    color: #cbd5e1;
    opacity: 0.5;
  }
  .slider-container .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #0d7490;
  }
  .slider-container .slick-arrow {
    z-index: 10;
  }
  .slider-container .slick-prev,
  .slider-container .slick-next {
    width: 20px;
    height: 20px;
  }
  .slider-container .slick-prev {
    left: 1.3vw;
  }
  .slider-container .slick-next {
    right: 1.3vw;
  }
  .slider-container .slick-arrow:before {
    font-size: 20px;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.89);
  }
  .slider-container .slick-slide {
    opacity: 0.6;
    transform: scale(0.9);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .slider-container .slick-slide.slick-center {
    opacity: 1;
    transform: scale(1);
  }
  .slider-container .slick-slide .translate-hover {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: unset;
  }
  .slider-container .slick-slide .btn-wrapper {
    margin-top: auto;
  }
  @media(min-width: 1280px) {
    .slider-container .slick-arrow {
      display: none !important;
    }
  }
  @media(min-width: 768px) {
    .slider-container .slick-prev {
      left: 2vw;
      width: 30px;
      height: 30px;
    }
    .slider-container .slick-next {
      right: 2vw;
      width: 30px;
      height: 30px;
    }
    .slider-container .slick-arrow:before {
      font-size: 30px;
    }
  }
  @media (max-width: 1280px) {
    .slider-container .slick-slide {
      opacity: 0.8;
      transform: scale(0.95);
    }
    .slider-container .slick-slide.slick-center .auto-mobile-show {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }

  @media (min-width: 768px) {
    .slider-container .slick-slide:not(.slick-center) .scale-hover {
      transform: scale(1) !important;
    }

    .slider-container .slick-slide:not(.slick-center) .gradient-hover {
      background-image: none !important;
      opacity: 0.6 !important;
    }

    .slider-container .slick-slide:not(.slick-center) .translate-hover {
      transform: translateY(calc(100% - 88px)) !important;
    }

    .slider-container .slick-slide:not(.slick-center) .opacity-hover {
      opacity: 0 !important;
    }

    .slider-container .slick-slide.slick-center:hover .scale-hover {
      transform: scale(1.1);
    }

    .slider-container .slick-slide.slick-center:hover .gradient-hover {
      background-image: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.6), transparent);
      opacity: 0.9;
    }

    .slider-container .slick-slide.slick-center:hover .translate-hover {
      transform: translateY(0);
    }

    .slider-container .slick-slide.slick-center:hover .opacity-hover {
      opacity: 1;
    }
  }
`;

const projects = [
  {
    id: "1",
    name: "Club Finder",
    image:
      "https://media.discordapp.net/attachments/1337249537311379547/1399637047269920869/image.png?ex=6889b914&is=68886794&hm=c6476fa6ce82f386ee474922bde78f9243a0255c6e9395baa34f9d4774f301e7&=&width=3264&height=1574",
    description:
      "Khám phá và tham gia các câu lạc bộ sinh viên đa dạng, kết nối với những người có cùng sở thích và phát triển bản thân.",
    link: "/projects/1",
  },
  {
    id: "2",
    name: "Website Ban Công Nghệ",
    image:
      "https://media.discordapp.net/attachments/1337249537311379547/1399637133593149571/image.png?ex=6889b928&is=688867a8&hm=87f9cd74a6385dc42fd9109df5c860ab83134776ceef49f6b909e5f3ff5aa908&=&width=3264&height=1578",
    description:
      "Ban Công Nghệ Sinh Viên IT thuộc Đoàn Khoa Công Nghệ Thông Tin là nơi kết nối các bạn sinh viên đam mê công nghệ...",
    link: "/projects/2",
  },
  {
    id: "3",
    name: "Hệ Thống CRM",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    description:
      "Hệ thống quản lý quan hệ khách hàng toàn diện với các tính năng phân tích dữ liệu và tự động hóa quy trình bán hàng.",
    link: "/projects/3",
  },
];

const AppleCardSliderPage = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index) => {
    if (!sliderRef.current) return;

    const totalSlides = projects.length;
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;

    console.log("Current Slide:", currentSlide);
    console.log("Clicked Index:", index);
    console.log("Prev Index:", prevIndex, "Next Index:", nextIndex);

    if (index === nextIndex) {
      console.log("→ Moving to next slide");
      sliderRef.current.slickNext();
    } else if (index === prevIndex) {
      console.log("← Moving to previous slide");
      sliderRef.current.slickPrev();
    } else if (index !== currentSlide) {
      console.log("↔ Jumping to slide", index);
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "12%",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "8%",
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "24px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <style jsx>{sliderStyles}</style>
      <div className="w-full max-w-full pb-[90px] my-[150px] overflow-x-hidden overflow-y-hidden mt-20 relative">
        <div className="w-full px-0">
          <div className="max-w-3xl mx-auto text-center mb-10 max-sm:px-10">
            <h1 className="font-quicksand font-normal text-[57px] leading-[64px] tracking-[-0.0025em] text-gray-600 max-xl:hover:text-cyan-700 transition-colors max-sm:leading-[55px] max-sm:text-[2.8rem]">
              Dự án nổi bật của BCN
            </h1>
            <p className="font-quicksand font-normal text-base leading-6 tracking-[0.005em] text-gray-500 my-10 max-xl:my-5 max-xl:max-w-[500px] max-sm:max-w-full max-xl:mx-auto max-sm:text-[1.1rem] max-sm:leading-[1.6rem] max-sm:my-5 max-sm:text-center">
              Tổng hợp các dự án tiêu biểu được thực hiện bởi thành viên Ban
              Công Nghệ – từ các ứng dụng thực tế, hệ thống nội bộ đến sản phẩm
              cộng đồng. Mỗi dự án thể hiện tư duy sáng tạo, tinh thần chủ động
              và kỹ năng phát triển phần mềm của sinh viên.
            </p>
          </div>
          <div className="slider-container w-full">
            <Slider {...settings} ref={sliderRef}>
              {projects.map((project, idx) => (
                <div key={idx} className="px-0">
                  <div
                    className="relative w-full max-w-none h-[calc(100dvh-380px)] max-sm:max-h-[60dvh] overflow-hidden group mx-auto transition-all duration-300"
                    onClick={() => handleSlideClick(idx)}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover scale-hover transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 auto-mobile-show gradient-hover" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-[calc(100%-88px)] transition-transform duration-700 ease-out auto-mobile-show translate-hover">
                      <h3 className="text-4xl font-bold mb-3 truncate whitespace-nowrap overflow-hidden">
                        {project.name}
                      </h3>
                      <p className="text-xl line-clamp-6 opacity-0 transition-opacity duration-300 delay-200 mb-4 leading-relaxed auto-mobile-show opacity-hover">
                        {project.description}
                      </p>
                      <div className="btn-wrapper">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = project.link;
                          }}
                          className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold opacity-0 transition-all duration-300 delay-200 transform translate-y-4 auto-mobile-show translate-hover opacity-hover"
                        >
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <Link
            href="/projects"
            className="flex m-auto underline text-[#0E7490] absolute bottom-[0px] translate-x-[-50%] left-[50%] items-center rounded font-quicksand font-medium text-3xl leading-6 tracking-[0.001em] transition-all duration-300 ease-in-out"
          >
            Xem tất cả dự án
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppleCardSliderPage;
