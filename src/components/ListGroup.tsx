import { MouseEvent, useState } from 'react'

function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  // items = []

  // option
  const message = items.length === 0 ? <p>No item found</p> : null

  // option
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null
  }

  // Evend handler
  const handleClick = (event: MouseEvent) => console.log(event)

  // State management
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>List</h1>
      {/* Recomended */}
      {items.length === 0 && <p>No item found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
