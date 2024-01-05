const Profile = ({profile}) => {
    return  (
        <>
        <div className="container">
            <img src={profile.avatar_url} alt={profile.name} />
                <h1>{profile.name}</h1>
                <h3>Web Developer - Web Designer</h3>
                <p>{profile.bio}</p>
                <div className="icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                </div>
            </div>
        </>
    )
}

export default Profile