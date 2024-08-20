function Error({ error }) {
    return (
        <div style={{ textAlign: 'center', color: 'white' }}>
           👎 <b>Error:</b> {error.message} 
        </div>
    )
}

export default Error
