import React from 'react';
import Song from './Song'


class SongCollection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedSongs: null
    }
    this.handleSongSelection = this.handleSongSelection.bind(this)
  }

  handleSongSelection(id) {
    this.setState({selectedSong: id})
  }


  render(){

    let songs = this.props.songs.map((song) => {

      let songClosure = () => {
        return this.handleSongSelection(song.id)
      }

      let selectedClass = ""
      if (this.state.selectedSong === song.id){
        selectedClass = "selected"
      }

      return(
        <Song
          key={song.id}
          name={song.name}
          artist={song.artist}
          handleClick={songClosure}
          selectedClass={selectedClass}
          />
      )
    })

    return(
      <ul>
        {songs}
      </ul>
    )
  }
}

export default SongCollection
