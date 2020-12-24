# showbase

Media playback tool for use during live shows.

Not ready for production use.

## Feature Roadmap

* Play a black screen
* Play a single video, return to black screen
* Publish macOS builds
* Play video stream from a camera input
* Play video stream from NDI input
* Virtual camera output MacOS
* Process videos from a playlist
* Play images from a playlist
* Display output in a chromeless window
* Display output fullscreen on an external display
* Display output via decklink output
* Send output via spout/syphon
* Virtual camera output Windows
* Publish windows builds
* Virtual camera output Linux
* Publish Linux builds
* Publish Raspberry Pi builds
* Playlist builder
* Set in/out points on a video in the playlist
* Display chapter markers on a video in the playlist
* Accept OSC commands for production automation
* Send OSC commands to notify about changes
* Transitions
* PIP

## System Requirements

We are building this to be cross platform, from macOS laptops to Cloud GPU media
workstations running windows to headless linux servers controlled via OSC.

Core technology building blocks are Rust and Qt.
