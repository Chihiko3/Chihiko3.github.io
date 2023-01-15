// Author: Chihiko
// Title: 1st shader ever

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	// 把鼠标在画布上的坐标映射到画布大小上，就能在画布中准确使用鼠标的位置信息了
	vec2 st = u_mouse/u_resolution;
	gl_FragColor = vec4(st.x,st.y,sin(u_time*1.2),1.0);
}