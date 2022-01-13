import { Button, styled } from "@mui/material";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(() => ({
  borderRadius: 16,
  maxWidth: 296
}));

export const StyledButton = styled(Button)(() => ({
  textTransform:'none',
  boxShadow:'none',
  border: '1px solid black'
}));