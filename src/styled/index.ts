import { Button, styled } from "@mui/material";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(() => ({
  position: 'relative',
  width: 'auto',
  maxWidth: 414,
  minWidth: 280,
}));

export const StyledButton = styled(Button)(() => ({
  textTransform:'none',
  boxShadow:'none',
  border: '1px solid black'
}));