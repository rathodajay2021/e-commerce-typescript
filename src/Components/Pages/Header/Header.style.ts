import styled from "styled-components";
import logoPic from "Assets/Images/logo.png";
import { COLORS, FONTS } from "Styles/Constants";

export const HeaderWrapper = styled.div`
  padding: 1.5rem;

  .log-wrapper {
    flex: 1;
    gap: 1rem;

    .logo {
      background-image: url(${logoPic});
      background-repeat: no-repeat;
      background-size: contain;
      width: 2.5rem;
      height: 2.5rem;
    }

    .web-title {
      font-family: ${FONTS.PRIMARY_SEMIBOLD};
      text-transform: capitalize;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.3s ease-in;
      }
    }
  }

  .right {
    gap: 2rem;

    .menu {
      gap: 2rem;

      .menu-list {
        text-transform: capitalize;

        &:hover {
          cursor: pointer;
          color: ${COLORS.ORANGE_LIGHT};
        }
      }
    }

    .search {
      background: ${COLORS.WHITE};
      border-radius: 5px;
      width: 8rem;

      .search-icon {
        cursor: pointer;
      }

      .input-outline {
        border: none;

        &:hover {
          border: 1px solid ${COLORS.BLACK_LIGHT};
        }
      }
    }
  }
`;
