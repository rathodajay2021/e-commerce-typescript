import { COLORS, FONTS } from "Styles/Constants";
import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;

  .swiper {
    width: 70%;
    height: 12rem;
    position: unset;
  }

  .swiper-slide {
    background: ${COLORS.WHITE};
    display: flex;
    border-radius: 10px;
    padding: 1rem;
    overflow: hidden;
    position: relative;
  }

  .swiper-button-prev, .swiper-button-next{
    color: ${COLORS.TEXT_LIGHT};
  }

  .product {
    width: 100%;

    .product-info {
      .product-details {
        .name {
          font-size: 1.4rem;
          font-family: ${FONTS.PRIMARY_MEDIUM};
        }

        .detail {
          font-size: 0.7rem;
        }
      }

      .price {
        font-size: 2rem;
        font-family: ${FONTS.PRIMARY_SEMIBOLD};
      }

      .shop-now {
        font-size: 0.6rem;
        border: 1px solid ${COLORS.BLACK};
        padding: 5px 10px;
        width: max-content;
        border-radius: 15px;
      }
    }

    .product-img{
        transform: rotate(-20deg);
        position: absolute;
        right: 0;
        width: 40%;
        height: 100%;
        bottom: -20%;
    }
  }
`;
