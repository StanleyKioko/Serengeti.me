import React from 'react'

const Endangered = () => {
  return (
    <div>
      <h1>Endangered Species</h1>
      <p>Learn about the endangered species of the Serengeti and their conservation.</p>
      <div>
        {/*Card Area*/}
        <div className="card">
          <h2>Black Rhino</h2>
          <p>The black rhinoceros is critically endangered, with only a few thousand left in the wild.</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <h2>African Wild Dog</h2>
          <p>These social animals are endangered due to habitat loss and human-wildlife conflict.</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <h2>Grevy's Zebra</h2>
          <p>With fewer than 2,000 individuals remaining, Grevy's zebra is the most endangered zebra species.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Endangered
