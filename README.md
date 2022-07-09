# Frontend Mentor - REST Countries API with color theme switcher

## The challenge

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode 

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Technologies used in the Project
- Axios
- React Hooks
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- CSS
- Flexbox
- CSS Variables
- Semantic HTML5 markup

## What I Learnt
### Storing data from useEffect Hook

To store data in a useEffect Hook, I needed to create a state first to keep the data in. I would then use setState to store the data which can then be used by the rest of the component, or passed to the other children using props.
```
const [values, setValues] = useState("")

  useEffect(() => {
    const val = "value"
    setValues(val)
  }, [])

  console.log(values)
```
### Not to store JSX components in state
I was making a huge mistake trying to map through an array, and storing the result inside a state, so as to loop through creating the components on state change. I found a solution to that by storing different arrays in the state and looping through them, creating new components from outside React Hooks.

An example of what I did wrong... inside the useEffect
```
useEffect(() => {
// Storing the cards with all their data before setting the state...
        const card = props.countries.map((item, index) => {
          const prop = props.countries[index]
            return (
              <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
            )
        })

        const card = <CountryCard flag="flag" name="name" population="98797" region="region" capital="capital" />

        setCountryCardState(card)
}, [props.countries])
```
My fix...
```
const [displayedCountries, setDisplayedCountries] = useState([])
useEffect(() => {
  setDisplayedCountries(props.countries)
}, [props.countries])

// in the component Return...
return(
<div>
{
  displayedCountries.map((item, index) => {
            const prop = displayedCountries[index]
              return (
                <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
              )
          })
}
</div>
)
```

### Not to call a function inside a Array Filter directly
I constantly got an error on the same while trying to invoke a function directly inside the array filter method, saying that the filter is not a function...
```
const str = [
  {
    name: 'gorilla',
    age: 35
  }, 
  {
    name: 'ape',
    age: 50
  }, 
  {
    name: 'chipanzee',
    age: 40
  }
] 

const fn = (item, index) => {
  return (str[index].name === 'gorilla')
}

const filtered = str.filter(fn(item, index)) 

console.log(filtered)
```

How I fixed that... Not directly invoking a function inside the filter... It automatically provides the custom function with all the required arguments to use in expressions

```
const str = [
  {
    name: 'gorilla',
    age: 35
  }, 
  {
    name: 'ape',
    age: 50
  }, 
  {
    name: 'chipanzee',
    age: 40
  }
] 

const fn = (item, index) => {
  return (str[index].name === 'gorilla')
}

const filtered = str.filter(fn) 

console.log(filtered)
```

### The Dark Mode Effect
First I had to get the current user preferred theme stored in the browser. So that I can manipulate the app to use that as the default theme. I then changed the theme accordingly on click from the theme changer button on the navbar. I also used state to change the icons to match up to the chosen theme.

Getting the current user theme...
```
// Check user set theme mode...
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
```

Changing the theme on click...
```
// Storing and changing the theme...
  const [moonState, setMoonState] = useState()

  useEffect(() => {
    const newMoonState = props.theme === "light" ? moonImgLight : moonImgDark;
    setMoonState(newMoonState)
  }, [])

  const changeThemeHandler = () => {
    const newTheme = props.theme === "light" ? "dark" : "light";
    const newMoonState = moonState === moonImgLight ? moonImgDark : moonImgLight
    setMoonState(newMoonState)

    props.setTheme(newTheme);
  }
```

### Persistant State using React Router
I used functional components to persist the viewed country state on browser reload. I set the default state to point to the `sessionStorage` on decraration. I then used hooks on the country view page to update the `sessionStorage` on state change.

Initialization and setting the `sessionStorage`...
```
const [viewedCountryState, setViewedCountryState] = useState(JSON.parse(window.sessionStorage.getItem("viewedCountryState")))

useEffect(() => {
    window.sessionStorage.setItem(
      "viewedCountryState",
      JSON.stringify(viewedCountryState)
    );
  }, [viewedCountryState]);
```

On the country view page, subscribing to the state...
```
useEffect(() => {
    window.sessionStorage.setItem(
      "viewedCountryState",
      JSON.stringify(props.viewedCountryState)
    );
}, [props.viewedCountryState]);
```

## Author

- Frontend Mentor - [@steentoons](https://www.frontendmentor.io/profile/steentoons)
- Linkedin - [@steentoons](https://www.linkedin.com/in/steen-toons/)
- Dribbble - [@steentoons](https://www.dribbble.com/steentoons)
- GitHub - [@steentoons](https://www.github.com/steentoons)



