import './App.css'
import { AlbumList } from './assets/components/AlbumList';
import { TrackList } from './assets/components/TrackList';

function App() {

  return (
    <>
      <div className='baseContainer'>
        <AlbumList />
        <TrackList />
      </div>
    </>
  )

}

export default App;
