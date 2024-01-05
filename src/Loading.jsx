import './Loading.css';

const Loading = () => {
  return (
    <>
    <div className="container loading">
        <div className="img"></div>
            <h1>Deividas Koncius</h1>
            <h3>Web Developer - Web Designer</h3>
            <p>I'm core based teacher! Passionate to see results in and through people. I have been blessed to work with amazing teachers, managers and entrepreneurs.</p>
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

export default Loading