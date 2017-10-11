import React, { Component } from 'react';
import { View } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}


export default AlbumList;

