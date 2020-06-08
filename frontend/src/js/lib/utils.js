const handlePropagation = (e, fn = () => {}) => {
    e.stopPropagation()
    return fn()
}

export {handlePropagation}