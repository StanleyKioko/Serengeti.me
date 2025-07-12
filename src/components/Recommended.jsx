import React from 'react'

const Recommended = () => {
  return (
    <div>
      <h1>Recommended Species</h1>
      <p>Discover more about these amazing animals.</p>
      <div>
        {/*Card Area*/}
        <div className="card">
          <h2>Cheetah</h2>
          <p>The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph.</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <h2>Elephant</h2>
          <p>Elephants are the largest land mammals on Earth and are known for their intelligence.</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <h2>Giraffe</h2>
          <p>Giraffes are the tallest mammals, with long necks that help them reach high leaves.</p>
          <button>Learn More</button>
        </div>
        <div>
            <h2>Aquatic</h2>
            <h2> Humpback Whales</h2>
            <p>Humpback whales are known for their acrobatic breaches and complex songs.</p>
            <button>Learn More</button>
        </div>
      </div>
      {/* News Letter */}
      <div>
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated on the latest news and conservation efforts in the Serengeti.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Recommended
