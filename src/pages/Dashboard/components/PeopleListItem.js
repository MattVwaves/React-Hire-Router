import { Link } from "react-router-dom"

function PeopleListItem({person, hiredPeople, setHiredPeople}) {

  // console.log(person.id.value)

  return (
    <li>
      <h3>
        <Link to={`/dashboard/view/${person.id.value}`} state={{person}} 
       
        >{person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
