'use client'

import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const sliderStyles = `
  .slider-container .slick-dots {
    bottom: -10px;
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
    width: 40px !important;
    height: 40px !important;
  }
  .slider-container .slick-prev {
    left: 25px;
  }
  .slider-container .slick-next {
    right: 25px;
  }
  .slider-container .slick-arrow:before {
    font-size: 40px;
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

  /* Hover chỉ hoạt động ở desktop cho slick-center */
  .slider-container .slick-slide:not(.slick-center) .md\:group-hover\:scale-110 {
    transform: scale(1) !important;
  }
  .slider-container .slick-slide:not(.slick-center) .md\:group-hover\:translate-y-0 {
    transform: none !important;
  }
  .slider-container .slick-slide:not(.slick-center) .md\:group-hover\:opacity-90,
  .slider-container .slick-slide:not(.slick-center) .md\:group-hover\:opacity-100 {
    opacity: 0 !important;
  }

  /* Tự động hiển thị nội dung nếu là slick-center từ xl trở xuống */
  @media (max-width: 1280px) {
    .slider-container .slick-arrow {
      display: none !important;
    }
    .slider-container .slick-slide {
      opacity: 0.8;
      transform: scale(0.95);
    }
    .slider-container .slick-slide.slick-center .auto-mobile-show {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }
`

const projects = [
  {
    id: "1",
    name: "Club Finder",
    image: "https://media.discordapp.net/attachments/1337249537311379547/1399637047269920869/image.png?ex=6889b914&is=68886794&hm=c6476fa6ce82f386ee474922bde78f9243a0255c6e9395baa34f9d4774f301e7&=&width=3264&height=1574",
    description: "Khám phá và tham gia các câu lạc bộ sinh viên đa dạng, kết nối với những người có cùng sở thích và phát triển bản thân.",
    link: "/projects/1",
  },
  {
    id: "2",
    name: "Website Ban Công Nghệ",
    image: "https://media.discordapp.net/attachments/1337249537311379547/1399637133593149571/image.png?ex=6889b928&is=688867a8&hm=87f9cd74a6385dc42fd9109df5c860ab83134776ceef49f6b909e5f3ff5aa908&=&width=3264&height=1578",
    description: "Ban Công Nghệ Sinh Viên IT thuộc Đoàn Khoa Công Nghệ Thông Tin là nơi kết nối các bạn sinh viên đam mê công nghệ...",
    link: "/projects/2",
  },
  {
    id: "3",
    name: "Hệ Thống CRM",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    description: "Hệ thống quản lý quan hệ khách hàng toàn diện với các tính năng phân tích dữ liệu và tự động hóa quy trình bán hàng.",
    link: "/projects/3",
  },
]

const AppleCardSliderPage = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index) => {
    if (!sliderRef.current || index === currentSlide) return;

    const totalSlides = projects.length;
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;

    if (index === nextIndex) {
      sliderRef.current.slickNext();
    } else if (index === prevIndex) {
      sliderRef.current.slickPrev();
    } else {
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
    centerPadding: '12%',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '10%',
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '8%',
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '24px',
          arrows: false,
        }
      }
    ]
  }

  return (
    <>
      <style jsx>{sliderStyles}</style>
      <div className="w-full h-[calc(100dvh-64px)] max-w-full pb-12 my-10 overflow-x-hidden overflow-y-hidden mt-20">
        <div className="w-full px-0">
          <div className='max-w-3xl mx-auto text-center mb-10 max-sm:px-10'>
            <h1 className="font-quicksand font-normal text-[57px] leading-[64px] tracking-[-0.0025em] text-gray-600 max-xl:hover:text-cyan-700 transition-colors max-sm:leading-[55px] max-sm:text-[2.8rem]">
              Dự án nổi bật của BCN
            </h1>
            <p className='font-quicksand font-normal text-base leading-6 tracking-[0.005em] text-gray-500 my-10 max-xl:my-5 max-xl:max-w-[500px] max-sm:max-w-full max-xl:mx-auto max-sm:text-[1.1rem] max-sm:leading-[1.6rem] max-sm:my-5 max-sm:text-center'>
              Tổng hợp các dự án tiêu biểu được thực hiện bởi thành viên Ban Công Nghệ – từ các ứng dụng thực tế, hệ thống nội bộ đến sản phẩm cộng đồng.
              Mỗi dự án thể hiện tư duy sáng tạo, tinh thần chủ động và kỹ năng phát triển phần mềm của sinh viên.</p>
          </div>
          <div className="slider-container w-full">
            <Slider {...settings} ref={sliderRef}>
              {projects.map((project, idx) => (
                <div key={idx} className="px-0" onClick={() => handleSlideClick(idx)}>
                  <div className="relative w-full max-w-none h-[500px] max-sm:max-h-[60dvh] overflow-hidden group mx-auto transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover md:group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 md:group-hover:from-black/80 md:group-hover:via-black/60 to-transparent opacity-60 md:group-hover:opacity-90 transition-opacity duration-300 auto-mobile-show" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-[calc(100%-88px)] md:group-hover:translate-y-0 transition-transform duration-700 ease-out auto-mobile-show">
                      <h3 className="text-4xl font-bold mb-3 transform md:group-hover:translate-y-0 transition-transform duration-300 truncate whitespace-nowrap overflow-hidden">
                        {project.name}
                      </h3>
                      <p className="text-xl line-clamp-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-200 mb-4 leading-relaxed auto-mobile-show">
                        {project.description}
                      </p>
                      <button
                        onClick={() => window.location.href = project.link}
                        className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold opacity-0 md:group-hover:opacity-100 transition-all duration-300 delay-200 transform translate-y-4 md:group-hover:translate-y-0 auto-mobile-show"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppleCardSliderPage;