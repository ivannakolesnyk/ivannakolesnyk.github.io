import { Stack, Typography, useTheme, Paper } from "@mui/material";
import Carousel from "../Home/Carousel.tsx";
import Section from "../Home/Section.tsx";
import Divider from "../../assets/img/testimonials/divider.svg";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";

interface TestimonialProps {
  name: string;
  image_url: string;
  comment: string;
  rating: number;
}

export default function TestimonialSection() {
  const theme = useTheme();
  const items = [
    <Testimonial
      name={"Sean 25"}
      image_url={require("../../assets/img/testimonials/sean.png")}
      comment={
        "Mocha Nooka Cafe is my favorite spot for a chill, hip atmosphere. The coffee is always on point and the staff are super helpful. A definite must-visit for anyone who's looking for a unique cafe experience!"
      }
      rating={5}
    />,
    <Testimonial
      image_url={require("../../assets/img/testimonials/john.png")}
      name={"John 65"}
      comment={
        "I've been coming to Mocha Nooka Cafe for years and it's never disappointed. The coffee is always freshly brewed and the food is always delicious. It's a great spot for a quick break, or a leisurely chat with friends."
      }
      rating={4}
    />,
    <Testimonial
      image_url={require("../../assets/img/testimonials/toni.png")}
      name={"Toni 16"}
      comment={
        "I love coming to Mocha Nooka Cafe! It's the perfect spot to hang out with friends and enjoy something tasty and refreshing. The atmosphere is always chill and the staff are really friendly. Highly recommended!"
      }
      rating={4}
    />,
  ];

  return (
    <>
      <Stack bgcolor={theme.palette.primary.light}>
        <img src={Divider} alt={""} style={{ transform: "scaleX(-1)" }} />
        <Section sx={{ my: -1 }}>
          <Typography
            variant="h2"
            color={"primary.contrastText"}
            sx={{ margin: "0 auto", p: 6 }}
          >
            What People Are Saying About Us
          </Typography>
          <Carousel items={items} infinite />
        </Section>
        <img
          src={Divider}
          alt={""}
          style={{ transform: "scale(1, -1)", marginBottom: -1 }}
        />
      </Stack>
    </>
  );
}

function Testimonial(props: TestimonialProps) {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<StarIcon color="secondary" sx={{ fontSize: "20" }} key={i} />);
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{ py: 6, pl: 6, pr: 6, maxWidth: 500, margin: "0 auto" }}
      >
        <Stack alignItems={"left"} spacing={2}>
          <Stack direction="row" sx={{ mb: 1 }}>
            <Avatar
              src={props.image_url}
              alt={""}
              sx={{ width: 72, height: 72 }}
            />
            <Stack
              alignItems={"flex-start"}
              sx={{ ml: 2, flexGrow: 1, justifyContent: "space-between" }}
            >
              <Typography variant="h6">{props.name}</Typography>
              <Stack direction="row">
                {stars}
                <Typography variant="subtitle1" color="secondary">
                  ({props.rating}/5)
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography sx={{ mb: 2 }}>
            <q>{props.comment}</q>
          </Typography>
        </Stack>
      </Paper>
    </>
  );
}
