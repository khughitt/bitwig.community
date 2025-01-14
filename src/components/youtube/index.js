import React, { useState } from 'react'
import styles from './styles.module.css'

const getYoutubeSlug = (link) => {
  if (link.indexOf('?v=') !== -1) {
    return link.split('?v=')[1]
  } else {
    return link
  }
}

/**
const getYoutubeUri = (link) => {
  let result = ''
  if (link.indexOf('?v=') === -1) {
    result = 'https://youtu.be/' + link
  } else {
    result = link
  }
  return result
}
 */

const getYoutubeImage = (link) => {
  return `https://i3.ytimg.com/vi/${getYoutubeSlug(link)}/hqdefault.jpg`
}

/**
 * query all rss feeds, and render the individual posts
 */
export default ({ link, title }) => {
  const [player, setPlayer] = useState(false)
  return (
    <div
      rel='noopener noreferrer'
      onClick={() => setPlayer(true)}
      className={styles.wrapper}
    >
      <img
        alt={title}
        src={getYoutubeImage(link)}
      />
      {player &&
        <iframe
          title={title}
          className={styles.iframe}
          src={'https://www.youtube.com/embed/' + getYoutubeSlug(link) + '?autoplay=1&controls=1'}
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />}
    </div>)
}
