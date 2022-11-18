import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { useLocation } from "react-router";

function PersonProfile({hiredPeople, setHiredPeople}) {

  console.log('hired poeple in p profile', hiredPeople)

  const location = useLocation();

  const [person, setPerson] = useState(null)

  useEffect(() => {
    if (location.state) {
      
      const { person } = location.state;
      setPerson(person);
    }

  }, [location]);

  console.log({person})

  if (!person) return <p>Loading...</p>


  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
