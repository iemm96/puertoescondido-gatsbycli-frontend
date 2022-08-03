import { Button, styled } from "@mui/material";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(() => ({
  position: 'relative',
  width: 'auto',
  maxWidth: 414,
  minWidth: 280,
  borderRadius: 10,
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px'
}));

export const StyledButton = styled(Button)(() => ({
  textTransform:'none',
  boxShadow:'none',
  border: '1px solid black'
}));