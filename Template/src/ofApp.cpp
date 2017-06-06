#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){

    ofSetBackgroundColor(0);
    
    // shader
    glslManager.loadFile("shaders/shader");
}

//--------------------------------------------------------------
void ofApp::update(){

    ofSetWindowTitle(ofToString(ofGetFrameRate()));
}

//--------------------------------------------------------------
void ofApp::draw(){

    glslManager.draw();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

    switch (key) {
        case 'f':
            ofToggleFullscreen();
            break;
        case 'o': // Open shader file on external editor.
            glslManager.openFile("shaders/shader.frag");
            break;
        case 'r': // Reload shader
            glslManager.loadFile("shaders/shader");
        default:
            break;
    }

}
//--------------------------------------------------------------
