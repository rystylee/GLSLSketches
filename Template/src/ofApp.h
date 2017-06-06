#pragma once

#include "ofMain.h"
#include "GLSLManager.hpp"

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();
		void keyPressed(int key);
    
    GLSLManager glslManager;
};
