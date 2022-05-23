import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen mt-12 px-5 py-5'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
                <div>
                    <p className='text-xl font-bold'>How will you improve the performance of a React Application?</p>
                    <p>
                        <ul>
                            <li>1. Keeping component state local where necessary.</li>
                            <li>2. Memoizing React components to prevent unnecessary re-renders.</li>
                            <li>3. Code-splitting in React using dynamic import().</li>
                            <li>4. Windowing or list virtualization in React applications</li>
                            <li>5. Lazy loading images in React</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <p className='text-xl font-bold'>What are the different ways to manage a state in a React application?</p>
                    <p>
                        The Four Kinds of React State to Manage
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                        There are four main types of state you need to properly manage in your React apps:
                        <ul>
                            <li>1. Local state</li>
                            <li>2. Global state</li>
                            <li>3. Server state</li>
                            <li>4. URL state</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <p className='text-xl font-bold'> How does prototypical inheritance work?</p>
                    <p>
                        Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-bold'> What is a unit test? Why should write unit tests?</p>
                    <p>
                        Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.
                        A unit is a single testable part of a software system and tested during the development phase of the application software.

                        Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs. Testing a code early on can help to define what that piece of code is really responsible for.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-bold'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                    <p>
                        <ul>
                            <li>1. If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                            <li>2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li>3. You will lose control of the state across all components.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;