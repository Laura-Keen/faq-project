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

## Improvements
____
*If I had more time, here are some finishing improvements I would've liked to figure out how to make work...*

### **Responsive Design**

I would have liked to make this design mobile responsive. 
I probably would have used media queries to do that, but I'm not familiar enough with how media queries work to be able to add them to this project on time. Once handed in, I will be going back and studying how to use media queries and make the design more responsive.

### **Footer**

I wanted to be able to stick the footer to the bottom of the page so that it is always at the bottom.
I attempted this in a few ways but couldn't get it to work:

*Attempt 1:* Adding absolute positioning and a bottom of 0 to the footer styling.
```
.footer {
  position: absolute;
  bottom: 0;
}
```
Kept footer at the bottom but covered up the other elements on the page when zooming in.

*Attempt 2:* Adding sticky positioning and a bottom of 0 to the footer styling.
```
.footer {
  position: sticky;
  bottom: 0;
}
```
Same problem - kept footer at the bottom but covered up the other elements on the page when zooming in.

### **Icon Quality**

I exported the icons as pngs from the Figma design. If I could do this challenge again I would either use the unicode icons or I would have liked to try and export a higher quality version of the icons so that they wouldn't be pixelated when the user zooms in.

### **Icon Alignment**

The plus and minus icons in the FAQ are not aligned properly with the text.
I attempted to achieve this in a few ways but couldn't get it to work:

*Attempt 1:* Adding top padding to the plus and minus styling.
```
.plus {
  padding-top: 5px;
}

.minus {
  padding-top: 5px;
}
```
No changes made.

*Attempt 2:* Adding top margin to the plus and minus styling.
```
.plus {
  margin-top: 5px;
}

.minus {
  margin-top: 5px;
}
```
Addded top margin to entire FAQ section. 

*Attempt 3* Wrapped icons in a `</div>` with a class of `collapse-icons` and gave a top padding.
```
.collapse-icons {
  padding-top: 5px;
  display: inline-block;
}
```
Again, this gave top padding to the whole FAQ section. 

### **Bottom Border**
I wanted to remove part of the left section of the bottom border so that it didn't extent to under the plus and minus icons.

*Attempt 1:* Tried making the border width a percentage of the page.
This was difficult because the border bottom is part of the `faq` class which also contains the icons. Moving the icons outside of the `faq` class would break the JavaScript.
```
.faq {
  border-bottom: 1px solid #7AC7C4;
  border-bottom-width: 95%;
}
```
Didn't do anything to the code.

*Attempt 1:* Tried changing border width with pixels.
```
.faq {
  border-bottom: 1px solid #7AC7C4;
  border-bottom-width: 50px;
}
```
Made the border thicker.