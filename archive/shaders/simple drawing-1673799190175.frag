// Author: Chihiko
// Title: simple drawing

// GL_ES 一般是针对网页和移动端的GL
#ifdef GL_ES
// 设定精准度，这里是mediump，还有highp和lowp
precision mediump float;
#endif

uniform vec2 u_resolution; // 画布的大小
uniform vec2 u_mouse; // 在屏幕像素中鼠标的位置
uniform float u_time; // 以秒为单位的时间

void main() {
	// gl_FragCoord是自带的Input，而gl_FragColor是自带的Output
	
	// 这一步很关键，这样可以把你想使用的坐标映射到当前画布大小上，原话是这样的：
	// we normalize the coordinate of the fragment by dividing it 
	// by the total resolution of the billboard. By doing this the 
	// values will go between `0.0` and `1.0`, which makes it easy
	// to map the X and Y values to the RED and GREEN channel.
	vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 ms = u_mouse/u_resolution;
	gl_FragColor = vec4(st.x,st.y,0.0,1.0);
    if(st.x < (0.5 + ms.x/20.0) && st.x > (0.3 + ms.x/20.0) && st.y < (0.8 + ms.y/50.0) && st.y > (0.4 + ms.y/50.0))
    {
        gl_FragColor = vec4(0.0,0.0,0.0,1.0);
    }
    if(st.x < (0.9 + ms.x/100.0) && st.x > (0.7 + ms.x/35.0) && st.y < (0.8 + ms.y/75.0) && st.y > (0.4 + ms.y/50.0))
    {
        gl_FragColor = vec4(0.0,0.0,0.0,1.0);
    }
    if(st.x < (0.7 + ms.x/10.0) && st.x > (0.5 + ms.x/10.0) && st.y < (0.2 + ms.y/5.0) && st.y > (0.1 + ms.y/5.0))
    {
        gl_FragColor = vec4(0.0,0.0,0.0,1.0);
    }
    
	// 此时限制st.x, st.y就可以实现一些简单的图形作画了
}