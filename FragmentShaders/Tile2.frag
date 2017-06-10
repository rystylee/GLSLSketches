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
    
    st.y += u_time * 0.2;
    
    float yfract = fract(st.y);
    float ystep = 1.0 / 8.0;
    
    if(yfract < ystep) st.x += 0.1*sin(u_time);
    else if(ystep <= yfract && yfract < ystep*2.0) st.x -= 0.2*sin(u_time);
    else if(ystep*2.0 <= yfract && yfract < ystep*3.0) st.x += 0.3*sin(u_time);
    else if(ystep*3.0 <= yfract && yfract < ystep*4.0) st.x -= 0.4*sin(u_time);
    else if(ystep*4.0 <= yfract && yfract < ystep*5.0) st.x += 0.5*sin(u_time);
    else if(ystep*5.0 <= yfract && yfract < ystep*6.0) st.x -= 0.6*sin(u_time);
    else if(ystep*6.0 <= yfract && yfract < ystep*7.0) st.x += 0.7*sin(u_time);
    else st.x -= u_time*0.8;
    
    st = brickTile(st,8.0);
    
    color = vec3(box(st,vec2(0.8)));
    color += st.x*0.9;
    
    outputColor = vec4(1.5-color,1.0);
}
