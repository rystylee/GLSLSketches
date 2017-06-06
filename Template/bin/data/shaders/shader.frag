#version 150
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 outputColor;

void main( void ) {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    
    outputColor = vec4(vec3(abs(sin(u_time)), abs(cos(u_time)), 1.0), 1.0);
}
