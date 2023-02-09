// Author: Inigo Quiles
// Title: expo

// 还需要尝试能不能在一幅图里面显示多条函数= =，可以尝试实现一下

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) - smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    
    float y = cos(1.2*cos(sin(st.x + u_time * 2.3))-0.3)-.25;

    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (pct)*color+pct*vec3(sin(u_time),0.4,cos(u_time)) + vec3(sin(u_time),0.28,cos(u_time));

    gl_FragColor = vec4(color,1.0);
}
