import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div className='p-5 bg-slate-200 m-5 rounded-xl text-left'>
                <h3 className='text-3xl'>What is Context api</h3>
                <p className='mt-3 text-justify'>Context api used for avoid props drilling. If we have to pass a data from a parent component to it's child's child's child's child's child, We have to pass the props from parent to child component and then it's child component. There is no other way to send props directly. So we have to use Context api. This is so useful thing for developer. If we want to send data directly we have to use context api. First we have to create a context. To create a context we have to use 
                const MyContext = React.createContext(defaultValue). And we have to use the MyContext.provider and pass a value . And Then we have to use the context. Then we can use the context everywhere. The props drilling is a very time spending and a non efficient way. So We have to use the ontext api. Context api also simplifies the code.</p>
            </div>
            <div className='p-5 bg-slate-200 m-5 rounded-xl text-left'>
                <h3 className='text-3xl'>What is semantic tag</h3>
                <p className='mt-3 text-justify'>A semantic tag is use for increase code read ability. Sematic tag provides the information of the element. It has a read able name. Like where we are creating a navbar we use nav tag. It works like div but it tells us that it is a nav. And a browser will know what the element is. It also helps us for search engine optimization(SEO). Like where we are using article tag the browser knows that this is a blog or article website. There are so many semantic tags like section, main, header, nav, article, aside, footer etc. We can use these tags in our website. And it's a quiet good practice to using semantic tags in webpage. And it makes web page more informative. And lets browser know about the layout.</p>
            </div>
        </div>
    );
};

export default Blogs;