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

Core technology building blocks are Rust, Qt, mpv.

## Building

1. Install Rust

```bash
brew install qt &&
brew install cmake &&
```
1. `cargo run`

* https://rust-qt.github.io/qt/
* https://github.com/ParadoxSpiral/libmpv-rs
* https://github.com/mpv-player/mpv


## materials showing how the parts connect

* https://www.kdab.com/development-resources/kdab-qt-world-summit-2019/
* https://www.youtube.com/watch?v=SgDTNB20_3I
* https://www.kdab.com/wp-content/uploads/stories/optimizing-qq2-rendering.pdf

* https://github.com/mpv-player/mpv-examples/blob/master/libmpv/qml/main.qml
* https://github.com/wangwenx190/libmpv-qtquick-plugin
* https://github.com/wangwenx190/libmpv-qtquick-plugin/blob/master/imports/wangwenx190/QuickMpv/MpvPlayer.qml

* https://github.com/woboq/qmetaobject-rs
* https://www.youtube.com/watch?v=6pcOhCWLd_U

* https://www.kdab.com/integrate-opengl-code-qt-quick-2-applications-part-2/
* https://www.youtube.com/watch?v=fdlU1zVA-Po

* https://github.com/rust-av/libav-rs
* https://github.com/johnboiles/coremediaio-dal-minimal-example
* https://lib.rs/crates/ffav
* OSC library

## rejected

* https://github.com/wang-bin/QtAV
* https://github.com/garkimasera/vlc-rs

## debug tools

* https://github.com/lvsti/Cameo
* https://github.com/bavc/qctools