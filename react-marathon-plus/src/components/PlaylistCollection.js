import React from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedPlaylist: null
    }
    this.handlePlaylistSelection = this.handlePlaylistSelection.bind(this)
  }

  handlePlaylistSelection(id) {
    this.setState({selectedPlaylist: id})
  }

  render(){
    console.log(this.state.selectedPlaylist)
    let playlists = this.props.playlist.map((playlist) => {

      let playlistClosure = () => {
        return this.handlePlaylistSelection(playlist.id)
      }

      let selectedClass = ""
      if (this.state.selectedPlaylist === playlist.id){
        selectedClass = "selected"
      }

      return(
        <Playlist
          key={playlist.id}
          name={playlist.name}
          handleClick={playlistClosure}
          selectedClass={selectedClass}
          />
      )
    })

    return(
      <ul>
        {playlists}
      </ul>
    )
  }
}

export default PlaylistCollection
