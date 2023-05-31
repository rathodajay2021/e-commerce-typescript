//CORE
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//CUSTOM
import { SliderWrapper } from "./Slider.style";
import { SliderProducts } from "Data/products";
import { SliderProductsType } from "Types/Types";

const Slider = () => {
  return (
    <SliderWrapper>
      <Swiper
        // modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        // slidesPerGroup={1}
        loop={true}
        // loopFillGroupWithBlank={true}
      >
        {SliderProducts.map((product: SliderProductsType) => (
          <SwiperSlide key={product.id}>
            <Box className="product flex f-h-space-between">
              <Box className="product-info flex f-column f-h-space-between">
                <Box className="product-details flex f-column">
                  <Typography className="name">{product.name}</Typography>
                  <Typography className="detail">{product.detail}</Typography>
                </Box>
                <Typography className="price">{product.price}</Typography>
                <Typography className="shop-now">Shop now</Typography>
              </Box>
              <img src={product.img} alt="" className="product-img" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

export default Slider;
