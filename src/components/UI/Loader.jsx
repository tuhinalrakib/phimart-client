import React from 'react';

const Loader = () => {
    return (
        <div data-theme="light" className='flex min-h-screen justify-center items-center'>
            <span className="loading loading-spinner loading-xl text-secondary scale-[4]"></span>
        </div>
    );
};

export default Loader;