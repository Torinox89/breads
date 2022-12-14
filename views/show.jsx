const React = require('react')
const Default = require('./layouts/Default')


//Set Up View for the Show Route
function Show ({bread, index}) {
  // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
          <h2>Show Page</h2>
          <h3>{bread.name}</h3>
          <p>
            and it
            {
              bread.hasGluten
              ? <span> does </span>
              : <span> does NOT </span>
            }
            have gluten.
          </p>
          <img src={bread.image} alt={bread.name} /> 
          <p>{bread.getBakedBy()}</p>     
          <li>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
          </li>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
          </form>
          <div className="backButton">
          <a href="/breads"><button>Go back to the index</button></a>
         </div>
        </Default>
      )
  }
 module.exports = Show
 