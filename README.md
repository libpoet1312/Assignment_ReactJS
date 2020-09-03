This project was created by [Create React App](https://github.com/facebook/create-react-app). The purpose of this project is to implement a simple SPA using React to show my JS skills to my future employers.

To run the project in dev mode, on an empty folder run:
##### `git clone https://github.com/libpoet1312/Assignment_ReactJS.git`
##### `npm install`
##### `npm start`


##
##### Attention:
For not to exposure neither the API url neither the token, the testing user/developer must provide their own on: `config.js`
##

I make use of [react-router-dom](https://www.npmjs.com/package/react-router-dom) because the requirements specify explicitly that "η εφαρμογή να τον πηγαίνει σε μία νέα σελίδα που θα του εμφανίζει μόνο τα αποτελέσματα της αναζήτησης."
That can be made only if we implemenent a routing mechanism. In this case I use [react-router-dom](https://www.npmjs.com/package/react-router-dom).

##

As it is not specified in the requirements given, for the ease of graphic design and Component implementation/reuseability I use [Ant-Design](https://ant.design/), a React UI library. 
##
Furthermore, this app was not developed with [redux](https://redux.js.org/) because it demands small state management, so the use of it would be an overkill.
I could use it to demonstrate my knowledge on it, but I leave it for a future assignment. :)
##

My app structure is:
* __Components__ : The stateless components, in which most rendering takes place.
    * MyHeader: The header of our app. It contains two components. The name of the applicant which is a react-router-dom [Link](https://reactrouter.com/web/api/Link)
    and a Search Component which is in fact an `<input type="text"/>`. 
    * Products: The main components of our app. It contains a [List](https://ant.design/components/list/) component that renders a vertical list of our products.
    * SearchResults: The page where the search results are shown, after a successful search.
    * Tags: A right placed [Drawer](https://ant.design/components/drawer/) that contains all products' tags, in the form of checkboxes.
    * Error404: An error page, in case the user visits something that does not exist.
    
* __Containers__ : The stateful components, in which state is stored.
    * Home: This container is the first page the user access when he/she hits the '/' URL. It fetches the categories and products
    from the API given, in its _componentDidMount_ method. \
    This container contains a basic Layout, with fixed SideBar and Header. The fixedSidebar
    contains all our products' categories, fetched from the API, where as the latter is described above.\
    In this container, the products are filtered and sorted, using the user's selections (filter by category, by tag). 

* __App.js__ : App.js serves as a routing handler (with the use of react-router-dom) between our app entry point `index.js` and the rest routes.

* __config.js__ : It stores all needed variables, our API url and the token given.
