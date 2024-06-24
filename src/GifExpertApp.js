import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    const handleClearCategories = () => {
        setCategories([]);
    }

    const handleRemoveCategory = (categoryToRemove) => {
        setCategories(categories.filter(category => category !== categoryToRemove));
    }

    return (
        <>
            <h2 className='text-red-800 text-6xl text-center mb-5'>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <button onClick={handleClearCategories} className='mb-5 p-2 bg-red-500 text-white'>Limpiar Todas Las Busquedas</button>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                            onRemoveCategory={handleRemoveCategory}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
