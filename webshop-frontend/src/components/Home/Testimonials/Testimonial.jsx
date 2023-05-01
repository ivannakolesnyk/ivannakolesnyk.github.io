import StarIcon from "@mui/icons-material/Star";
import { Paper, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

/**
 *
 * The Testimonial component is a React functional component used within the
 * TestimonialSection to display individual customer testimonials. Each testimonial
 * consists of an avatar, name, star rating, and a comment. This component helps
 * visually present customer feedback in an organized and appealing manner.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the customer giving the testimonial.
 * @param {string} props.image_url - The URL of the customer's avatar.
 * @param {string} props.comment - The testimonial comment provided by the customer.
 * @param {number} props.rating - The star rating given by the customer (out of 5).
 * @returns {JSX.Element} The JSX code for the Testimonial component.
 */
export function Testimonial(props) {
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
