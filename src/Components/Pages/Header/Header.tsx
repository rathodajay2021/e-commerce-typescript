//CORE
import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";

//ICONS
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

//CUSTOM
import { HeaderWrapper } from "./Header.style";
import { LANGUAGES } from "Helpers/Constants";
import { useLang } from "Context/language";
import { languageType } from "Types/Types";

const Header = () => {
  //   const SearchRef = useRef<HTMLElement>(null);
  const { t: translate } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { lang, langHandler } = useLang();

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderWrapper className="flex">
      <Box className="log-wrapper flex f-v-center">
        <Box className="logo" />
        <Typography className="web-title" component={"span"}>
          {translate("header.title.amazon")}
        </Typography>
      </Box>
      <Box className="right flex f-v-center f-h-center">
        <Box className="menu flex">
          <Typography className="menu-list">
            {translate("header.navList.collections")}
          </Typography>
          <Typography className="menu-list">
            {translate("header.navList.brands")}
          </Typography>
          <Typography className="menu-list">
            {translate("header.navList.new")}
          </Typography>
          <Typography className="menu-list">
            {translate("header.navList.sales")}
          </Typography>
          <Typography
            className="menu-list"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              setAnchorEl(event.currentTarget)
            }
          >
            {lang.language}
          </Typography>
        </Box>
        <TextField
          className="search"
          size="small"
          autoComplete="off"
          placeholder="search..."
          //   ref={SearchRef}
          InputProps={{
            classes: {
              focused: "input-focused",
              notchedOutline: "input-outline",
            },
            startAdornment: (
              <InputAdornment
                position="start"
                // onClick={() => SearchRef.current?.focus()}
              >
                <AiOutlineSearch className="search-icon" />
              </InputAdornment>
            ),
          }}
        />
        <IconButton>
          <CgShoppingBag />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {LANGUAGES.map((language: languageType, index: number) => (
          <Box key={language.id}>
            <MenuItem
              onClick={() => {
                langHandler && langHandler(language);
              }}
              sx={{
                textTransform: "capitalize",
              }}
            >
              {language.language}
            </MenuItem>
            {index < LANGUAGES.length - 1 && <Divider />}
          </Box>
        ))}
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
