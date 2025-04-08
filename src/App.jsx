import { Routes, Route } from "react-router-dom";
import ThreadsListPage from "./pages/ThreadsListPage";
import CreateThreadPage from "./pages/CreateThreadPage";
import ThreadPage from "./pages/ThreadPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadsListPage />} />
        <Route path="/threads/new" element={<CreateThreadPage />} />
        <Route path="/threads/:threadId" element={<ThreadPage />} />
      </Routes>
    </div>
  );
}

export default App;
