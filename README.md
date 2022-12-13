# typlog-aoyama

## Theme Aoyama

A typlog theme that mimics magazine. It provides extra exposure for your featured articles/episodes and is best suited for showcasing posts with covers.

## Features

- 📜 One-page scroll
- 📌 [Featured posts](#featured-posts)
- 🌓 [Dark mode](#dark-mode)
- 🎥 [Motion background](#motion-background-beta)
- 🎮 [Interactive cover](#interactive-cover)

### Featured posts

Feature your posts in landscape/portrait layout.

<a href="https://user-images.githubusercontent.com/41285428/168575596-f78d7985-a3fe-438e-a637-e4efa28bc48f.png" target="_blank"><img src="https://user-images.githubusercontent.com/41285428/168575596-f78d7985-a3fe-438e-a637-e4efa28bc48f.png" alt="horizontal layout" width="400"/></a>
<a href="https://user-images.githubusercontent.com/41285428/168575684-72b134fa-bdff-4630-a965-4b2d38003bb5.png" target="_blank"><img src="https://user-images.githubusercontent.com/41285428/168575684-72b134fa-bdff-4630-a965-4b2d38003bb5.png" alt="vertical layout" width="400"/></a>

The layout is automatically set based on the width/height ratio of the cover image of the post.

To add posts to the featured section, visit post editing page in the admin portal and turn on the 'featured' toggle.

### Interactive Cover

Episodes will have the player controls inside the episode cover. The controls will adapt to a light/dark appearance based on the lightness of the cover to ensure accessibility.

Note: In the light appearance, `Primary Color` (Settings -> Themes and Design -> Color) will be applied to texts while in the dark `Secondary Color`.

<a href="https://user-images.githubusercontent.com/41285428/207257319-ce9797af-54a9-41ee-b2e4-da584b9bc8e1.png" target="_blank"><img src="https://user-images.githubusercontent.com/41285428/207257319-ce9797af-54a9-41ee-b2e4-da584b9bc8e1.png" alt="interactive cover" width="400"/></a>
<a href="https://user-images.githubusercontent.com/41285428/207257150-a6af21f1-cf78-4ac2-b432-b0ff186f216d.png" target="_blank"><img src="https://user-images.githubusercontent.com/41285428/207257150-a6af21f1-cf78-4ac2-b432-b0ff186f216d.png" alt="host infomation" width="400"/></a>


### Dark mode

<a href="https://user-images.githubusercontent.com/41285428/168568931-89273359-1c2b-448b-aae9-8155ca1b6631.png" target="_blank"><img src="https://user-images.githubusercontent.com/41285428/168568931-89273359-1c2b-448b-aae9-8155ca1b6631.png" alt="dark mode" width="400"/></a><a href="https://user-images.githubusercontent.com/41285428/168569283-632044e9-cfb2-4fe9-bfb4-d4fe80c9ca99.png" target="_blank"><img src="https://user-images.githubusercontent.com/41285428/168569283-632044e9-cfb2-4fe9-bfb4-d4fe80c9ca99.png" alt="light mode" width="400"/></a>

Note: In the light mode, `Primary Color` will be used as the theme color while in the dark mode `Secondary Color`.

### Motion background (beta)

This theme supports video cover in the landing page. To add a video as the motion background, create a JSON file in `Assets` in your admin portal:

Title: `Aoyama Config`

Slug: `_config/aoyama`

Type: `raw`

Mime type: `application/json`

Content:
```json
{
  "video_cover": {
    "src": "https://...",
    "poster": "https://...",
    "type": "video/mp4"
  }
}
```

`src`: the video source url

`poster`: the source url of the video cover image. It also works as a fallback if the video fails to load.

`type`: MIME type of the video, full list of supported MIME types [here](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

## Author

Jessie Ji(https://jessieji.com) from the Typlog dev team

