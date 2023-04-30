import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Carousel from "../Home/Carousel";
import Section from "../Home/Section";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import useFetch from "../../hooks/useFetch";

const divider = `${process.env.PUBLIC_URL}/assets/img/testimonials/divider.svg`;

export default function TestimonialSection() {
  const theme = useTheme();
  const { data, isLoading, error } = useFetch("GET", "testimonials");
  const items = data?.map((testimonial) => (
    <Testimonial
      key={testimonial.id}
      name={testimonial.name}
      image_url={testimonial.testimonial_image}
      comment={testimonial.description}
      rating={testimonial.rating}
    />
  ));

  return (
    <>
      <Stack bgcolor={theme.palette.primary.light}>
        <img
          src={divider}
          alt={""}
          style={{ transform: "scaleX(-1)" }}
          aria-hidden="true"
        />
        <Section sx={{ my: -1 }} ariaLabel="Testimonials section">
          <Typography
            variant="h2"
            color={"primary.contrastText"}
            sx={{ margin: "0 auto", p: 6 }}
          >
            What People Are Saying About Us
          </Typography>
          {isLoading ? (
            <Typography>Loading testimonials...</Typography> // show loading message while fetching data
          ) : error ? (
            <Typography>Error loading testimonials</Typography> // show error message if there's an error during fetch
          ) : (
            <Carousel items={items} infinite /> // render carousel with testimonial items
          )}
        </Section>
        <img
          src={divider}
          alt={""}
          style={{ transform: "scale(1, -1)", marginBottom: -1 }}
          aria-hidden="true"
        />
      </Stack>
    </>
  );
}

function Testimonial(props) {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<StarIcon color="secondary" sx={{ fontSize: 20 }} key={i} />);
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{ py: 6, pl: 6, pr: 6, maxWidth: 500, margin: "0 auto" }}
        role="article"
        aria-labelledby={`testimonial-title-${props.name}`}
      >
        <Stack alignItems={"left"} spacing={2}>
          <Stack direction="row" sx={{ mb: 1 }}>
            <Avatar
              src={props.image_url}
              alt={`Avatar of ${props.name}`}
              sx={{ width: 72, height: 72 }}
            />
            <Stack
              alignItems={"flex-start"}
              sx={{ ml: 2, flexGrow: 1, justifyContent: "space-between" }}
            >
              <Typography
                component="h2"
                variant="h6"
                id={`testimonial-title-${props.name}`}
              >
                {props.name}
              </Typography>
              <Stack direction="row">
                {stars}
                <Typography component="p" variant="subtitle1" color="secondary">
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

export { TestimonialSection };
