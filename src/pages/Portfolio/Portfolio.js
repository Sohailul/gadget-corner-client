import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillEye } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div className='mt-12 mb-12'>
            <div className="card card-side bg-base-100 shadow-xl mb-24">
                <div className="card-body">
                    <h2 className="text-5xl font-bold">Sohailul Alam</h2>
                    <p className='text-3xl'>Web Developer</p>
                    <p className='text-xl lg:text-2xl mt-5 flex items-center'><AiOutlineMail />&nbsp; Sohailulalam@gmail.com</p>
                    <p className='text-xl lg:text-2xl flex items-center'><FaUserGraduate />&nbsp; B.Sc(Hon's) in Computer Science & Engineering</p>
                    <h2 className='mt-12 mb-5 text-4xl font-bold'>Skills</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-center'>
                        <button className="btn btn-sm btn-primary">JavaScript(ES6)</button>
                        <button className="btn btn-sm btn-secondary">React JS</button>
                        <button className="btn btn-sm btn-primary">Node JS</button>
                        <button className="btn btn-sm btn-secondary">Express JS</button>
                        <button className="btn btn-sm btn-primary">MongoDB</button>
                        <button className="btn btn-sm btn-secondary">Firebase</button>
                        <button className="btn btn-sm btn-primary">React Hooks</button>
                        <button className="btn btn-sm btn-secondary">HTML5</button>
                        <button className="btn btn-sm btn-primary">CSS3</button>
                        <button className="btn btn-sm btn-secondary">Bootstrap</button>
                        <button className="btn btn-sm btn-primary">Tailwind CSS</button>
                        <button className="btn btn-sm btn-secondary">Daisy UI</button>
                        <button className="btn btn-sm btn-primary">Laravel</button>
                        <button className="btn btn-sm btn-secondary">WordPress</button>
                        <button className="btn btn-sm btn-primary">MySQL</button>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-bold text-center mb-12 divider'><span className='text-primary'>Projects</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://live.staticflickr.com/65535/52093303459_eb128e5969_b.jpg" alt="" /></figure>
                    <div className="card-body bg-secondary text-white">
                        <h2 className="text-3xl font-bold text-center mb-2">Coders Shopping</h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline"> Node Js</div>
                            <div className="badge badge-outline"> Express JS</div>
                            <div className="badge badge-outline"> HTML5</div>
                            <div className="badge badge-outline"> CSS3</div>
                            <div className="badge badge-outline"> MongoDB</div>
                            <div className="badge badge-outline"> Bootstrap 5</div>
                        </div>
                        <p className='flex justify-center items-center gap-5 m-auto'>
                            <a href="https://coders-shopping.web.app/" rel="noreferrer" target="_blank" className='btn btn-sm btn-neutral mt-5'><span className='text-2xl'><AiFillEye /></span>&nbsp; Live</a>
                            <a href='https://github.com/Sohailul/coders-shopping' rel="noreferrer" target="_blank" className='btn btn-sm btn-neutral mt-5'><span className='text-2xl'><AiFillGithub /></span>&nbsp; GitHub</a>
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://live.staticflickr.com/65535/52093066586_828af4ab1b_b.jpg" alt="" /></figure>
                    <div className="card-body bg-secondary text-white">
                        <h2 className="text-3xl font-bold text-center mb-2">GYM WareHouse</h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline"> Node Js</div>
                            <div className="badge badge-outline"> Express JS</div>
                            <div className="badge badge-outline"> HTML5</div>
                            <div className="badge badge-outline"> CSS3</div>
                            <div className="badge badge-outline"> MongoDB</div>
                            <div className="badge badge-outline"> Bootstrap 5</div>
                        </div>
                        <p className='flex justify-center items-center gap-5 mt-3 m-auto'>
                            <a href="https://gym-warehouse-management.web.app/" rel="noreferrer" target="_blank" className='btn btn-sm btn-neutral mt-5'><span className='text-2xl'><AiFillEye /></span>&nbsp; Live</a>
                            <a href='https://github.com/Sohailul/gym-warehouse-management' rel="noreferrer" target="_blank" className='btn btn-sm btn-neutral mt-5'><span className='text-2xl'><AiFillGithub /></span>&nbsp; GitHub</a>
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://live.staticflickr.com/65535/52093303399_b3ca9779f8_b.jpg" alt="" /></figure>
                    <div className="card-body bg-secondary text-white">
                        <h2 className="text-3xl font-bold text-center mb-2">Product Analysis</h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">React Recharts</div>
                            <div className="badge badge-outline"> HTML5</div>
                            <div className="badge badge-outline"> CSS3</div>
                            <div className="badge badge-outline"> Tailwind CSS</div>
                        </div>
                        <p className='flex justify-center items-center gap-5 mt-3 m-auto'>
                            <a href="https://product-analysis-lul.netlify.app/" rel="noreferrer" target="_blank" className='btn btn-sm btn-neutral mt-5'><span className='text-2xl'><AiFillEye /></span>&nbsp; Live</a>
                            <a href='https://github.com/Sohailul/product-analysis' rel="noreferrer" target="_blank" className='btn btn-sm btn-neutral mt-5'><span className='text-2xl'><AiFillGithub /></span>&nbsp; GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;