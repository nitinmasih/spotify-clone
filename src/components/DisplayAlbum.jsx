import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {

  const { id } = useParams()
  const albumData = albumsData[id]
  const {playWithId} = useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className="flex mt-10 gap-8 flex-col md:flex-row md:items-end">
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl '>{albumData.name}</h2>
          <h1>{albumData.desc}</h1>
          <p className="mt-1 ">
            <img className='inline-block' src={assets.spotify_logo} alt="" />
            <b className='ml-1'>Spotify</b>  <span className="flex gap-2">
              <li>13,155,233 likes</li>
              <li><b>50 Songs</b></li>
              <span>about 2hr ago</span>
            </span>

          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className='mr-4'>#</b>Title</p>
        <p className="">Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={()=>{playWithId(item.id)}} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]'>
          <p className="text-white flex items-center"  >
            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
            <img src={item.image} alt="" className="inline w-6 h-6 mr-3" />
            {item.name}
          </p>
          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'>5 days ago</p>
          <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))}

    </>
  )
}

export default DisplayAlbum