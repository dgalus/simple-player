class Utils {
    static isString(str) {
        if(typeof(str) === 'string' || str instanceof String)
            return true;
        return false;
    }

    static uuid_v4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class PlaylistItem {
    constructor(path, name, thumb_path=null){
        if(Utils.isString(path))
            this.path = path;
        else
            throw 'Path is not string!';

        if(Utils.isString(name))
            this.name = name;
        else
            throw 'Name is not string!';

        if(thumb_path !== null)
            this.thumb_path = thumb_path;
    }
}

class PlayerControls {
    constructor() {

    }

    togglePlay() {

    }

    updateVolume() {

    }

    updateProgress() {

    }

    updateCurrentPosition() {

    }
}

class AudioPlayerControls extends PlayerControls {
    constructor() {
        super();
    }
}

class VideoPlayerControls extends PlayerControls {
    constructor() {
        super();
    }

    toggleFullScreen() {

    }

    render() {

    }
}

class PlayerPlaylist {
    constructor(playlist_items) {

    }

    render() {

    }
}

class VideoPlayerPlaylist extends PlayerPlaylist {
    constructor(playlist_items) {
        super();
        this.playlist_items = playlist_items;
    }

    render() {

    }

    getPlaylistItem(idx) {
        return this.playlist_items[idx];
    }
}

class AudioPlayerPlaylist extends PlayerPlaylist {
    constructor(playlist_items) {
        super();
    }

    render()
    {

    }
}

class SingleVideoPlayer {
    constructor(container, playlist_item) {
        this.container = container;
        this.playlist_item = playlist_item;
        this.id = Utils.uuid_v4();
    }

    show() {

    }
}

class MultiVideoPlayer {
    constructor(container, playlist) {
        this.container = container;
        this.playlist = new VideoPlayerPlaylist(playlist);
        this.id = Utils.uuid_v4();
        this.controls = new VideoPlayerControls();
    }

    show() {
        document.getElementById(this.container).innerHTML = " \
            <video id='" + this.id + "' \
             src='" + this.playlist.getPlaylistItem(0).path + "' controls> \
            </video>";
    }
}

class MultiAudioPlayer {
    constructor(container, playlist) {
        this.container = container;
        this.playlist = new VideoPlayerPlaylist(playlist);
        this.id = Utils.uuid_v4();
    }
}

class SingleAudioPlayer {
    constructor(container, playlist_item, live=false) {
        if(!(playlist_item instanceof PlaylistItem))
            throw 'Playlist item must be type of PlaylistItem!';
    }
}