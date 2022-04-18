# typlog-aoyama

## Theme Aoyama

A typlog theme that mimics magazine. It provides extra exposure for your featured articles/episodes and is best suited for showcasing posts with covers.

## Feature

### Featured Posts

To add posts to the featured section, visit post editing page and turn on the 'featured' toggle.

### Video Cover(beta)

This theme supports motion background in the landing page. To add a video as the motion background, add the following to your `config/typlog-aoyama.json` in `Assets`:

```json
{
  "video_cover": {
    "src": "https://...",
    "poster": "https://..."
  }
}
```

`src`: the video source url

`poster`: the source url of the video cover image.It also works as a fallback if the video fails to load.

## Author

Jessie Ji(https://jessieji.com) from the Typlog dev team

