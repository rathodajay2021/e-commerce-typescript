import { HeroWrapper } from "./Hero.style";
import { Box, Typography, IconButton } from "@mui/material";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <HeroWrapper>
      {/* left side */}
      <Box className="h-sides">
        <Typography className="text-1">Skin protection cream</Typography>
        <Box className="text-wrapper flex f-column">
          <Typography className="text-2 title">Trendy Collection</Typography>
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
        <Box className="cart-2">
          <RiShoppingBagFill />
          <Box className="sign-up">
            <Typography>best sign up offers</Typography>
            <IconButton>
              <BsArrowRight />
            </IconButton>
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
