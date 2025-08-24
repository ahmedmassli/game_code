# 🎮 Website Design and Implementation

This project is a responsive, accessible, and user-friendly website designed to showcase a gaming-related platform. The site is built with HTML, CSS, and JavaScript, and focuses on clean design, smooth navigation, and mobile optimization using modern web technologies.

## 📁 Project Structure

The site is structured with intuitive navigation and semantic HTML to support both accessibility and SEO. It includes the following key sections:

### 🧭 Navigation Menu

- **Home**: Landing page.
- **About Us** (submenu):
  - Events
  - Contact Us
  - Membership
- **Games** (submenu):
  - Register
  - Deals

Navigation is handled via a traditional nav bar and a mobile-friendly **SlickNav** menu that activates at a screen width of 767px. Additional media queries handle layout adjustments at 479px and 900px.

## 🎨 Design and Styling

- **Color Scheme**: Inspired by the company’s original logo, the site uses complementary shades of light/dark blue and light/dark pink.
- **Typography**: Consistent use of `Arial, Helvetica, sans-serif` across all pages.
- **Responsive Design**: Built using CSS media queries and SlickNav for adaptive layouts.

## 🧱 Semantic Structure

The following HTML5 semantic elements are used:

- `<header>`: Contains the site logo (linked to home) and company name.
- `<main>`: Holds the primary page content.
- `<footer>`: Includes a copyright.
- `<meta>` tags, including viewport, ensure responsive scaling.

ARIA roles and descriptive `alt` tags are used throughout to improve accessibility. Heading levels (`<h1>`, `<h2>`, etc.) are correctly structured for screen readers and SEO.

## 📄 Forms & Validation

Two main forms are used:

- **Register Form**:
  - Validated using `register.js` for correct field input formats.
  - Uses `focus()` to enhance accessibility.
  - Redirects to the homepage on success (due to the absence of backend).
- **Contact Us Form**:
  - Uses HTML5 `required` attributes for basic validation.
  - Also redirects to the homepage after submission.

## 📱 JavaScript & Interactivity

- Uses **jQuery** for DOM manipulation and interactivity.
- **SlickNav** is initialized within `$(document).ready()` to ensure the mobile menu loads properly.
- `register.js` handles client-side validation and dynamic form behavior.

## 🌍 Embedded Features

- A **Google Maps iframe** is embedded in the Contact Us page to provide location guidance.



## 📌 Author

**Ahmed Massli**  
📅 Date: April 7, 2025
