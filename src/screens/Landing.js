import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

const Landing = ({ history }) =>
(
    <div style={styles.landingMainDiv}>
        <video style={styles.introVideo} autoplay loop muted controls="false">
            <source src="https://player.vimeo.com/external/221214113.hd.mp4?s=61cb1f00c358f6e676bcde39e209d36fc924569a&profile_id=172&oauth2_token_id=57447761" type="video/mp4"/>
        </video>
        <img style={styles.landingH} src='https://cdn.discordapp.com/attachments/425343415056728067/437519619884843009/Asset_6.png'/>
        <div style={styles.landingLogReg}>
            <RaisedButton
                label="Login"
                primary={true}
                onClick={()=> {history.push('/app')}}
                style={styles.landingLog}
                buttonStyle={{borderRadius: '8px 0px 0px 8px', background:'rgba(181,181,181,0.5)'}}
            />
            <RaisedButton
                label="Register"
                secondary={true}
                onClick={()=> {history.push('/app')}}
                style={styles.landingReg}
                buttonStyle={{borderRadius: '0px 8px 8px 0px', background:'rgba(181,181,181,0.5)'}}
            />
        </div>
        <div>
            <RaisedButton
                label="Post Gig"
                primary={true}
                onClick={()=> {history.push('/app')}}
                style={styles.landingPost}
                buttonStyle={{borderRadius: '8px 0px 0px 8px', background:'rgba(181,181,181,0.95)'}}
            />
            <RaisedButton
                label="Find Work"
                secondary={true}
                onClick={()=> {history.push('/app')}}
                style={styles.landingWork}
                buttonStyle={{borderRadius: '0px 8px 8px 0px', background:'rgba(87,189,138,0.95)'}}
            />
        </div>
    </div>
);


    
const styles = {
    introVideo: {
        position: 'absolute',
        maxWidth: '100vw'
    },
    landingMainDiv: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // background: "url('http://usersthink.com/wp-content/uploads/99-usersthink-stock-image-small.jpg')",
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
    },
    landingH: {
        position: 'absolute',
        top: '3%',
        left: '3%',
        width: '200px',
    },
    landingLogReg: {
        position: 'absolute',
        top: '3%',
        right: '3%'
    },
    landingPost: {
        width: '300px',
        height: '120px',
        fontSize: '70px',
        borderRadius: '8px 0px 0px 8px',
    },
    landingWork: {
        width: '300px',
        height: '120px',
        fontSize: '70px',
        borderRadius: '0px 8px 8px 0px'
    },
    landingLog: {
        borderRadius: '8px 0px 0px 8px',
        background:'rgba(181,181,181,0.5)'
    },
    landingReg: {
        borderRadius: '0px 8px 8px 0px',
        background:'rgba(181,181,181,0.5)'
    }
}

export default Landing;