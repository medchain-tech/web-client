# Project Structure

This is an article put together to give a new dev to this project some insight on how the project works..

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

## ROUTING
Since this is not an SSR (Server Side Rendered) project, the pages have to be setup custom, in the `src/index.tsx` file. Read the documentation for solid router to get what's going on there. [Solid Router Github Page](https://github.com/solidjs/solid-router)
