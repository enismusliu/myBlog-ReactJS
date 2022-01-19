import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
     const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Enis1', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Enis2', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Enis3', id: 3 }
     ])
    return (
        <div className="home">
            <BlogList blogs={blogs} title={"Blogs!"} />
        </div>
    );
}

export default Home;
