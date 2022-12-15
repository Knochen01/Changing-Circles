const randomF = (max=100,min=0) => {
    return Math.random() * (max-min) + min
}

export { randomF };