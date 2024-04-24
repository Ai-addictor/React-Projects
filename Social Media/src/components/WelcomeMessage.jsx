const WelcomeMesage = ({onGetPostsClick}) => {
    return <center>
        <h1 className="welcome-message">There are no Posts</h1>
        <button type="button" onClick={onGetPostsClick} className="btn btn-primary" >Fetch</button>
    </center>
}

export default WelcomeMesage;