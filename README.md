# Peter Millar UX Developer Practical

## Submission
In order to submit this practical please publish your code to a new public remote repo on your GitHub account and share us a link via email.

## Instructions

You are tasked with developing a web page based on [a design](https://www.figma.com/design/h2z4KJFwaT8h8pqYjL47Aq/UX-Developer-Practical?node-id=0-1). The design is a (fake) marketing page for a particular product but includes layout elements that are common in our work. Your solution should match the design and work well across various device sizes. The design file includes comps for desktop (1512w) and mobile (390w). You should use your best judgement in adapting the design for screen size ranges that aren't captured in the designs (such as the tablet range). Also refer to the Breakpoint Reference in the [Reference Materials](https://www.figma.com/design/h2z4KJFwaT8h8pqYjL47Aq/UX-Developer-Practical?node-id=36-498) page of the design file. You may use additional breakpoints as needed, to make the design work for different sizes.

### Dev Setup

Within the root directory you will find a project starter, ready for you to start developing. The starter uses [Vite](https://vitejs.dev/), which is a build tool that requires little config. It has already been configured in this project starter.

Some starter CSS is also provided, which includes a few utilities like color and font variables from the design. You can modify the starter code however you'd like.

For the purposes of this practical, you should not need to learn much about Vite except for a few standout things noted below.

#### Getting Started

Install dependencies
```shell
npm i
```

To run the dev server & start developing:

```
npm run dev
```

#### Static Asset URLs (Images, etc.)

Vite handles static assets in it's own way. Any static assets, such as image files, should go in the `src/public/` directory. You should reference them in your markup with a leading `/` and a path relative to the `public` directory.

For example, say you have an image in the `public` dir: `src/public/some.png`. You should reference it in your HTML like so:

```html
<img src="/some.png">
```

#### Stylesheets (CSS, SCSS)

The project is already configured to import the `style.scss` file in `main.js`. Importing the stylesheet into the JS entry point is a Vite convention—it is recommended to leave this as is to avoid build/config issues.

Sass (SCSS) is already configured to work within the project.

### Rules

You should use vanilla HTML and CSS in your solution, meaning that the following are **not allowed** for use:

- Component libraries such as React, Svelte, and Vue
- Templating languages such as Handlebars and EJS
- CSS frameworks such as Bootstrap and Tailwind

You may use JavaScript if you'd like, but there are no parts of the interface that require interactivity.

### Materials

- [Figma Link](https://www.figma.com/design/h2z4KJFwaT8h8pqYjL47Aq/UX-Developer-Practical?node-id=0-1) (design file)
- [Breakpoint Reference](https://www.figma.com/design/h2z4KJFwaT8h8pqYjL47Aq/UX-Developer-Practical?node-id=36-498) (Reference Materials page in Figma file)