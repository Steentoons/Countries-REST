# Frontend Mentor - REST Countries API with color theme switcher

## Technologies used in the Project
- React Js
- Axios
- React Hooks

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