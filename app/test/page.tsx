'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Custom CSS for slider
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
    color: #3b82f6;
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
  }
  
  .slider-container .slick-slide.slick-center {
    opacity: 1;
    transform: scale(1);
  }
  
  @media (max-width: 768px) {
    .slider-container .slick-arrow {
      display: none !important;
    }
    
    .slider-container .slick-slide {
      opacity: 0.8;
      transform: scale(0.95);
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
    description: "Ban Công Nghệ Sinh Viên IT thuộc Đoàn Khoa Công Nghệ Thông Tin là nơi kết | nối các bạn sinh viên đam mê công nghệ. Chúng tôi tập trung vào việc phát triển phần mềm, tổ chức các hoạt động đào tạo kỹ năng IT, và tạo ra một cộng đồng học hỏi, hợp tác. Với mục tiêu giúp sinh viên nâng cao kỹ năng công nghệ, tham gia các dự án thực tế và phát triển nghề nghiệp, Ban Công Nghệ luôn) chào đón những bạn trẻ nhiệt huyết gia nhập để cùng nhau sáng tạo và học hỏi.",
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

const AppleCardSliderPage = () => {
  return (
    <>
      <style jsx>{sliderStyles}</style>
      <div className="w-full max-w-full min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
        <div className="w-full px-0">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Dự Án Nổi Bật
          </h2>
          <div className="slider-container w-full">
            <Slider {...settings}>
              {projects.map((project, idx) => (
                <div key={idx} className="px-0">
                  <div className="relative w-full max-w-none h-[500px] overflow-hidden rounded-xl group mx-auto transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 group-hover:from-black/80 group-hover:via-black/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-[calc(100%-88px)] group-hover:translate-y-0 transition-transform duration-700 ease-out">

                      <h3 className="text-4xl font-bold mb-3 transform group-hover:translate-y-0 transition-transform duration-300">
                        {project.name}
                      </h3>
                      <p className="text-xl line-clamp-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <button 
                        onClick={() => window.location.href = project.link}
                        className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform translate-y-4 group-hover:translate-y-0"
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

export default AppleCardSliderPage
