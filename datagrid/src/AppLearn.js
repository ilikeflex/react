
import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [objectCount, setObjectCount] = useState({sort:{}, 
    filter: {
        athlete: {
            filterType: 'text',
            type: 'startsWith',
            filter: 'mich'
        },
        age: {
            filterType: 'number',
            type: 'lessThan',
            filter: 30
        }
    }})  
  
  useEffect(() => {
    console.log('useeffect objectCount', objectCount)
    if (typeof(objectCount) == "undefined") return
    //let localobjectCount = JSON.parse(objectCount);
    console.log('Inside useEffect ', objectCount)
  }, [JSON.stringify(objectCount)]);
  
  return (
    <div>
      <h2>Count</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increase normal count
      </button>
      
      <h2>Object Count</h2>
      <p>You clicked {objectCount.count} times</p>
      <button onClick={() => {
          objectCount.count += 1
          setObjectCount(objectCount)
        }}>
        Broken increase of the object count
      </button>
      
      <br/>
      <br/>
      
      <button onClick={
          () => setObjectCount(
            {
              ...objectCount, 
              count: objectCount.count + 1
            })
        }>
        Functioning increase of the object count
      </button>
      
      <br/>
      <br/>
      <button onClick={
          () => setObjectCount(
            {
              ...objectCount, 
              count: 3
            })
        }>
        Function Increase hardcode content
      </button>

      <br/>
      <br/>
      <button onClick={
          () => setObjectCount(
            {
                sort:{},
                filter: {
                    athlete: {
                        filterType: 'text',
                        type: 'startsWith',
                        filter: 'mich'
                    },
                    age: {
                        filterType: 'number',
                        type: 'lessThan',
                        filter: 30
                    }
                }
            })
        }>
        Function Does not increase as the content is same
      </button>


      <br/>
      <br/>
      <button onClick={
          () => setObjectCount(
            {
                sort:{},
                filter: {
                    athlete: {
                        filterType: 'text',
                        type: 'startsWith',
                        filter: 'mich'
                    },
                    age: {
                        filterType: 'number',
                        type: 'lessThan',
                        filter: 3.0// change from default value
                    }
                }
            })
        }>
        Function Increase with slight change.
      </button>


      <br/>
      <br/>
      <button onClick={
          () => setObjectCount(
            {
                ...objectCount, 
                sort:{},
                filter: {
                    athlete: {
                        filterType: 'text',
                        type: 'startsWith',
                        filter: 'mich'
                    },
                    age: {
                        filterType: 'number',
                        type: 'lessThan',
                        filter: 0.00// change from default value
                    }
                }
            })
        }>
        Accessing previous value and changing it.
      </button>
                  
    </div>
  )
}

export default Counter;
//ReactDOM.render(<Counter />, document.getElementById('app'))




/*
Less complex object
import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [objectCount, setObjectCount] = useState({count: 0})
  
  
  useEffect(() => {
    console.log('useeffect objectCount', objectCount)
    if (typeof(objectCount) == "undefined") return
    //let localobjectCount = JSON.parse(objectCount);
    console.log('Inside useEffect ', objectCount?.count)
  }, [JSON.stringify(objectCount)]);
  
  return (
    <div>
      <h2>Count</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increase normal count
      </button>
      
      <h2>Object Count</h2>
      <p>You clicked {objectCount.count} times</p>
      <button onClick={() => {
          objectCount.count += 1
          setObjectCount(objectCount)
        }}>
        Broken increase of the object count
      </button>
      
      <br/>
      <br/>
      
      <button onClick={
          () => setObjectCount(
            {
              ...objectCount, 
              count: objectCount.count + 1
            })
        }>
        Functioning increase of the object count
      </button>
      
      <br/>
      <br/>
      <button onClick={
          () => setObjectCount(
            {
              ...objectCount, 
              count: 3
            })
        }>
        Function does not increase of the object count
      </button>
                  
    </div>
  )
}

export default Counter;
//ReactDOM.render(<Counter />, document.getElementById('app'))

*/