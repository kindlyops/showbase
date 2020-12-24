import QtQuick 2.0
import QtQuick.Window 2.2
import QtQuick.Layouts 1.3

Window {
  objectName: "playerWindow"
  id: playerwindow
  visible: true
  width: 1280
  height: 720
  title: "ShowbasePlayer"
  flags: Qt.Window | Qt.FramelessWindowHint | Qt.WindowFullscreenButtonHint
  Rectangle {
    anchors.top: parent.top
    width: parent.width
    height: parent.height
    color: "black"
    MouseArea {
      hoverEnabled: true
      anchors.fill: parent
      property real anchorX
      property real anchorY
      onPressed: { anchorX = mouseX; anchorY = mouseY }
      onMouseXChanged: if (pressed) playerwindow.x += mouse.x-anchorX
      onMouseYChanged: if (pressed) playerwindow.y += mouse.y-anchorY
      onDoubleClicked: slacker.restart()
      Timer {
        id: slacker
        interval: 100; repeat: false
        onTriggered: {
          if (playerwindow.visibility === Window.FullScreen) {
            playerwindow.visibility = Window.AutomaticVisibility;
          } else {
            playerwindow.visibility = Window.FullScreen;
          }
        }
      }
    }
  }
}