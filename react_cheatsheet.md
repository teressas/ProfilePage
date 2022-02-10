React project
npx create-react-app your-project-name
go into the project, install dependencies (npm install axios react-router-dom@5)
npm start (to make sure the server is running)
Understand the components you need. Create all the components (rafce for the backbone of the components)
create /views folder and /components folder
views are the parent companents for each wireframe, components are the children components
start changing app.js to display components
FORMS
INPUT
add state variable for the input (const [name, setName] = useState(""))
onChange for the input (onChange = {e=> setName(e.target.value)})
SUBMIT
add submitHandler (with e.preventDefault())
attach onSubmit = { submitHandler } for form tag
Grab API (axios)
axios.get(`URL`)
	.then(res=> {
		//successful, work with the res (usually.. res.data)
	})
	.catch(err=>{
		//unsuccessful , got the error in the URL
	})
useEffect (Do the function when the page loads)
useEffect(()=>{
	// whatever you want to do when the page is loaded
},[])
If the variable inside the array changed, useEffect will run the function again

ROUTER
app.js
import {BrowserRouter, Link, Switch, Route } from "react-router-dom"

	<BrowserRouter>
		<Link to ="/about"> About </Link>  
		<Switch>  
			<Route path="/about">  
				<About />  
			</Route> 
			<Route path="/:keyword">  
				<Keyword />  
			</Route> 
		</Switch>
	</BrowserRouter>
Link -- similar to a tag
Switch -- if/else statement.. if it fits the first, go to the first
Route -- if the path fits, render the component
To grab the params , inside component
import {useParams} from "react-router-dom"

const {keyword} = useParams()
To redirect
import {useHistory} from "react-router-dom"
const history = useHistory()

history.push("REDIRECT URL")
