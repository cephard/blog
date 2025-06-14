function MinimalButton({ name, primary, bg, clickEvent }) {
    return (
        <button
            onClick={(event) => {
                event.preventDefault()
                clickEvent()
            }}
            className={`${primary} hover:${bg} py-1 px-3 rounded transition-all duration-200`} >
            {name}</button >
    )
}

export default MinimalButton