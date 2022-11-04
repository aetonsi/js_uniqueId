# js_uniqueId
Very simple function to generate a unique id.

# Usage
```javascript
// import the function
import uniqueId from './uniqueId.js';

// use it
const myId = uniqueId();
// pass a transformer function if you wish
const myCustomId = uniqueId(id => 'myprefix_' + id + '_mysuffix');
```

# Technical info
- Uniqueness is enforced simply by skipping 1 millisecond (empty loop), so that the generated id (timestamp) will be always unique.
- Please pay attention: calling this function 1000 times in a row means blocking the thread for at least 1 second (1000 milliseconds)
