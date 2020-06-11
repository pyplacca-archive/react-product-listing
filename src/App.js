import React from 'react';
import './css/styles.css';
import { Option, SizeButton, StarButton, ListItem } from './components.js'
import { sizes, options, items } from './data.js'

function App() {
  return (
    <div className="App">
      <aside>
        {/* sizes section */}
        <h3>Sizes</h3>
        <div className="buttons">
          {
            sizes.map(
              (s, i) => <SizeButton size={s} key={i} />
            )
          }
        </div>
        <p id="message">Leave a star on Github if this repository was useful</p>
        <StarButton count={848} />
      </aside>
      
      <main>
        <div className="top-section">
          {/* navbar sorta  */}
          <p>16 Product(s) found</p>
          <label for_="order-by">
            Order by
            <select name="" id="order-selection">
              {
                options.map(
                  (opt, i) => <Option name={opt} key={i} />
                )
              }
            </select>
          </label>
        </div>

        <section className="listings">
            {
              items.map((info, i) => <ListItem {...info} key={i}/>)
            }
        </section>
      </main>
    </div>
  );
}

export default App;

/* 
  David Placca
  Codetrain Gen 14
  React part 2, Exercise 1
*/
