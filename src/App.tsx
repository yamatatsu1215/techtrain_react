import ThreadList from "./thread/threadList";
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import CreateThread from "./create-thread/createThread";
import ThreadDetail from "./thread/[id]/threadDetail";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/threads/new" element={<CreateThread></CreateThread>}></Route>
        <Route path="/threads" element={<ThreadList></ThreadList>}></Route>
        <Route path="*" element={<Navigate to='/threads'/>}></Route>
        <Route path="/threads/:threadId" element={<ThreadDetail></ThreadDetail>}></Route>
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
