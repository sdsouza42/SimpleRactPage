import { albums } from "../data"

export function TrackList() {
    //Track related components
    const selectedAlbum = albums[0];
    const tracks = selectedAlbum.tracks;
    const transformTracks = tracks.map((track) => (
        <li key={track.id}>{track}</li>
    ))

    return (
        <div className='track-list'>
            <h1>
                {albums[0] && albums[0].name}
            </h1>
            <ol className="track">
                {transformTracks}
            </ol>

        </div>
    )

}