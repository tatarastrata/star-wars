### [DEMO](http://tamara-ostapets.github.io/star-wars)
### Instructions
You need to create a simple web application which will use [The Star Wars API](https://swapi.dev/)
* Displaying all films on a single page
* Search input with live updates
* Sort entities by name
* When click on any entity show the detailed information about (e.g. click on the film "A New Hope" will show detailed information and all entities in this film(starships and planets), so you can go recursively through them) Deploy code to GitHub Pages - required
#### 🙋‍♀️ Note from me (job applicant)
Please, take to your consideration that I've implemented the more complicated solution with Search input with live updates. I've used `useMemo`, `useCallback` hooks with a 1 sec delay. I realize that there is nothing to optimize but I decided to implement this more advanced and complicated solution. It's not a problem for me to implement an easier solution with no delay but I think, this one is more graceful.