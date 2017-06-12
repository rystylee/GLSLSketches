#version 150
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 outputColor;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
                 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    
    st *= 9.0;
    vec2 ipos = floor(st);
    ipos += fract(sin(u_time*0.000001));
    
    float color = random(ipos);
    st = fract(st);
    
    outputColor = vec4(color);
}
