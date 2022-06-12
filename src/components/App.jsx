import Panel from "./Panel";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Initialize font awesome icons
library.add(fas);

function App() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-md-8 col-12'>
          <Panel />
        </div>
      </div>
    </div>
  );
}

export default App;
