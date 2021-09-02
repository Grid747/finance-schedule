import React from 'react'
import PCSPackage from './files/PCSPackage.pdf'

const FileButton = ({label}) => {
    return (
        <div className="flex">
            <p className="pt-1 pr-1 font-medium">Inprocessing files: </p>
        <a href = {PCSPackage} download>
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
export default FileButton