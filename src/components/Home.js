import { Link } from 'react-router-dom';
import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
  import { Swiper, SwiperSlide } from "swiper/react";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
  // import required modules
  import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <>
      <div className='grid bg-gray-100 pt-16 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <div className='max-w-xl'>
            <h1 className='mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-4xl lg:mt-4 lg:text-3xl xl:text-4xl'>
              Need a Loan?
              <br />
              <span className='text-indigo-500 dark:text-indigo-600'>
                You can get it with your digital assests.
              </span>
            </h1>
            <p className='mt-2 text-gray-600 dark:text-white sm:text-xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione autem ipsum voluptatem, fuga vel laborum eius laudantium iste culpa sed blanditiis, et suscipit velit ea quisquam. Distinctio in dolores placeat.
            </p>
            <img
              src='/images/hero.png'
              alt='Hero-image'
              className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden'
            />
            <div className='mt-4 space-x-1 sm:mt-6'>
              <a
                href='/'
                className='focus:outline-none inline-block transform rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-indigo-600 dark:bg-indigo-600  sm:text-base '
              >
                Get Started
              </a>
              <a
                href='/'
                className='focus:outline-none inline-block rounded-lg bg-gray-300 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base'
              >
                Know more
              </a>
            </div>
          </div>
        </div>

        <div className='relative m-3 hidden lg:block 2xl:col-span-3'>
          <img
            src='/images/hero.png'
            alt='Hero-image'
            className='mt-10 absolute inset-0 h-[30rem] w-[40rem] rounded object-cover object-center'
          />
        </div>
      </div>

      {/* // */}
      <div className='grid bg-gray-100 pt-16 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='relative ml-10 hidden lg:block'>
            <img
                src='/images/loan-arm.png'
                alt='Hero-image'
                className='absolute inset-0 h-full w-full rounded object-cover object-center'
            />
        </div>

        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <h1 className='mt-2 text-xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-4xl lg:mt-4 lg:text-2xl xl:text-3xl'>No collateral, just social proofs</h1>
          <p className='mt-8 text-gray-600 dark:text-white sm:text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione autem ipsum voluptatem, fuga vel laborum eius laudantium iste culpa sed blanditiis, et suscipit velit ea quisquam. Distinctio in dolores placeat.
          </p>
          <img
            src='/images/loan-arm.png'
            alt='Hero-image'
            className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden'
          />
        </div>
      </div>


        
      <div className='grid bg-gray-100 pt-10 dark:bg-gray-700 grid-cols-2 w-full pb-10'>
        <div className='relative ml-5 mx-auto w-[42rem] px-4 py-4'>
          <h1 className='mt-2 text-xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-4xl lg:mt-4 lg:text-5xl'>Social proofs are cool</h1>
          <p className='mt-8 text-gray-600 dark:text-white sm:text-xl'>
            Here's how -- adipisicing elit. Ratione autem ipsum voluptatem, fuga vel laborum eius laudantium iste culpa sed blanditiis, et suscipit velit ea quisquam. Distinctio in dolores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ad, atque ut impedit modi soluta assumenda perspiciatis consectetur blanditiis deserunt inventore rerum delectus. Soluta accusamus aliquam tempore praesentium ipsam vitae. adipisicing elit elit. Ipsum, ad, atque ut impedit modi soluta assumenda perspiciatis consectetur blanditiis deserunt inventore rerum delectus. Soluta accusamus aliquam tempore praesentium ipsam vitae.
          </p>
        </div>
        <div className='mx-auto ml-[2rem] px-4 sm:max-w-xl lg:max-w-full xl:mr-0 2xl:col-span-2'>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          pagination={{
              clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="relative w-[24.5rem] sm:w-[30rem] m-auto md:w-[38rem]"
          >
            <SwiperSlide className="md:mt-1 p-2">
                <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700">
                    <img className="w-32 h-32 rounded-full mx-auto" src="./" alt="" />
                    <div className="pt-4 text-center space-y-3">
                    <blockquote className='mx-auto'>
                        <p className="text-lg font-semibold text-gray-300 mx-4 dark:text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam harum impedit in, alias tempora aliquam provident ipsa voluptas unde consequatur, nihil minima. Asperiores vero minus magnam atque a suscipit.
                        </p>
                    </blockquote>
                    <figcaption className="font-medium text-gray-500 dark:text-gray-800">
                        <div className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                        <div className="mb-2">
                        Lorem ip
                        </div>
                    </figcaption>
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide className="md:mt-1 p-2">
                <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700">
                    <img className="w-32 h-[15em] rounded-full mx-auto" src="./" alt="" />
                    <div className="pt-4 text-center space-y-3">
                    <blockquote className='mx-auto'>
                        <p className="text-lg font-semibold text-gray-300 mx-4 dark:text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam harum impedit in, alias tempora aliquam provident ipsa voluptas unde consequatur, nihil minima. Asperiores vero minus magnam atque a suscipit.
                        </p>
                    </blockquote>
                    <figcaption className="font-medium text-gray-500 dark:text-gray-800">
                        <div className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                        <div className="mb-2">
                        Lorem ip
                        </div>
                    </figcaption>
                    </div>
                </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Home;
