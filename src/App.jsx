import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data=[
  {
    image:'/images/1.jpg',
    title:'Iphone 5G Phone',
  },
  {
    image:'/images/2.jpg',
    title:'Samsung 5G Phone',
  },
  {
    image:'/images/3.jpg',
    title:'Intel 5G Phone',
  },
  {
    image:'/images/4.jpg',
    title:'Poco 5G Phone',
  },
  {
    image:'/images/5.jpg',
    title:'Techno 5G Phone',
  }
]

function App() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className='h-screen bg-slate-600 pt-10'>

      <div className='w-3/4 m-auto '>
      <Slider {...settings}>
        {
          data.map((item,index)=>{
            return(
              <div key={index} className='bg-white'>
                <div>
                  <img src={item.image} className='w-60 h-60 object-contain block m-auto '/>
                </div>

                <div className='p-6 bg-blue-600'>
                  <p className='font-semibold text-white text-center'>{item.title}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
      </div>
    </div>
  );
}

export default App;
