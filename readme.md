# FAQ Page - InkTrap

## Task 
____

We've been asked to build an FAQ page as part of a larger website. The page features questions that expand to show an answer when clicked, as well as a header and footer.

All content on the page will eventually come from a Content Management System, meaning its length and composition may be varied.

The page needs to deliver an excellent experience for all users, across both mobile and desktop devices.

## Notes
____

- You can use any HTML or CSS techniques you like to build the page.

- Avoid using front-end frameworks like Bootstrap and Foundation, or application frameworks like React and Vue.

- The design doesn't include hover/focus states for interactive elements. Include these as you see fit.

- The design doesn't include mobile versions of the screens. Adapt the design while coding to provide an appropriate experience on smaller devices.

- We’ll be reviewing the page in Google Chrome on macOS and Safari on iOS. No other browser testing is required. 

## Planning
____

### *Components:*

**Header Section**
- `*` - for all elements (use for max width)
- `container` - for entire site

**Header Section**
- `header-box` - for header section
- `h1` - for main header
- `h2` - for sub heading

**Main Body**
- `main-section` - for containing whole faq section
- `faq` - to wrap faqs 
- `faq-button` - wrap faq's buttons 
- `faq-wrapper` - wrap faq's buttons with the content
- `content` - contain answer to the questions
- `live-chat` - live chat button
- `collapsible` - assign class to faq buttons to make them collapsible with JS

**Footer**
- `footer` - contain text to send an email