import React, { useState } from 'react';

const useLoadingError = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    
    return {
        loading,
        setError,
        setLoading,
        error
    }
};

export default useLoadingError;