#version 150
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 outputColor;

vec2 brickTile(vec2 _st, float _zoom){
    _st *= _zoom;
    _st.x += step(1., mod(_st.y,2.0)) * 0.5;
    
    return fract(_st);
}

float box(vec2 _st, vec2 _size){
    _size = vec2(0.5)-_size*0.5;
    vec2 uv = smoothstep(_size,_size+vec2(1e-4),_st);
    uv *= smoothstep(_size,_size+vec2(1e-4),vec2(1.0)-_st);
    return uv.x*uv.y;
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    
    if(st.y < 0.2) st.x += u_time*0.1;
    else if(0.2 <= st.y && st.y < 0.4) st.x -= u_time*0.1;
    else if(0.4 <= st.y && st.y < 0.6) st.x += u_time*0.1;
    else if(0.6 <= st.y && st.y < 0.8) st.x -= u_time*0.1;
    else st.x += u_time*0.1;
    
    st = brickTile(st,5.0);
    
    color = vec3(box(st,vec2(max(0.9, 0.99*abs(sin(u_time))))));
    color += st.x*0.5;
    
    outputColor = vec4(1.0-color,1.0);
}
