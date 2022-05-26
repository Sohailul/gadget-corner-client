import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-journey-91609.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='min-h-screen mx-w-md'>
            <h1 className='text-4xl font-bold text-center mb-5 divider'><span className='text-primary'>Manufactured</span> Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
                {
                    tools.slice(0, 6).map(tool =>
                        <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;