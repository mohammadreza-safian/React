import Home from "./pages/Home/Home";
import {Route,Routes} from 'react-router-dom'
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/Articles/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<AboutUs />}  />
        <Route path="/article/:id" element={<ArticlePage />}  />
        <Route path="/create-article" element={<CreateArticle />}  />
        
      </Routes>
        
    </div>
  );
}

export default App;
