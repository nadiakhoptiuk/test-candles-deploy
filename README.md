# 13 Candle Bar

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Technologies used:

- Next.js (app router)
- TypeScript
- Tailwind CSS
- Strapi CMS

## Vision

E-commerce website for the 13 Candle Bar online store

## Project Name

13 Candle Bar

## Project Goal

Attracting new customers and selling goods through the online store

## Target Audience

- Age: 20-45+
- Gender: Female

## Product Scope

Development of a multi-page e-commerce website for the 13 Candle Bar, whose main
field of activity is the sale of flavored products online

### Accessibility

- Intuitive design.
- Mobile-friendly.

### Performance

- Web resource available for any internet connection.

### Supported Languages

- Ukrainian
- English

### Design

[Design Layout on Figma](https://www.figma.com/file/8TJ2ei6yVHA8S8vciTGkmm/13-Candles?node-id=246%3A3772&mode=dev)

---

## 🥁 Getting Started

1. **Clone the repo**

```bash
git@github.com:SoftRyzen-internship/13candles-frontend.git

```

2. **Install dependencies** It's recommended to use npm:

```
npm install
```

3. **Run the project**

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

> Attention! The project structure is not final and can be changed at any time.

**💁‍♀️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── layout
    ├── Header
        ├── index.ts
        ├── Header.tsx
    ├── Footer
        ├── index.ts
        ├── Footer.tsx
```

</details>

---

**💁‍♀️ Reusable css classes should be placed in the `styles` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**💁‍♀️ Description of object structure**

<details>

<summary><b>💡 Structure: </b></summary>

<br/>

```

|-- components -> folder with pages
  | -- NamePage -> folder with components
    |-- NameComponent -> folders for each component
      |-- NameComponent.tsx -> main component
      |-- NameComponent.module.css -> css styles for component
      |-- index.ts -> file for re-export
      |-- type.ts -> file for type and interface

 |-- components/ui -> folder with reusable components
  |-- NameComponent -> folders for each component
    |-- NameComponent.tsx -> main component
    |-- NameComponent.module.css -> css styles for component
    |-- index.ts -> file for re-export
    |-- type.ts -> file for type and interface

|-- views -> folder with pages
  |--NamePage -> folder with page sections

|-- layout -> components that are used as a main template
|-- app -> pages and routing
|-- public -> static files
|-- styles -> global styles

<!-- You can create these folders already in work -->
|-- data -> data for the project ( from graphql, json, etc.)
|-- hooks -> custom users hooks
|-- utils -> helpers, functions, etc.
```

</details>

---

## Internationalization

If you want to add new text data and use it, create json files with same names
inside 'messages' directory in every folder with locale name

```plaintext
app/
│
└─── messages/
    │
    ├─── en/
    │    └── home.json
    │
    └─── uk/
         └── home.json

❗️Then spread file to messages object inside getRequestConfig in i18n.ts file to
merge your separate file to the big one json.

To use data from json files you need to include this hook to file component

```

import { useTranslations } from 'next-intl';

```

Get function this way and use it inside layout:

```

const t = useTranslations('Home');

<h1>{t('title')}</h1>
```

❗️ If you want to use translation in client component, simply pass it as a prop
to it.

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API. This is example of API for
component `Heading`

- ### Example

| Prop          | Default     | Description                                     |
| ------------- | ----------- | ----------------------------------------------- |
| `tag`         | `h2`        | choose the tag of title you'd need: `h1` - `h3` |
| `variant`     | `primary`   | `main`, `primary`, `secondary`, `tertiary`      |
| `children`    | `undefined` | required, any content                           |
| `className`   | `undefined` | add custom or additional css class you'd need   |
| `data-shadow` | `undefined` | add text as a shadow decoration of the element  |

- ### Logo

| Prop        | Default  | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| `position`  | `header` | place, where logo used                        |
| `aria`      | `''`     | logo aria-label                               |
| `className` | `''`     | add custom or additional css class you'd need |

- ### `Button`

| Prop         | Default | Description                                                                                          |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------- |
| `tag`        | `a`     | Choose the tag for your button: `a`, `button`. By default, it's a hyperlink (`a`).                   |
| `label`      | —       | Required. The text of the button.                                                                    |
| `href`       | —       | Optional. If provided, the button will perform a smooth scroll to the specified section on the page. |
| `className`  | —       | Optional. Add a custom or additional CSS class if needed.                                            |
| `buttonType` | —       | Optional. Define the type of the button (`button`, `submit`). Can be used with `button` .            |
| `disabled`   | —       | Optional. Determine if the button is disabled. Can be used with `button`.                            |
| `onClick`    | —       | Optional. A callback to be triggered when the button is clicked. Can used with both `a` and `button` |

- ### Slider

| Prop            | Default     | Description                                                                                |
| --------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `element`       | `undefined` | required, Functional Component that is rendered inside each slide                          |
| `data`          | `undefined` | required, data that is Used inside the Functinal Component you provided via "element" prop |
| `isLoop`        | `false`     | set to true to enable continuous loop mode                                                 |
| `isAutoplay`    | `false`     | set to true to enable autoplay                                                             |
| `isNavigation`  | `false`     | set to true to enable navigation                                                           |
| `isPagination`  | `false`     | set to true to enable pagination                                                           |
| `isInteractive` | `false`     | set to true to enable swipe on touch and grabcursor                                        |
| `className`     | `undefined` | add custom or additional css class you'd need                                              |

---
