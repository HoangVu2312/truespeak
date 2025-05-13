import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import serviceImage from '../assets/service.jpg';
import landingBg from '../assets/landing-bg.jpg';
import { FaFacebook, FaInstagram, FaPhone, FaTiktok } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'transparent',
          zIndex: 10,
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="200"
              height="200"
              className="d-inline-block align-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-5" id="navbarNav">
            <ul className="navbar-nav ms-auto text-uppercase">
              <li className="nav-item px-5">
                <Link className="nav-link text-white fs-5" to="/">Home</Link>
              </li>
              <li className="nav-item px-5">
                <a href="#courses" className="nav-link text-white fs-5">COURSES</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Landing Section */}
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(${landingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center h-100"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <h1 className="display-4 fw-bold">Tiếp sức cho tư duy trẻ bằng tiếng Anh tự tin</h1>
          <div className="mt-4">
            <a href="#contact" className="btn btn-outline-light">Tham Gia</a>
          </div>
        </div>

        {/* strengths */}
        {/* strengths */}
        <div
          className="strengths bg-white text-dark rounded shadow d-flex justify-content-between align-items-center px-4 py-3 d-none d-md-flex"
        >
          {[
            {
              title: 'Giáo viên bản ngữ',
              desc: 'Giàu kinh nghiệm',
              img: '/images/native.jpg',
            },
            {
              title: 'Trương trình giảng dạy',
              desc: 'Thực tế và vui nhộn',
              img: '/images/methods.jpg',
            },
            {
              title: 'Môi trường học tập',
              desc: 'Gần gũi và an toàn',
              img: '/images/caring.jpg',
            },
          ].map((item, idx, arr) => (
            <div
              key={idx}
              className="d-flex align-items-center px-2"
              style={{
                flex: 1,
                borderRight: idx !== arr.length - 1 ? '1px solid #ddd' : 'none',
                minHeight: '120px',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '15px',
                }}
              />
              <div>
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <p className="mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>


      </div>


      {/* Bio Section */}
      <div className="container mt-5 px-5">
        <div className="row d-flex mt-5" style={{ minHeight: "600px" }} >
          {/* Isabella Row */}
          <div className="row d-flex align-items-center">
            <div className="col-md-8 px-5 ">
              <h2 style={{ color: '#014aad' }}>Gặp Isabella Ahola</h2>
              <p>
                Xin chào! Mình là người Phần Lan, từng hoàn thành chương trình Thạc sĩ tại Đại học Tampere.
                Nhờ tiếng Anh, mình đã tìm thấy mái ấm và gia đình tại Việt Nam – vì thế, việc giảng dạy
                ngôn ngữ này không chỉ là nghề mà còn là đam mê của mình.

                Mình tin rằng việc học ngoại ngữ cần phải vui vẻ, truyền cảm hứng và gắn liền với cuộc
                sống thực tế. Phong cách dạy của mình linh hoạt, thân thiện và luôn khuyến khích học viên
                tự tin giao tiếp trong môi trường tích cực.

                Tại Truespeak, mình muốn tạo nên một không gian học an toàn và khích lệ – nơi bạn có thể
                thoải mái luyện nói, sai cũng không sao, và quan trọng nhất: mỗi buổi học đều là một hành
                trình mở rộng thế giới của chính bạn.
              </p>
            </div>
            <div className="col-md-4 text-center py-5 bg-warning rounded-top">
              <img
                src={teacher1}
                alt="Isabella Ahola"
                className="rounded-circle mb-2"
                width="150"
                height="150"
              />
              <h5>Isabella Ahola</h5>
            </div>
          </div>

          {/* Hoang Row */}
          <div className="row d-flex align-items-center ">
            <div className="col-md-8 px-5">
              <h2 style={{ color: '#014aad' }}>Gặp Hoàng Vũ</h2>
              <p>
                Xin chào! Mình là giáo viên tiếng Anh, từng sinh sống và giảng dạy 5 năm tại Phần Lan,
                 nơi mình tốt nghiệp Đại học LAB. Trải nghiệm ở châu Âu đã định hình nên phong cách 
                 giảng dạy của mình – hiện đại, thực tế và tập trung vào giao tiếp thực sự, thay vì chỉ học lý thuyết.

                Mình từng dạy cả trẻ em và người lớn, và điều mình yêu thích nhất là thấy học viên tự
                 tin hơn mỗi ngày khi sử dụng tiếng Anh. Giờ đây trở về Đà Lạt – quê hương của mình,
                  mình muốn mang tinh thần học tập châu Âu đến gần hơn với người Việt, trong một không 
                  gian ấm áp, gần gũi và đầy năng lượng.

                Tại Truespeak, mỗi buổi học mình đều giảng dạy bằng tâm huyết, sự tận tâm và mong muốn 
                rằng tiếng Anh sẽ trở thành một phần tự nhiên trong cuộc sống của bạn.
              </p>
            </div>
            <div className="col-md-4 text-center py-5 bg-warning rounded-bottom" >
              <img
                src={teacher2}
                alt="Hoang Vu"
                className="rounded-circle mb-2"
                width="150"
                height="150"
              />
              <h5>Hoàng Vũ</h5>
            </div>
          </div>
        </div>
      </div>



      {/* Courses Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4" style={{ color: '#014aad' }}>Khóa Học</h2>
        <div className="row justify-content-center">
          {[
            {
              title: 'Trẻ em (5–10)',
              img: '/images/course-kids.jpg',
              time: '2,5 tháng · 2h/lớp · 2 lớp/tuần',
              price: '4.000.000đ/khóa học',
              benefits: ['Hoạt động vui nhộn', 'Tương tác với người bản xứ', 'Xây dựng sự tự tin khi giao tiếp'],
            },
            {
              title: 'Trẻ vị thành niên (11–18)',
              img: '/images/course-teens.jpg',
              time: '2,5 tháng · 2h/lớp · 2 lớp/tuần',
              price: '4.500.000đ/khóa học',
              benefits: ['Xây dựng nền tảng cơ bản', 'Rèn luyện khả năng bày tỏ suy nghĩ', 'Chuẩn bị cho các kì thi (IELTS, TOEIC)'],
            },
            {
              title: 'Tiếng Anh giao tiếp cho người lớn',
              img: '/images/course-adults.jpg',
              time: '2,5 tháng · 2h/lớp · 2 lớp/tuần',
              price: '4.500.000đ/khóa học',
              benefits: ['Tiếng Anh cho người đi làm, du học', 'Lấy lại gốc tiếng Anh', 'Luyện tập trên tình huống thực tế'],
            },
          ].map((course, idx) => (
            <div className="col-md-4 mb-4 rounded" key={idx} id='courses'>
              <div className="course-card shadow rounded">
                <img src={course.img} alt={course.title} className="course-img" style={{ maxWidth: "100%" }} />
                <div className="course-overlay p-3 text-center bg-light">
                  <h4 style={{ color: '#014aad' }}>{course.title}</h4>

                  <div className='text-start px-5'>
                    <p><strong>{course.time}</strong></p>
                    <p><strong>{course.price}</strong></p>
                    <ul className="list-unstyled">
                      {course.benefits.map((b, i) => (
                        <li key={i}>✔ {b}</li>
                      ))}
                    </ul>
                  </div>
                  <a href="#contact" className="btn btn-warning mt-2">Đăng kí học thử</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Service Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={serviceImage} alt="Service" className="img-fluid" />
          </div>
          <div className="col-md-6 p-5">
            <h2 style={{ color: '#014aad' }}>Bạn sẽ học được gì tại TrueSpeak</h2>
            <p>Tại TrueSpeak English Hub, bạn học tiếng Anh theo cách thú vị, linh hoạt và đầy cảm hứng.
              Chúng tôi không dạy bạn chỉ để thi cử, mà để sử dụng tiếng Anh tự tin trong đời sống thực
              tế. Dù bạn là người mới bắt đầu, muốn củng cố ngữ pháp, hay luyện giao tiếp hàng ngày,
              chương trình tại TrueSpeak đều được cá nhân hóa để phù hợp với nhu cầu riêng của bạn.

              Phương pháp giảng dạy của chúng tôi được lấy cảm hứng từ nền giáo dục Phần Lan nổi tiếng –

              chú trọng vào tư duy, sự chủ động và khả năng ứng dụng ngôn ngữ. Kết hợp giữa kinh nghiệm
              thực tiễn và môi trường học thân thiện, TrueSpeak không chỉ giúp bạn giỏi tiếng Anh mà còn
              phát triển sự tự tin, tư duy phản biện và khả năng học tập suốt đời.</p>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div className="container mt-5" id="contact">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-center mb-4" style={{ color: '#014aad' }}>Liên hệ với chúng tôi</h2>

            <div className="mb-4">
              <p className="mb-2"><strong>Điện thoại:</strong> 0867754087</p>
              <p className="mb-2"><strong>Email:</strong> Truespeakhub@gmail.com</p>
              <p className="mb-4"><strong>Địa chỉ:</strong> 5/3 Ngô Thì Nhậm, phường 4, Đà Lạt</p>
            </div>

            <div className="d-flex justify-content-start gap-4 mb-4">
              <a href="https://facebook.com" className="text-primary" aria-label="Facebook"><FaFacebook size={30} /></a>
              <a href="https://instagram.com" className="text-primary" aria-label="Instagram"><FaInstagram size={30} /></a>
              <a href="https://twitter.com" className="text-primary" aria-label="Twitter"><FaTiktok size={30} /></a>
            </div>

            <div className="text-center mt-4">
              <a href="tel:0867754087" className="btn btn-success d-inline-flex align-items-center gap-2 px-4 py-2 my-3">
                <FaPhone /> Gọi ngay
              </a>
            </div>
          </div>


          <div className="col-md-6 d-flex justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.8919198611213!2d108.42328776953366!3d11.935145699268313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31716ccc5d4f1c8d%3A0xe5742d78ace022b2!2zNS8zIMSQxrDhu51uZyBOZ8O0IFRow6wgTmjhuq1tLCBQaMaw4budbmcgNCwgxJDDoCBM4bqhdCwgTMOibSDEkOG7k25nLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1746950869040!5m2!1sen!2sus"
              width="80%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Địa chỉ Truespeak English Hub"
            />




          </div>
        </div>
      </div>



      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p>© 2025 TrueSpeak English Hub. Nơi bắt đầu hành trình ngoại ngữ của bạn.</p>
      </footer>
    </div>
  );
};

export default Home;
