#version 150
precision mediump float;

in vec3 position;

void main(){
    gl_Position = vec4(position, 1.0);
}
