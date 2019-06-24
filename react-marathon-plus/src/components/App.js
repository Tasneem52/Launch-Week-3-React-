import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from  './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>
        <div className="columns small-6">
          <h3>Playlists</h3>
          <PlaylistCollection playlist={this.props.data.playlists}/>
        </div>
        <div className="columns small-6">
          <h3>Songs</h3>
          <SongCollection songs={this.props.data.songs}/>
        </div>
      </div>
    );
  }
}

export default App;
