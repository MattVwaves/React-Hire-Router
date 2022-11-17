import PeopleListItem from "./PeopleListItem"

function PeopleList({people, hiredPeople, setHiredPeople}) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
      ))}
    </ul>
  )
}

export default PeopleList
