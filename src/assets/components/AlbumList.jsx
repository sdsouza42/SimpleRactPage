import { albums } from "../data"

export function AlbumList() {
    //Album related components
    const transformAlbum = albums.map((album) => (
        <li key={album.id}>
            <div>
                <img width={100} src={album.coverImg} />
            </div>
            <div>
                <p>{album.name}</p>
            </div>
        </li>)
    )
    return (
        <div className='album-list'>
            <div>
                {albums[0] && <img width={500} src={albums[0].coverImg} alt={albums[0].name} />}
            </div>
            <h1>
                {albums[0] && albums[0].name}
            </h1>
            <div>
                <ul className="albumList">
                    {transformAlbum}
                </ul>
            </div>
        </div>
    )
}