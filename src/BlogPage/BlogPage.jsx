import React from 'react';
import './BlogPage.scss';

const BlogPage = () => {
    return (
        <div className="blog-page">
            
            <main>
                <section className="hero">
                    <h2>Transforming Your Living Space: Top Trends in Modern Furniture</h2>
                    <p>Explore the latest trends in modern furniture design that can elevate your living space with style and functionality.</p>
                    <button className="read-article">Read Article</button>
                    <img src="https://static.vecteezy.com/system/resources/previews/023/387/041/large_2x/a-futuristic-white-minimal-interior-of-a-living-room-luxurious-interior-extra-large-sofa-design-tropical-plants-view-overlooking-the-natural-landscape-and-modern-swimming-pool-generate-ai-free-photo.jpg" alt="Living Room" />
                </section>
                
                <section className="latest-articles">
                    <h3>Latest Articles</h3>
                    <div className="articles">
                        {/* Repeat for each article */}
                        <div className="article">
                            <img src="https://www.insidedecors.com/wp-content/uploads/2024/01/Minimalist_Living_Room_with_a_WOW_factor_Feature_Image-1.jpg" alt="Minimalism" />
                            <h4>The Art of Minimalism: How to Achieve a Sleek Look</h4>
                            <p>Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, stylish living space...</p>
                            <span>Interior Design</span>
                        </div>
                        <div className="article">
                            <img src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg" alt="Sofa" />
                            <h4>Choosing the Perfect Sofa: A Guide to Style and Comfort</h4>
                            <p>Learn how to select the ideal sofa that balances style, comfort, and durability for your living room...</p>
                            <span>Interior Design</span>
                        </div>
                        {/* Add more articles as needed */}
                    </div>
                    <button className="show-all">Show All Articles</button>
                </section>
            </main>

           
        </div>
    );
}

export default BlogPage;