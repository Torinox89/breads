const React = require('react')
const Default = require('./layouts/Default')


//Add Bread Index View (sending index and whow data)
function Index ({breads, bakers, title})  {
  console.log(breads)
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        {/* This is a JSX comment. */}
        <ul>
        {
          breads.map((bread, index)=> {
            return (
              <li key={index}>
                <a href={`/breads/${bread.id}`}>
                  {bread.name}
                </a>
              </li>
            )
          })
        }
        </ul>
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker)=> {
                    return (
                        <li key={baker.id}>
                            <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                        </li>
                    )
                })
            }
        </ul>
        <h3>Breads</h3>

        <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      </Default>   
    );
}

module.exports = Index

