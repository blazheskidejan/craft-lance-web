import React from 'react';
import CategoryItem from '../components/CategoryItem.js'



const Home = ({history}) => (
    <div style={styles.homeMainDiv}>
            <h2 style={styles.homeH2}>Explore the marketplace</h2>
            <h3 style={styles.homeH3}>Find your kind of work</h3>
        <div style={styles.gridContainer}>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629876551709/shopping-cart.png" title="Shopping" miniDesc="lorem is just a fake text and fuck you"/>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629293674507/truck.png" title="Transport" miniDesc="lorem is just a fake text and fuck you"/>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629771956224/briefcase.png" title="Documents" miniDesc="lorem is just a fake text and fuck you"/>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629734207498/home.png" title="House & Moving" miniDesc="lorem is just a fake text and fuck you"/>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629864099840/package.png" title="Packaging" miniDesc="lorem is just a fake text and fuck you"/>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629817962496/map.png" title="Planing" miniDesc="lorem is just a fake text and fuck you"/>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629981540362/video.png" title="Film & Photography" miniDesc="lorem is just a fake text and fuck you"/>
            <CategoryItem onClick={() => history.push('/gigscreen')} src="https://cdn.discordapp.com/attachments/425343415056728067/437529629335748608/trash.png" title="Cleaning" miniDesc="lorem is just a fake text and fuck you"/>
        </div>
    </div>
);

let styles = {
   gridContainer: {
       position: 'absolute',
       top: '300px',
       display: 'grid ',
       gridTemplateColumns:'200px 200px 200px 200px',
       gridGap: '50px 150px'
    },
    homeMainDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw'
    },
    homeH2: {
        position: 'absolute',
        fontSize: '36px',
        color: 'white',
        textAlign: 'center',
        width: '100vw',
        background:'rgba(87,189,138,1)',
        margin: '0px',
        padding: '0px',
        paddingTop: '200px',
        zIndex: '999'
    },
    homeH3: {
        position: 'absolute',
        top: '100px',
        fontSize: '18px',
        color: 'white',
        textAlign: 'center',
        width: '100vw',
        height: '100px',
        background:'rgba(87,189,138,1)',
        margin: '0px',
        padding: '0px',
        paddingTop: '20px'
    }
}

export default Home;