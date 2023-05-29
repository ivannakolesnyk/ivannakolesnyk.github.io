# Design Guideline

## Concept Phase

### Design Tone

The design should strike a balance between modern simplicity and a calm aesthetic.

### Color Scheme:

Since the company does not have official colors, we have selected peaceful and harmonious colors that align with their description. The chosen colors are:
#D9E7D5
#1F3A33

### Hierarchy and Layout:

The following elements are listed in order of importance:

- Menu/navigation bar (header): This includes the shop location and login options. It should remain fixed when scrolling.
- Hero section: Emphasize the "order now" message to encourage users to enjoy coffee at home.
- Selected products: Showcase a curated selection of products.
- Testimonials: Feature customer reviews.
- Contact information and disclaimers (footer): Provide relevant contact details and legal information.

On the front page, the sections will be organized as follows:

- Hero section (order now)
- Menu/navigation bar (header, scrolls with the page)
- Short description about the shop
- Testimonials
- Disclaimer, copyright, contact information (footer)

Other pages will follow specific layouts:

#### Menu:

- Item of the cafe
- Name of the item
- Categories for filtering
- "View all" button to show all items in a category

#### Products:

- Navigation bar on the left side
- Products with pictures and prices
- Categories
- Filters
- Sorting options

#### Single product:

- Product description
- Product image
- Price
- "Add to cart" button
- Quantity selection

#### About us:

- Brief description of the shop
- Images of the shop

#### Login page:

- Login section
- Create new user option

#### Shopping cart:

- Products in the cart (with links to the product details)
- Price, total, and quantity information
- "Delete product" button
- "Change the number of items" button
- "Go pay" button
- "Continue shopping" button

#### Profile:

- Personal information (name, email, number)
- Password change option
- Delivery information
- Orders (active and completed)
- Log out option
- Profile picture upload

## Images

Gather the available images.

1. Will there be text on images or alongside images?

Text will be placed alongside the images.

2. Will we use clear images or color overlays?

Clear images will be used.

3. Will there be image blurring?

No image blurring will be applied.

## Icons

1. Will we use icons and if so, for what purpose?

Yes, icons will be used to enhance the website's user-friendliness.

2. Colored or black-and-white/greyscale icons?

Icon colors will be based on the theme of the page.

3. What did we use for implementing icons for our website?

We used Material UI, - accessible library of React components.

## Typography

1. Font for main text: Inter

2. Should the font be Serif or Sans-Serif?

Sans-Serif fonts will be used to match the modern requirements of the company.

3. Bold or thin font?

A combination of bold and thin fonts will be used to guide users' attention effectively.

4. Rounded or sharp edges?

Mostly rounded edges will be used.

5. Define the font scale using the following guidelines:

Headlines: 7rem
Main text: 3rem

## Border Rounding

1. How rounded should the edges be, according to the theme?

The border rounding should be set at 10-20% to align with the theme.

## Shadows

1. How much shadow will be used in general, according to the theme?

In general, we won't use shadows for most elements of the layout. However, items on product and menu images will have shadows to provide a subtle depth effect and enhance their visual presentation.

## Sketching

We used software for designing Figma for our sketches based on next reasons:

### Collaborative Design:

Figma allows multiple team members to collaborate on the same project in real-time. This feature is particularly beneficial when working with a team, as it enables seamless collaboration, feedback sharing, and version control.

### Cloud-Based Design:

Figma operates entirely in the cloud, which means that sketches and design files are accessible from anywhere with an internet connection. This accessibility makes it convenient for team members to view, edit, and provide feedback on designs without the need for complex file sharing processes.

### Efficient Design Iteration:

Figma's design iteration capabilities are exceptional. Designers can quickly make changes to the sketches, experiment with different layouts, and apply design elements without disrupting the overall workflow. This flexibility enhances productivity and allows for rapid prototyping and iteration.

### Component and Style Libraries:

Figma provides an extensive library of reusable components and design styles. Designers can create and maintain a consistent design system by leveraging these libraries, resulting in a cohesive and visually appealing interface. It also ensures that design elements are easily scalable and maintainable as the project progresses.

### Interactive Prototyping:

Figma allows designers to create interactive prototypes by adding clickable elements, transitions, and animations. This feature enables stakeholders to experience the website's flow and interactions before development begins, facilitating clearer communication and reducing potential misunderstandings.

Overall, Figma's collaborative features, cloud-based functionality, efficient design iteration capabilities, component libraries, interactive prototyping, developer handoff tools, and third-party integrations make it an ideal choice for creating website sketches and design guidelines. It empowers designers to work effectively, enhance collaboration, and deliver high-quality design outcomes.

## Specific technical decisions

### React Framework for Frontend:

We chose the React framework for the frontend development of the website instead of pure JavaScript because React offers several advantages. It allows for efficient component-based development, making it easier to manage and reuse UI elements. React's virtual DOM and efficient rendering ensure optimal performance. Additionally, React has a vast ecosystem of libraries and community support, enabling faster development and easier maintenance of complex applications.

### Stripe for Payment Implementation:

We opted for Stripe as our payment implementation solution due to its robust and secure payment processing capabilities. Stripe provides a developer-friendly API, extensive documentation, and strong security measures, ensuring a seamless and safe payment experience for users. Its features, such as support for various payment methods and currencies, subscription management, and PCI compliance, make it an ideal choice for handling online payments.

### Google Maps for Find Us Page:

We integrated Google Maps into the "Find Us" page to provide users with an interactive and accurate map experience. Google Maps offers comprehensive mapping data, real-time location services, and powerful geocoding capabilities. By leveraging Google Maps, users can easily locate our shop, view directions, and explore the surrounding area. Its user-friendly interface and reliable data make it a trusted choice for delivering an intuitive and informative map experience.

## Changes in Figma

During the design process, we encountered a situation where the themes in our Figma sketches differed slightly from the final implementation on the website. After creating the entire layout in Figma, we realized that the colors we initially chose lacked sufficient contrast for optimal readability and visual appeal.

To address this, we made the decision to adjust the colors and font choices to ensure better contrast and overall harmony on the website. Additionally, we modified the images to align with the new color scheme and create a more cohesive visual experience. However, despite these changes, we remained faithful to the original layout that was carefully crafted in Figma.

By maintaining the layout consistency, we were able to preserve the intended hierarchy and structure of the website, providing users with a familiar and intuitive browsing experience.

## Conclusion

This design guideline provides a comprehensive framework for creating an official and user-friendly website. By following these guidelines, we ensured a modern and calm design tone, harmonious color scheme, clear images, and user-friendly icons. The layout prioritizes essential elements and maintains consistency across different pages. Typography is chosen to be easily readable, with rounded edges adding a touch of softness. By adhering to these guidelines, we made a cohesive and professional website that provides an excellent user experience.
