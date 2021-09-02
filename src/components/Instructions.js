import React from 'react'
import PCSIntsructions from './files/PCSInstructions.pptx'

const InstrucButton = ({label}) => {
    return (
        <div className="flex">
            <p className="pt-1 pr-11 font-medium">Instructions: </p>
        <a href = {PCSIntsructions}>
            <button className="bg-transparent hover:bg-gray-700 text-gray-900 font-semibold 
                                hover:text-white py-1 px-2 border border-gray-900 
                                hover:border-transparent rounded"
            >
            {label}
            </button>
        </a>
        </div>
    );
};
export default InstrucButton