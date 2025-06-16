function MinimalButton({ name, primary, clickEvent }) {
    return (
        <button
            onClick={(event) => {
                event.preventDefault()
                clickEvent()
            }}
            className={`${primary} py-1 px-3 rounded transition-all duration-200`} >
            {name}</button >
    )
}

export default MinimalButton