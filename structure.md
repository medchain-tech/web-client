# Project Structure

This is an article put together to give a new dev to this project some insight on how the project works..

The project is built with solidjs, a React-like framework with more performance...

```
-📁public
-📁src
	-📁assets
	-📁components
	-📁pages
	-📁layouts
	...more

```

## `📁public`
Directory for unchanged assets. Whatever is here gets copied as is, into the production folder, so an image `public/as.png`, should be referenced in the code ad `/as.png`

## `📁components`
Dir for the components of the project, typically components that are used all over the site's pages. Each component is in the following structure:
	```
		-📁ComponentName
			-📄index.tsx
			-📄index.scss
			-..other files
	```
Each component is placed into a folder because there could be multiple files relating to that project. The name `index.tsx` is just a convention to help easier imports. 

## `📁layouts` and `📁pages`
Layouts - Dir for components that persist throughout multiple pages(e.g. Navigation)
Pages - Dir for components that represent the pages on the website

## Routing
Since this is not an SSR (Server Side Rendered) project, the pages have to be setup custom, in the `src/index.tsx` file. Read the documentation for solid router to get what's going on there. [Solid Router Github Page](https://github.com/solidjs/solid-router)

## Styling
The styling of this project is custom SCSS. There is a global styles file: `src/index.scss` for variables and default behavior....

And then for each component directory, there is a `.scss` file, usually named `index.scss` that is imported into the component. There are no CSS in JS, or CSS modules, but scoping of styles is done via class names. For example


```jsx
<div class="comp">
   <img class="comp-img" src="" />
   <h3 class="comp-heading">Heading</h3>
</div>
```

```scss
.comp {
   // Styles
   &-img {
      // Image Styles
   }

    &-heading {
       // H3 styles
    }

}
```

## State
For the most part, I try to keep any manipulation of state outside of components, and just let the component react to the change of state. State is mostly handled with stores (like Svelte stores, or observables in RxJs). These stores are made by a library called nanostores. 

Example of state management with nanostores 

```ts
//index.ts
import {atom} from "nanostores"

export const $count = atom(4)
```

```tsx
import {$count} from "./index"
import {useStore} from "@nanostores/solid"


const Header = () => {
   const count = useStore($count)
   return <>
     {count()}
   </>
}
```

### Testing
Not much done in this category because the design requirements are ever-changing....


## CI
Since I've been mostly working alone, I haven't made too much use of pull requests and issues, but now with more developers, 



---

## Discrepancies between certain routes.

You may notice that some pages look very different from the current design...This is because the project had a previous design that I was working towards...and, about a week ago the design was completely changed.....

