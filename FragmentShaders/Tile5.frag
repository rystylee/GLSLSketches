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
    vec2 st = gl_FragCoord.xy/u_resolution.xy ;
    st.x *= u_resolution.x / u_resolution.y;
    
    st *= 9.0;
    vec2 ipos = floor(st);
    ipos += fract(sin(u_time*0.0000001));
    st /= 9.0;
    
    st = fract(st*9.0);
    
    float rnd = random(ipos);
    
    float length = length(st-0.5);
    float s = abs(sin(-u_time + 15.0 * length * rnd));
    
    vec2 bl = step(vec2(0.08),st);
    vec2 tr = step(vec2(0.08),1.0-st);
    float pct = (bl.x * bl.y * tr.x * tr.y);
    pct = clamp(pct, 0.0, 1.0);
    
    outputColor = vec4(s*pct);
}
