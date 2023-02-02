import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green300",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
  cursor: "pointer",
  fontFamily: "Roboto",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <Button>
      <span>CLick me</span>
    </Button>
  );
}
