class User extends React.Component {
    render() {
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let tweetDate = new Date(tweets[0].created_at);
        let dateString = `${months[tweetDate.getMonth()]} ${tweetDate.getDate()} `;

        return (
            <ul>
                <li>{this.props.apple.user.screen_name}</li>
                <li>{this.props.apple.user.name}</li>
                <li>{this.props.apple.text}</li>
                <li>{this.props.apple.retweet_count}</li>
                <li>{dateString}</li>
            </ul>
        );
    }
}

//this is to call out everything in keyword .item
class Entities extends React.Component {

    render() {
        console.log(this.props.apple)
        //this is to render out items that will be
        //called out in ReactDOM.render
        let banana = this.props.apple.map( (item, index) => {
        return <User apple={item} key={index}></User>;
        });
        //this is the list that is defined somewhere else
        return (
            <div>
                {banana}
            </div>
        );
    }
}

//this is to print out everything on webpage

ReactDOM.render(
    <div>
      <Entities apple = {tweets}/>
    </div>,
    document.getElementById('root')
);