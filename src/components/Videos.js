import {Grid } from '@mui/material'
import React from 'react'
import {ChannelCard, VideoCard} from './'
import Loader from './Loader';

const Videos = ({videos}) => {
  if(!videos?.length) return <Loader />;

  return (
    <Grid container spacing={5} p={2} >
      {videos.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  )
}

export default Videos