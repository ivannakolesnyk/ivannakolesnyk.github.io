import { Stack, Typography, useTheme } from "@mui/material";
import Carousel from "./Carousel";
import Section from "./Section";
import useFetch from "../../../hooks/useFetch";
import { Testimonial } from "./Testimonial";

const divider = `${process.env.PUBLIC_URL}/assets/img/testimonials/divider.svg`;

/**
 *
 * The TestimonialSection component is a React functional component that displays
 * a section containing customer testimonials. The section includes a heading and a
 * carousel of individual testimonials, each consisting of a name, avatar, star rating,
 * and a comment. The component fetches testimonial data using the useFetch custom hook.
 * This component is designed to showcase positive customer feedback and build trust
 * with potential customers visiting the site.
 * @returns {JSX.Element} The JSX code for the TestimonialSection component.
 */
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

export { TestimonialSection };
