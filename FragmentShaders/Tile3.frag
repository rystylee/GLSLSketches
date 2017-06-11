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
    st *= 10.0;
    st.y += u_time;
    
    vec2 ipos = floor(st+st-sin(u_time));
    float color = random(ipos);
    st = fract(st) - 0.8;
    
    color *= clamp(max(st.x,st.y), 0.0, 1.0);
    
    outputColor = vec4(1.0-color);
}
