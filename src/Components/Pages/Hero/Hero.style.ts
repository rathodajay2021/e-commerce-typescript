import styled from "styled-components";
import HeroImg from "Assets/Images/hero.png";
import { COLORS, FONTS } from "Styles/Constants";

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

    .traffic, .customers {
      text-align: right;

      .title {
        font-family: ${FONTS.PRIMARY_EXTRA_BOLD};
        font-size: 2.5rem;
      }

      .subtitle{
        text-transform: capitalize;
      }
    }
  }

  .middle-wrapper {
    align-items: baseline;
    position: relative;

    .blue-circle{
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        /* z-index: -99; */
        position: absolute;
        bottom: 0;
        background: linear-gradient(135deg, rgba(11,181,255,1) 14.09%, rgba(109,211,254,1) 14.09%);
    }

    .cover-img {
      background-image: url(${HeroImg});
      background-repeat: no-repeat;
      background-size: contain;
      height: 430px;
      width: 30rem;
      position: absolute;
      bottom: 0;
      border: 1px solid red;
    }
  }
`;
