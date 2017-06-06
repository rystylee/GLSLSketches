#pragma once
#include "ofMain.h"

class GLSLManager {
public:
    GLSLManager();
    void update();
    void draw();
    void loadFile(const string& shaderfile);
    void openFile(const string& shaderfile);
    
private:
    ofShader shader;
    ofVboMesh vboMesh;
};
