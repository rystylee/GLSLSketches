#version 150
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 outputColor;

vec2 tile(vec2 st, float zoom){
    st *= zoom;
    return fract(st);
}

float circle(vec2 st, float radius){
    vec2 pos = vec2(0.5)-st;
    radius *= 0.75;
    return 1.-smoothstep(radius-(radius*0.05),radius+(radius*0.05),dot(pos,pos)*3.14);
}

float circlePattern(vec2 st, float radius) {
    return  circle(st+vec2(0.,-.5), radius)+
    circle(st+vec2(0.,.5), radius)+
    circle(st+vec2(-.5,0.), radius)+
    circle(st+vec2(.5,0.), radius);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    
    vec3 color = vec3(0.0);
    vec2 grid = tile(st,8.);
    color = mix(color, vec3(1.0,1.0,1.0), circlePattern(grid,abs(sin(u_time+st.y+st.x))));
    
    outputColor = vec4(color,1.0);
}
