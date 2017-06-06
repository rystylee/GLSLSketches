#include "GLSLManager.hpp"

GLSLManager::GLSLManager(){
    
    ofVec3f points[4];
    points[0] = ofVec3f(-1.0,  1.0, 0);
    points[1] = ofVec3f( 1.0,  1.0, 0);
    points[2] = ofVec3f(-1.0, -1.0, 0);
    points[3] = ofVec3f( 1.0, -1.0, 0);
    
    
    for(int i=0; i<4; i++){
        vboMesh.addVertex(points[i]);
    }
    
    vboMesh.addIndex(0);
    vboMesh.addIndex(2);
    vboMesh.addIndex(1);
    vboMesh.addIndex(1);
    vboMesh.addIndex(2);
    vboMesh.addIndex(3);

}

void GLSLManager::update(){
    
}

void GLSLManager::draw(){
    
    shader.begin();
    shader.setUniform1f("u_time", ofGetElapsedTimef());
    shader.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    vboMesh.setMode(OF_PRIMITIVE_TRIANGLES);
    vboMesh.draw();
    shader.end();
    
}

void GLSLManager::loadFile(const string& shaderfile){
    
    shader.load(shaderfile);
    
}

void GLSLManager::openFile(const string& shaderfile){
    
    string command = "open ../../../data/" + shaderfile;
    system(command.c_str());

}
