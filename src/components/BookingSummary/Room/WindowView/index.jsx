export const WindowView = (props) => {
    const {viewMare} = props

    return (
        <>
            <strong>Okno: {viewMare ? 'výhled na moře' : 'bez výhledu'}</strong>
        </>
    )
}