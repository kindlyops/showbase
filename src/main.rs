#![windows_subsystem = "windows"]

use qt_core::{q_init_resource, qs};
use qt_gui::QGuiApplication;
use qt_qml::QQmlApplicationEngine;

fn main() {

    QGuiApplication::init(|_| unsafe {
        q_init_resource!("resources");
        let engine = QQmlApplicationEngine::from_q_string(&qs("qrc:/main.qml"));
        engine.load_q_string(&qs("qrc:/player.qml"));

        // maybe https://doc.qt.io/qt-5/qtquick-scenegraph-openglunderqml-example.html
        // and https://github.com/mpv-player/mpv-examples/blob/829775865dbd69db9211cd4b6b6c9b1e5ad82953/libmpv/qt_opengl/mpvwidget.cpp#L62
        QGuiApplication::exec()
    })
}