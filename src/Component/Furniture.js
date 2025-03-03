import React from 'react'
import './Furn.scss';

const Furniture = () => {
  return (
    <div>
      <div className="font-sans text-gray-800">
      <section className="text-center p-12">
        <h2 className="text-sm uppercase tracking-widest">Furniture Store</h2>
        <h1 className="text-4xl font-bold my-4">
          Discover the Artistry of Modern <br /> Contemporary Furniture
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Experience the elegance and functionality of cutting-edge design where
          luxury meets innovation in every piece for ultimate relaxation.
        </p>
        <div className="mt-8">
          <img src="https://s3-alpha-sig.figma.com/img/e48d/3a4a/78d69b1439385a244cdcbdc8493e7d9e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B-WAhMJp2SFMDIA6gQQ62KHUtTze8opBmD28xocipulzaLwrYoqJwSXLdywrdowfmkHt2dQpsxROYXlf5A5sIgFImR0TZa632U2a~~-Ly1rw5hl0hA4icbX9JkqllaLKFme722XfCvorxZO7BhaCOTXxBtynSuYvWzoik4qUnJEEARh~f~5tfF-Q3ZGam7mYTsBYb7tMh10fBappimB-rlg0lG4QnNNx0wvB5pv6R7LLofhUuomBhpoSH9zno-WGCk54QPRJGbjR8skntp7CZKn9HTm1lqu1v8xosNAZgqP8j3YMtQeZkZCYrV5PcaD7KISZnCOTSFVCXWz9jdjZYQ__" alt="Modern Couch" className="w-full max-w-4xl mx-auto" />
        </div>
      </section>
    </div>
    </div>
  )
}

export default Furniture
