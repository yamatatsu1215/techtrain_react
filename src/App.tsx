import ThreadList from "./thread/threadList";
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import CreateThread from "./create-thread/createThread";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/threads/new" element={<CreateThread></CreateThread>}></Route>
        <Route path="/threads" element={<ThreadList></ThreadList>}></Route>
        <Route path="*" element={<Navigate to='/threads'/>}></Route>
      </Routes>
    </Router>
    {/* <UIProvider>
      <Text>
        <ThreadList />
      </Text>
    </UIProvider> */}
    </>
  )
}

export default App
