//CORE
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

//ICON
import { RiShoppingBagFill } from "react-icons/ri";

//CUSTOM
import { HeroWrapper } from "./Hero.style";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  const { t: translate } = useTranslation();

  return (
    <HeroWrapper>
      {/* left side */}
      <Box className="h-sides">
        <Typography className="text-1">
          {translate("hero.leftMenu.title")}
        </Typography>
        <Box className="text-wrapper flex f-column">
          <Typography className="text-2 title">
            {translate("hero.leftMenu.subtitle")}
          </Typography>
          <Typography className="text-2 subtitle">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            explicabo eos dolor labore excepturi rem.
          </Typography>
        </Box>
      </Box>
      {/* middle side */}
      <Box className="middle-wrapper flex f-h-center">
        <Box className="blue-circle"></Box>
        <Box className="cover-img"></Box>
        <Box className="cart-2 flex f-v-center">
          <RiShoppingBagFill className='shopping-bag-icon' />
          <Box className="sign-up flex f-v-center">
            <Typography className="text">best sign up offers</Typography>
            {/* <IconButton className="arrow-icon"> */}
              <BsArrowRight className="arrow-icon"/>
            {/* </IconButton> */}
          </Box>
        </Box>
      </Box>
      {/* right side */}
      <Box className="h-sides">
        <Box className="traffic flex f-column">
          <Typography className="title">1.5m</Typography>
          <Typography className="subtitle">monthly traffic</Typography>
        </Box>
        <Box className="customers">
          <Typography className="title">100k</Typography>
          <Typography className="subtitle">happy customers</Typography>
        </Box>
      </Box>
    </HeroWrapper>
  );
};

export default Hero;
