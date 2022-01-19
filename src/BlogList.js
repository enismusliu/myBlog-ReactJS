const BlogList = (props) => {
    const blogs = props.blogs;
    const titulli = props.title;

    return (
        <div className="blog-list">
            <h2>{titulli}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList;