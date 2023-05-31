import styled from "styled-components";
import HeroImg from "Assets/Images/hero.png";
import { COLORS, FONTS, BOX_SHADOW } from "Styles/Constants";

export const HeroWrapper = styled.div`
  padding: 0rem 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  border: 1px solid red;

  .h-sides {
    display: grid;
    grid-template-rows: 1fr 1fr;

    .text-1 {
      text-transform: uppercase;
      font-size: 1.5rem;
      width: min-content;
      display: block;
      font-family: ${FONTS.PRIMARY_SEMIBOLD};
    }

    .text-wrapper {
      width: min-content;

      .text-2 {
        color: ${COLORS.BLACK};
      }

      .title {
        font-family: ${FONTS.PRIMARY_EXTRA_BOLD};
        font-size: 2.5rem;
      }

      .subtitle {
        display: block;
      }
    }

    .traffic,
    .customers {
      text-align: right;

      .title {
        font-family: ${FONTS.PRIMARY_EXTRA_BOLD};
        font-size: 2.5rem;
      }

      .subtitle {
        text-transform: capitalize;
      }
    }
  }

  .middle-wrapper {
    align-items: baseline;
    position: relative;

    .blue-circle {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      /* z-index: -99; */
      /* position: absolute; */
      /* bottom: 0; */
      background: linear-gradient(
        135deg,
        rgba(11, 181, 255, 1) 14.09%,
        rgba(109, 211, 254, 1) 14.09%
      );
    }

    .cover-img {
      background-image: url(${HeroImg});
      background-repeat: no-repeat;
      background-size: contain;
      height: 30rem;
      width: 30rem;
      position: absolute;
      bottom: 0;
      border: 1px solid red;
    }

    .cart-2 {
      position: absolute;
      bottom: 25%;
      right: 5%;
      gap: 1rem;

      .shopping-bag-icon {
        width: 55px;
        height: 55px;
        background: ${COLORS.WHITE};
        padding: 10px;
        border-radius: 50%;
        border: 6px solid ${COLORS.BLACK};
      }

      .sign-up {
        gap: 0.5rem;
        background: ${COLORS.WHITE};
        padding: 5px 15px;
        border-radius: 15px;
        box-shadow: ${BOX_SHADOW.SHADOW_1};

        .text {
          font-size: 0.8rem;
          width: 6rem;
        }

        .arrow-icon {
          border-radius: 50%;
          border: 1px solid ${COLORS.SKY_BLUE};
          width: 30px;
          height: 30px;
          padding: 5px;
        }
      }
    }
  }
`;
