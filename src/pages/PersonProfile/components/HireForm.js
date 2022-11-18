import { useState } from "react"
import { useNavigate} from "react-router-dom"

function HireForm({hiredPeople, setHiredPeople, person}) {

  const navigate = useNavigate()

  const [wage, setWage] = useState(0)
  console.log(person)

  function handleSubmit(event) {
    event.preventDefault();

    const duplicates = hiredPeople.find(hiredPerson=> hiredPerson.name === person.name)
    if (duplicates === undefined){
      const newPerson = {...person, wage: wage}
      hiredPeople.push(newPerson)
    } 
    setHiredPeople(hiredPeople)

    navigate("/dashboard")
}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
