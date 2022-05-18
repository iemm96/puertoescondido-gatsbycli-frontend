import { Button, styled } from "@mui/material";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(() => ({
  position: 'relative',
  borderRadius: 16,
  width: 'auto',
  maxWidth: 414,
  height: 380,
}));

export const StyledButton = styled(Button)(() => ({
  textTransform:'none',
  boxShadow:'none',
  border: '1px solid black'
}));