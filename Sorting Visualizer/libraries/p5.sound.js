/** [p5.sound]  Version: 0.3.12 - 2020-01-06 */ 
 /**
 *  <p>p5.sound extends p5 with <a href="http://caniuse.com/audio-api"
 *  target="_blank">Web Audio</a> functionality including audio input,
 *  playback, analysis and synthesis.
 *  </p>
 *  <ul>
 *  <li><a href="#/p5.SoundFile"><b>p5.SoundFile</b></a>: Load and play sound files.</li>
 *  <li><a href="#/p5.Amplitude"><b>p5.Amplitude</b></a>: Get the current volume of a sound.</li>
 *  <li><a href="#/p5.AudioIn"><b>p5.AudioIn</b></a>: Get sound from an input source, typically
 *    a computer microphone.</li>
 *  <li><a href="#/p5.FFT"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns
 *    results from the frequency spectrum or time domain (waveform).</li>
 *  <li><a href="#/p5.Oscillator"><b>p5.Oscillator</b></a>: Generate Sine,
 *    Triangle, Square and Sawtooth waveforms. Base class of
 *    <li><a href="#/p5.Noise">p5.Noise</a> and <a href="#/p5.Pulse">p5.Pulse</a>.
 *    </li>
 *  <li>
 *    <a href="#/p5.MonoSynth">p5.MonoSynth</a> and <a href="#/p5.PolySynth">p5.PolySynth</a>: Play musical notes
 *  </li>
 *  <li><a href="#/p5.Envelope"><b>p5.Envelope</b></a>: An Envelope is a series
 *    of fades over time. Often used to control an object's
 *    output gain level as an "ADSR Envelope" (Attack, Decay,
 *    Sustain, Release). Can also modulate other parameters.</li>
 *  <li><a href="#/p5.Delay"><b>p5.Delay</b></a>: A delay effect with
 *    parameters for feedback, delayTime, and lowpass filter.</li>
 *  <li><a href="#/p5.Filter"><b>p5.Filter</b></a>: Filter the frequency range of a
 *    sound.
 *  </li>
 *  <li><a href="#/p5.Reverb"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying
 *    duration and decay. </li>
 *  <b><li><a href="#/p5.Convolver">p5.Convolver</a>:</b> Extends
 *  <a href="#/p5.Reverb">p5.Reverb</a> to simulate the sound of real
 *    physical spaces through convolution.</li>
 *  <b><li><a href="#/p5.SoundRecorder">p5.SoundRecorder</a></b>: Record sound for playback
 *    / save the .wav file.
 *  <b><li><a href="#/p5.SoundLoop">p5.SoundLoop</a>, <a href="#/p5.Phrase">p5.Phrase</a></b>, <b><a href="#/p5.Part">p5.Part</a></b> and
 *  <b><a href="#/p5.Score">p5.Score</a></b>: Compose musical sequences.
 *  </li>
 *  <li><a href="#/p5/userStartAudio">userStartAudio</a>: Enable audio in a
 *  browser- and user-friendly way.</a>
 *  <p>p5.sound is on <a href="https://github.com/therewasaguy/p5.sound/">GitHub</a>.
 *  Download the latest version
 *  <a href="https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js">here</a>.</p>
 *
 *  @module p5.sound
 *  @submodule p5.sound
 *  @for p5.sound
 *  @main
 */

/**
 *  p5.sound 
 *  https://p5js.org/reference/#/libraries/p5.sound
 *
 *  From the Processing Foundation and contributors
 *  https://github.com/processing/p5.js-sound/graphs/contributors
 *
 *  MIT License (MIT)
 *  https://github.com/processing/p5.js-sound/blob/master/LICENSE
 *
 *  Some of the many audio libraries & resources that inspire p5.sound:
 *   - TONE.js (c) Yotam Mann. Licensed under The MIT License (MIT). https://github.com/TONEnoTONE/Tone.js
 *   - buzz.js (c) Jay Salvat. Licensed under The MIT License (MIT). http://buzz.jaysalvat.com/
 *   - Boris Smus Web Audio API book, 2013. Licensed under the Apache License http://www.apache.org/licenses/LICENSE-2.0
 *   - wavesurfer.js https://github.com/katspaugh/wavesurfer.js
 *   - Web Audio Components by Jordan Santell https://github.com/web-audio-components
 *   - Wilm Thoben's Sound library for Processing https://github.com/processing/processing/tree/master/java/libraries/sound
 *
 *   Web Audio API: http://w3.org/TR/webaudio/
 */

 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = 31);
 })
 ([
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict";function a(t,e){this.isUndef(t)||1===t?this.input=this.context.createGain():1<t&&(this.input=new Array(t)),this.isUndef(e)||1===e?this.output=this.context.createGain():1<e&&(this.output=new Array(t))}var e;return a.prototype.set=function(t,e,n){if(this.isObject(t))n=e;else if(this.isString(t)){var o={};o[t]=e,t=o}t:for(var i in t){e=t[i];var r=this;if(-1!==i.indexOf(".")){for(var s=i.split("."),u=0;u<s.length-1;u++)if((r=r[s[u]])instanceof a){s.splice(0,u+1);var p=s.join(".");r.set(p,e);continue t}i=s[s.length-1]}var c=r[i];this.isUndef(c)||(a.Signal&&c instanceof a.Signal||a.Param&&c instanceof a.Param?c.value!==e&&(this.isUndef(n)?c.value=e:c.rampTo(e,n)):c instanceof AudioParam?c.value!==e&&(c.value=e):c instanceof a?c.set(e):c!==e&&(r[i]=e))}return this},a.prototype.get=function(t){this.isUndef(t)?t=this._collectDefaults(this.constructor):this.isString(t)&&(t=[t]);for(var e={},n=0;n<t.length;n++){var o=t[n],i=this,r=e;if(-1!==o.indexOf(".")){for(var s=o.split("."),u=0;u<s.length-1;u++){var p=s[u];r[p]=r[p]||{},r=r[p],i=i[p]}o=s[s.length-1]}var c=i[o];this.isObject(t[o])?r[o]=c.get():a.Signal&&c instanceof a.Signal?r[o]=c.value:a.Param&&c instanceof a.Param?r[o]=c.value:c instanceof AudioParam?r[o]=c.value:c instanceof a?r[o]=c.get():this.isFunction(c)||this.isUndef(c)||(r[o]=c)}return e},a.prototype._collectDefaults=function(t){var e=[];if(this.isUndef(t.defaults)||(e=Object.keys(t.defaults)),!this.isUndef(t._super))for(var n=this._collectDefaults(t._super),o=0;o<n.length;o++)-1===e.indexOf(n[o])&&e.push(n[o]);return e},a.prototype.toString=function(){for(var t in a){var e=t[0].match(/^[A-Z]$/),n=a[t]===this.constructor;if(this.isFunction(a[t])&&e&&n)return t}return"Tone"},Object.defineProperty(a.prototype,"numberOfInputs",{get:function(){return this.input?this.isArray(this.input)?this.input.length:1:0}}),Object.defineProperty(a.prototype,"numberOfOutputs",{get:function(){return this.output?this.isArray(this.output)?this.output.length:1:0}}),a.prototype.dispose=function(){return this.isUndef(this.input)||(this.input instanceof AudioNode&&this.input.disconnect(),this.input=null),this.isUndef(this.output)||(this.output instanceof AudioNode&&this.output.disconnect(),this.output=null),this},a.prototype.connect=function(t,e,n){return Array.isArray(this.output)?(e=this.defaultArg(e,0),this.output[e].connect(t,0,n)):this.output.connect(t,e,n),this},a.prototype.disconnect=function(t,e,n){this.isArray(this.output)?this.isNumber(t)?this.output[t].disconnect():(e=this.defaultArg(e,0),this.output[e].disconnect(t,0,n)):this.output.disconnect.apply(this.output,arguments)},a.prototype.connectSeries=function(){if(1<arguments.length)for(var t=arguments[0],e=1;e<arguments.length;e++){var n=arguments[e];t.connect(n),t=n}return this},a.prototype.chain=function(){if(0<arguments.length)for(var t=this,e=0;e<arguments.length;e++){var n=arguments[e];t.connect(n),t=n}return this},a.prototype.fan=function(){if(0<arguments.length)for(var t=0;t<arguments.length;t++)this.connect(arguments[t]);return this},AudioNode.prototype.chain=a.prototype.chain,AudioNode.prototype.fan=a.prototype.fan,a.prototype.defaultArg=function(t,e){if(this.isObject(t)&&this.isObject(e)){var n={};for(var o in t)n[o]=this.defaultArg(e[o],t[o]);for(var i in e)n[i]=this.defaultArg(t[i],e[i]);return n}return this.isUndef(t)?e:t},a.prototype.optionsObject=function(t,e,n){var o={};if(1===t.length&&this.isObject(t[0]))o=t[0];else for(var i=0;i<e.length;i++)o[e[i]]=t[i];return this.isUndef(n)?o:this.defaultArg(o,n)},a.prototype.isUndef=function(t){return void 0===t},a.prototype.isFunction=function(t){return"function"==typeof t},a.prototype.isNumber=function(t){return"number"==typeof t},a.prototype.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object},a.prototype.isBoolean=function(t){return"boolean"==typeof t},a.prototype.isArray=function(t){return Array.isArray(t)},a.prototype.isString=function(t){return"string"==typeof t},a.noOp=function(){},a.prototype._readOnly=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._readOnly(t[e]);else Object.defineProperty(this,t,{writable:!1,enumerable:!0})},a.prototype._writable=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._writable(t[e]);else Object.defineProperty(this,t,{writable:!0})},a.State={Started:"started",Stopped:"stopped",Paused:"paused"},a.prototype.equalPowerScale=function(t){var e=.5*Math.PI;return Math.sin(t*e)},a.prototype.dbToGain=function(t){return Math.pow(2,t/6)},a.prototype.gainToDb=function(t){return Math.log(t)/Math.LN10*20},a.prototype.intervalToFrequencyRatio=function(t){return Math.pow(2,t/12)},a.prototype.now=function(){return a.context.now()},a.now=function(){return a.context.now()},a.extend=function(t,e){function n(){}a.prototype.isUndef(e)&&(e=a),n.prototype=e.prototype,t.prototype=new n,(t.prototype.constructor=t)._super=e},Object.defineProperty(a,"context",{get:function(){return e},set:function(t){e=a.Context&&t instanceof a.Context?t:new a.Context(t),a.Context&&a.Context.emit("init",e)}}),Object.defineProperty(a.prototype,"context",{get:function(){return a.context}}),a.setContext=function(t){a.context=t},Object.defineProperty(a.prototype,"blockTime",{get:function(){return 128/this.context.sampleRate}}),Object.defineProperty(a.prototype,"sampleTime",{get:function(){return 1/this.context.sampleRate}}),Object.defineProperty(a,"supported",{get:function(){var t=window.hasOwnProperty("AudioContext")||window.hasOwnProperty("webkitAudioContext"),e=window.hasOwnProperty("Promise"),n=window.hasOwnProperty("Worker");return t&&e&&n}}),a.version="r10",window.TONE_SILENCE_VERSION_LOGGING||console.log("%c * Tone.js "+a.version+" * ","background: #000; color: #fff"),a}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (audiocontext) {
  var Master = function Master() {
    this.input = audiocontext.createGain();
    this.output = audiocontext.createGain(); 

    this.limiter = audiocontext.createDynamicsCompressor();
    this.limiter.threshold.value = -3;
    this.limiter.ratio.value = 20;
    this.limiter.knee.value = 1;
    this.audiocontext = audiocontext;
    this.output.disconnect(); 

    this.input.connect(this.limiter); 

    this.limiter.connect(this.output); 

    this.meter = audiocontext.createGain();
    this.fftMeter = audiocontext.createGain();
    this.output.connect(this.meter);
    this.output.connect(this.fftMeter); 

    this.output.connect(this.audiocontext.destination); 

    this.soundArray = []; 

    this.parts = []; 

    this.extensions = [];
  }; 


  var p5sound = new Master();
  /**
   * Returns a number representing the master amplitude (volume) for sound
   * in this sketch.
   *
   * @method getMasterVolume
   * @return {Number} Master amplitude (volume) for sound in this sketch.
   *                  Should be between 0.0 (silence) and 1.0.
   */

  p5.prototype.getMasterVolume = function () {
    return p5sound.output.gain.value;
  };
  /**
   *  <p>Scale the output of all sound in this sketch</p>
   *  Scaled between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Envelope class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  <p><b>How This Works</b>: When you load the p5.sound module, it
   *  creates a single instance of p5sound. All sound objects in this
   *  module output to p5sound before reaching your computer's output.
   *  So if you change the amplitude of p5sound, it impacts all of the
   *  sound in this module.</p>
   *
   *  <p>If no value is provided, returns a Web Audio API Gain Node</p>
   *
   *  @method  masterVolume
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */


  p5.prototype.masterVolume = function (vol, rampTime, tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = p5sound.output.gain.value;
      p5sound.output.gain.cancelScheduledValues(now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(p5sound.output.gain);
    } else {
      return p5sound.output.gain;
    }
  };
  /**
   *  `p5.soundOut` is the p5.sound master output. It sends output to
   *  the destination of this window's web audio context. It contains
   *  Web Audio API nodes including a dyanmicsCompressor (<code>.limiter</code>),
   *  and Gain Nodes for <code>.input</code> and <code>.output</code>.
   *
   *  @property {Object} soundOut
   */


  p5.prototype.soundOut = p5.soundOut = p5sound; 

  p5.soundOut._silentNode = p5sound.audiocontext.createGain();
  p5.soundOut._silentNode.gain.value = 0;

  p5.soundOut._silentNode.connect(p5sound.audiocontext.destination);

  return p5sound;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(5),__webpack_require__(8),__webpack_require__(22),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){"use strict";return n.Signal=function(){var t=this.optionsObject(arguments,["value","units"],n.Signal.defaults);this.output=this._gain=this.context.createGain(),t.param=this._gain.gain,n.Param.call(this,t),this.input=this._param=this._gain.gain,this.context.getConstant(1).chain(this._gain)},n.extend(n.Signal,n.Param),n.Signal.defaults={value:0,units:n.Type.Default,convert:!0},n.Signal.prototype.connect=n.SignalBase.prototype.connect,n.Signal.prototype.dispose=function(){return n.Param.prototype.dispose.call(this),this._param=null,this._gain.disconnect(),this._gain=null,this},n.Signal}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Multiply=function(t){this.createInsOuts(2,0),this._mult=this.input[0]=this.output=new i.Gain,this._param=this.input[1]=this.output.gain,this._param.value=this.defaultArg(t,0)},i.extend(i.Multiply,i.Signal),i.Multiply.prototype.dispose=function(){return i.prototype.dispose.call(this),this._mult.dispose(),this._mult=null,this._param=null,this},i.Multiply}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var CrossFade = __webpack_require__(51);
  /**
   * Effect is a base class for audio effects in p5. <br>
   * This module handles the nodes and methods that are
   * common and useful for current and future effects.
   *
   *
   * This class is extended by <a href="/reference/#/p5.Distortion">p5.Distortion</a>,
   * <a href="/reference/#/p5.Compressor">p5.Compressor</a>,
   * <a href="/reference/#/p5.Delay">p5.Delay</a>,
   * <a href="/reference/#/p5.Filter">p5.Filter</a>,
   * <a href="/reference/#/p5.Reverb">p5.Reverb</a>.
   *
   * @class  p5.Effect
   * @constructor
   *
   * @param {Object} [ac]   Reference to the audio context of the p5 object
   * @param {AudioNode} [input]  Gain Node effect wrapper
   * @param {AudioNode} [output] Gain Node effect wrapper
   * @param {Object} [_drywet]   Tone.JS CrossFade node (defaults to value: 1)
   * @param {AudioNode} [wet]  Effects that extend this class should connect
   *                              to the wet signal to this gain node, so that dry and wet
   *                              signals are mixed properly.
   */


  p5.Effect = function () {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    /**
     *	The p5.Effect class is built
     * 	using Tone.js CrossFade
     * 	@private
     */

    this._drywet = new CrossFade(1);
    /**
     *	In classes that extend
     *	p5.Effect, connect effect nodes
     *	to the wet parameter
     */

    this.wet = this.ac.createGain();
    this.input.connect(this._drywet.a);
    this.wet.connect(this._drywet.b);

    this._drywet.connect(this.output);

    this.connect(); 

    p5sound.soundArray.push(this);
  };
  /**
   *  Set the output volume of the filter.
   *
   *  @method  amp
   *  @for p5.Effect
   *  @param {Number} [vol] amplitude between 0 and 1.0
   *  @param {Number} [rampTime] create a fade that lasts until rampTime
   *  @param {Number} [tFromNow] schedule this event to happen in tFromNow seconds
   */


  p5.Effect.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow + .001);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime + .001);
  };
  /**
   *  Link effects together in a chain
   *  Example usage: filter.chain(reverb, delay, panner);
   *  May be used with an open-ended number of arguments
   *
   *  @method chain
   *  @for p5.Effect
   *  @param {Object} [arguments]  Chain together multiple sound objects
   */


  p5.Effect.prototype.chain = function () {
    if (arguments.length > 0) {
      this.connect(arguments[0]);

      for (var i = 1; i < arguments.length; i += 1) {
        arguments[i - 1].connect(arguments[i]);
      }
    }

    return this;
  };
  /**
   *  Adjust the dry/wet value.
   *
   *  @method drywet
   *  @for p5.Effect
   *  @param {Number} [fade] The desired drywet value (0 - 1.0)
   */


  p5.Effect.prototype.drywet = function (fade) {
    if (typeof fade !== "undefined") {
      this._drywet.fade.value = fade;
    }

    return this._drywet.fade.value;
  };
  /**
   *  Send output to a p5.js-sound, Web Audio Node, or use signal to
   *  control an AudioParam
   *
   *  @method connect
   *  @for p5.Effect
   *  @param {Object} unit
   */


  p5.Effect.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   * Disconnect all output.
   * @method disconnect
   * @for p5.Effect
   */


  p5.Effect.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };

  p5.Effect.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.input) {
      this.input.disconnect();
      delete this.input;
    }

    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }

    if (this._drywet) {
      this._drywet.disconnect();

      delete this._drywet;
    }

    if (this.wet) {
      this.wet.disconnect();
      delete this.wet;
    }

    this.ac = undefined;
  };

  return p5.Effect;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){"use strict";return e.WaveShaper=function(e,t){this._shaper=this.input=this.output=this.context.createWaveShaper(),this._curve=null,Array.isArray(e)?this.curve=e:isFinite(e)||this.isUndef(e)?this._curve=new Float32Array(this.defaultArg(e,1024)):this.isFunction(e)&&(this._curve=new Float32Array(this.defaultArg(t,1024)),this.setMap(e))},e.extend(e.WaveShaper,e.SignalBase),e.WaveShaper.prototype.setMap=function(e){for(var t=0,r=this._curve.length;t<r;t++){var s=t/(r-1)*2-1;this._curve[t]=e(s,t)}return this._shaper.curve=this._curve,this},Object.defineProperty(e.WaveShaper.prototype,"curve",{get:function(){return this._shaper.curve},set:function(e){this._curve=new Float32Array(e),this._shaper.curve=this._curve}}),Object.defineProperty(e.WaveShaper.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(e){if(-1===["none","2x","4x"].indexOf(e))throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");this._shaper.oversample=e}}),e.WaveShaper.prototype.dispose=function(){return e.prototype.dispose.call(this),this._shaper.disconnect(),this._shaper=null,this._curve=null,this},e.WaveShaper}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var processorNames = __webpack_require__(10);
  /**
   * @for p5
   */

  /**
   * Returns a number representing the sample rate, in samples per second,
   * of all sound objects in this audio context. It is determined by the
   * sampling rate of your operating system's sound card, and it is not
   * currently possile to change.
   * It is often 44100, or twice the range of human hearing.
   *
   * @method sampleRate
   * @return {Number} samplerate samples per second
   */


  p5.prototype.sampleRate = function () {
    return p5sound.audiocontext.sampleRate;
  };
  /**
   *  Returns the closest MIDI note value for
   *  a given frequency.
   *
   *  @method freqToMidi
   *  @param  {Number} frequency A freqeuncy, for example, the "A"
   *                             above Middle C is 440Hz
   *  @return {Number}   MIDI note value
   */


  p5.prototype.freqToMidi = function (f) {
    var mathlog2 = Math.log(f / 440) / Math.log(2);
    var m = Math.round(12 * mathlog2) + 69;
    return m;
  };
  /**
   *  Returns the frequency value of a MIDI note value.
   *  General MIDI treats notes as integers where middle C
   *  is 60, C# is 61, D is 62 etc. Useful for generating
   *  musical frequencies with oscillators.
   *
   *  @method  midiToFreq
   *  @param  {Number} midiNote The number of a MIDI note
   *  @return {Number} Frequency value of the given MIDI note
   *  @example
   *  <div><code>
   *  let midiNotes = [60, 64, 67, 72];
   *  let noteIndex = 0;
   *  let midiVal, freq;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(startSound);
   *    osc = new p5.TriOsc();
   *    env = new p5.Envelope();
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap to play', 10, 20);
   *    if (midiVal) {
   *      text('MIDI: ' + midiVal, 10, 40);
   *      text('Freq: ' + freq, 10, 60);
   *    }
   *  }
   *
   *  function startSound() {
   *    // see also: userStartAudio();
   *    osc.start();
   *
   *    midiVal = midiNotes[noteIndex % midiNotes.length];
   *    freq = midiToFreq(midiVal);
   *    osc.freq(freq);
   *    env.ramp(osc, 0, 1.0, 0);
   *
   *    noteIndex++;
   *  }
   *  </code></div>
   */


  var midiToFreq = p5.prototype.midiToFreq = function (m) {
    return 440 * Math.pow(2, (m - 69) / 12.0);
  }; 


  var noteToFreq = function noteToFreq(note) {
    if (typeof note !== 'string') {
      return note;
    }

    var wholeNotes = {
      A: 21,
      B: 23,
      C: 24,
      D: 26,
      E: 28,
      F: 29,
      G: 31
    };
    var value = wholeNotes[note[0].toUpperCase()];
    var octave = ~~note.slice(-1);
    value += 12 * (octave - 1);

    switch (note[1]) {
      case '#':
        value += 1;
        break;

      case 'b':
        value -= 1;
        break;

      default:
        break;
    }

    return midiToFreq(value);
  };
  /**
   *  List the SoundFile formats that you will include. LoadSound
   *  will search your directory for these extensions, and will pick
   *  a format that is compatable with the client's web browser.
   *  <a href="http://media.io/">Here</a> is a free online file
   *  converter.
   *
   *  @method soundFormats
   *  @param {String} [...formats] i.e. 'mp3', 'wav', 'ogg'
   *  @example
   *  <div><code>
   *  function preload() {
   *    // set the global sound formats
   *    soundFormats('mp3', 'ogg');
   *
   *    // load either beatbox.mp3, or .ogg, depending on browser
   *    mySound = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function setup() {
   *       let cnv = createCanvas(100, 100);
   *       background(220);
   *       text('sound loaded! tap to play', 10, 20, width - 20);
   *       cnv.mousePressed(function() {
   *         mySound.play();
   *       });
   *     }
   *  </code></div>
   */


  p5.prototype.soundFormats = function () {
    p5sound.extensions = []; 

    for (var i = 0; i < arguments.length; i++) {
      arguments[i] = arguments[i].toLowerCase();

      if (['mp3', 'wav', 'ogg', 'm4a', 'aac'].indexOf(arguments[i]) > -1) {
        p5sound.extensions.push(arguments[i]);
      } else {
        throw arguments[i] + ' is not a valid sound format!';
      }
    }
  };

  p5.prototype.disposeSound = function () {
    for (var i = 0; i < p5sound.soundArray.length; i++) {
      p5sound.soundArray[i].dispose();
    }
  }; 


  p5.prototype.registerMethod('remove', p5.prototype.disposeSound);

  p5.prototype._checkFileFormats = function (paths) {
    var path; 

    if (typeof paths === 'string') {
      path = paths; 

      var extTest = path.split('.').pop(); 

      if (['mp3', 'wav', 'ogg', 'm4a', 'aac'].indexOf(extTest) > -1) {
        if (p5.prototype.isFileSupported(extTest)) {
          path = path;
        } else {
          var pathSplit = path.split('.');
          var pathCore = pathSplit[pathSplit.length - 1];

          for (var i = 0; i < p5sound.extensions.length; i++) {
            var extension = p5sound.extensions[i];
            var supported = p5.prototype.isFileSupported(extension);

            if (supported) {
              pathCore = '';

              if (pathSplit.length === 2) {
                pathCore += pathSplit[0];
              }

              for (var i = 1; i <= pathSplit.length - 2; i++) {
                var p = pathSplit[i];
                pathCore += '.' + p;
              }

              path = pathCore += '.';
              path = path += extension;
              break;
            }
          }
        }
      } 
      else {
          for (var i = 0; i < p5sound.extensions.length; i++) {
            var extension = p5sound.extensions[i];
            var supported = p5.prototype.isFileSupported(extension);

            if (supported) {
              path = path + '.' + extension;
              break;
            }
          }
        }
    } 
    else if (_typeof(paths) === 'object') {
        for (var i = 0; i < paths.length; i++) {
          var extension = paths[i].split('.').pop();
          var supported = p5.prototype.isFileSupported(extension);

          if (supported) {
            path = paths[i];
            break;
          }
        }
      }

    return path;
  };
  /**
   *  Used by Osc and Envelope to chain signal math
   */


  p5.prototype._mathChain = function (o, math, thisChain, nextChain, type) {
    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        o.mathOps[i].dispose();
        thisChain = i;

        if (thisChain < o.mathOps.length - 1) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }

    o.mathOps[thisChain - 1].disconnect();
    o.mathOps[thisChain - 1].connect(math);
    math.connect(nextChain);
    o.mathOps[thisChain] = math;
    return o;
  }; 


  function convertToWav(audioBuffer) {
    var leftChannel, rightChannel;
    leftChannel = audioBuffer.getChannelData(0); 

    if (audioBuffer.numberOfChannels > 1) {
      rightChannel = audioBuffer.getChannelData(1);
    } else {
      rightChannel = leftChannel;
    }

    var interleaved = interleave(leftChannel, rightChannel); 

    var buffer = new window.ArrayBuffer(44 + interleaved.length * 2);
    var view = new window.DataView(buffer); 

    writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 36 + interleaved.length * 2, true);
    writeUTFBytes(view, 8, 'WAVE'); 

    writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); 

    view.setUint16(22, 2, true);
    view.setUint32(24, p5sound.audiocontext.sampleRate, true);
    view.setUint32(28, p5sound.audiocontext.sampleRate * 4, true);
    view.setUint16(32, 4, true);
    view.setUint16(34, 16, true); 

    writeUTFBytes(view, 36, 'data');
    view.setUint32(40, interleaved.length * 2, true); 

    var lng = interleaved.length;
    var index = 44;
    var volume = 1;

    for (var i = 0; i < lng; i++) {
      view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
      index += 2;
    }

    return view;
  } 


  function interleave(leftChannel, rightChannel) {
    var length = leftChannel.length + rightChannel.length;
    var result = new Float32Array(length);
    var inputIndex = 0;

    for (var index = 0; index < length;) {
      result[index++] = leftChannel[inputIndex];
      result[index++] = rightChannel[inputIndex];
      inputIndex++;
    }

    return result;
  }

  function writeUTFBytes(view, offset, string) {
    var lng = string.length;

    for (var i = 0; i < lng; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  function safeBufferSize(idealBufferSize) {
    var bufferSize = idealBufferSize; 

    var tempAudioWorkletNode = new AudioWorkletNode(p5sound.audiocontext, processorNames.soundFileProcessor);

    if (tempAudioWorkletNode instanceof ScriptProcessorNode) {
      bufferSize = tempAudioWorkletNode.bufferSize;
    }

    tempAudioWorkletNode.disconnect();
    tempAudioWorkletNode = null;
    return bufferSize;
  }

  return {
    convertToWav: convertToWav,
    midiToFreq: midiToFreq,
    noteToFreq: noteToFreq,
    safeBufferSize: safeBufferSize
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Add=function(t){this.createInsOuts(2,0),this._sum=this.input[0]=this.input[1]=this.output=new i.Gain,this._param=this.input[1]=new i.Signal(t),this._param.connect(this._sum)},i.extend(i.Add,i.Signal),i.Add.prototype.dispose=function(){return i.prototype.dispose.call(this),this._sum.dispose(),this._sum=null,this._param.dispose(),this._param=null,this},i.Add}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(20),__webpack_require__(45),__webpack_require__(46),__webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){return t.Type={Default:"number",Time:"time",Frequency:"frequency",TransportTime:"transportTime",Ticks:"ticks",NormalRange:"normalRange",AudioRange:"audioRange",Decibels:"db",Interval:"interval",BPM:"bpm",Positive:"positive",Cents:"cents",Degrees:"degrees",MIDI:"midi",BarsBeatsSixteenths:"barsBeatsSixteenths",Samples:"samples",Hertz:"hertz",Note:"note",Milliseconds:"milliseconds",Seconds:"seconds",Notation:"notation"},t.prototype.toSeconds=function(e){return this.isNumber(e)?e:this.isUndef(e)?this.now():this.isString(e)?new t.Time(e).toSeconds():e instanceof t.TimeBase?e.toSeconds():void 0},t.prototype.toFrequency=function(e){return this.isNumber(e)?e:this.isString(e)||this.isUndef(e)?new t.Frequency(e).valueOf():e instanceof t.TimeBase?e.toFrequency():void 0},t.prototype.toTicks=function(e){return this.isNumber(e)||this.isString(e)?new t.TransportTime(e).toTicks():this.isUndef(e)?t.Transport.ticks:e instanceof t.TimeBase?e.toTicks():void 0},t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(22),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return window.GainNode&&!AudioContext.prototype.createGain&&(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),i.Gain=function(){var t=this.optionsObject(arguments,["gain","units"],i.Gain.defaults);this.input=this.output=this._gainNode=this.context.createGain(),this.gain=new i.Param({param:this._gainNode.gain,units:t.units,value:t.gain,convert:t.convert}),this._readOnly("gain")},i.extend(i.Gain),i.Gain.defaults={gain:1,convert:!0},i.Gain.prototype.dispose=function(){i.Param.prototype.dispose.call(this),this._gainNode.disconnect(),this._gainNode=null,this._writable("gain"),this.gain.dispose(),this.gain=null},i.prototype.createInsOuts=function(t,n){1===t?this.input=new i.Gain:1<t&&(this.input=new Array(t)),1===n?this.output=new i.Gain:1<n&&(this.output=new Array(t))},i.Gain}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports) {

module.exports = {
  recorderProcessor: 'recorder-processor',
  soundFileProcessor: 'sound-file-processor',
  amplitudeProcessor: 'amplitude-processor'
};

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var CustomError = function CustomError(name, errorTrace, failedPath) {
    var err = new Error();
    var tempStack, splitStack;
    err.name = name;
    err.originalStack = err.stack + errorTrace;
    tempStack = err.stack + errorTrace;
    err.failedPath = failedPath; 

    var splitStack = tempStack.split('\n');
    splitStack = splitStack.filter(function (ln) {
      return !ln.match(/(p5.|native code|globalInit)/g);
    });
    err.stack = splitStack.join('\n');
    return err; 
  };

  return CustomError;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(18)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){function t(e,t,n){if(e.input)Array.isArray(e.input)?(o.prototype.isUndef(n)&&(n=0),this.connect(e.input[n])):this.connect(e.input,t,n);else try{e instanceof AudioNode?i.call(this,e,t,n):i.call(this,e,t)}catch(t){throw new Error("error connecting to node: "+e+"\n"+t)}}var i,r;return!window.hasOwnProperty("AudioContext")&&window.hasOwnProperty("webkitAudioContext")&&(window.AudioContext=window.webkitAudioContext),o.Context=function(t){for(var e in o.Emitter.call(this),t=t||new window.AudioContext,this._context=t,this._context)this._defineProperty(this._context,e);this._latencyHint="interactive",this._lookAhead=.1,this._updateInterval=this._lookAhead/3,this._computedUpdateInterval=0,this._worker=this._createWorker(),this._constants={}},o.extend(o.Context,o.Emitter),o.Emitter.mixin(o.Context),o.Context.prototype._defineProperty=function(e,n){this.isUndef(this[n])&&Object.defineProperty(this,n,{get:function(){return"function"==typeof e[n]?e[n].bind(e):e[n]},set:function(t){e[n]=t}})},o.Context.prototype.now=function(){return this._context.currentTime},o.Context.prototype._createWorker=function(){window.URL=window.URL||window.webkitURL;var t=new Blob(["var timeoutTime = "+(1e3*this._updateInterval).toFixed(1)+";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),e=URL.createObjectURL(t),n=new Worker(e);return n.addEventListener("message",function(){this.emit("tick")}.bind(this)),n.addEventListener("message",function(){var t=this.now();if(this.isNumber(this._lastUpdate)){var e=t-this._lastUpdate;this._computedUpdateInterval=Math.max(e,.97*this._computedUpdateInterval)}this._lastUpdate=t}.bind(this)),n},o.Context.prototype.getConstant=function(t){if(this._constants[t])return this._constants[t];for(var e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0),o=0;o<n.length;o++)n[o]=t;var i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=e,i.loop=!0,i.start(0),this._constants[t]=i},Object.defineProperty(o.Context.prototype,"lag",{get:function(){var t=this._computedUpdateInterval-this._updateInterval;return t=Math.max(t,0)}}),Object.defineProperty(o.Context.prototype,"lookAhead",{get:function(){return this._lookAhead},set:function(t){this._lookAhead=t}}),Object.defineProperty(o.Context.prototype,"updateInterval",{get:function(){return this._updateInterval},set:function(t){this._updateInterval=Math.max(t,o.prototype.blockTime),this._worker.postMessage(Math.max(1e3*t,1))}}),Object.defineProperty(o.Context.prototype,"latencyHint",{get:function(){return this._latencyHint},set:function(t){var e=t;if(this._latencyHint=t,this.isString(t))switch(t){case"interactive":e=.1,this._context.latencyHint=t;break;case"playback":e=.8,this._context.latencyHint=t;break;case"balanced":e=.25,this._context.latencyHint=t;break;case"fastest":e=.01}this.lookAhead=e,this.updateInterval=e/3}}),o.supported?(i=AudioNode.prototype.connect,r=AudioNode.prototype.disconnect,AudioNode.prototype.connect!==t&&(AudioNode.prototype.connect=t,AudioNode.prototype.disconnect=function(e,t,n){if(e&&e.input&&Array.isArray(e.input))o.prototype.isUndef(n)&&(n=0),this.disconnect(e.input[n],t,n);else if(e&&e.input)this.disconnect(e.input,t,n);else try{r.apply(this,arguments)}catch(t){throw new Error("error disconnecting node: "+e+"\n"+t)}}),o.context=new o.Context):console.warn("This browser does not support Tone.js"),o.Context}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(7),__webpack_require__(3),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Scale=function(t,e){this._outputMin=this.defaultArg(t,0),this._outputMax=this.defaultArg(e,1),this._scale=this.input=new i.Multiply(1),this._add=this.output=new i.Add(0),this._scale.connect(this._add),this._setRange()},i.extend(i.Scale,i.SignalBase),Object.defineProperty(i.Scale.prototype,"min",{get:function(){return this._outputMin},set:function(t){this._outputMin=t,this._setRange()}}),Object.defineProperty(i.Scale.prototype,"max",{get:function(){return this._outputMax},set:function(t){this._outputMax=t,this._setRange()}}),i.Scale.prototype._setRange=function(){this._add.value=this._outputMin,this._scale.value=this._outputMax-this._outputMin},i.Scale.prototype.dispose=function(){return i.prototype.dispose.call(this),this._add.dispose(),this._add=null,this._scale.dispose(),this._scale=null,this},i.Scale}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){"use strict";return o.TimelineSignal=function(){var e=this.optionsObject(arguments,["value","units"],o.Signal.defaults);this._events=new o.Timeline(10),o.Signal.apply(this,e),e.param=this._param,o.Param.call(this,e),this._initial=this._fromUnits(this._param.value)},o.extend(o.TimelineSignal,o.Param),o.TimelineSignal.Type={Linear:"linear",Exponential:"exponential",Target:"target",Curve:"curve",Set:"set"},Object.defineProperty(o.TimelineSignal.prototype,"value",{get:function(){var e=this.now(),t=this.getValueAtTime(e);return this._toUnits(t)},set:function(e){var t=this._fromUnits(e);this._initial=t,this.cancelScheduledValues(),this._param.value=t}}),o.TimelineSignal.prototype.setValueAtTime=function(e,t){return e=this._fromUnits(e),t=this.toSeconds(t),this._events.add({type:o.TimelineSignal.Type.Set,value:e,time:t}),this._param.setValueAtTime(e,t),this},o.TimelineSignal.prototype.linearRampToValueAtTime=function(e,t){return e=this._fromUnits(e),t=this.toSeconds(t),this._events.add({type:o.TimelineSignal.Type.Linear,value:e,time:t}),this._param.linearRampToValueAtTime(e,t),this},o.TimelineSignal.prototype.exponentialRampToValueAtTime=function(e,t){t=this.toSeconds(t);var i=this._searchBefore(t);i&&0===i.value&&this.setValueAtTime(this._minOutput,i.time),e=this._fromUnits(e);var n=Math.max(e,this._minOutput);return this._events.add({type:o.TimelineSignal.Type.Exponential,value:n,time:t}),e<this._minOutput?(this._param.exponentialRampToValueAtTime(this._minOutput,t-this.sampleTime),this.setValueAtTime(0,t)):this._param.exponentialRampToValueAtTime(e,t),this},o.TimelineSignal.prototype.setTargetAtTime=function(e,t,i){return e=this._fromUnits(e),e=Math.max(this._minOutput,e),i=Math.max(this._minOutput,i),t=this.toSeconds(t),this._events.add({type:o.TimelineSignal.Type.Target,value:e,time:t,constant:i}),this._param.setTargetAtTime(e,t,i),this},o.TimelineSignal.prototype.setValueCurveAtTime=function(e,t,i,n){n=this.defaultArg(n,1);for(var a=new Array(e.length),l=0;l<a.length;l++)a[l]=this._fromUnits(e[l])*n;t=this.toSeconds(t),i=this.toSeconds(i),this._events.add({type:o.TimelineSignal.Type.Curve,value:a,time:t,duration:i}),this._param.setValueAtTime(a[0],t);for(var s=1;s<a.length;s++){var r=t+s/(a.length-1)*i;this._param.linearRampToValueAtTime(a[s],r)}return this},o.TimelineSignal.prototype.cancelScheduledValues=function(e){return e=this.toSeconds(e),this._events.cancel(e),this._param.cancelScheduledValues(e),this},o.TimelineSignal.prototype.setRampPoint=function(e){e=this.toSeconds(e);var t=this._toUnits(this.getValueAtTime(e)),i=this._searchBefore(e);if(i&&i.time===e)this.cancelScheduledValues(e+this.sampleTime);else if(i&&i.type===o.TimelineSignal.Type.Curve&&i.time+i.duration>e)this.cancelScheduledValues(e),this.linearRampToValueAtTime(t,e);else{var n=this._searchAfter(e);n&&(this.cancelScheduledValues(e),n.type===o.TimelineSignal.Type.Linear?this.linearRampToValueAtTime(t,e):n.type===o.TimelineSignal.Type.Exponential&&this.exponentialRampToValueAtTime(t,e)),this.setValueAtTime(t,e)}return this},o.TimelineSignal.prototype.linearRampToValueBetween=function(e,t,i){return this.setRampPoint(t),this.linearRampToValueAtTime(e,i),this},o.TimelineSignal.prototype.exponentialRampToValueBetween=function(e,t,i){return this.setRampPoint(t),this.exponentialRampToValueAtTime(e,i),this},o.TimelineSignal.prototype._searchBefore=function(e){return this._events.get(e)},o.TimelineSignal.prototype._searchAfter=function(e){return this._events.getAfter(e)},o.TimelineSignal.prototype.getValueAtTime=function(e){e=this.toSeconds(e);var t=this._searchAfter(e),i=this._searchBefore(e),n=this._initial;if(null===i)n=this._initial;else if(i.type===o.TimelineSignal.Type.Target){var a,l=this._events.getBefore(i.time);a=null===l?this._initial:l.value,n=this._exponentialApproach(i.time,a,i.value,i.constant,e)}else n=i.type===o.TimelineSignal.Type.Curve?this._curveInterpolate(i.time,i.value,i.duration,e):null===t?i.value:t.type===o.TimelineSignal.Type.Linear?this._linearInterpolate(i.time,i.value,t.time,t.value,e):t.type===o.TimelineSignal.Type.Exponential?this._exponentialInterpolate(i.time,i.value,t.time,t.value,e):i.value;return n},o.TimelineSignal.prototype.connect=o.SignalBase.prototype.connect,o.TimelineSignal.prototype._exponentialApproach=function(e,t,i,n,a){return i+(t-i)*Math.exp(-(a-e)/n)},o.TimelineSignal.prototype._linearInterpolate=function(e,t,i,n,a){return t+(a-e)/(i-e)*(n-t)},o.TimelineSignal.prototype._exponentialInterpolate=function(e,t,i,n,a){return(t=Math.max(this._minOutput,t))*Math.pow(n/t,(a-e)/(i-e))},o.TimelineSignal.prototype._curveInterpolate=function(e,t,i,n){var a=t.length;if(e+i<=n)return t[a-1];if(n<=e)return t[0];var l=(n-e)/i,s=Math.floor((a-1)*l),r=Math.ceil((a-1)*l),o=t[s],p=t[r];return r===s?o:this._linearInterpolate(s,o,r,p,l*(a-1))},o.TimelineSignal.prototype.dispose=function(){o.Signal.prototype.dispose.call(this),o.Param.prototype.dispose.call(this),this._events.dispose(),this._events=null},o.TimelineSignal}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var Effect = __webpack_require__(4);
  /**
   *  <p>A p5.Filter uses a Web Audio Biquad Filter to filter
   *  the frequency response of an input source. Subclasses
   *  include:</p>
   *  <a href="/reference/#/p5.LowPass"><code>p5.LowPass</code></a>:
   *  Allows frequencies below the cutoff frequency to pass through,
   *  and attenuates frequencies above the cutoff.<br/>
   *  <a href="/reference/#/p5.HighPass"><code>p5.HighPass</code></a>:
   *  The opposite of a lowpass filter. <br/>
   *  <a href="/reference/#/p5.BandPass"><code>p5.BandPass</code></a>:
   *  Allows a range of frequencies to pass through and attenuates
   *  the frequencies below and above this frequency range.<br/>
   *
   *  The <code>.res()</code> method controls either width of the
   *  bandpass, or resonance of the low/highpass cutoff frequency.
   *
   *  This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   *  Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   *  <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   *  <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   *  @class p5.Filter
   *  @extends p5.Effect
   *  @constructor
   *  @param {String} [type] 'lowpass' (default), 'highpass', 'bandpass'
   *  @example
   *  <div><code>
  *  let fft, noise, filter;
  *
  *  function setup() {
  *    let cnv = createCanvas(100,100);
  *    cnv.mousePressed(makeNoise);
  *    fill(255, 0, 255);
  *
  *    filter = new p5.BandPass();
  *    noise = new p5.Noise();
  *    noise.disconnect();
  *    noise.connect(filter);
  *
  *    fft = new p5.FFT();
  *  }
  *
  *  function draw() {
  *    background(220);
  *
  *    // set the BandPass frequency based on mouseX
  *    let freq = map(mouseX, 0, width, 20, 10000);
  *    freq = constrain(freq, 0, 22050);
  *    filter.freq(freq);
  *    // give the filter a narrow band (lower res = wider bandpass)
  *    filter.res(50);
  *
  *    // draw filtered spectrum
  *    let spectrum = fft.analyze();
  *    noStroke();
  *    for (let i = 0; i < spectrum.length; i++) {
  *      let x = map(i, 0, spectrum.length, 0, width);
  *      let h = -height + map(spectrum[i], 0, 255, height, 0);
  *      rect(x, height, width/spectrum.length, h);
  *    }
  *    if (!noise.started) {
  *      text('tap here and drag to change frequency', 10, 20, width - 20);
  *    } else {
  *      text('Frequency: ' + round(freq)+'Hz', 20, 20, width - 20);
  *    }
  *  }
  *
  *  function makeNoise() {
  *    // see also: `userStartAudio()`
  *    noise.start();
  *    noise.amp(0.5, 0.2);
  *  }
  *
  *  function mouseReleased() {
  *    noise.amp(0, 0.2);
  *  }
  *
   *  </code></div>
   */


  p5.Filter = function (type) {
    Effect.call(this); 

    /**
      *  The p5.Filter is built with a
      *  <a href="http://www.w3.org/TR/webaudio/#BiquadFilterNode">
      *  Web Audio BiquadFilter Node</a>.
      *
      *  @property {DelayNode} biquadFilter
    */

    this.biquad = this.ac.createBiquadFilter();
    this.input.connect(this.biquad);
    this.biquad.connect(this.wet);

    if (type) {
      this.setType(type);
    } 


    this._on = true;
    this._untoggledType = this.biquad.type;
  };

  p5.Filter.prototype = Object.create(Effect.prototype);
  /**
   *  Filter an audio signal according to a set
   *  of filter parameters.
   *
   *  @method  process
   *  @param  {Object} Signal  An object that outputs audio
   *  @param {Number} [freq] Frequency in Hz, from 10 to 22050
   *  @param {Number} [res] Resonance/Width of the filter frequency
   *                        from 0.001 to 1000
   */

  p5.Filter.prototype.process = function (src, freq, res, time) {
    src.connect(this.input);
    this.set(freq, res, time);
  };
  /**
   *  Set the frequency and the resonance of the filter.
   *
   *  @method  set
   *  @param {Number} [freq] Frequency in Hz, from 10 to 22050
   *  @param {Number} [res]  Resonance (Q) from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */


  p5.Filter.prototype.set = function (freq, res, time) {
    if (freq) {
      this.freq(freq, time);
    }

    if (res) {
      this.res(res, time);
    }
  };
  /**
   *  Set the filter frequency, in Hz, from 10 to 22050 (the range of
   *  human hearing, although in reality most people hear in a narrower
   *  range).
   *
   *  @method  freq
   *  @param  {Number} freq Filter Frequency
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value  Returns the current frequency value
   */


  p5.Filter.prototype.freq = function (freq, time) {
    var t = time || 0;

    if (freq <= 0) {
      freq = 1;
    }

    if (typeof freq === 'number') {
      this.biquad.frequency.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.frequency.exponentialRampToValueAtTime(freq, this.ac.currentTime + 0.02 + t);
    } else if (freq) {
      freq.connect(this.biquad.frequency);
    }

    return this.biquad.frequency.value;
  };
  /**
   *  Controls either width of a bandpass frequency,
   *  or the resonance of a low/highpass cutoff frequency.
   *
   *  @method  res
   *  @param {Number} res  Resonance/Width of filter freq
   *                       from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value Returns the current res value
   */


  p5.Filter.prototype.res = function (res, time) {
    var t = time || 0;

    if (typeof res === 'number') {
      this.biquad.Q.value = res;
      this.biquad.Q.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.Q.linearRampToValueAtTime(res, this.ac.currentTime + 0.02 + t);
    } else if (res) {
      res.connect(this.biquad.Q);
    }

    return this.biquad.Q.value;
  };
  /**
   * Controls the gain attribute of a Biquad Filter.
   * This is distinctly different from .amp() which is inherited from p5.Effect
   * .amp() controls the volume via the output gain node
   * p5.Filter.gain() controls the gain parameter of a Biquad Filter node.
   *
   * @method gain
   * @param  {Number} gain
   * @return {Number} Returns the current or updated gain value
   */


  p5.Filter.prototype.gain = function (gain, time) {
    var t = time || 0;

    if (typeof gain === 'number') {
      this.biquad.gain.value = gain;
      this.biquad.gain.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.gain.linearRampToValueAtTime(gain, this.ac.currentTime + 0.02 + t);
    } else if (gain) {
      gain.connect(this.biquad.gain);
    }

    return this.biquad.gain.value;
  };
  /**
   * Toggle function. Switches between the specified type and allpass
   *
   * @method toggle
   * @return {boolean} [Toggle value]
   */


  p5.Filter.prototype.toggle = function () {
    this._on = !this._on;

    if (this._on === true) {
      this.biquad.type = this._untoggledType;
    } else if (this._on === false) {
      this.biquad.type = 'allpass';
    }

    return this._on;
  };
  /**
   *  Set the type of a p5.Filter. Possible types include:
   *  "lowpass" (default), "highpass", "bandpass",
   *  "lowshelf", "highshelf", "peaking", "notch",
   *  "allpass".
   *
   *  @method  setType
   *  @param {String} t
   */


  p5.Filter.prototype.setType = function (t) {
    this.biquad.type = t;
    this._untoggledType = this.biquad.type;
  };

  p5.Filter.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);

    if (this.biquad) {
      this.biquad.disconnect();
      delete this.biquad;
    }
  };
  /**
   *  Constructor: <code>new p5.LowPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('lowpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.LowPass
   *  @constructor
   *  @extends p5.Filter
   */


  p5.LowPass = function () {
    p5.Filter.call(this, 'lowpass');
  };

  p5.LowPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.HighPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('highpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.HighPass
   *  @constructor
   *  @extends p5.Filter
   */

  p5.HighPass = function () {
    p5.Filter.call(this, 'highpass');
  };

  p5.HighPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.BandPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('bandpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.BandPass
   *  @constructor
   *  @extends p5.Filter
   */

  p5.BandPass = function () {
    p5.Filter.call(this, 'bandpass');
  };

  p5.BandPass.prototype = Object.create(p5.Filter.prototype);
  return p5.Filter;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(7),__webpack_require__(25),__webpack_require__(2),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){"use strict";return n.Subtract=function(t){this.createInsOuts(2,0),this._sum=this.input[0]=this.output=new n.Gain,this._neg=new n.Negate,this._param=this.input[1]=new n.Signal(t),this._param.chain(this._neg,this._sum)},n.extend(n.Subtract,n.Signal),n.Subtract.prototype.dispose=function(){return n.prototype.dispose.call(this),this._neg.dispose(),this._neg=null,this._sum.disconnect(),this._sum=null,this._param.dispose(),this._param=null,this},n.Subtract}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

global.TONE_SILENCE_VERSION_LOGGING = true;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35), __webpack_require__(12), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (StartAudioContext, Context, Tone) {
  var audiocontext = new window.AudioContext(); 

  Tone.context.dispose();
  Tone.setContext(audiocontext);
  /**
   * <p>Returns the Audio Context for this sketch. Useful for users
   * who would like to dig deeper into the <a target='_blank' href=
   * 'http://webaudio.github.io/web-audio-api/'>Web Audio API
   * </a>.</p>
   *
   * <p>Some browsers require users to startAudioContext
   * with a user gesture, such as touchStarted in the example below.</p>
   *
   * @for p5
   * @method getAudioContext
   * @return {Object}    AudioContext for this sketch
   * @example
   * <div><code>
   *  function draw() {
   *    background(255);
   *    textAlign(CENTER);
   *
   *    if (getAudioContext().state !== 'running') {
   *      text('click to start audio', width/2, height/2);
   *    } else {
   *      text('audio is enabled', width/2, height/2);
   *    }
   *  }
   *
   *  function touchStarted() {
   *    if (getAudioContext().state !== 'running') {
   *      getAudioContext().resume();
   *    }
   *    var synth = new p5.MonoSynth();
   *    synth.play('A4', 0.5, 0, 0.2);
   *  }
   *
   * </div></code>
   */

  p5.prototype.getAudioContext = function () {
    return audiocontext;
  };
  /**
   *  <p>It is not only a good practice to give users control over starting
   *  audio. This policy is enforced by many web browsers, including iOS and
   *  <a href="https://goo.gl/7K7WLu" title="Google Chrome's autoplay
   *  policy">Google Chrome</a>, which create the Web Audio API's
   *  <a href="https://developer.mozilla.org/en-US/docs/Web/API/AudioContext"
   *  title="Audio Context @ MDN">Audio Context</a>
   *  in a suspended state.</p>
   *
   *  <p>In these browser-specific policies, sound will not play until a user
   *  interaction event (i.e. <code>mousePressed()</code>) explicitly resumes
   *  the AudioContext, or starts an audio node. This can be accomplished by
   *  calling <code>start()</code> on a <code>p5.Oscillator</code>,
   *  <code> play()</code> on a <code>p5.SoundFile</code>, or simply
   *  <code>userStartAudio()</code>.</p>
   *
   *  <p><code>userStartAudio()</code> starts the AudioContext on a user
   *  gesture. The default behavior will enable audio on any
   *  mouseUp or touchEnd event. It can also be placed in a specific
   *  interaction function, such as <code>mousePressed()</code> as in the
   *  example below. This method utilizes
   *  <a href="https://github.com/tambien/StartAudioContext">StartAudioContext
   *  </a>, a library by Yotam Mann (MIT Licence, 2016).</p>
   *  @param  {Element|Array}   [element(s)] This argument can be an Element,
   *                                Selector String, NodeList, p5.Element,
   *                                jQuery Element, or an Array of any of those.
   *  @param  {Function} [callback] Callback to invoke when the AudioContext
   *                                has started
   *  @return {Promise}            Returns a Promise that resolves when
   *                                       the AudioContext state is 'running'
   *  @method userStartAudio
   *  @for p5
   *  @example
   *  <div><code>
   *  function setup() {
   *    // mimics the autoplay policy
   *    getAudioContext().suspend();
   *
   *    let mySynth = new p5.MonoSynth();
   *
   *    // This won't play until the context has resumed
   *    mySynth.play('A6');
   *  }
   *  function draw() {
   *    background(220);
   *    textAlign(CENTER, CENTER);
   *    text(getAudioContext().state, width/2, height/2);
   *  }
   *  function mousePressed() {
   *    userStartAudio();
   *  }
   *  </code></div>
   */


  p5.prototype.userStartAudio = function (elements, callback) {
    var elt = elements;

    if (elements instanceof p5.Element) {
      elt = elements.elt;
    } else if (elements instanceof Array && elements[0] instanceof p5.Element) {
      elt = elements.map(function (e) {
        return e.elt;
      });
    }

    return StartAudioContext(audiocontext, elt, callback);
  };

  return audiocontext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.call(this, __webpack_require__(34)))

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){"use strict";return o.Emitter=function(){this._events={}},o.extend(o.Emitter),o.Emitter.prototype.on=function(t,e){for(var i=t.split(/\W+/),r=0;r<i.length;r++){var n=i[r];this._events.hasOwnProperty(n)||(this._events[n]=[]),this._events[n].push(e)}return this},o.Emitter.prototype.off=function(t,e){for(var i=t.split(/\W+/),r=0;r<i.length;r++)if(t=i[r],this._events.hasOwnProperty(t))if(o.prototype.isUndef(e))this._events[t]=[];else for(var n=this._events[t],s=0;s<n.length;s++)n[s]===e&&n.splice(s,1);return this},o.Emitter.prototype.emit=function(t){if(this._events){var e=Array.apply(null,arguments).slice(1);if(this._events.hasOwnProperty(t))for(var i=this._events[t],r=0,n=i.length;r<n;r++)i[r].apply(this,e)}return this},o.Emitter.mixin=function(t){var e=["on","off","emit"];t._events={};for(var i=0;i<e.length;i++){var r=e[i],n=o.Emitter.prototype[r];t[r]=n}},o.Emitter.prototype.dispose=function(){return o.prototype.dispose.call(this),this._events=null,this},o.Emitter}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(c){"use strict";return c.SignalBase=function(){},c.extend(c.SignalBase),c.SignalBase.prototype.connect=function(e,n,a){return c.Signal&&c.Signal===e.constructor||c.Param&&c.Param===e.constructor||c.TimelineSignal&&c.TimelineSignal===e.constructor?(e._param.cancelScheduledValues(0),e._param.value=0,e.overridden=!0):e instanceof AudioParam&&(e.cancelScheduledValues(0),e.value=0),c.prototype.connect.call(this,e,n,a),this},c.SignalBase}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){return o.Time=function(t,e){if(!(this instanceof o.Time))return new o.Time(t,e);this._plusNow=!1,o.TimeBase.call(this,t,e)},o.extend(o.Time,o.TimeBase),o.Time.prototype._unaryExpressions=Object.create(o.TimeBase.prototype._unaryExpressions),o.Time.prototype._unaryExpressions.quantize={regexp:/^@/,method:function(t){return o.Transport.nextSubdivision(t())}},o.Time.prototype._unaryExpressions.now={regexp:/^\+/,method:function(t){return this._plusNow=!0,t()}},o.Time.prototype.quantize=function(t,e){return e=this.defaultArg(e,1),this._expr=function(t,e,o){return t=t(),e=e.toSeconds(),t+(Math.round(t/e)*e-t)*o}.bind(this,this._expr,new this.constructor(t),e),this},o.Time.prototype.addNow=function(){return this._plusNow=!0,this},o.Time.prototype._defaultExpr=function(){return this._plusNow=!0,this._noOp},o.Time.prototype.copy=function(t){return o.TimeBase.prototype.copy.call(this,t),this._plusNow=t._plusNow,this},o.Time.prototype.toNotation=function(){var t=this.toSeconds(),e=this._toNotationHelper(t,["1m","2n","4n","8n","16n","32n","64n","128n"]),o=this._toNotationHelper(t,["1m","2n","2t","4n","4t","8n","8t","16n","16t","32n","32t","64n","64t","128n"]);return o.split("+").length<e.split("+").length?o:e},o.Time.prototype._toNotationHelper=function(t,e){for(var o=this._notationToUnits(e[e.length-1]),n="",i=0;i<e.length;i++){var r=this._notationToUnits(e[i]),s=t/r;if(1-s%1<1e-6&&(s+=1e-6),0<(s=Math.floor(s))){if(n+=1===s?e[i]:s.toString()+"*"+e[i],(t-=s*r)<o)break;n+=" + "}}return""===n&&(n="0"),n},o.Time.prototype._notationToUnits=function(t){for(var e=this._primaryExpressions,o=[e.n,e.t,e.m],n=0;n<o.length;n++){var i=o[n],r=t.match(i.regexp);if(r)return i.method.call(this,r[1])}},o.Time.prototype.toBarsBeatsSixteenths=function(){var t=this._beatsToUnits(1),e=this.toSeconds()/t,o=Math.floor(e/this._timeSignature()),n=e%1*4;return e=Math.floor(e)%this._timeSignature(),3<(n=n.toString()).length&&(n=parseFloat(n).toFixed(3)),[o,e,n].join(":")},o.Time.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*o.Transport.PPQ)},o.Time.prototype.toSamples=function(){return this.toSeconds()*this.context.sampleRate},o.Time.prototype.toFrequency=function(){return 1/this.toSeconds()},o.Time.prototype.toSeconds=function(){return this.valueOf()},o.Time.prototype.toMilliseconds=function(){return 1e3*this.toSeconds()},o.Time.prototype.valueOf=function(){return this._expr()+(this._plusNow?this.now():0)},o.Time}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){return n.TimeBase=function(e,t){if(!(this instanceof n.TimeBase))return new n.TimeBase(e,t);if(this._expr=this._noOp,e instanceof n.TimeBase)this.copy(e);else if(!this.isUndef(t)||this.isNumber(e)){t=this.defaultArg(t,this._defaultUnits);var r=this._primaryExpressions[t].method;this._expr=r.bind(this,e)}else this.isString(e)?this.set(e):this.isUndef(e)&&(this._expr=this._defaultExpr())},n.extend(n.TimeBase),n.TimeBase.prototype.set=function(e){return this._expr=this._parseExprString(e),this},n.TimeBase.prototype.clone=function(){var e=new this.constructor;return e.copy(this),e},n.TimeBase.prototype.copy=function(e){var t=e._expr();return this.set(t)},n.TimeBase.prototype._primaryExpressions={n:{regexp:/^(\d+)n/i,method:function(e){return 1===(e=parseInt(e))?this._beatsToUnits(this._timeSignature()):this._beatsToUnits(4/e)}},t:{regexp:/^(\d+)t/i,method:function(e){return e=parseInt(e),this._beatsToUnits(8/(3*parseInt(e)))}},m:{regexp:/^(\d+)m/i,method:function(e){return this._beatsToUnits(parseInt(e)*this._timeSignature())}},i:{regexp:/^(\d+)i/i,method:function(e){return this._ticksToUnits(parseInt(e))}},hz:{regexp:/^(\d+(?:\.\d+)?)hz/i,method:function(e){return this._frequencyToUnits(parseFloat(e))}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method:function(e,t,r){var n=0;return e&&"0"!==e&&(n+=this._beatsToUnits(this._timeSignature()*parseFloat(e))),t&&"0"!==t&&(n+=this._beatsToUnits(parseFloat(t))),r&&"0"!==r&&(n+=this._beatsToUnits(parseFloat(r)/4)),n}},s:{regexp:/^(\d+(?:\.\d+)?s)/,method:function(e){return this._secondsToUnits(parseFloat(e))}},samples:{regexp:/^(\d+)samples/,method:function(e){return parseInt(e)/this.context.sampleRate}},default:{regexp:/^(\d+(?:\.\d+)?)/,method:function(e){return this._primaryExpressions[this._defaultUnits].method.call(this,e)}}},n.TimeBase.prototype._binaryExpressions={"+":{regexp:/^\+/,precedence:2,method:function(e,t){return e()+t()}},"-":{regexp:/^\-/,precedence:2,method:function(e,t){return e()-t()}},"*":{regexp:/^\*/,precedence:1,method:function(e,t){return e()*t()}},"/":{regexp:/^\//,precedence:1,method:function(e,t){return e()/t()}}},n.TimeBase.prototype._unaryExpressions={neg:{regexp:/^\-/,method:function(e){return-e()}}},n.TimeBase.prototype._syntaxGlue={"(":{regexp:/^\(/},")":{regexp:/^\)/}},n.TimeBase.prototype._tokenize=function(e){for(var t=-1,r=[];0<e.length;){var n=i(e=e.trim(),this);r.push(n),e=e.substr(n.value.length)}function i(e,t){for(var r=["_binaryExpressions","_unaryExpressions","_primaryExpressions","_syntaxGlue"],n=0;n<r.length;n++){var i=t[r[n]];for(var s in i){var o=i[s],p=o.regexp,a=e.match(p);if(null!==a)return{method:o.method,precedence:o.precedence,regexp:o.regexp,value:a[0]}}}throw new SyntaxError("Tone.TimeBase: Unexpected token "+e)}return{next:function(){return r[++t]},peek:function(){return r[t+1]}}},n.TimeBase.prototype._matchGroup=function(e,t,r){if(!this.isUndef(e))for(var n in t){var i=t[n];if(i.regexp.test(e.value)){if(this.isUndef(r))return i;if(i.precedence===r)return i}}return!1},n.TimeBase.prototype._parseBinary=function(e,t){var r;this.isUndef(t)&&(t=2),r=t<0?this._parseUnary(e):this._parseBinary(e,t-1);for(var n=e.peek();n&&this._matchGroup(n,this._binaryExpressions,t);)r=(n=e.next()).method.bind(this,r,this._parseBinary(e,t-1)),n=e.peek();return r},n.TimeBase.prototype._parseUnary=function(e){var t,r;t=e.peek();var n=this._matchGroup(t,this._unaryExpressions);return n?(t=e.next(),r=this._parseUnary(e),n.method.bind(this,r)):this._parsePrimary(e)},n.TimeBase.prototype._parsePrimary=function(e){var t,r;if(t=e.peek(),this.isUndef(t))throw new SyntaxError("Tone.TimeBase: Unexpected end of expression");if(this._matchGroup(t,this._primaryExpressions)){var n=(t=e.next()).value.match(t.regexp);return t.method.bind(this,n[1],n[2],n[3])}if(t&&"("===t.value){if(e.next(),r=this._parseBinary(e),!(t=e.next())||")"!==t.value)throw new SyntaxError("Expected )");return r}throw new SyntaxError("Tone.TimeBase: Cannot process token "+t.value)},n.TimeBase.prototype._parseExprString=function(e){this.isString(e)||(e=e.toString());var t=this._tokenize(e);return this._parseBinary(t)},n.TimeBase.prototype._noOp=function(){return 0},n.TimeBase.prototype._defaultExpr=function(){return this._noOp},n.TimeBase.prototype._defaultUnits="s",n.TimeBase.prototype._frequencyToUnits=function(e){return 1/e},n.TimeBase.prototype._beatsToUnits=function(e){return 60/n.Transport.bpm.value*e},n.TimeBase.prototype._secondsToUnits=function(e){return e},n.TimeBase.prototype._ticksToUnits=function(e){return e*(this._beatsToUnits(1)/n.Transport.PPQ)},n.TimeBase.prototype._timeSignature=function(){return n.Transport.timeSignature},n.TimeBase.prototype._pushExpr=function(e,t,r){return e instanceof n.TimeBase||(e=new this.constructor(e,r)),this._expr=this._binaryExpressions[t].method.bind(this,this._expr,e._expr),this},n.TimeBase.prototype.add=function(e,t){return this._pushExpr(e,"+",t)},n.TimeBase.prototype.sub=function(e,t){return this._pushExpr(e,"-",t)},n.TimeBase.prototype.mult=function(e,t){return this._pushExpr(e,"*",t)},n.TimeBase.prototype.div=function(e,t){return this._pushExpr(e,"/",t)},n.TimeBase.prototype.valueOf=function(){return this._expr()},n.TimeBase.prototype.dispose=function(){this._expr=null},n.TimeBase}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a){"use strict";return a.Param=function(){var t=this.optionsObject(arguments,["param","units","convert"],a.Param.defaults);this._param=this.input=t.param,this.units=t.units,this.convert=t.convert,this.overridden=!1,this._lfo=null,this.isObject(t.lfo)?this.value=t.lfo:this.isUndef(t.value)||(this.value=t.value)},a.extend(a.Param),a.Param.defaults={units:a.Type.Default,convert:!0,param:void 0},Object.defineProperty(a.Param.prototype,"value",{get:function(){return this._toUnits(this._param.value)},set:function(t){if(this.isObject(t)){if(this.isUndef(a.LFO))throw new Error("Include 'Tone.LFO' to use an LFO as a Param value.");this._lfo&&this._lfo.dispose(),this._lfo=new a.LFO(t).start(),this._lfo.connect(this.input)}else{var e=this._fromUnits(t);this._param.cancelScheduledValues(0),this._param.value=e}}}),a.Param.prototype._fromUnits=function(t){if(!this.convert&&!this.isUndef(this.convert))return t;switch(this.units){case a.Type.Time:return this.toSeconds(t);case a.Type.Frequency:return this.toFrequency(t);case a.Type.Decibels:return this.dbToGain(t);case a.Type.NormalRange:return Math.min(Math.max(t,0),1);case a.Type.AudioRange:return Math.min(Math.max(t,-1),1);case a.Type.Positive:return Math.max(t,0);default:return t}},a.Param.prototype._toUnits=function(t){if(!this.convert&&!this.isUndef(this.convert))return t;switch(this.units){case a.Type.Decibels:return this.gainToDb(t);default:return t}},a.Param.prototype._minOutput=1e-5,a.Param.prototype.setValueAtTime=function(t,e){return t=this._fromUnits(t),(e=this.toSeconds(e))<=this.now()+this.blockTime?this._param.value=t:this._param.setValueAtTime(t,e),this},a.Param.prototype.setRampPoint=function(t){t=this.defaultArg(t,this.now());var e=this._param.value;return 0===e&&(e=this._minOutput),this._param.setValueAtTime(e,t),this},a.Param.prototype.linearRampToValueAtTime=function(t,e){return t=this._fromUnits(t),this._param.linearRampToValueAtTime(t,this.toSeconds(e)),this},a.Param.prototype.exponentialRampToValueAtTime=function(t,e){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),this._param.exponentialRampToValueAtTime(t,this.toSeconds(e)),this},a.Param.prototype.exponentialRampToValue=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialRampToValueAtTime(t,i+this.toSeconds(e)),this},a.Param.prototype.linearRampToValue=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.linearRampToValueAtTime(t,i+this.toSeconds(e)),this},a.Param.prototype.setTargetAtTime=function(t,e,i){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),i=Math.max(this._minOutput,i),this._param.setTargetAtTime(t,this.toSeconds(e),i),this},a.Param.prototype.setValueCurveAtTime=function(t,e,i){for(var a=0;a<t.length;a++)t[a]=this._fromUnits(t[a]);return this._param.setValueCurveAtTime(t,this.toSeconds(e),this.toSeconds(i)),this},a.Param.prototype.cancelScheduledValues=function(t){return this._param.cancelScheduledValues(this.toSeconds(t)),this},a.Param.prototype.rampTo=function(t,e,i){return e=this.defaultArg(e,0),this.units===a.Type.Frequency||this.units===a.Type.BPM||this.units===a.Type.Decibels?this.exponentialRampToValue(t,e,i):this.linearRampToValue(t,e,i),this},Object.defineProperty(a.Param.prototype,"lfo",{get:function(){return this._lfo}}),a.Param.prototype.dispose=function(){return a.prototype.dispose.call(this),this._param=null,this._lfo&&(this._lfo.dispose(),this._lfo=null),this},a.Param}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var Add = __webpack_require__(7);

  var Mult = __webpack_require__(3);

  var Scale = __webpack_require__(13);
  /**
   *  <p>Creates a signal that oscillates between -1.0 and 1.0.
   *  By default, the oscillation takes the form of a sinusoidal
   *  shape ('sine'). Additional types include 'triangle',
   *  'sawtooth' and 'square'. The frequency defaults to
   *  440 oscillations per second (440Hz, equal to the pitch of an
   *  'A' note).</p>
   *
   *  <p>Set the type of oscillation with setType(), or by instantiating a
   *  specific oscillator: <a href="/reference/#/p5.SinOsc">p5.SinOsc</a>, <a
   *  href="/reference/#/p5.TriOsc">p5.TriOsc</a>, <a
   *  href="/reference/#/p5.SqrOsc">p5.SqrOsc</a>, or <a
   *  href="/reference/#/p5.SawOsc">p5.SawOsc</a>.
   *  </p>
   *
   *  @class p5.Oscillator
   *  @constructor
   *  @param {Number} [freq] frequency defaults to 440Hz
   *  @param {String} [type] type of oscillator. Options:
   *                         'sine' (default), 'triangle',
   *                         'sawtooth', 'square'
   *  @example
   *  <div><code>
   *  let osc, playing, freq, amp;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playOscillator);
   *    osc = new p5.Oscillator('sine');
   *  }
   *
   *  function draw() {
   *    background(220)
   *    freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
   *    amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
   *
   *    text('tap to play', 20, 20);
   *    text('freq: ' + freq, 20, 40);
   *    text('amp: ' + amp, 20, 60);
   *
   *    if (playing) {
   *      // smooth the transitions by 0.1 seconds
   *      osc.freq(freq, 0.1);
   *      osc.amp(amp, 0.1);
   *    }
   *  }
   *
   *  function playOscillator() {
   *    // starting an oscillator on a user gesture will enable audio
   *    // in browsers that have a strict autoplay policy.
   *    // See also: userStartAudio();
   *    osc.start();
   *    playing = true;
   *  }
   *
   *  function mouseReleased() {
   *    // ramp amplitude to 0 over 0.5 seconds
   *    osc.amp(0, 0.5);
   *    playing = false;
   *  }
   *  </code> </div>
   */


  p5.Oscillator = function (freq, type) {
    if (typeof freq === 'string') {
      var f = type;
      type = freq;
      freq = f;
    }

    if (typeof type === 'number') {
      var f = type;
      type = freq;
      freq = f;
    }

    this.started = false; 

    this.phaseAmount = undefined;
    this.oscillator = p5sound.audiocontext.createOscillator();
    this.f = freq || 440.0; 

    this.oscillator.type = type || 'sine';
    this.oscillator.frequency.setValueAtTime(this.f, p5sound.audiocontext.currentTime); 

    this.output = p5sound.audiocontext.createGain();
    this._freqMods = []; 

    this.output.gain.value = 0.5;
    this.output.gain.setValueAtTime(0.5, p5sound.audiocontext.currentTime);
    this.oscillator.connect(this.output); 

    this.panPosition = 0.0;
    this.connection = p5sound.input; 

    this.panner = new p5.Panner(this.output, this.connection, 1); 

    this.mathOps = [this.output]; 

    p5sound.soundArray.push(this);
  };
  /**
   *  Start an oscillator.
   *
   *  Starting an oscillator on a user gesture will enable audio in browsers
   *  that have a strict autoplay policy, including Chrome and most mobile
   *  devices. See also: `userStartAudio()`.
   *
   *  @method  start
   *  @for p5.Oscillator
   *  @param  {Number} [time] startTime in seconds from now.
   *  @param  {Number} [frequency] frequency in Hz.
   */


  p5.Oscillator.prototype.start = function (time, f) {
    if (this.started) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
    }

    if (!this.started) {
      var freq = f || this.f;
      var type = this.oscillator.type; 

      if (this.oscillator) {
        this.oscillator.disconnect();
        delete this.oscillator;
      } 


      this.oscillator = p5sound.audiocontext.createOscillator();
      this.oscillator.frequency.value = Math.abs(freq);
      this.oscillator.type = type; 

      this.oscillator.connect(this.output);
      time = time || 0;
      this.oscillator.start(time + p5sound.audiocontext.currentTime);
      this.freqNode = this.oscillator.frequency; 

      for (var i in this._freqMods) {
        if (typeof this._freqMods[i].connect !== 'undefined') {
          this._freqMods[i].connect(this.oscillator.frequency);
        }
      }

      this.started = true;
    }
  };
  /**
   *  Stop an oscillator. Accepts an optional parameter
   *  to determine how long (in seconds from now) until the
   *  oscillator stops.
   *
   *  @method  stop
   *  @for p5.Oscillator
   *  @param  {Number} secondsFromNow Time, in seconds from now.
   */


  p5.Oscillator.prototype.stop = function (time) {
    if (this.started) {
      var t = time || 0;
      var now = p5sound.audiocontext.currentTime;
      this.oscillator.stop(t + now);
      this.started = false;
    }
  };
  /**
   *  Set the amplitude between 0 and 1.0. Or, pass in an object
   *  such as an oscillator to modulate amplitude with an audio signal.
   *
   *  @method  amp
   *  @for p5.Oscillator
   *  @param  {Number|Object} vol between 0 and 1.0
   *                              or a modulating signal/oscillator
   *  @param {Number} [rampTime] create a fade that lasts rampTime
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return  {AudioParam} gain  If no value is provided,
   *                              returns the Web Audio API
   *                              AudioParam that controls
   *                              this oscillator's
   *                              gain/amplitude/volume)
   */


  p5.Oscillator.prototype.amp = function (vol, rampTime, tFromNow) {
    var self = this;

    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(self.output.gain);
    } else {
      return this.output.gain;
    }
  }; 


  p5.Oscillator.prototype.fade = p5.Oscillator.prototype.amp;

  p5.Oscillator.prototype.getAmp = function () {
    return this.output.gain.value;
  };
  /**
   *  Set frequency of an oscillator to a value. Or, pass in an object
   *  such as an oscillator to modulate the frequency with an audio signal.
   *
   *  @method  freq
   *  @for p5.Oscillator
   *  @param  {Number|Object} Frequency Frequency in Hz
   *                                        or modulating signal/oscillator
   *  @param  {Number} [rampTime] Ramp time (in seconds)
   *  @param  {Number} [timeFromNow] Schedule this event to happen
   *                                   at x seconds from now
   *  @return  {AudioParam} Frequency If no value is provided,
   *                                  returns the Web Audio API
   *                                  AudioParam that controls
   *                                  this oscillator's frequency
   *  @example
   *  <div><code>
   *  let osc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playOscillator);
   *    osc = new p5.Oscillator(300);
   *    background(220);
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function playOscillator() {
   *    osc.start();
   *    osc.amp(0.5);
   *    // start at 700Hz
   *    osc.freq(700);
   *    // ramp to 60Hz over 0.7 seconds
   *    osc.freq(60, 0.7);
   *    osc.amp(0, 0.1, 0.7);
   *  }
   *  </code></div>
   */


  p5.Oscillator.prototype.freq = function (val, rampTime, tFromNow) {
    if (typeof val === 'number' && !isNaN(val)) {
      this.f = val;
      var now = p5sound.audiocontext.currentTime;
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var t = now + tFromNow + rampTime; 

      if (rampTime === 0) {
        this.oscillator.frequency.setValueAtTime(val, tFromNow + now);
      } else {
        if (val > 0) {
          this.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
        } else {
          this.oscillator.frequency.linearRampToValueAtTime(val, tFromNow + rampTime + now);
        }
      } 


      if (this.phaseAmount) {
        this.phase(this.phaseAmount);
      }
    } else if (val) {
      if (val.output) {
        val = val.output;
      }

      val.connect(this.oscillator.frequency); 

      this._freqMods.push(val);
    } else {
      return this.oscillator.frequency;
    }
  };

  p5.Oscillator.prototype.getFreq = function () {
    return this.oscillator.frequency.value;
  };
  /**
   *  Set type to 'sine', 'triangle', 'sawtooth' or 'square'.
   *
   *  @method  setType
   *  @for p5.Oscillator
   *  @param {String} type 'sine', 'triangle', 'sawtooth' or 'square'.
   */


  p5.Oscillator.prototype.setType = function (type) {
    this.oscillator.type = type;
  };

  p5.Oscillator.prototype.getType = function () {
    return this.oscillator.type;
  };
  /**
   *  Connect to a p5.sound / Web Audio object.
   *
   *  @method  connect
   *  @for p5.Oscillator
   *  @param  {Object} unit A p5.sound or Web Audio object
   */


  p5.Oscillator.prototype.connect = function (unit) {
    if (!unit) {
      this.panner.connect(p5sound.input);
    } else if (unit.hasOwnProperty('input')) {
      this.panner.connect(unit.input);
      this.connection = unit.input;
    } else {
      this.panner.connect(unit);
      this.connection = unit;
    }
  };
  /**
   *  Disconnect all outputs
   *
   *  @method  disconnect
   *  @for p5.Oscillator
   */


  p5.Oscillator.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }

    if (this.panner) {
      this.panner.disconnect();

      if (this.output) {
        this.output.connect(this.panner);
      }
    }

    this.oscMods = [];
  };
  /**
   *  Pan between Left (-1) and Right (1)
   *
   *  @method  pan
   *  @for p5.Oscillator
   *  @param  {Number} panning Number between -1 and 1
   *  @param  {Number} timeFromNow schedule this event to happen
   *                                seconds from now
   */


  p5.Oscillator.prototype.pan = function (pval, tFromNow) {
    this.panPosition = pval;
    this.panner.pan(pval, tFromNow);
  };

  p5.Oscillator.prototype.getPan = function () {
    return this.panPosition;
  }; 


  p5.Oscillator.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.oscillator) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
      this.disconnect();
      this.panner = null;
      this.oscillator = null;
    } 


    if (this.osc2) {
      this.osc2.dispose();
    }
  };
  /**
   *  Set the phase of an oscillator between 0.0 and 1.0.
   *  In this implementation, phase is a delay time
   *  based on the oscillator's current frequency.
   *
   *  @method  phase
   *  @for p5.Oscillator
   *  @param  {Number} phase float between 0.0 and 1.0
   */


  p5.Oscillator.prototype.phase = function (p) {
    var delayAmt = p5.prototype.map(p, 0, 1.0, 0, 1 / this.f);
    var now = p5sound.audiocontext.currentTime;
    this.phaseAmount = p;

    if (!this.dNode) {
      this.dNode = p5sound.audiocontext.createDelay(); 

      this.oscillator.disconnect();
      this.oscillator.connect(this.dNode);
      this.dNode.connect(this.output);
    } 


    this.dNode.delayTime.setValueAtTime(delayAmt, now);
  }; 


  var sigChain = function sigChain(o, mathObj, thisChain, nextChain, type) {
    var chainSource = o.oscillator; 

    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        chainSource.disconnect();
        o.mathOps[i].dispose();
        thisChain = i; 

        if (thisChain < o.mathOps.length - 2) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }

    if (thisChain === o.mathOps.length - 1) {
      o.mathOps.push(nextChain);
    } 


    if (i > 0) {
      chainSource = o.mathOps[i - 1];
    }

    chainSource.disconnect();
    chainSource.connect(mathObj);
    mathObj.connect(nextChain);
    o.mathOps[thisChain] = mathObj;
    return o;
  };
  /**
   *  Add a value to the p5.Oscillator's output amplitude,
   *  and return the oscillator. Calling this method again
   *  will override the initial add() with a new value.
   *
   *  @method  add
   *  @for p5.Oscillator
   *  @param {Number} number Constant number to add
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   *
   */


  p5.Oscillator.prototype.add = function (num) {
    var add = new Add(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, add, thisChain, nextChain, Add);
  };
  /**
   *  Multiply the p5.Oscillator's output amplitude
   *  by a fixed value (i.e. turn it up!). Calling this method
   *  again will override the initial mult() with a new value.
   *
   *  @method  mult
   *  @for p5.Oscillator
   *  @param {Number} number Constant number to multiply
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with multiplied output
   */


  p5.Oscillator.prototype.mult = function (num) {
    var mult = new Mult(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, mult, thisChain, nextChain, Mult);
  };
  /**
   *  Scale this oscillator's amplitude values to a given
   *  range, and return the oscillator. Calling this method
   *  again will override the initial scale() with new values.
   *
   *  @method  scale
   *  @for p5.Oscillator
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   */


  p5.Oscillator.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var mapOutMin, mapOutMax;

    if (arguments.length === 4) {
      mapOutMin = p5.prototype.map(outMin, inMin, inMax, 0, 1) - 0.5;
      mapOutMax = p5.prototype.map(outMax, inMin, inMax, 0, 1) - 0.5;
    } else {
      mapOutMin = arguments[0];
      mapOutMax = arguments[1];
    }

    var scale = new Scale(mapOutMin, mapOutMax);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, scale, thisChain, nextChain, Scale); 
  }; 

  /**
   *  Constructor: <code>new p5.SinOsc()</code>.
   *  This creates a Sine Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sine')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sine')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SinOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */


  p5.SinOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sine');
  };

  p5.SinOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.TriOsc()</code>.
   *  This creates a Triangle Wave Oscillator and is
   *  equivalent to <code>new p5.Oscillator('triangle')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('triangle')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.TriOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */

  p5.TriOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'triangle');
  };

  p5.TriOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SawOsc()</code>.
   *  This creates a SawTooth Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sawtooth')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sawtooth')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SawOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */

  p5.SawOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sawtooth');
  };

  p5.SawOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SqrOsc()</code>.
   *  This creates a Square Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('square')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('square')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SqrOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */

  p5.SqrOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'square');
  };

  p5.SqrOsc.prototype = Object.create(p5.Oscillator.prototype);
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Timeline=function(){var e=this.optionsObject(arguments,["memory"],i.Timeline.defaults);this._timeline=[],this._toRemove=[],this._iterating=!1,this.memory=e.memory},i.extend(i.Timeline),i.Timeline.defaults={memory:1/0},Object.defineProperty(i.Timeline.prototype,"length",{get:function(){return this._timeline.length}}),i.Timeline.prototype.add=function(e){if(this.isUndef(e.time))throw new Error("Tone.Timeline: events must have a time attribute");if(this._timeline.length){var i=this._search(e.time);this._timeline.splice(i+1,0,e)}else this._timeline.push(e);if(this.length>this.memory){var t=this.length-this.memory;this._timeline.splice(0,t)}return this},i.Timeline.prototype.remove=function(e){if(this._iterating)this._toRemove.push(e);else{var i=this._timeline.indexOf(e);-1!==i&&this._timeline.splice(i,1)}return this},i.Timeline.prototype.get=function(e){var i=this._search(e);return-1!==i?this._timeline[i]:null},i.Timeline.prototype.peek=function(){return this._timeline[0]},i.Timeline.prototype.shift=function(){return this._timeline.shift()},i.Timeline.prototype.getAfter=function(e){var i=this._search(e);return i+1<this._timeline.length?this._timeline[i+1]:null},i.Timeline.prototype.getBefore=function(e){var i=this._timeline.length;if(0<i&&this._timeline[i-1].time<e)return this._timeline[i-1];var t=this._search(e);return 0<=t-1?this._timeline[t-1]:null},i.Timeline.prototype.cancel=function(e){if(1<this._timeline.length){var i=this._search(e);if(0<=i)if(this._timeline[i].time===e){for(var t=i;0<=t&&this._timeline[t].time===e;t--)i=t;this._timeline=this._timeline.slice(0,i)}else this._timeline=this._timeline.slice(0,i+1);else this._timeline=[]}else 1===this._timeline.length&&this._timeline[0].time>=e&&(this._timeline=[]);return this},i.Timeline.prototype.cancelBefore=function(e){if(this._timeline.length){var i=this._search(e);0<=i&&(this._timeline=this._timeline.slice(i+1))}return this},i.Timeline.prototype._search=function(e){var i=0,t=this._timeline.length,n=t;if(0<t&&this._timeline[t-1].time<=e)return t-1;for(;i<n;){var r=Math.floor(i+(n-i)/2),s=this._timeline[r],h=this._timeline[r+1];if(s.time===e){for(var l=r;l<this._timeline.length;l++){this._timeline[l].time===e&&(r=l)}return r}if(s.time<e&&h.time>e)return r;s.time>e?n=r:s.time<e&&(i=r+1)}return-1},i.Timeline.prototype._iterate=function(e,i,t){this._iterating=!0,i=this.defaultArg(i,0),t=this.defaultArg(t,this._timeline.length-1);for(var n=i;n<=t;n++)e(this._timeline[n]);if(this._iterating=!1,0<this._toRemove.length){for(var r=0;r<this._toRemove.length;r++){var s=this._timeline.indexOf(this._toRemove[r]);-1!==s&&this._timeline.splice(s,1)}this._toRemove=[]}},i.Timeline.prototype.forEach=function(e){return this._iterate(e),this},i.Timeline.prototype.forEachBefore=function(e,i){var t=this._search(e);return-1!==t&&this._iterate(i,0,t),this},i.Timeline.prototype.forEachAfter=function(e,i){var t=this._search(e);return this._iterate(i,t+1),this},i.Timeline.prototype.forEachFrom=function(e,i){for(var t=this._search(e);0<=t&&this._timeline[t].time>=e;)t--;return this._iterate(i,t+1),this},i.Timeline.prototype.forEachAtTime=function(i,t){var e=this._search(i);return-1!==e&&this._iterate(function(e){e.time===i&&t(e)},0,e),this},i.Timeline.prototype.dispose=function(){i.prototype.dispose.call(this),this._timeline=null,this._toRemove=null},i.Timeline}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(3),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){"use strict";return t.Negate=function(){this._multiply=this.input=this.output=new t.Multiply(-1)},t.extend(t.Negate,t.SignalBase),t.Negate.prototype.dispose=function(){return t.prototype.dispose.call(this),this._multiply.dispose(),this._multiply=null,this},t.Negate}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(3),__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){"use strict";return e.GreaterThanZero=function(){this._thresh=this.output=new e.WaveShaper(function(e){return e<=0?0:1},127),this._scale=this.input=new e.Multiply(1e4),this._scale.connect(this._thresh)},e.extend(e.GreaterThanZero,e.SignalBase),e.GreaterThanZero.prototype.dispose=function(){return e.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._thresh.dispose(),this._thresh=null,this},e.GreaterThanZero}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(14),__webpack_require__(66),__webpack_require__(18),__webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){"use strict";return o.Clock=function(){o.Emitter.call(this);var t=this.optionsObject(arguments,["callback","frequency"],o.Clock.defaults);this.callback=t.callback,this._nextTick=0,this._lastState=o.State.Stopped,this.frequency=new o.TimelineSignal(t.frequency,o.Type.Frequency),this._readOnly("frequency"),this.ticks=0,this._state=new o.TimelineState(o.State.Stopped),this._boundLoop=this._loop.bind(this),this.context.on("tick",this._boundLoop)},o.extend(o.Clock,o.Emitter),o.Clock.defaults={callback:o.noOp,frequency:1,lookAhead:"auto"},Object.defineProperty(o.Clock.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),o.Clock.prototype.start=function(t,e){return t=this.toSeconds(t),this._state.getValueAtTime(t)!==o.State.Started&&this._state.add({state:o.State.Started,time:t,offset:e}),this},o.Clock.prototype.stop=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._state.setStateAtTime(o.State.Stopped,t),this},o.Clock.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===o.State.Started&&this._state.setStateAtTime(o.State.Paused,t),this},o.Clock.prototype._loop=function(){for(var t=this.now()+this.context.lookAhead+this.context.updateInterval+2*this.context.lag;t>this._nextTick&&this._state;){var e=this._state.getValueAtTime(this._nextTick);if(e!==this._lastState){this._lastState=e;var i=this._state.get(this._nextTick);e===o.State.Started?(this._nextTick=i.time,this.isUndef(i.offset)||(this.ticks=i.offset),this.emit("start",i.time,this.ticks)):e===o.State.Stopped?(this.ticks=0,this.emit("stop",i.time)):e===o.State.Paused&&this.emit("pause",i.time)}var s=this._nextTick;this.frequency&&(this._nextTick+=1/this.frequency.getValueAtTime(this._nextTick),e===o.State.Started&&(this.callback(s),this.ticks++))}},o.Clock.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},o.Clock.prototype.dispose=function(){o.Emitter.prototype.dispose.call(this),this.context.off("tick",this._boundLoop),this._writable("frequency"),this.frequency.dispose(),this.frequency=null,this._boundLoop=null,this._nextTick=1/0,this.callback=null,this._state.dispose(),this._state=null},o.Clock}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var AudioVoice = __webpack_require__(29);

  var noteToFreq = __webpack_require__(6).noteToFreq;

  var DEFAULT_SUSTAIN = 0.15;
  /**
    *  A MonoSynth is used as a single voice for sound synthesis.
    *  This is a class to be used in conjunction with the PolySynth
    *  class. Custom synthetisers should be built inheriting from
    *  this class.
    *
    *  @class p5.MonoSynth
    *  @constructor
    *  @example
    *  <div><code>
    *  let monoSynth;
    *
    *  function setup() {
    *    let cnv = createCanvas(100, 100);
    *    cnv.mousePressed(playSynth);
    *    background(220);
    *    textAlign(CENTER);
    *    text('tap to play', width/2, height/2);
    *
    *    monoSynth = new p5.MonoSynth();
    *  }
    *
    *  function playSynth() {
    *    userStartAudio();
    *
    *    let note = random(['Fb4', 'G4']);
    *    // note velocity (volume, from 0 to 1)
    *    let velocity = random();
    *    // time from now (in seconds)
    *    let time = 0;
    *    // note duration (in seconds)
    *    let dur = 1/6;
    *
    *    monoSynth.play(note, velocity, time, dur);
    *  }
    *  </code></div>
    **/

  p5.MonoSynth = function () {
    AudioVoice.call(this);
    this.oscillator = new p5.Oscillator();
    this.env = new p5.Envelope();
    this.env.setRange(1, 0);
    this.env.setExp(true); 

    this.setADSR(0.02, 0.25, 0.05, 0.35); 

    this.oscillator.disconnect();
    this.oscillator.connect(this.output);
    this.env.disconnect();
    this.env.setInput(this.output.gain); 

    this.oscillator.output.gain.value = 1.0;
    this.oscillator.start();
    this.connect();
    p5sound.soundArray.push(this);
  };

  p5.MonoSynth.prototype = Object.create(p5.AudioVoice.prototype);
  /**
    *  Play tells the MonoSynth to start playing a note. This method schedules
    *  the calling of .triggerAttack and .triggerRelease.
    *
    *  @method play
    *  @for p5.MonoSynth
    *  @param {String | Number} note the note you want to play, specified as a
    *                                 frequency in Hertz (Number) or as a midi
    *                                 value in Note/Octave format ("C4", "Eb3"...etc")
    *                                 See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">
    *                                 Tone</a>. Defaults to 440 hz.
    *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
    *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
    *  @param  {Number} [sustainTime] time to sustain before releasing the envelope. Defaults to 0.15 seconds.
    *  @example
    *  <div><code>
    *  let monoSynth;
    *
    *  function setup() {
    *    let cnv = createCanvas(100, 100);
    *    cnv.mousePressed(playSynth);
    *    background(220);
    *    textAlign(CENTER);
    *    text('tap to play', width/2, height/2);
    *
    *    monoSynth = new p5.MonoSynth();
    *  }
    *
    *  function playSynth() {
    *    userStartAudio();
    *
    *    let note = random(['Fb4', 'G4']);
    *    // note velocity (volume, from 0 to 1)
    *    let velocity = random();
    *    // time from now (in seconds)
    *    let time = 0;
    *    // note duration (in seconds)
    *    let dur = 1/6;
    *
    *    monoSynth.play(note, velocity, time, dur);
    *  }
    *  </code></div>
    *
    */

  p5.MonoSynth.prototype.play = function (note, velocity, secondsFromNow, susTime) {
    this.triggerAttack(note, velocity, ~~secondsFromNow);
    this.triggerRelease(~~secondsFromNow + (susTime || DEFAULT_SUSTAIN));
  };
  /**
     *  Trigger the Attack, and Decay portion of the Envelope.
     *  Similar to holding down a key on a piano, but it will
     *  hold the sustain level until you let go.
     *
     *  @param {String | Number} note the note you want to play, specified as a
     *                                 frequency in Hertz (Number) or as a midi
     *                                 value in Note/Octave format ("C4", "Eb3"...etc")
     *                                 See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">
     *                                 Tone</a>. Defaults to 440 hz
     *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
     *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
     *  @method  triggerAttack
     *  @for p5.MonoSynth
     *  @example
     *  <div><code>
     *  let monoSynth;
     *
     *  function setup() {
     *    let cnv = createCanvas(100, 100);
     *    cnv.mousePressed(triggerAttack);
     *    background(220);
     *    text('tap here for attack, let go to release', 5, 20, width - 20);
     *    monoSynth = new p5.MonoSynth();
     *  }
     *
     *  function triggerAttack() {
     *    userStartAudio();
     *
     *    monoSynth.triggerAttack("E3");
     *  }
     *
     *  function mouseReleased() {
     *    monoSynth.triggerRelease();
     *  }
     *  </code></div>
     */


  p5.MonoSynth.prototype.triggerAttack = function (note, velocity, secondsFromNow) {
    var secondsFromNow = ~~secondsFromNow;
    var freq = noteToFreq(note);
    var vel = velocity || 0.1;
    this.oscillator.freq(freq, 0, secondsFromNow);
    this.env.ramp(this.output.gain, secondsFromNow, vel);
  };
  /**
     *  Trigger the release of the Envelope. This is similar to releasing
     *  the key on a piano and letting the sound fade according to the
     *  release level and release time.
     *
     *  @param  {Number} secondsFromNow time to trigger the release
     *  @method  triggerRelease
     *  @for p5.MonoSynth
     *  @example
     *  <div><code>
     *  let monoSynth;
     *
     *  function setup() {
     *    let cnv = createCanvas(100, 100);
     *    cnv.mousePressed(triggerAttack);
     *    background(220);
     *    text('tap here for attack, let go to release', 5, 20, width - 20);
     *    monoSynth = new p5.MonoSynth();
     *  }
     *
     *  function triggerAttack() {
     *    userStartAudio();
     *
     *    monoSynth.triggerAttack("E3");
     *  }
     *
     *  function mouseReleased() {
     *    monoSynth.triggerRelease();
     *  }
     *  </code></div>
     */


  p5.MonoSynth.prototype.triggerRelease = function (secondsFromNow) {
    var secondsFromNow = secondsFromNow || 0;
    this.env.ramp(this.output.gain, secondsFromNow, 0);
  };
  /**
     *  Set values like a traditional
     *  <a href="https://en.wikipedia.org/wiki/Synthesizer#/media/File:ADSR_parameter.svg">
     *  ADSR envelope
     *  </a>.
     *
     *  @method  setADSR
     *  @for p5.MonoSynth
     *  @param {Number} attackTime    Time (in seconds before envelope
     *                                reaches Attack Level
     *  @param {Number} [decayTime]    Time (in seconds) before envelope
     *                                reaches Decay/Sustain Level
     *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
     *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
     *                                The susRatio determines the decayLevel and the level at which the
     *                                sustain portion of the envelope will sustain.
     *                                For example, if attackLevel is 0.4, releaseLevel is 0,
     *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
     *                                increased to 1.0 (using <code>setRange</code>),
     *                                then decayLevel would increase proportionally, to become 0.5.
     *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
     */


  p5.MonoSynth.prototype.setADSR = function (attack, decay, sustain, release) {
    this.env.setADSR(attack, decay, sustain, release);
  };
  /**
   * Getters and Setters
   * @property {Number} attack
   * @for p5.MonoSynth
   */

  /**
   * @property {Number} decay
   * @for p5.MonoSynth
   */

  /**
   * @property {Number} sustain
   * @for p5.MonoSynth
   */

  /**
   * @property {Number} release
   * @for p5.MonoSynth
   */


  Object.defineProperties(p5.MonoSynth.prototype, {
    'attack': {
      get: function get() {
        return this.env.aTime;
      },
      set: function set(attack) {
        this.env.setADSR(attack, this.env.dTime, this.env.sPercent, this.env.rTime);
      }
    },
    'decay': {
      get: function get() {
        return this.env.dTime;
      },
      set: function set(decay) {
        this.env.setADSR(this.env.aTime, decay, this.env.sPercent, this.env.rTime);
      }
    },
    'sustain': {
      get: function get() {
        return this.env.sPercent;
      },
      set: function set(sustain) {
        this.env.setADSR(this.env.aTime, this.env.dTime, sustain, this.env.rTime);
      }
    },
    'release': {
      get: function get() {
        return this.env.rTime;
      },
      set: function set(release) {
        this.env.setADSR(this.env.aTime, this.env.dTime, this.env.sPercent, release);
      }
    }
  });
  /**
   * MonoSynth amp
   * @method  amp
   * @for p5.MonoSynth
   * @param  {Number} vol      desired volume
   * @param  {Number} [rampTime] Time to reach new volume
   * @return {Number}          new volume value
   */

  p5.MonoSynth.prototype.amp = function (vol, rampTime) {
    var t = rampTime || 0;

    if (typeof vol !== 'undefined') {
      this.oscillator.amp(vol, t);
    }

    return this.oscillator.amp().value;
  };
  /**
   *  Connect to a p5.sound / Web Audio object.
   *
   *  @method  connect
   *  @for p5.MonoSynth
   *  @param  {Object} unit A p5.sound or Web Audio object
   */


  p5.MonoSynth.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   *  Disconnect all outputs
   *
   *  @method  disconnect
   *  @for p5.MonoSynth
   */


  p5.MonoSynth.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };
  /**
   *  Get rid of the MonoSynth and free up its resources / memory.
   *
   *  @method  dispose
   *  @for p5.MonoSynth
   */


  p5.MonoSynth.prototype.dispose = function () {
    AudioVoice.prototype.dispose.apply(this);

    if (this.env) {
      this.env.dispose();
    }

    if (this.oscillator) {
      this.oscillator.dispose();
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var p5sound = __webpack_require__(1);
  /**
   * Base class for monophonic synthesizers. Any extensions of this class
   * should follow the API and implement the methods below in order to
   * remain compatible with p5.PolySynth();
   *
   * @class p5.AudioVoice
   * @constructor
   */


  p5.AudioVoice = function () {
    this.ac = p5sound.audiocontext;
    this.output = this.ac.createGain();
    this.connect();
    p5sound.soundArray.push(this);
  };

  p5.AudioVoice.prototype.play = function (note, velocity, secondsFromNow, sustime) {};

  p5.AudioVoice.prototype.triggerAttack = function (note, velocity, secondsFromNow) {};

  p5.AudioVoice.prototype.triggerRelease = function (secondsFromNow) {};

  p5.AudioVoice.prototype.amp = function (vol, rampTime) {};
  /**
   * Connect to p5 objects or Web Audio Nodes
   * @method  connect
   * @for p5.AudioVoice
   * @param {Object} unit
   */


  p5.AudioVoice.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   * Disconnect from soundOut
   * @method  disconnect
   * @for p5.AudioVoice
   */


  p5.AudioVoice.prototype.disconnect = function () {
    this.output.disconnect();
  };

  p5.AudioVoice.prototype.dispose = function () {
    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }
  };

  return p5.AudioVoice;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var TimelineSignal = __webpack_require__(14);

  var noteToFreq = __webpack_require__(6).noteToFreq;
  /**
    *  An AudioVoice is used as a single voice for sound synthesis.
    *  The PolySynth class holds an array of AudioVoice, and deals
    *  with voices allocations, with setting notes to be played, and
    *  parameters to be set.
    *
    *  @class p5.PolySynth
    *  @constructor
    *
    *  @param {Number} [synthVoice]   A monophonic synth voice inheriting
    *                                 the AudioVoice class. Defaults to p5.MonoSynth
    *  @param {Number} [maxVoices] Number of voices, defaults to 8;
    *  @example
    *  <div><code>
    *  let polySynth;
    *
    *  function setup() {
    *    let cnv = createCanvas(100, 100);
    *    cnv.mousePressed(playSynth);
    *    background(220);
    *    text('click to play', 20, 20);
    *
    *    polySynth = new p5.PolySynth();
    *  }
    *
    *  function playSynth() {
    *    userStartAudio();
    *
    *    // note duration (in seconds)
    *    let dur = 1.5;
    *
    *    // time from now (in seconds)
    *    let time = 0;
    *
    *    // velocity (volume, from 0 to 1)
    *    let vel = 0.1;
    *
    *    // notes can overlap with each other
    *    polySynth.play('G2', vel, 0, dur);
    *    polySynth.play('C3', vel, time += 1/3, dur);
    *    polySynth.play('G3', vel, time += 1/3, dur);
    *  }
    *  </code></div>
    **/


  p5.PolySynth = function (audioVoice, maxVoices) {
    this.audiovoices = [];
    /**
     * An object that holds information about which notes have been played and
     * which notes are currently being played. New notes are added as keys
     * on the fly. While a note has been attacked, but not released, the value of the
     * key is the audiovoice which is generating that note. When notes are released,
     * the value of the key becomes undefined.
     * @property notes
     */

    this.notes = {}; 

    this._newest = 0;
    this._oldest = 0;
    /**
     * A PolySynth must have at least 1 voice, defaults to 8
     * @property polyvalue
     */

    this.maxVoices = maxVoices || 8;
    /**
     * Monosynth that generates the sound for each note that is triggered. The
     * p5.PolySynth defaults to using the p5.MonoSynth as its voice.
     * @property AudioVoice
     */

    this.AudioVoice = audioVoice === undefined ? p5.MonoSynth : audioVoice;
    /**
     * This value must only change as a note is attacked or released. Due to delay
     * and sustain times, Tone.TimelineSignal is required to schedule the change in value.
    * @private
     * @property {Tone.TimelineSignal} _voicesInUse
     */

    this._voicesInUse = new TimelineSignal(0);
    this.output = p5sound.audiocontext.createGain();
    this.connect(); 

    this._allocateVoices();

    p5sound.soundArray.push(this);
  };
  /**
   * Construct the appropriate number of audiovoices
   * @private
   * @for p5.PolySynth
   * @method  _allocateVoices
   */


  p5.PolySynth.prototype._allocateVoices = function () {
    for (var i = 0; i < this.maxVoices; i++) {
      this.audiovoices.push(new this.AudioVoice());
      this.audiovoices[i].disconnect();
      this.audiovoices[i].connect(this.output);
    }
  };
  /**
   *  Play a note by triggering noteAttack and noteRelease with sustain time
   *
   *  @method  play
   *  @for p5.PolySynth
   *  @param  {Number} [note] midi note to play (ranging from 0 to 127 - 60 being a middle C)
   *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
   *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
   *  @param  {Number} [sustainTime] time to sustain before releasing the envelope
   *  @example
   *  <div><code>
   *  let polySynth;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playSynth);
   *    background(220);
   *    text('click to play', 20, 20);
   *
   *    polySynth = new p5.PolySynth();
   *  }
   *
   *  function playSynth() {
   *    userStartAudio();
   *
   *    // note duration (in seconds)
   *    let dur = 1.5;
   *
   *    // time from now (in seconds)
   *    let time = 0;
   *
   *    // velocity (volume, from 0 to 1)
   *    let vel = 0.1;
   *
   *    // notes can overlap with each other
   *    polySynth.play('G2', vel, 0, dur);
   *    polySynth.play('C3', vel, time += 1/3, dur);
   *    polySynth.play('G3', vel, time += 1/3, dur);
   *  }
   *  </code></div>
   */


  p5.PolySynth.prototype.play = function (note, velocity, secondsFromNow, susTime) {
    var susTime = susTime || 1;
    this.noteAttack(note, velocity, secondsFromNow);
    this.noteRelease(note, secondsFromNow + susTime);
  };
  /**
   *  noteADSR sets the envelope for a specific note that has just been triggered.
   *  Using this method modifies the envelope of whichever audiovoice is being used
   *  to play the desired note. The envelope should be reset before noteRelease is called
   *  in order to prevent the modified envelope from being used on other notes.
   *
   *  @method  noteADSR
   *  @for p5.PolySynth
   *  @param {Number} [note]        Midi note on which ADSR should be set.
   *  @param {Number} [attackTime]  Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]   Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   **/


  p5.PolySynth.prototype.noteADSR = function (note, a, d, s, r, timeFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var timeFromNow = timeFromNow || 0;
    var t = now + timeFromNow;
    this.audiovoices[this.notes[note].getValueAtTime(t)].setADSR(a, d, s, r);
  };
  /**
   * Set the PolySynths global envelope. This method modifies the envelopes of each
   * monosynth so that all notes are played with this envelope.
   *
   *  @method  setADSR
   *  @for p5.PolySynth
   *  @param {Number} [attackTime]  Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]   Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   **/


  p5.PolySynth.prototype.setADSR = function (a, d, s, r) {
    this.audiovoices.forEach(function (voice) {
      voice.setADSR(a, d, s, r);
    });
  };
  /**
   *  Trigger the Attack, and Decay portion of a MonoSynth.
   *  Similar to holding down a key on a piano, but it will
   *  hold the sustain level until you let go.
   *
   *  @method  noteAttack
   *  @for p5.PolySynth
   *  @param  {Number} [note]           midi note on which attack should be triggered.
   *  @param  {Number} [velocity]       velocity of the note to play (ranging from 0 to 1)/
   *  @param  {Number} [secondsFromNow] time from now (in seconds)
   *  @example
   *  <div><code>
   *  let polySynth = new p5.PolySynth();
   *  let pitches = ['G', 'D', 'G', 'C'];
   *  let octaves = [2, 3, 4];
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playChord);
   *    background(220);
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function playChord() {
   *    userStartAudio();
   *
   *    // play a chord: multiple notes at the same time
   *    for (let i = 0; i < 4; i++) {
   *      let note = random(pitches) + random(octaves);
   *      polySynth.noteAttack(note, 0.1);
   *    }
   *  }
   *
   *  function mouseReleased() {
   *    // release all voices
   *    polySynth.noteRelease();
   *  }
   *  </code></div>
   */


  p5.PolySynth.prototype.noteAttack = function (_note, _velocity, secondsFromNow) {
    var secondsFromNow = ~~secondsFromNow; 

    var acTime = p5sound.audiocontext.currentTime + secondsFromNow; 

    var note = noteToFreq(_note);
    var velocity = _velocity || 0.1;
    var currentVoice; 

    if (this.notes[note] && this.notes[note].getValueAtTime(acTime) !== null) {
      this.noteRelease(note, 0);
    } 


    if (this._voicesInUse.getValueAtTime(acTime) < this.maxVoices) {
      currentVoice = Math.max(~~this._voicesInUse.getValueAtTime(acTime), 0);
    } 
    else {
        currentVoice = this._oldest;
        var oldestNote = p5.prototype.freqToMidi(this.audiovoices[this._oldest].oscillator.freq().value);
        this.noteRelease(oldestNote);
        this._oldest = (this._oldest + 1) % (this.maxVoices - 1);
      } 


    this.notes[note] = new TimelineSignal();
    this.notes[note].setValueAtTime(currentVoice, acTime); 

    var previousVal = this._voicesInUse._searchBefore(acTime) === null ? 0 : this._voicesInUse._searchBefore(acTime).value;

    this._voicesInUse.setValueAtTime(previousVal + 1, acTime); 


    this._updateAfter(acTime, 1);

    this._newest = currentVoice; 

    if (typeof velocity === 'number') {
      var maxRange = 1 / this._voicesInUse.getValueAtTime(acTime) * 2;
      velocity = velocity > maxRange ? maxRange : velocity;
    }

    this.audiovoices[currentVoice].triggerAttack(note, velocity, secondsFromNow);
  };
  /**
   * Private method to ensure accurate values of this._voicesInUse
   * Any time a new value is scheduled, it is necessary to increment all subsequent
   * scheduledValues after attack, and decrement all subsequent
   * scheduledValues after release
   *
   * @private
   * @for p5.PolySynth
   * @param  {[type]} time  [description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */


  p5.PolySynth.prototype._updateAfter = function (time, value) {
    if (this._voicesInUse._searchAfter(time) === null) {
      return;
    } else {
      this._voicesInUse._searchAfter(time).value += value;

      var nextTime = this._voicesInUse._searchAfter(time).time;

      this._updateAfter(nextTime, value);
    }
  };
  /**
   *  Trigger the Release of an AudioVoice note. This is similar to releasing
   *  the key on a piano and letting the sound fade according to the
   *  release level and release time.
   *
   *  @method  noteRelease
   *  @for p5.PolySynth
   *  @param  {Number} [note]           midi note on which attack should be triggered.
   *                                    If no value is provided, all notes will be released.
   *  @param  {Number} [secondsFromNow] time to trigger the release
   *  @example
   *  <div><code>
   *  let polySynth = new p5.PolySynth();
   *  let pitches = ['G', 'D', 'G', 'C'];
   *  let octaves = [2, 3, 4];
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playChord);
   *    background(220);
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function playChord() {
   *    userStartAudio();
   *
   *    // play a chord: multiple notes at the same time
   *    for (let i = 0; i < 4; i++) {
   *      let note = random(pitches) + random(octaves);
   *      polySynth.noteAttack(note, 0.1);
   *    }
   *  }
   *
   *  function mouseReleased() {
   *    // release all voices
   *    polySynth.noteRelease();
   *  }
   *  </code></div>
   *
   */


  p5.PolySynth.prototype.noteRelease = function (_note, secondsFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow; 

    if (!_note) {
      this.audiovoices.forEach(function (voice) {
        voice.triggerRelease(tFromNow);
      });

      this._voicesInUse.setValueAtTime(0, t);

      for (var n in this.notes) {
        this.notes[n].dispose();
        delete this.notes[n];
      }

      return;
    } 


    var note = noteToFreq(_note);

    if (!this.notes[note] || this.notes[note].getValueAtTime(t) === null) {
      console.warn('Cannot release a note that is not already playing');
    } else {
      var previousVal = Math.max(~~this._voicesInUse.getValueAtTime(t).value, 1);

      this._voicesInUse.setValueAtTime(previousVal - 1, t); 


      if (previousVal > 0) {
        this._updateAfter(t, -1);
      }

      this.audiovoices[this.notes[note].getValueAtTime(t)].triggerRelease(tFromNow);
      this.notes[note].dispose();
      delete this.notes[note];
      this._newest = this._newest === 0 ? 0 : (this._newest - 1) % (this.maxVoices - 1);
    }
  };
  /**
    *  Connect to a p5.sound / Web Audio object.
    *
    *  @method  connect
    *  @for p5.PolySynth
    *  @param  {Object} unit A p5.sound or Web Audio object
    */


  p5.PolySynth.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
  *  Disconnect all outputs
  *
  *  @method  disconnect
  *  @for p5.PolySynth
  */


  p5.PolySynth.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };
  /**
    *  Get rid of the MonoSynth and free up its resources / memory.
    *
    *  @method  dispose
    *  @for p5.PolySynth
    */


  p5.PolySynth.prototype.dispose = function () {
    this.audiovoices.forEach(function (voice) {
      voice.dispose();
    });

    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  __webpack_require__(32);

  __webpack_require__(33);

  __webpack_require__(17);

  var p5SOUND = __webpack_require__(1);

  __webpack_require__(6);

  __webpack_require__(11);

  __webpack_require__(36);

  __webpack_require__(40);

  __webpack_require__(41);

  __webpack_require__(42);

  __webpack_require__(43);

  __webpack_require__(44);

  __webpack_require__(23);

  __webpack_require__(47);

  __webpack_require__(48);

  __webpack_require__(49);

  __webpack_require__(50);

  __webpack_require__(15);

  __webpack_require__(59);

  __webpack_require__(61);

  __webpack_require__(62);

  __webpack_require__(63);

  __webpack_require__(64);

  __webpack_require__(65);

  __webpack_require__(67);

  __webpack_require__(68);

  __webpack_require__(69);

  __webpack_require__(70);

  __webpack_require__(71);

  __webpack_require__(72);

  __webpack_require__(28);

  __webpack_require__(30);

  __webpack_require__(73);

  __webpack_require__(29);

  __webpack_require__(28);

  __webpack_require__(30);

  return p5SOUND;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports) {

!function(){var l,s=[];function p(e){var o=this,n={},i=-1;this.parameters.forEach(function(e,t){var r=s[++i]||(s[i]=new Float32Array(o.bufferSize));r.fill(e.value),n[t]=r}),this.processor.realm.exec("self.sampleRate=sampleRate="+this.context.sampleRate+";self.currentTime=currentTime="+this.context.currentTime);var t=a(e.inputBuffer),r=a(e.outputBuffer);this.instance.process([t],[r],n)}function a(e){for(var t=[],r=0;r<e.numberOfChannels;r++)t[r]=e.getChannelData(r);return t}function f(e){return e.$$processors||(e.$$processors={})}function e(e){this.$$context=e}"function"!=typeof AudioWorkletNode&&(self.AudioWorkletNode=function(e,t,r){var o=f(e)[t],n=e.createScriptProcessor(void 0,2,r&&r.outputChannelCount?r.outputChannelCount[0]:2);if(n.parameters=new Map,o.properties)for(var i=0;i<o.properties.length;i++){var s=o.properties[i],a=e.createGain().gain;a.value=s.defaultValue,n.parameters.set(s.name,a)}var u=new MessageChannel;l=u.port2;var c=new o.Processor(r||{});return l=null,n.port=u.port1,n.processor=o,n.instance=c,n.onaudioprocess=p,n},Object.defineProperty((self.AudioContext||self.webkitAudioContext).prototype,"audioWorklet",{get:function(){return this.$$audioWorklet||(this.$$audioWorklet=new self.AudioWorklet(this))}}),self.AudioWorklet=(e.prototype.addModule=function(e,t){var n=this;return fetch(e).then(function(e){if(!e.ok)throw Error(e.status);return e.text()}).then(function(e){var r={sampleRate:0,currentTime:0,AudioWorkletProcessor:function(){this.port=l},registerProcessor:function(e,t){f(n.$$context)[e]={realm:o,context:r,Processor:t,properties:t.parameterDescriptors||[]}}},o=new function(e,t){var r=document.createElement("iframe");r.style.cssText="position:absolute;left:0;top:-999px;width:1px;height:1px;",t.appendChild(r);var o=r.contentWindow,n=o.document,i="var window,$hook";for(var s in o)s in e||"eval"===s||(i+=",",i+=s);for(var a in e)i+=",",i+=a,i+="=self.",i+=a;var u=n.createElement("script");u.appendChild(n.createTextNode('function $hook(self,console) {"use strict";\n        '+i+";return function() {return eval(arguments[0])}}")),n.body.appendChild(u),this.exec=o.$hook(e,console)}(r.self=r,document.documentElement);return o.exec((t&&t.transpile||String)(e)),null})},e))}();

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * This module has shims
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  (function () {
    function fixSetTarget(param) {
      if (!param) 
        return;
      if (!param.setTargetAtTime) param.setTargetAtTime = param.setTargetValueAtTime;
    }

    if (window.hasOwnProperty('webkitAudioContext') && !window.hasOwnProperty('AudioContext')) {
      window.AudioContext = window.webkitAudioContext;
      if (typeof AudioContext.prototype.createGain !== 'function') AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
      if (typeof AudioContext.prototype.createDelay !== 'function') AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
      if (typeof AudioContext.prototype.createScriptProcessor !== 'function') AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
      if (typeof AudioContext.prototype.createPeriodicWave !== 'function') AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
      AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;

      AudioContext.prototype.createGain = function () {
        var node = this.internal_createGain();
        fixSetTarget(node.gain);
        return node;
      };

      AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;

      AudioContext.prototype.createDelay = function (maxDelayTime) {
        var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
        fixSetTarget(node.delayTime);
        return node;
      };

      AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;

      AudioContext.prototype.createBufferSource = function () {
        var node = this.internal_createBufferSource();

        if (!node.start) {
          node.start = function (when, offset, duration) {
            if (offset || duration) this.noteGrainOn(when || 0, offset, duration);else this.noteOn(when || 0);
          };
        } else {
          node.internal_start = node.start;

          node.start = function (when, offset, duration) {
            if (typeof duration !== 'undefined') node.internal_start(when || 0, offset, duration);else node.internal_start(when || 0, offset || 0);
          };
        }

        if (!node.stop) {
          node.stop = function (when) {
            this.noteOff(when || 0);
          };
        } else {
          node.internal_stop = node.stop;

          node.stop = function (when) {
            node.internal_stop(when || 0);
          };
        }

        fixSetTarget(node.playbackRate);
        return node;
      };

      AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;

      AudioContext.prototype.createDynamicsCompressor = function () {
        var node = this.internal_createDynamicsCompressor();
        fixSetTarget(node.threshold);
        fixSetTarget(node.knee);
        fixSetTarget(node.ratio);
        fixSetTarget(node.reduction);
        fixSetTarget(node.attack);
        fixSetTarget(node.release);
        return node;
      };

      AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;

      AudioContext.prototype.createBiquadFilter = function () {
        var node = this.internal_createBiquadFilter();
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        fixSetTarget(node.Q);
        fixSetTarget(node.gain);
        return node;
      };

      if (typeof AudioContext.prototype.createOscillator !== 'function') {
        AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;

        AudioContext.prototype.createOscillator = function () {
          var node = this.internal_createOscillator();

          if (!node.start) {
            node.start = function (when) {
              this.noteOn(when || 0);
            };
          } else {
            node.internal_start = node.start;

            node.start = function (when) {
              node.internal_start(when || 0);
            };
          }

          if (!node.stop) {
            node.stop = function (when) {
              this.noteOff(when || 0);
            };
          } else {
            node.internal_stop = node.stop;

            node.stop = function (when) {
              node.internal_stop(when || 0);
            };
          }

          if (!node.setPeriodicWave) node.setPeriodicWave = node.setWaveTable;
          fixSetTarget(node.frequency);
          fixSetTarget(node.detune);
          return node;
        };
      }
    }

    if (window.hasOwnProperty('webkitOfflineAudioContext') && !window.hasOwnProperty('OfflineAudioContext')) {
      window.OfflineAudioContext = window.webkitOfflineAudioContext;
    }
  })(window); 


  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  /**
   * Determine which filetypes are supported (inspired by buzz.js)
   * The audio element (el) will only be used to test browser support for various audio formats
   */

  var el = document.createElement('audio');

  p5.prototype.isSupported = function () {
    return !!el.canPlayType;
  };

  var isOGGSupported = function isOGGSupported() {
    return !!el.canPlayType && el.canPlayType('audio/ogg; codecs="vorbis"');
  };

  var isMP3Supported = function isMP3Supported() {
    return !!el.canPlayType && el.canPlayType('audio/mpeg;');
  };

  var isWAVSupported = function isWAVSupported() {
    return !!el.canPlayType && el.canPlayType('audio/wav; codecs="1"');
  };

  var isAACSupported = function isAACSupported() {
    return !!el.canPlayType && (el.canPlayType('audio/x-m4a;') || el.canPlayType('audio/aac;'));
  };

  var isAIFSupported = function isAIFSupported() {
    return !!el.canPlayType && el.canPlayType('audio/x-aiff;');
  };

  p5.prototype.isFileSupported = function (extension) {
    switch (extension.toLowerCase()) {
      case 'mp3':
        return isMP3Supported();

      case 'wav':
        return isWAVSupported();

      case 'ogg':
        return isOGGSupported();

      case 'aac':
      case 'm4a':
      case 'mp4':
        return isAACSupported();

      case 'aif':
      case 'aiff':
        return isAIFSupported();

      default:
        return false;
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports) {

var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(t){"object"==typeof window&&(g=window)}module.exports=g;

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){var r=function(e,t){this._dragged=!1,this._element=e,this._bindedMove=this._moved.bind(this),this._bindedEnd=this._ended.bind(this,t),e.addEventListener("touchstart",this._bindedEnd),e.addEventListener("touchmove",this._bindedMove),e.addEventListener("touchend",this._bindedEnd),e.addEventListener("mouseup",this._bindedEnd)};function o(e){return"running"===e.state}return r.prototype._moved=function(e){this._dragged=!0},r.prototype._ended=function(e){this._dragged||function(e){var t=e.createBuffer(1,1,e.sampleRate),n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start(0),e.resume&&e.resume()}(e),this._dragged=!1},r.prototype.dispose=function(){this._element.removeEventListener("touchstart",this._bindedEnd),this._element.removeEventListener("touchmove",this._bindedMove),this._element.removeEventListener("touchend",this._bindedEnd),this._element.removeEventListener("mouseup",this._bindedEnd),this._bindedMove=null,this._bindedEnd=null,this._element=null},function(t,e,n){var i=new Promise(function(e){!function(t,n){o(t)?n():function e(){o(t)?n():(requestAnimationFrame(e),t.resume&&t.resume())}()}(t,e)}),d=[];return function e(t,n,i){if(Array.isArray(t)||NodeList&&t instanceof NodeList)for(var d=0;d<t.length;d++)e(t[d],n,i);else if("string"==typeof t)e(document.querySelectorAll(t),n,i);else if(t.jquery&&"function"==typeof t.toArray)e(t.toArray(),n,i);else if(Element&&t instanceof Element){var o=new r(t,i);n.push(o)}}(e=e||document.body,d,t),i.then(function(){for(var e=0;e<d.length;e++)d[e].dispose();d=null,n&&n()}),i}});

 }),
 (function(module, exports, __webpack_require__) {

var p5sound = __webpack_require__(1);

var moduleSources = [__webpack_require__(37)["default"], __webpack_require__(38)["default"], __webpack_require__(39)["default"]];
var ac = p5sound.audiocontext;
var initializedAudioWorklets = false;

function loadAudioWorkletModules() {
  return Promise.all(moduleSources.map(function (moduleSrc) {
    var blob = new Blob([moduleSrc], {
      type: 'application/javascript'
    });
    var objectURL = URL.createObjectURL(blob);
    return ac.audioWorklet.addModule(objectURL);
  }));
}

p5.prototype.registerMethod('init', function () {
  if (initializedAudioWorklets) return; 

  if (!this.preload && !window.preload) {
    this.preload = function () {};
  } 


  this._incrementPreload();

  var onWorkletModulesLoad = function () {
    initializedAudioWorklets = true;

    this._decrementPreload();
  }.bind(this);

  loadAudioWorkletModules().then(onWorkletModulesLoad);
});

 }),
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_exports__["default"] = ("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import dependencies via preval.require so that they're available as values at compile time\nvar processorNames = {\n  \"recorderProcessor\": \"recorder-processor\",\n  \"soundFileProcessor\": \"sound-file-processor\",\n  \"amplitudeProcessor\": \"amplitude-processor\"\n};\nvar RingBuffer = {\n  \"default\":\n  /*#__PURE__*/\n  function () {\n    /**\n     * @constructor\n     * @param  {number} length Buffer length in frames.\n     * @param  {number} channelCount Buffer channel count.\n     */\n    function RingBuffer(length, channelCount) {\n      _classCallCheck(this, RingBuffer);\n\n      this._readIndex = 0;\n      this._writeIndex = 0;\n      this._framesAvailable = 0;\n      this._channelCount = channelCount;\n      this._length = length;\n      this._channelData = [];\n\n      for (var i = 0; i < this._channelCount; ++i) {\n        this._channelData[i] = new Float32Array(length);\n      }\n    }\n    /**\n     * Getter for Available frames in buffer.\n     *\n     * @return {number} Available frames in buffer.\n     */\n\n\n    _createClass(RingBuffer, [{\n      key: \"push\",\n\n      /**\n       * Push a sequence of Float32Arrays to buffer.\n       *\n       * @param  {array} arraySequence A sequence of Float32Arrays.\n       */\n      value: function push(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // Transfer data from the |arraySequence| storage to the internal buffer.\n        var sourceLength = arraySequence[0].length;\n\n        for (var i = 0; i < sourceLength; ++i) {\n          var writeIndex = (this._writeIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            this._channelData[channel][writeIndex] = arraySequence[channel][i];\n          }\n        }\n\n        this._writeIndex += sourceLength;\n\n        if (this._writeIndex >= this._length) {\n          this._writeIndex = 0;\n        } // For excessive frames, the buffer will be overwritten.\n\n\n        this._framesAvailable += sourceLength;\n\n        if (this._framesAvailable > this._length) {\n          this._framesAvailable = this._length;\n        }\n      }\n      /**\n       * Pull data out of buffer and fill a given sequence of Float32Arrays.\n       *\n       * @param  {array} arraySequence An array of Float32Arrays.\n       */\n\n    }, {\n      key: \"pull\",\n      value: function pull(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // If the FIFO is completely empty, do nothing.\n        if (this._framesAvailable === 0) {\n          return;\n        }\n\n        var destinationLength = arraySequence[0].length; // Transfer data from the internal buffer to the |arraySequence| storage.\n\n        for (var i = 0; i < destinationLength; ++i) {\n          var readIndex = (this._readIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            arraySequence[channel][i] = this._channelData[channel][readIndex];\n          }\n        }\n\n        this._readIndex += destinationLength;\n\n        if (this._readIndex >= this._length) {\n          this._readIndex = 0;\n        }\n\n        this._framesAvailable -= destinationLength;\n\n        if (this._framesAvailable < 0) {\n          this._framesAvailable = 0;\n        }\n      }\n    }, {\n      key: \"framesAvailable\",\n      get: function get() {\n        return this._framesAvailable;\n      }\n    }]);\n\n    return RingBuffer;\n  }()\n}[\"default\"];\n\nvar RecorderProcessor =\n/*#__PURE__*/\nfunction (_AudioWorkletProcesso) {\n  _inherits(RecorderProcessor, _AudioWorkletProcesso);\n\n  function RecorderProcessor(options) {\n    var _this;\n\n    _classCallCheck(this, RecorderProcessor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecorderProcessor).call(this));\n    var processorOptions = options.processorOptions || {};\n    _this.numOutputChannels = options.outputChannelCount || 2;\n    _this.numInputChannels = processorOptions.numInputChannels || 2;\n    _this.bufferSize = processorOptions.bufferSize || 1024;\n    _this.recording = false;\n\n    _this.clear();\n\n    _this.port.onmessage = function (event) {\n      var data = event.data;\n\n      if (data.name === 'start') {\n        _this.record(data.duration);\n      } else if (data.name === 'stop') {\n        _this.stop();\n      }\n    };\n\n    return _this;\n  }\n\n  _createClass(RecorderProcessor, [{\n    key: \"process\",\n    value: function process(inputs) {\n      if (!this.recording) {\n        return true;\n      } else if (this.sampleLimit && this.recordedSamples >= this.sampleLimit) {\n        this.stop();\n        return true;\n      }\n\n      var input = inputs[0];\n      this.inputRingBuffer.push(input);\n\n      if (this.inputRingBuffer.framesAvailable >= this.bufferSize) {\n        this.inputRingBuffer.pull(this.inputRingBufferArraySequence);\n\n        for (var channel = 0; channel < this.numOutputChannels; ++channel) {\n          var inputChannelCopy = this.inputRingBufferArraySequence[channel].slice();\n\n          if (channel === 0) {\n            this.leftBuffers.push(inputChannelCopy);\n\n            if (this.numInputChannels === 1) {\n              this.rightBuffers.push(inputChannelCopy);\n            }\n          } else if (channel === 1 && this.numInputChannels > 1) {\n            this.rightBuffers.push(inputChannelCopy);\n          }\n        }\n\n        this.recordedSamples += this.bufferSize;\n      }\n\n      return true;\n    }\n  }, {\n    key: \"record\",\n    value: function record(duration) {\n      if (duration) {\n        this.sampleLimit = Math.round(duration * sampleRate);\n      }\n\n      this.recording = true;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.recording = false;\n      var buffers = this.getBuffers();\n      var leftBuffer = buffers[0].buffer;\n      var rightBuffer = buffers[1].buffer;\n      this.port.postMessage({\n        name: 'buffers',\n        leftBuffer: leftBuffer,\n        rightBuffer: rightBuffer\n      }, [leftBuffer, rightBuffer]);\n      this.clear();\n    }\n  }, {\n    key: \"getBuffers\",\n    value: function getBuffers() {\n      var buffers = [];\n      buffers.push(this.mergeBuffers(this.leftBuffers));\n      buffers.push(this.mergeBuffers(this.rightBuffers));\n      return buffers;\n    }\n  }, {\n    key: \"mergeBuffers\",\n    value: function mergeBuffers(channelBuffer) {\n      var result = new Float32Array(this.recordedSamples);\n      var offset = 0;\n      var lng = channelBuffer.length;\n\n      for (var i = 0; i < lng; i++) {\n        var buffer = channelBuffer[i];\n        result.set(buffer, offset);\n        offset += buffer.length;\n      }\n\n      return result;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      var _this2 = this;\n\n      this.leftBuffers = [];\n      this.rightBuffers = [];\n      this.inputRingBuffer = new RingBuffer(this.bufferSize, this.numInputChannels);\n      this.inputRingBufferArraySequence = new Array(this.numInputChannels).fill(null).map(function () {\n        return new Float32Array(_this2.bufferSize);\n      });\n      this.recordedSamples = 0;\n      this.sampleLimit = null;\n    }\n  }]);\n\n  return RecorderProcessor;\n}(_wrapNativeSuper(AudioWorkletProcessor));\n\nregisterProcessor(processorNames.recorderProcessor, RecorderProcessor);");

 }),
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_exports__["default"] = ("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import dependencies via preval.require so that they're available as values at compile time\nvar processorNames = {\n  \"recorderProcessor\": \"recorder-processor\",\n  \"soundFileProcessor\": \"sound-file-processor\",\n  \"amplitudeProcessor\": \"amplitude-processor\"\n};\nvar RingBuffer = {\n  \"default\":\n  /*#__PURE__*/\n  function () {\n    /**\n     * @constructor\n     * @param  {number} length Buffer length in frames.\n     * @param  {number} channelCount Buffer channel count.\n     */\n    function RingBuffer(length, channelCount) {\n      _classCallCheck(this, RingBuffer);\n\n      this._readIndex = 0;\n      this._writeIndex = 0;\n      this._framesAvailable = 0;\n      this._channelCount = channelCount;\n      this._length = length;\n      this._channelData = [];\n\n      for (var i = 0; i < this._channelCount; ++i) {\n        this._channelData[i] = new Float32Array(length);\n      }\n    }\n    /**\n     * Getter for Available frames in buffer.\n     *\n     * @return {number} Available frames in buffer.\n     */\n\n\n    _createClass(RingBuffer, [{\n      key: \"push\",\n\n      /**\n       * Push a sequence of Float32Arrays to buffer.\n       *\n       * @param  {array} arraySequence A sequence of Float32Arrays.\n       */\n      value: function push(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // Transfer data from the |arraySequence| storage to the internal buffer.\n        var sourceLength = arraySequence[0].length;\n\n        for (var i = 0; i < sourceLength; ++i) {\n          var writeIndex = (this._writeIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            this._channelData[channel][writeIndex] = arraySequence[channel][i];\n          }\n        }\n\n        this._writeIndex += sourceLength;\n\n        if (this._writeIndex >= this._length) {\n          this._writeIndex = 0;\n        } // For excessive frames, the buffer will be overwritten.\n\n\n        this._framesAvailable += sourceLength;\n\n        if (this._framesAvailable > this._length) {\n          this._framesAvailable = this._length;\n        }\n      }\n      /**\n       * Pull data out of buffer and fill a given sequence of Float32Arrays.\n       *\n       * @param  {array} arraySequence An array of Float32Arrays.\n       */\n\n    }, {\n      key: \"pull\",\n      value: function pull(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // If the FIFO is completely empty, do nothing.\n        if (this._framesAvailable === 0) {\n          return;\n        }\n\n        var destinationLength = arraySequence[0].length; // Transfer data from the internal buffer to the |arraySequence| storage.\n\n        for (var i = 0; i < destinationLength; ++i) {\n          var readIndex = (this._readIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            arraySequence[channel][i] = this._channelData[channel][readIndex];\n          }\n        }\n\n        this._readIndex += destinationLength;\n\n        if (this._readIndex >= this._length) {\n          this._readIndex = 0;\n        }\n\n        this._framesAvailable -= destinationLength;\n\n        if (this._framesAvailable < 0) {\n          this._framesAvailable = 0;\n        }\n      }\n    }, {\n      key: \"framesAvailable\",\n      get: function get() {\n        return this._framesAvailable;\n      }\n    }]);\n\n    return RingBuffer;\n  }()\n}[\"default\"];\n\nvar SoundFileProcessor =\n/*#__PURE__*/\nfunction (_AudioWorkletProcesso) {\n  _inherits(SoundFileProcessor, _AudioWorkletProcesso);\n\n  function SoundFileProcessor(options) {\n    var _this;\n\n    _classCallCheck(this, SoundFileProcessor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SoundFileProcessor).call(this));\n    var processorOptions = options.processorOptions || {};\n    _this.bufferSize = processorOptions.bufferSize || 256;\n    _this.inputRingBuffer = new RingBuffer(_this.bufferSize, 1);\n    _this.inputRingBufferArraySequence = [new Float32Array(_this.bufferSize)];\n    return _this;\n  }\n\n  _createClass(SoundFileProcessor, [{\n    key: \"process\",\n    value: function process(inputs) {\n      var input = inputs[0]; // we only care about the first input channel, because that contains the position data\n\n      this.inputRingBuffer.push([input[0]]);\n\n      if (this.inputRingBuffer.framesAvailable >= this.bufferSize) {\n        this.inputRingBuffer.pull(this.inputRingBufferArraySequence);\n        var inputChannel = this.inputRingBufferArraySequence[0];\n        var position = inputChannel[inputChannel.length - 1] || 0;\n        this.port.postMessage({\n          name: 'position',\n          position: position\n        });\n      }\n\n      return true;\n    }\n  }]);\n\n  return SoundFileProcessor;\n}(_wrapNativeSuper(AudioWorkletProcessor));\n\nregisterProcessor(processorNames.soundFileProcessor, SoundFileProcessor);");

 }),
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_exports__["default"] = ("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import dependencies via preval.require so that they're available as values at compile time\nvar processorNames = {\n  \"recorderProcessor\": \"recorder-processor\",\n  \"soundFileProcessor\": \"sound-file-processor\",\n  \"amplitudeProcessor\": \"amplitude-processor\"\n};\nvar RingBuffer = {\n  \"default\":\n  /*#__PURE__*/\n  function () {\n    /**\n     * @constructor\n     * @param  {number} length Buffer length in frames.\n     * @param  {number} channelCount Buffer channel count.\n     */\n    function RingBuffer(length, channelCount) {\n      _classCallCheck(this, RingBuffer);\n\n      this._readIndex = 0;\n      this._writeIndex = 0;\n      this._framesAvailable = 0;\n      this._channelCount = channelCount;\n      this._length = length;\n      this._channelData = [];\n\n      for (var i = 0; i < this._channelCount; ++i) {\n        this._channelData[i] = new Float32Array(length);\n      }\n    }\n    /**\n     * Getter for Available frames in buffer.\n     *\n     * @return {number} Available frames in buffer.\n     */\n\n\n    _createClass(RingBuffer, [{\n      key: \"push\",\n\n      /**\n       * Push a sequence of Float32Arrays to buffer.\n       *\n       * @param  {array} arraySequence A sequence of Float32Arrays.\n       */\n      value: function push(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // Transfer data from the |arraySequence| storage to the internal buffer.\n        var sourceLength = arraySequence[0].length;\n\n        for (var i = 0; i < sourceLength; ++i) {\n          var writeIndex = (this._writeIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            this._channelData[channel][writeIndex] = arraySequence[channel][i];\n          }\n        }\n\n        this._writeIndex += sourceLength;\n\n        if (this._writeIndex >= this._length) {\n          this._writeIndex = 0;\n        } // For excessive frames, the buffer will be overwritten.\n\n\n        this._framesAvailable += sourceLength;\n\n        if (this._framesAvailable > this._length) {\n          this._framesAvailable = this._length;\n        }\n      }\n      /**\n       * Pull data out of buffer and fill a given sequence of Float32Arrays.\n       *\n       * @param  {array} arraySequence An array of Float32Arrays.\n       */\n\n    }, {\n      key: \"pull\",\n      value: function pull(arraySequence) {\n        // The channel count of arraySequence and the length of each channel must\n        // match with this buffer obejct.\n        // If the FIFO is completely empty, do nothing.\n        if (this._framesAvailable === 0) {\n          return;\n        }\n\n        var destinationLength = arraySequence[0].length; // Transfer data from the internal buffer to the |arraySequence| storage.\n\n        for (var i = 0; i < destinationLength; ++i) {\n          var readIndex = (this._readIndex + i) % this._length;\n\n          for (var channel = 0; channel < this._channelCount; ++channel) {\n            arraySequence[channel][i] = this._channelData[channel][readIndex];\n          }\n        }\n\n        this._readIndex += destinationLength;\n\n        if (this._readIndex >= this._length) {\n          this._readIndex = 0;\n        }\n\n        this._framesAvailable -= destinationLength;\n\n        if (this._framesAvailable < 0) {\n          this._framesAvailable = 0;\n        }\n      }\n    }, {\n      key: \"framesAvailable\",\n      get: function get() {\n        return this._framesAvailable;\n      }\n    }]);\n\n    return RingBuffer;\n  }()\n}[\"default\"];\n\nvar AmplitudeProcessor =\n/*#__PURE__*/\nfunction (_AudioWorkletProcesso) {\n  _inherits(AmplitudeProcessor, _AudioWorkletProcesso);\n\n  function AmplitudeProcessor(options) {\n    var _this;\n\n    _classCallCheck(this, AmplitudeProcessor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmplitudeProcessor).call(this));\n    var processorOptions = options.processorOptions || {};\n    _this.numOutputChannels = options.outputChannelCount || 1;\n    _this.numInputChannels = processorOptions.numInputChannels || 2;\n    _this.normalize = processorOptions.normalize || false;\n    _this.smoothing = processorOptions.smoothing || 0;\n    _this.bufferSize = processorOptions.bufferSize || 2048;\n    _this.inputRingBuffer = new RingBuffer(_this.bufferSize, _this.numInputChannels);\n    _this.outputRingBuffer = new RingBuffer(_this.bufferSize, _this.numOutputChannels);\n    _this.inputRingBufferArraySequence = new Array(_this.numInputChannels).fill(null).map(function () {\n      return new Float32Array(_this.bufferSize);\n    });\n    _this.stereoVol = [0, 0];\n    _this.stereoVolNorm = [0, 0];\n    _this.volMax = 0.001;\n\n    _this.port.onmessage = function (event) {\n      var data = event.data;\n\n      if (data.name === 'toggleNormalize') {\n        _this.normalize = data.normalize;\n      } else if (data.name === 'smoothing') {\n        _this.smoothing = Math.max(0, Math.min(1, data.smoothing));\n      }\n    };\n\n    return _this;\n  } // TO DO make this stereo / dependent on # of audio channels\n\n\n  _createClass(AmplitudeProcessor, [{\n    key: \"process\",\n    value: function process(inputs, outputs) {\n      var input = inputs[0];\n      var output = outputs[0];\n      var smoothing = this.smoothing;\n      this.inputRingBuffer.push(input);\n\n      if (this.inputRingBuffer.framesAvailable >= this.bufferSize) {\n        this.inputRingBuffer.pull(this.inputRingBufferArraySequence);\n\n        for (var channel = 0; channel < this.numInputChannels; ++channel) {\n          var inputBuffer = this.inputRingBufferArraySequence[channel];\n          var bufLength = inputBuffer.length;\n          var sum = 0;\n\n          for (var i = 0; i < bufLength; i++) {\n            var x = inputBuffer[i];\n\n            if (this.normalize) {\n              sum += Math.max(Math.min(x / this.volMax, 1), -1) * Math.max(Math.min(x / this.volMax, 1), -1);\n            } else {\n              sum += x * x;\n            }\n          } // ... then take the square root of the sum.\n\n\n          var rms = Math.sqrt(sum / bufLength);\n          this.stereoVol[channel] = Math.max(rms, this.stereoVol[channel] * smoothing);\n          this.volMax = Math.max(this.stereoVol[channel], this.volMax);\n        } // calculate stero normalized volume and add volume from all channels together\n\n\n        var volSum = 0;\n\n        for (var index = 0; index < this.stereoVol.length; index++) {\n          this.stereoVolNorm[index] = Math.max(Math.min(this.stereoVol[index] / this.volMax, 1), 0);\n          volSum += this.stereoVol[index];\n        } // volume is average of channels\n\n\n        var volume = volSum / this.stereoVol.length; // normalized value\n\n        var volNorm = Math.max(Math.min(volume / this.volMax, 1), 0);\n        this.port.postMessage({\n          name: 'amplitude',\n          volume: volume,\n          volNorm: volNorm,\n          stereoVol: this.stereoVol,\n          stereoVolNorm: this.stereoVolNorm\n        }); // pass input through to output\n\n        this.outputRingBuffer.push(this.inputRingBufferArraySequence);\n      } // pull 128 frames out of the ring buffer\n      // if the ring buffer does not have enough frames, the output will be silent\n\n\n      this.outputRingBuffer.pull(output);\n      return true;\n    }\n  }]);\n\n  return AmplitudeProcessor;\n}(_wrapNativeSuper(AudioWorkletProcessor));\n\nregisterProcessor(processorNames.amplitudeProcessor, AmplitudeProcessor);");

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var ac = p5sound.audiocontext; 

  if (typeof ac.createStereoPanner !== 'undefined') {
    p5.Panner = function (input, output) {
      this.stereoPanner = this.input = ac.createStereoPanner();
      input.connect(this.stereoPanner);
      this.stereoPanner.connect(output);
    };

    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      this.stereoPanner.pan.linearRampToValueAtTime(val, t);
    }; 


    p5.Panner.prototype.inputChannels = function () {};

    p5.Panner.prototype.connect = function (obj) {
      this.stereoPanner.connect(obj);
    };

    p5.Panner.prototype.disconnect = function () {
      if (this.stereoPanner) {
        this.stereoPanner.disconnect();
      }
    };
  } else {
    p5.Panner = function (input, output, numInputChannels) {
      this.input = ac.createGain();
      input.connect(this.input);
      this.left = ac.createGain();
      this.right = ac.createGain();
      this.left.channelInterpretation = 'discrete';
      this.right.channelInterpretation = 'discrete'; 

      if (numInputChannels > 1) {
        this.splitter = ac.createChannelSplitter(2);
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      } else {
        this.input.connect(this.left);
        this.input.connect(this.right);
      }

      this.output = ac.createChannelMerger(2);
      this.left.connect(this.output, 0, 1);
      this.right.connect(this.output, 0, 0);
      this.output.connect(output);
    }; 


    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      var v = (val + 1) / 2;
      var rightVal = Math.cos(v * Math.PI / 2);
      var leftVal = Math.sin(v * Math.PI / 2);
      this.left.gain.linearRampToValueAtTime(leftVal, t);
      this.right.gain.linearRampToValueAtTime(rightVal, t);
    };

    p5.Panner.prototype.inputChannels = function (numChannels) {
      if (numChannels === 1) {
        this.input.disconnect();
        this.input.connect(this.left);
        this.input.connect(this.right);
      } else if (numChannels === 2) {
        if (_typeof(this.splitter === 'undefined')) {
          this.splitter = ac.createChannelSplitter(2);
        }

        this.input.disconnect();
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      }
    };

    p5.Panner.prototype.connect = function (obj) {
      this.output.connect(obj);
    };

    p5.Panner.prototype.disconnect = function () {
      if (this.output) {
        this.output.disconnect();
      }
    };
  }
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var CustomError = __webpack_require__(11);

  var p5sound = __webpack_require__(1);

  var ac = p5sound.audiocontext;

  var _require = __webpack_require__(6),
      midiToFreq = _require.midiToFreq,
      convertToWav = _require.convertToWav,
      safeBufferSize = _require.safeBufferSize;

  var processorNames = __webpack_require__(10);
  /**
   *  <p>SoundFile object with a path to a file.</p>
   *
   *  <p>The p5.SoundFile may not be available immediately because
   *  it loads the file information asynchronously.</p>
   *
   *  <p>To do something with the sound as soon as it loads
   *  pass the name of a function as the second parameter.</p>
   *
   *  <p>Only one file path is required. However, audio file formats
   *  (i.e. mp3, ogg, wav and m4a/aac) are not supported by all
   *  web browsers. If you want to ensure compatability, instead of a single
   *  file path, you may include an Array of filepaths, and the browser will
   *  choose a format that works.</p>
   *
   *  @class p5.SoundFile
   *  @constructor
   *  @param {String|Array} path   path to a sound file (String). Optionally,
   *                               you may include multiple file formats in
   *                               an array. Alternately, accepts an object
   *                               from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if file fails to
   *                                      load. This function will receive an error or
   *                                     XMLHttpRequest object with information
   *                                     about what went wrong.
   *  @param {Function} [whileLoadingCallback]   Name of a function to call while file
   *                                             is loading. That function will
   *                                             receive progress of the request to
   *                                             load the sound file
   *                                             (between 0 and 1) as its first
   *                                             parameter. This progress
   *                                             does not account for the additional
   *                                             time needed to decode the audio data.
   *
   *  @example
   *  <div><code>
   *  let mySound;
   *  function preload() {
   *    soundFormats('mp3', 'ogg');
   *    mySound = loadSound('assets/doorbell');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap here to play', 10, 20);
   *  }
   *
   *  function canvasPressed() {
   *    // playing a sound file on a user gesture
   *    // is equivalent to `userStartAudio()`
   *    mySound.play();
   *  }
   * </code></div>
   */


  p5.SoundFile = function (paths, onload, onerror, whileLoading) {
    if (typeof paths !== 'undefined') {
      if (typeof paths === 'string' || typeof paths[0] === 'string') {
        var path = p5.prototype._checkFileFormats(paths);

        this.url = path;
      } else if (_typeof(paths) === 'object') {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
          throw 'Unable to load file because the File API is not supported';
        }
      } 


      if (paths.file) {
        paths = paths.file;
      }

      this.file = paths;
    } 


    this._onended = function () {};

    this._looping = false;
    this._playing = false;
    this._paused = false;
    this._pauseTime = 0; 

    this._cues = [];
    this._cueIDCounter = 0; 

    this._lastPos = 0;
    this._counterNode = null;
    this._workletNode = null; 

    this.bufferSourceNodes = []; 

    this.bufferSourceNode = null;
    this.buffer = null;
    this.playbackRate = 1;
    this.input = p5sound.audiocontext.createGain();
    this.output = p5sound.audiocontext.createGain();
    this.reversed = false; 

    this.startTime = 0;
    this.endTime = null;
    this.pauseTime = 0; 

    this.mode = 'sustain'; 

    this.startMillis = null; 

    this.panPosition = 0.0;
    this.panner = new p5.Panner(this.output, p5sound.input, 2); 

    if (this.url || this.file) {
      this.load(onload, onerror);
    } 


    p5sound.soundArray.push(this);

    if (typeof whileLoading === 'function') {
      this._whileLoading = whileLoading;
    } else {
      this._whileLoading = function () {};
    }

    this._clearOnEnd = _clearOnEnd.bind(this);
  }; 


  p5.prototype.registerPreloadMethod('loadSound', p5.prototype);
  /**
   *  loadSound() returns a new p5.SoundFile from a specified
   *  path. If called during preload(), the p5.SoundFile will be ready
   *  to play in time for setup() and draw(). If called outside of
   *  preload, the p5.SoundFile will not be ready immediately, so
   *  loadSound accepts a callback as the second parameter. Using a
   *  <a href="https://github.com/processing/p5.js/wiki/Local-server">
   *  local server</a> is recommended when loading external files.
   *
   *  @method loadSound
   *  @for p5
   *  @param  {String|Array}   path     Path to the sound file, or an array with
   *                                    paths to soundfiles in multiple formats
   *                                    i.e. ['sound.ogg', 'sound.mp3'].
   *                                    Alternately, accepts an object: either
   *                                    from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if there is
   *                                      an error loading the file.
   *  @param {Function} [whileLoading] Name of a function to call while file is loading.
   *                                 This function will receive the percentage loaded
   *                                 so far, from 0.0 to 1.0.
   *  @return {SoundFile}            Returns a p5.SoundFile
   *  @example
   *  <div><code>
   *  let mySound;
   *  function preload() {
   *    soundFormats('mp3', 'ogg');
   *    mySound = loadSound('assets/doorbell');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap here to play', 10, 20);
   *  }
   *
   *  function canvasPressed() {
   *    // playing a sound file on a user gesture
   *    // is equivalent to `userStartAudio()`
   *    mySound.play();
   *  }
   *  </code></div>
   */

  p5.prototype.loadSound = function (path, callback, onerror, whileLoading) {
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      window.alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }

    var self = this;
    var s = new p5.SoundFile(path, function () {
      if (typeof callback === 'function') {
        callback.apply(self, arguments);
      }

      if (typeof self._decrementPreload === 'function') {
        self._decrementPreload();
      }
    }, onerror, whileLoading);
    return s;
  };
  /**
   * This is a helper function that the p5.SoundFile calls to load
   * itself. Accepts a callback (the name of another function)
   * as an optional parameter.
   *
   * @private
   * @for p5.SoundFile
   * @param {Function} [successCallback]   Name of a function to call once file loads
   * @param {Function} [errorCallback]   Name of a function to call if there is an error
   */


  p5.SoundFile.prototype.load = function (callback, errorCallback) {
    var self = this;
    var errorTrace = new Error().stack;

    if (this.url !== undefined && this.url !== '') {
      var request = new XMLHttpRequest();
      request.addEventListener('progress', function (evt) {
        self._updateProgress(evt);
      }, false);
      request.open('GET', this.url, true);
      request.responseType = 'arraybuffer';

      request.onload = function () {
        if (request.status === 200) {
          if (!self.panner) return;
          ac.decodeAudioData(request.response, 
          function (buff) {
            if (!self.panner) return;
            self.buffer = buff;
            self.panner.inputChannels(buff.numberOfChannels);

            if (callback) {
              callback(self);
            }
          }, 
          function () {
            if (!self.panner) return;
            var err = new CustomError('decodeAudioData', errorTrace, self.url);
            var msg = 'AudioContext error at decodeAudioData for ' + self.url;

            if (errorCallback) {
              err.msg = msg;
              errorCallback(err);
            } else {
              console.error(msg + '\n The error stack trace includes: \n' + err.stack);
            }
          });
        } 
        else {
            if (!self.panner) return;
            var err = new CustomError('loadSound', errorTrace, self.url);
            var msg = 'Unable to load ' + self.url + '. The request status was: ' + request.status + ' (' + request.statusText + ')';

            if (errorCallback) {
              err.message = msg;
              errorCallback(err);
            } else {
              console.error(msg + '\n The error stack trace includes: \n' + err.stack);
            }
          }
      }; 


      request.onerror = function () {
        var err = new CustomError('loadSound', errorTrace, self.url);
        var msg = 'There was no response from the server at ' + self.url + '. Check the url and internet connectivity.';

        if (errorCallback) {
          err.message = msg;
          errorCallback(err);
        } else {
          console.error(msg + '\n The error stack trace includes: \n' + err.stack);
        }
      };

      request.send();
    } else if (this.file !== undefined) {
      var reader = new FileReader();

      reader.onload = function () {
        if (!self.panner) return;
        ac.decodeAudioData(reader.result, function (buff) {
          if (!self.panner) return;
          self.buffer = buff;
          self.panner.inputChannels(buff.numberOfChannels);

          if (callback) {
            callback(self);
          }
        });
      };

      reader.onerror = function (e) {
        if (!self.panner) return;

        if (onerror) {
          onerror(e);
        }
      };

      reader.readAsArrayBuffer(this.file);
    }
  }; 


  p5.SoundFile.prototype._updateProgress = function (evt) {
    if (evt.lengthComputable) {
      var percentComplete = evt.loaded / evt.total * 0.99;

      this._whileLoading(percentComplete, evt); 

    } else {
      this._whileLoading('size unknown');
    }
  };
  /**
   *  Returns true if the sound file finished loading successfully.
   *
   *  @method  isLoaded
   *  @for p5.SoundFile
   *  @return {Boolean}
   */


  p5.SoundFile.prototype.isLoaded = function () {
    if (this.buffer) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * Play the p5.SoundFile
   *
   * @method play
   * @for p5.SoundFile
   * @param {Number} [startTime]            (optional) schedule playback to start (in seconds from now).
   * @param {Number} [rate]             (optional) playback rate
   * @param {Number} [amp]              (optional) amplitude (volume)
   *                                     of playback
   * @param {Number} [cueStart]        (optional) cue start time in seconds
   * @param {Number} [duration]          (optional) duration of playback in seconds
   */


  p5.SoundFile.prototype.play = function (startTime, rate, amp, _cueStart, duration) {
    if (!this.output) {
      console.warn('SoundFile.play() called after dispose');
      return;
    }

    var now = p5sound.audiocontext.currentTime;
    var cueStart, cueEnd;
    var time = startTime || 0;

    if (time < 0) {
      time = 0;
    }

    time = time + now;

    if (typeof rate !== 'undefined') {
      this.rate(rate);
    }

    if (typeof amp !== 'undefined') {
      this.setVolume(amp);
    } 


    if (this.buffer) {
      this._pauseTime = 0; 

      if (this.mode === 'restart' && this.buffer && this.bufferSourceNode) {
        this.bufferSourceNode.stop(time);

        this._counterNode.stop(time);
      } 


      if (this.mode === 'untildone' && this.isPlaying()) {
        return;
      } 


      this.bufferSourceNode = this._initSourceNode(); 

      delete this._counterNode;
      this._counterNode = this._initCounterNode();

      if (_cueStart) {
        if (_cueStart >= 0 && _cueStart < this.buffer.duration) {
          cueStart = _cueStart;
        } else {
          throw 'start time out of range';
        }
      } else {
        cueStart = 0;
      }

      if (duration) {
        duration = duration <= this.buffer.duration - cueStart ? duration : this.buffer.duration;
      } 


      if (this._paused) {
        this.bufferSourceNode.start(time, this.pauseTime, duration);

        this._counterNode.start(time, this.pauseTime, duration);
      } else {
        this.bufferSourceNode.start(time, cueStart, duration);

        this._counterNode.start(time, cueStart, duration);
      }

      this._playing = true;
      this._paused = false; 

      this.bufferSourceNodes.push(this.bufferSourceNode);
      this.bufferSourceNode._arrayIndex = this.bufferSourceNodes.length - 1;
      this.bufferSourceNode.addEventListener('ended', this._clearOnEnd);
    } 
    else {
        throw 'not ready to play file, buffer has yet to load. Try preload()';
      } 


    this.bufferSourceNode.loop = this._looping;
    this._counterNode.loop = this._looping;

    if (this._looping === true) {
      cueEnd = duration ? duration : cueStart - 0.000000000000001;
      this.bufferSourceNode.loopStart = cueStart;
      this.bufferSourceNode.loopEnd = cueEnd;
      this._counterNode.loopStart = cueStart;
      this._counterNode.loopEnd = cueEnd;
    }
  };
  /**
   *  p5.SoundFile has two play modes: <code>restart</code> and
   *  <code>sustain</code>. Play Mode determines what happens to a
   *  p5.SoundFile if it is triggered while in the middle of playback.
   *  In sustain mode, playback will continue simultaneous to the
   *  new playback. In restart mode, play() will stop playback
   *  and start over. With untilDone, a sound will play only if it's
   *  not already playing. Sustain is the default mode.
   *
   *  @method  playMode
   *  @for p5.SoundFile
   *  @param  {String} str 'restart' or 'sustain' or 'untilDone'
   *  @example
   *  <div><code>
   *  let mySound;
   *  function preload(){
   *    mySound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    noFill();
   *    rect(0, height/2, width - 1, height/2 - 1);
   *    rect(0, 0, width - 1, height/2);
   *    textAlign(CENTER, CENTER);
   *    fill(20);
   *    text('restart', width/2, 1 * height/4);
   *    text('sustain', width/2, 3 * height/4);
   *  }
   *  function canvasPressed() {
   *    if (mouseX < height/2) {
   *      mySound.playMode('restart');
   *    } else {
   *      mySound.playMode('sustain');
   *    }
   *    mySound.play();
   *  }
   *
   * </code></div>
   */


  p5.SoundFile.prototype.playMode = function (str) {
    var s = str.toLowerCase(); 

    if (s === 'restart' && this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length - 1; i++) {
        var now = p5sound.audiocontext.currentTime;
        this.bufferSourceNodes[i].stop(now);
      }
    } 


    if (s === 'restart' || s === 'sustain' || s === 'untildone') {
      this.mode = s;
    } else {
      throw 'Invalid play mode. Must be either "restart" or "sustain"';
    }
  };
  /**
   *  Pauses a file that is currently playing. If the file is not
   *  playing, then nothing will happen.
   *
   *  After pausing, .play() will resume from the paused
   *  position.
   *  If p5.SoundFile had been set to loop before it was paused,
   *  it will continue to loop after it is unpaused with .play().
   *
   *  @method pause
   *  @for p5.SoundFile
   *  @param {Number} [startTime] (optional) schedule event to occur
   *                               seconds from now
   *  @example
   *  <div><code>
   *  let soundFile;
   *  function preload() {
   *    soundFormats('ogg', 'mp3');
   *    soundFile = loadSound('assets/Damscray_-_Dancing_Tiger_02.mp3');
   *  }
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap to play, release to pause', 10, 20, width - 20);
   *  }
   *  function canvasPressed() {
   *    soundFile.loop();
   *    background(0, 200, 50);
   *  }
   *  function mouseReleased() {
   *    soundFile.pause();
   *    background(220);
   *  }
   *  </code>
   *  </div>
   */


  p5.SoundFile.prototype.pause = function (startTime) {
    var now = p5sound.audiocontext.currentTime;
    var time = startTime || 0;
    var pTime = time + now;

    if (this.isPlaying() && this.buffer && this.bufferSourceNode) {
      this._paused = true;
      this._playing = false;
      this.pauseTime = this.currentTime();
      this.bufferSourceNode.stop(pTime);

      this._counterNode.stop(pTime);

      this._pauseTime = this.currentTime(); 
    } else {
      this._pauseTime = 0;
    }
  };
  /**
   * Loop the p5.SoundFile. Accepts optional parameters to set the
   * playback rate, playback volume, loopStart, loopEnd.
   *
   * @method loop
   * @for p5.SoundFile
   * @param {Number} [startTime] (optional) schedule event to occur
   *                             seconds from now
   * @param {Number} [rate]        (optional) playback rate
   * @param {Number} [amp]         (optional) playback volume
   * @param {Number} [cueLoopStart] (optional) startTime in seconds
   * @param {Number} [duration]  (optional) loop duration in seconds
   * @example
   *  <div><code>
   *  let soundFile;
   *  let loopStart = 0.5;
   *  let loopDuration = 0.2;
   *  function preload() {
   *    soundFormats('ogg', 'mp3');
   *    soundFile = loadSound('assets/Damscray_-_Dancing_Tiger_02.mp3');
   *  }
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap to play, release to pause', 10, 20, width - 20);
   *  }
   *  function canvasPressed() {
   *    soundFile.loop();
   *    background(0, 200, 50);
   *  }
   *  function mouseReleased() {
   *    soundFile.pause();
   *    background(220);
   *  }
   *  </code>
   *  </div>
   */


  p5.SoundFile.prototype.loop = function (startTime, rate, amp, loopStart, duration) {
    this._looping = true;
    this.play(startTime, rate, amp, loopStart, duration);
  };
  /**
   * Set a p5.SoundFile's looping flag to true or false. If the sound
   * is currently playing, this change will take effect when it
   * reaches the end of the current playback.
   *
   * @method setLoop
   * @for p5.SoundFile
   * @param {Boolean} Boolean   set looping to true or false
   */


  p5.SoundFile.prototype.setLoop = function (bool) {
    if (bool === true) {
      this._looping = true;
    } else if (bool === false) {
      this._looping = false;
    } else {
      throw 'Error: setLoop accepts either true or false';
    }

    if (this.bufferSourceNode) {
      this.bufferSourceNode.loop = this._looping;
      this._counterNode.loop = this._looping;
    }
  };
  /**
   * Returns 'true' if a p5.SoundFile is currently looping and playing, 'false' if not.
   *
   * @method isLooping
   * @for p5.SoundFile
   * @return {Boolean}
   */


  p5.SoundFile.prototype.isLooping = function () {
    if (!this.bufferSourceNode) {
      return false;
    }

    if (this._looping === true && this.isPlaying() === true) {
      return true;
    }

    return false;
  };
  /**
   *  Returns true if a p5.SoundFile is playing, false if not (i.e.
   *  paused or stopped).
   *
   *  @method isPlaying
   *  @for p5.SoundFile
   *  @return {Boolean}
   */


  p5.SoundFile.prototype.isPlaying = function () {
    return this._playing;
  };
  /**
   *  Returns true if a p5.SoundFile is paused, false if not (i.e.
   *  playing or stopped).
   *
   *  @method  isPaused
   *  @for p5.SoundFile
   *  @return {Boolean}
   */


  p5.SoundFile.prototype.isPaused = function () {
    return this._paused;
  };
  /**
   * Stop soundfile playback.
   *
   * @method stop
   * @for p5.SoundFile
   * @param {Number} [startTime] (optional) schedule event to occur
   *                             in seconds from now
   */


  p5.SoundFile.prototype.stop = function (timeFromNow) {
    var time = timeFromNow || 0;

    if (this.mode === 'sustain' || this.mode === 'untildone') {
      this.stopAll(time);
      this._playing = false;
      this.pauseTime = 0;
      this._paused = false;
    } else if (this.buffer && this.bufferSourceNode) {
      var now = p5sound.audiocontext.currentTime;
      var t = time || 0;
      this.pauseTime = 0;
      this.bufferSourceNode.stop(now + t);

      this._counterNode.stop(now + t);

      this._playing = false;
      this._paused = false;
    }
  };
  /**
   *  Stop playback on all of this soundfile's sources.
   *  @private
   */


  p5.SoundFile.prototype.stopAll = function (_time) {
    var now = p5sound.audiocontext.currentTime;
    var time = _time || 0;

    if (this.buffer && this.bufferSourceNode) {
      for (var i in this.bufferSourceNodes) {
        var bufferSourceNode = this.bufferSourceNodes[i];

        if (!!bufferSourceNode) {
          try {
            bufferSourceNode.stop(now + time);
          } catch (e) {
          }
        }
      }

      this._counterNode.stop(now + time);

      this._onended(this);
    }
  };
  /**
   *  Multiply the output volume (amplitude) of a sound file
   *  between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Envelope class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  @method  setVolume
   *  @for p5.SoundFile
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */


  p5.SoundFile.prototype.setVolume = function (vol, _rampTime, _tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = _rampTime || 0;
      var tFromNow = _tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = this.output.gain.value;
      this.output.gain.cancelScheduledValues(now + tFromNow);
      this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(this.output.gain);
    } else {
      return this.output.gain;
    }
  }; 


  p5.SoundFile.prototype.amp = p5.SoundFile.prototype.setVolume; 

  p5.SoundFile.prototype.fade = p5.SoundFile.prototype.setVolume;

  p5.SoundFile.prototype.getVolume = function () {
    return this.output.gain.value;
  };
  /**
   * Set the stereo panning of a p5.sound object to
   * a floating point number between -1.0 (left) and 1.0 (right).
   * Default is 0.0 (center).
   *
   * @method pan
   * @for p5.SoundFile
   * @param {Number} [panValue]     Set the stereo panner
   * @param {Number} [timeFromNow]  schedule this event to happen
   *                                 seconds from now
   * @example
   * <div><code>
   *  let ballX = 0;
   *  let soundFile;
   *
   *  function preload() {
   *    soundFormats('ogg', 'mp3');
   *    soundFile = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function draw() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    ballX = constrain(mouseX, 0, width);
   *    ellipse(ballX, height/2, 20, 20);
   *  }
   *
   *  function canvasPressed(){
   *    // map the ball's x location to a panning degree
   *    // between -1.0 (left) and 1.0 (right)
   *    let panning = map(ballX, 0., width,-1.0, 1.0);
   *    soundFile.pan(panning);
   *    soundFile.play();
   *  }
   *  </div></code>
   */


  p5.SoundFile.prototype.pan = function (pval, tFromNow) {
    this.panPosition = pval;
    this.panner.pan(pval, tFromNow);
  };
  /**
   * Returns the current stereo pan position (-1.0 to 1.0)
   *
   * @method getPan
   * @for p5.SoundFile
   * @return {Number} Returns the stereo pan setting of the Oscillator
   *                          as a number between -1.0 (left) and 1.0 (right).
   *                          0.0 is center and default.
   */


  p5.SoundFile.prototype.getPan = function () {
    return this.panPosition;
  };
  /**
   *  Set the playback rate of a sound file. Will change the speed and the pitch.
   *  Values less than zero will reverse the audio buffer.
   *
   *  @method rate
   *  @for p5.SoundFile
   *  @param {Number} [playbackRate]     Set the playback rate. 1.0 is normal,
   *                                     .5 is half-speed, 2.0 is twice as fast.
   *                                     Values less than zero play backwards.
   *  @example
   *  <div><code>
   *  let mySound;
   *
   *  function preload() {
   *    mySound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *  }
   *  function canvasPressed() {
   *    mySound.loop();
   *  }
   *  function mouseReleased() {
   *    mySound.pause();
   *  }
   *  function draw() {
   *    background(220);
   *
   *    // Set the rate to a range between 0.1 and 4
   *    // Changing the rate also alters the pitch
   *    let playbackRate = map(mouseY, 0.1, height, 2, 0);
   *    playbackRate = constrain(playbackRate, 0.01, 4);
   *    mySound.rate(playbackRate);
   *
   *    line(0, mouseY, width, mouseY);
   *    text('rate: ' + round(playbackRate * 100) + '%', 10, 20);
   *  }
   *
   * </code>
   * </div>
   *
   */


  p5.SoundFile.prototype.rate = function (playbackRate) {
    var reverse = false;

    if (typeof playbackRate === 'undefined') {
      return this.playbackRate;
    }

    this.playbackRate = playbackRate;

    if (playbackRate === 0) {
      playbackRate = 0.0000000000001;
    } else if (playbackRate < 0 && !this.reversed) {
      playbackRate = Math.abs(playbackRate);
      reverse = true;
    } else if (playbackRate > 0 && this.reversed) {
      reverse = true;
    }

    if (this.bufferSourceNode) {
      var now = p5sound.audiocontext.currentTime;
      this.bufferSourceNode.playbackRate.cancelScheduledValues(now);
      this.bufferSourceNode.playbackRate.linearRampToValueAtTime(Math.abs(playbackRate), now);

      this._counterNode.playbackRate.cancelScheduledValues(now);

      this._counterNode.playbackRate.linearRampToValueAtTime(Math.abs(playbackRate), now);
    }

    if (reverse) {
      this.reverseBuffer();
    }

    return this.playbackRate;
  }; 


  p5.SoundFile.prototype.setPitch = function (num) {
    var newPlaybackRate = midiToFreq(num) / midiToFreq(60);
    this.rate(newPlaybackRate);
  };

  p5.SoundFile.prototype.getPlaybackRate = function () {
    return this.playbackRate;
  };
  /**
   * Returns the duration of a sound file in seconds.
   *
   * @method duration
   * @for p5.SoundFile
   * @return {Number} The duration of the soundFile in seconds.
   */


  p5.SoundFile.prototype.duration = function () {
    if (this.buffer) {
      return this.buffer.duration;
    } else {
      return 0;
    }
  };
  /**
   * Return the current position of the p5.SoundFile playhead, in seconds.
   * Time is relative to the normal buffer direction, so if `reverseBuffer`
   * has been called, currentTime will count backwards.
   *
   * @method currentTime
   * @for p5.SoundFile
   * @return {Number}   currentTime of the soundFile in seconds.
   */


  p5.SoundFile.prototype.currentTime = function () {
    return this.reversed ? Math.abs(this._lastPos - this.buffer.length) / ac.sampleRate : this._lastPos / ac.sampleRate;
  };
  /**
   * Move the playhead of a soundfile that is currently playing to a
   * new position and a new duration, in seconds.
   * If none are given, will reset the file to play entire duration
   * from start to finish. To set the position of a soundfile that is
   * not currently playing, use the `play` or `loop` methods.
   *
   * @method jump
   * @for p5.SoundFile
   * @param {Number} cueTime    cueTime of the soundFile in seconds.
   * @param {Number} duration    duration in seconds.
   */


  p5.SoundFile.prototype.jump = function (cueTime, duration) {
    if (cueTime < 0 || cueTime > this.buffer.duration) {
      throw 'jump time out of range';
    }

    if (duration > this.buffer.duration - cueTime) {
      throw 'end time out of range';
    }

    var cTime = cueTime || 0;
    var dur = duration || undefined;

    if (this.isPlaying()) {
      this.stop(0);
      this.play(0, this.playbackRate, this.output.gain.value, cTime, dur);
    }
  };
  /**
    * Return the number of channels in a sound file.
    * For example, Mono = 1, Stereo = 2.
    *
    * @method channels
    * @for p5.SoundFile
    * @return {Number} [channels]
    */


  p5.SoundFile.prototype.channels = function () {
    return this.buffer.numberOfChannels;
  };
  /**
    * Return the sample rate of the sound file.
    *
    * @method sampleRate
    * @for p5.SoundFile
    * @return {Number} [sampleRate]
    */


  p5.SoundFile.prototype.sampleRate = function () {
    return this.buffer.sampleRate;
  };
  /**
    * Return the number of samples in a sound file.
    * Equal to sampleRate * duration.
    *
    * @method frames
    * @for p5.SoundFile
    * @return {Number} [sampleCount]
    */


  p5.SoundFile.prototype.frames = function () {
    return this.buffer.length;
  };
  /**
   * Returns an array of amplitude peaks in a p5.SoundFile that can be
   * used to draw a static waveform. Scans through the p5.SoundFile's
   * audio buffer to find the greatest amplitudes. Accepts one
   * parameter, 'length', which determines size of the array.
   * Larger arrays result in more precise waveform visualizations.
   *
   * Inspired by Wavesurfer.js.
   *
   * @method  getPeaks
   * @for p5.SoundFile
   * @params {Number} [length] length is the size of the returned array.
   *                          Larger length results in more precision.
   *                          Defaults to 5*width of the browser window.
   * @returns {Float32Array} Array of peaks.
   */


  p5.SoundFile.prototype.getPeaks = function (length) {
    if (this.buffer) {
      if (!length) {
        length = window.width * 5;
      }

      if (this.buffer) {
        var buffer = this.buffer;
        var sampleSize = buffer.length / length;
        var sampleStep = ~~(sampleSize / 10) || 1;
        var channels = buffer.numberOfChannels;
        var peaks = new Float32Array(Math.round(length));

        for (var c = 0; c < channels; c++) {
          var chan = buffer.getChannelData(c);

          for (var i = 0; i < length; i++) {
            var start = ~~(i * sampleSize);
            var end = ~~(start + sampleSize);
            var max = 0;

            for (var j = start; j < end; j += sampleStep) {
              var value = chan[j];

              if (value > max) {
                max = value; 
              } else if (-value > max) {
                max = value;
              }
            }

            if (c === 0 || Math.abs(max) > peaks[i]) {
              peaks[i] = max;
            }
          }
        }

        return peaks;
      }
    } else {
      throw 'Cannot load peaks yet, buffer is not loaded';
    }
  };
  /**
   *  Reverses the p5.SoundFile's buffer source.
   *  Playback must be handled separately (see example).
   *
   *  @method  reverseBuffer
   *  @for p5.SoundFile
   *  @example
   *  <div><code>
   *  let drum;
   *  function preload() {
   *    drum = loadSound('assets/drum.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function canvasPressed() {
   *    drum.stop();
   *    drum.reverseBuffer();
   *    drum.play();
   *  }
   * </code>
   * </div>
   */


  p5.SoundFile.prototype.reverseBuffer = function () {
    if (this.buffer) {
      var currentPos = this._lastPos / ac.sampleRate;
      var curVol = this.getVolume();
      this.setVolume(0, 0.001);
      var numChannels = this.buffer.numberOfChannels;

      for (var i = 0; i < numChannels; i++) {
        this.buffer.getChannelData(i).reverse();
      } 


      this.reversed = !this.reversed;

      if (this.isPlaying() && currentPos) {
        this.jump(this.duration() - currentPos);
      }

      this.setVolume(curVol, 0.001);
    } else {
      throw 'SoundFile is not done loading';
    }
  };
  /**
   *  Schedule an event to be called when the soundfile
   *  reaches the end of a buffer. If the soundfile is
   *  playing through once, this will be called when it
   *  ends. If it is looping, it will be called when
   *  stop is called.
   *
   *  @method  onended
   *  @for p5.SoundFile
   *  @param  {Function} callback function to call when the
   *                              soundfile has ended.
   */


  p5.SoundFile.prototype.onended = function (callback) {
    this._onended = callback;
    return this;
  };

  p5.SoundFile.prototype.add = function () {
  };

  p5.SoundFile.prototype.dispose = function () {
    var now = p5sound.audiocontext.currentTime; 

    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.stop(now);

    if (this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length - 1; i++) {
        if (this.bufferSourceNodes[i] !== null) {
          this.bufferSourceNodes[i].disconnect();

          try {
            this.bufferSourceNodes[i].stop(now);
          } catch (e) {
            console.warn('no buffer source node to dispose');
          }

          this.bufferSourceNodes[i] = null;
        }
      }

      if (this.isPlaying()) {
        try {
          this._counterNode.stop(now);
        } catch (e) {
          console.log(e);
        }

        this._counterNode = null;
      }
    }

    if (this.output) {
      this.output.disconnect();
      this.output = null;
    }

    if (this.panner) {
      this.panner.disconnect();
      this.panner = null;
    }
  };
  /**
   * Connects the output of a p5sound object to input of another
   * p5.sound object. For example, you may connect a p5.SoundFile to an
   * FFT or an Effect. If no parameter is given, it will connect to
   * the master output. Most p5sound objects connect to the master
   * output when they are created.
   *
   * @method connect
   * @for p5.SoundFile
   * @param {Object} [object] Audio object that accepts an input
   */


  p5.SoundFile.prototype.connect = function (unit) {
    if (!unit) {
      this.panner.connect(p5sound.input);
    } else {
      if (unit.hasOwnProperty('input')) {
        this.panner.connect(unit.input);
      } else {
        this.panner.connect(unit);
      }
    }
  };
  /**
   * Disconnects the output of this p5sound object.
   *
   * @method disconnect
   * @for p5.SoundFile
   */


  p5.SoundFile.prototype.disconnect = function () {
    if (this.panner) {
      this.panner.disconnect();
    }
  };
  /**
   */


  p5.SoundFile.prototype.getLevel = function () {
    console.warn('p5.SoundFile.getLevel has been removed from the library. Use p5.Amplitude instead');
  };
  /**
   *  Reset the source for this SoundFile to a
   *  new path (URL).
   *
   *  @method  setPath
   *  @for p5.SoundFile
   *  @param {String}   path     path to audio file
   *  @param {Function} callback Callback
   */


  p5.SoundFile.prototype.setPath = function (p, callback) {
    var path = p5.prototype._checkFileFormats(p);

    this.url = path;
    this.load(callback);
  };
  /**
   *  Replace the current Audio Buffer with a new Buffer.
   *
   *  @method setBuffer
   *  @for p5.SoundFile
   *  @param {Array} buf Array of Float32 Array(s). 2 Float32 Arrays
   *                     will create a stereo source. 1 will create
   *                     a mono source.
   */


  p5.SoundFile.prototype.setBuffer = function (buf) {
    var numChannels = buf.length;
    var size = buf[0].length;
    var newBuffer = ac.createBuffer(numChannels, size, ac.sampleRate);

    if (!(buf[0] instanceof Float32Array)) {
      buf[0] = new Float32Array(buf[0]);
    }

    for (var channelNum = 0; channelNum < numChannels; channelNum++) {
      var channel = newBuffer.getChannelData(channelNum);
      channel.set(buf[channelNum]);
    }

    this.buffer = newBuffer; 

    this.panner.inputChannels(numChannels);
  }; 


  var _createCounterBuffer = function _createCounterBuffer(buffer) {
    var len = buffer.length;
    var audioBuf = ac.createBuffer(1, buffer.length, ac.sampleRate);
    var arrayBuffer = audioBuf.getChannelData(0);

    for (var index = 0; index < len; index++) {
      arrayBuffer[index] = index;
    }

    return audioBuf;
  }; 


  p5.SoundFile.prototype._initCounterNode = function () {
    var _this = this;

    var self = this;
    var now = ac.currentTime;
    var cNode = ac.createBufferSource();
    var workletBufferSize = safeBufferSize(256); 

    if (self._workletNode) {
      self._workletNode.disconnect();

      delete self._workletNode;
    }

    self._workletNode = new AudioWorkletNode(ac, processorNames.soundFileProcessor, {
      processorOptions: {
        bufferSize: workletBufferSize
      }
    });

    self._workletNode.port.onmessage = function (event) {
      if (event.data.name === 'position') {
        if (event.data.position === 0) {
          return;
        }

        _this._lastPos = event.data.position; 

        _this._onTimeUpdate(self._lastPos);
      }
    }; 


    cNode.buffer = _createCounterBuffer(self.buffer);
    cNode.playbackRate.setValueAtTime(self.playbackRate, now);
    cNode.connect(self._workletNode);

    self._workletNode.connect(p5.soundOut._silentNode);

    return cNode;
  }; 


  p5.SoundFile.prototype._initSourceNode = function () {
    var bufferSourceNode = ac.createBufferSource();
    bufferSourceNode.buffer = this.buffer;
    bufferSourceNode.playbackRate.value = this.playbackRate;
    bufferSourceNode.connect(this.output);
    return bufferSourceNode;
  };
  /**
   *  processPeaks returns an array of timestamps where it thinks there is a beat.
   *
   *  This is an asynchronous function that processes the soundfile in an offline audio context,
   *  and sends the results to your callback function.
   *
   *  The process involves running the soundfile through a lowpass filter, and finding all of the
   *  peaks above the initial threshold. If the total number of peaks are below the minimum number of peaks,
   *  it decreases the threshold and re-runs the analysis until either minPeaks or minThreshold are reached.
   *
   *  @method  processPeaks
   *  @for p5.SoundFile
   *  @param  {Function} callback       a function to call once this data is returned
   *  @param  {Number}   [initThreshold] initial threshold defaults to 0.9
   *  @param  {Number}   [minThreshold]   minimum threshold defaults to 0.22
   *  @param  {Number}   [minPeaks]       minimum number of peaks defaults to 200
   *  @return {Array}                  Array of timestamped peaks
   */


  p5.SoundFile.prototype.processPeaks = function (callback, _initThreshold, _minThreshold, _minPeaks) {
    var bufLen = this.buffer.length;
    var sampleRate = this.buffer.sampleRate;
    var buffer = this.buffer;
    var allPeaks = [];
    var initialThreshold = _initThreshold || 0.9,
        threshold = initialThreshold,
        minThreshold = _minThreshold || 0.22,
        minPeaks = _minPeaks || 200; 

    var offlineContext = new window.OfflineAudioContext(1, bufLen, sampleRate); 

    var source = offlineContext.createBufferSource();
    source.buffer = buffer; 

    var filter = offlineContext.createBiquadFilter();
    filter.type = 'lowpass';
    source.connect(filter);
    filter.connect(offlineContext.destination); 

    source.start(0);
    offlineContext.startRendering(); 

    offlineContext.oncomplete = function (e) {
      if (!self.panner) return;
      var filteredBuffer = e.renderedBuffer;
      var bufferData = filteredBuffer.getChannelData(0); 

      do {
        allPeaks = getPeaksAtThreshold(bufferData, threshold);
        threshold -= 0.005;
      } while (Object.keys(allPeaks).length < minPeaks && threshold >= minThreshold); 


      var intervalCounts = countIntervalsBetweenNearbyPeaks(allPeaks); 

      var groups = groupNeighborsByTempo(intervalCounts, filteredBuffer.sampleRate); 

      var topTempos = groups.sort(function (intA, intB) {
        return intB.count - intA.count;
      }).splice(0, 5); 

      this.tempo = topTempos[0].tempo; 

      var bpmVariance = 5;
      var tempoPeaks = getPeaksAtTopTempo(allPeaks, topTempos[0].tempo, filteredBuffer.sampleRate, bpmVariance);
      callback(tempoPeaks);
    };
  }; 


  var Peak = function Peak(amp, i) {
    this.sampleIndex = i;
    this.amplitude = amp;
    this.tempos = [];
    this.intervals = [];
  }; 


  function getPeaksAtThreshold(data, threshold) {
    var peaksObj = {};
    var length = data.length;

    for (var i = 0; i < length; i++) {
      if (data[i] > threshold) {
        var amp = data[i];
        var peak = new Peak(amp, i);
        peaksObj[i] = peak; 

        i += 6000;
      }

      i++;
    }

    return peaksObj;
  } 


  function countIntervalsBetweenNearbyPeaks(peaksObj) {
    var intervalCounts = [];
    var peaksArray = Object.keys(peaksObj).sort();

    for (var index = 0; index < peaksArray.length; index++) {
      for (var i = 0; i < 10; i++) {
        var startPeak = peaksObj[peaksArray[index]];
        var endPeak = peaksObj[peaksArray[index + i]];

        if (startPeak && endPeak) {
          var startPos = startPeak.sampleIndex;
          var endPos = endPeak.sampleIndex;
          var interval = endPos - startPos; 

          if (interval > 0) {
            startPeak.intervals.push(interval);
          } 


          var foundInterval = intervalCounts.some(function (intervalCount) {
            if (intervalCount.interval === interval) {
              intervalCount.count++;
              return intervalCount;
            }
          }); 

          if (!foundInterval) {
            intervalCounts.push({
              interval: interval,
              count: 1
            });
          }
        }
      }
    }

    return intervalCounts;
  } 


  function groupNeighborsByTempo(intervalCounts, sampleRate) {
    var tempoCounts = [];
    intervalCounts.forEach(function (intervalCount) {
      try {
        var theoreticalTempo = Math.abs(60 / (intervalCount.interval / sampleRate));
        theoreticalTempo = mapTempo(theoreticalTempo);
        var foundTempo = tempoCounts.some(function (tempoCount) {
          if (tempoCount.tempo === theoreticalTempo) return tempoCount.count += intervalCount.count;
        });

        if (!foundTempo) {
          if (isNaN(theoreticalTempo)) {
            return;
          }

          tempoCounts.push({
            tempo: Math.round(theoreticalTempo),
            count: intervalCount.count
          });
        }
      } catch (e) {
        throw e;
      }
    });
    return tempoCounts;
  } 


  function getPeaksAtTopTempo(peaksObj, tempo, sampleRate, bpmVariance) {
    var peaksAtTopTempo = [];
    var peaksArray = Object.keys(peaksObj).sort(); 

    for (var i = 0; i < peaksArray.length; i++) {
      var key = peaksArray[i];
      var peak = peaksObj[key];

      for (var j = 0; j < peak.intervals.length; j++) {
        var intervalBPM = Math.round(Math.abs(60 / (peak.intervals[j] / sampleRate)));
        intervalBPM = mapTempo(intervalBPM);

        if (Math.abs(intervalBPM - tempo) < bpmVariance) {
          peaksAtTopTempo.push(peak.sampleIndex / sampleRate);
        }
      }
    } 


    peaksAtTopTempo = peaksAtTopTempo.filter(function (peakTime, index, arr) {
      var dif = arr[index + 1] - peakTime;

      if (dif > 0.01) {
        return true;
      }
    });
    return peaksAtTopTempo;
  } 


  function mapTempo(theoreticalTempo) {
    if (!isFinite(theoreticalTempo) || theoreticalTempo === 0) {
      return;
    } 


    while (theoreticalTempo < 90) {
      theoreticalTempo *= 2;
    }

    while (theoreticalTempo > 180 && theoreticalTempo > 90) {
      theoreticalTempo /= 2;
    }

    return theoreticalTempo;
  }


  var Cue = function Cue(callback, time, id, val) {
    this.callback = callback;
    this.time = time;
    this.id = id;
    this.val = val;
  };
  /**
   *  Schedule events to trigger every time a MediaElement
   *  (audio/video) reaches a playback cue point.
   *
   *  Accepts a callback function, a time (in seconds) at which to trigger
   *  the callback, and an optional parameter for the callback.
   *
   *  Time will be passed as the first parameter to the callback function,
   *  and param will be the second parameter.
   *
   *
   *  @method  addCue
   *  @for p5.SoundFile
   *  @param {Number}   time     Time in seconds, relative to this media
   *                             element's playback. For example, to trigger
   *                             an event every time playback reaches two
   *                             seconds, pass in the number 2. This will be
   *                             passed as the first parameter to
   *                             the callback function.
   *  @param {Function} callback Name of a function that will be
   *                             called at the given time. The callback will
   *                             receive time and (optionally) param as its
   *                             two parameters.
   *  @param {Object} [value]    An object to be passed as the
   *                             second parameter to the
   *                             callback function.
   *  @return {Number} id ID of this cue,
   *                      useful for removeCue(id)
   *  @example
   *  <div><code>
   *  let mySound;
   *  function preload() {
   *    mySound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap to play', 10, 20);
   *
   *    // schedule calls to changeText
   *    mySound.addCue(0, changeText, "hello" );
   *    mySound.addCue(0.5, changeText, "hello," );
   *    mySound.addCue(1, changeText, "hello, p5!");
   *    mySound.addCue(1.5, changeText, "hello, p5!!");
   *    mySound.addCue(2, changeText, "hello, p5!!!!!");
   *  }
   *
   *  function changeText(val) {
   *    background(220);
   *    text(val, 10, 20);
   *  }
   *
   *  function canvasPressed() {
   *    mySound.play();
   *  }
   *  </code></div>
   */


  p5.SoundFile.prototype.addCue = function (time, callback, val) {
    var id = this._cueIDCounter++;
    var cue = new Cue(callback, time, id, val);

    this._cues.push(cue); 


    return id;
  };
  /**
   *  Remove a callback based on its ID. The ID is returned by the
   *  addCue method.
   *
   *  @method removeCue
   *  @for p5.SoundFile
   *  @param  {Number} id ID of the cue, as returned by addCue
   */


  p5.SoundFile.prototype.removeCue = function (id) {
    var cueLength = this._cues.length;

    for (var i = 0; i < cueLength; i++) {
      var cue = this._cues[i];

      if (cue.id === id) {
        this._cues.splice(i, 1);

        break;
      }
    }

    if (this._cues.length === 0) {
    }
  };
  /**
   *  Remove all of the callbacks that had originally been scheduled
   *  via the addCue method.
   *
   *  @method  clearCues
   */


  p5.SoundFile.prototype.clearCues = function () {
    this._cues = []; 
  }; 


  p5.SoundFile.prototype._onTimeUpdate = function (position) {
    var playbackTime = position / this.buffer.sampleRate;
    var cueLength = this._cues.length;

    for (var i = 0; i < cueLength; i++) {
      var cue = this._cues[i];
      var callbackTime = cue.time;
      var val = cue.val;

      if (~~this._prevUpdateTime <= callbackTime && callbackTime <= playbackTime) {
        cue.callback(val);
      }
    }

    this._prevUpdateTime = playbackTime;
  };
  /**
   * Save a p5.SoundFile as a .wav file. The browser will prompt the user
   * to download the file to their device. To upload a file to a server, see
   * <a href="/docs/reference/#/p5.SoundFile/getBlob">getBlob</a>
   *
   * @method save
   * @for p5.SoundFile
   * @param  {String} [fileName]      name of the resulting .wav file.
   * @example
   *  <div><code>
   *  let mySound;
   *  function preload() {
   *    mySound = loadSound('assets/doorbell.mp3');
   *  }
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap to download', 10, 20);
   *  }
   *
   *  function canvasPressed() {
   *    mySound.save('my cool filename');
   *  }
   * </code></div>
   */


  p5.SoundFile.prototype.save = function (fileName) {
    p5.prototype.saveSound(this, fileName, 'wav');
  };
  /**
   * This method is useful for sending a SoundFile to a server. It returns the
   * .wav-encoded audio data as a "<a target="_blank" title="Blob reference at
   * MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">Blob</a>".
   * A Blob is a file-like data object that can be uploaded to a server
   * with an <a href="/docs/reference/#/p5/httpDo">http</a> request. We'll
   * use the `httpDo` options object to send a POST request with some
   * specific options: we encode the request as `multipart/form-data`,
   * and attach the blob as one of the form values using `FormData`.
   *
   *
   * @method getBlob
   * @for p5.SoundFile
   * @returns {Blob} A file-like data object
   * @example
   *  <div><code>
   *  function preload() {
   *    mySound = loadSound('assets/doorbell.mp3');
   *  }
   *
   *  function setup() {
   *    noCanvas();
   *    let soundBlob = mySound.getBlob();
   *
   *    // Now we can send the blob to a server...
   *    let serverUrl = 'https://jsonplaceholder.typicode.com/posts';
   *    let httpRequestOptions = {
   *      method: 'POST',
   *      body: new FormData().append('soundBlob', soundBlob),
   *      headers: new Headers({
   *        'Content-Type': 'multipart/form-data'
   *      })
   *    };
   *    httpDo(serverUrl, httpRequestOptions);
   *
   *    // We can also create an `ObjectURL` pointing to the Blob
   *    let blobUrl = URL.createObjectURL(soundBlob);
   *
   *    // The `<Audio>` Element accepts Object URL's
   *    createAudio(blobUrl).showControls();
   *
   *    createDiv();
   *
   *    // The ObjectURL exists as long as this tab is open
   *    let input = createInput(blobUrl);
   *    input.attribute('readonly', true);
   *    input.mouseClicked(function() { input.elt.select() });
   *  }
   *
   * </code></div>
   */


  p5.SoundFile.prototype.getBlob = function () {
    var dataView = convertToWav(this.buffer);
    return new Blob([dataView], {
      type: 'audio/wav'
    });
  }; 


  function _clearOnEnd(e) {
    var thisBufferSourceNode = e.target;
    var soundFile = this; 

    thisBufferSourceNode._playing = false;
    thisBufferSourceNode.removeEventListener('ended', soundFile._clearOnEnd); 

    soundFile._onended(soundFile); 


    soundFile.bufferSourceNodes.map(function (_, i) {
      return i;
    }).reverse().forEach(function (i) {
      var n = soundFile.bufferSourceNodes[i];

      if (n._playing === false) {
        soundFile.bufferSourceNodes.splice(i, 1);
      }
    });

    if (soundFile.bufferSourceNodes.length === 0) {
      soundFile._playing = false;
    }
  }
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var _require = __webpack_require__(6),
      safeBufferSize = _require.safeBufferSize;

  var processorNames = __webpack_require__(10);
  /**
   *  Amplitude measures volume between 0.0 and 1.0.
   *  Listens to all p5sound by default, or use setInput()
   *  to listen to a specific sound source. Accepts an optional
   *  smoothing value, which defaults to 0.
   *
   *  @class p5.Amplitude
   *  @constructor
   *  @param {Number} [smoothing] between 0.0 and .999 to smooth
   *                             amplitude readings (defaults to 0)
   *  @example
   *  <div><code>
   *  let sound, amplitude;
   *
   *  function preload(){
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *  function setup() {
   *    let cnv = createCanvas(100,100);
   *    cnv.mouseClicked(toggleSound);
   *    amplitude = new p5.Amplitude();
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap to play', 20, 20);
   *
   *    let level = amplitude.getLevel();
   *    let size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *
   *  function toggleSound() {
   *    if (sound.isPlaying() ){
   *      sound.stop();
   *    } else {
   *      sound.play();
   *    }
   *  }
   *
   *  </code></div>
   */


  p5.Amplitude = function (smoothing) {
    this.bufferSize = safeBufferSize(2048); 

    this.audiocontext = p5sound.audiocontext;
    this._workletNode = new AudioWorkletNode(this.audiocontext, processorNames.amplitudeProcessor, {
      outputChannelCount: [1],
      parameterData: {
        smoothing: smoothing || 0
      },
      processorOptions: {
        normalize: false,
        smoothing: smoothing || 0,
        numInputChannels: 2,
        bufferSize: this.bufferSize
      }
    });

    this._workletNode.port.onmessage = function (event) {
      if (event.data.name === 'amplitude') {
        this.volume = event.data.volume;
        this.volNorm = event.data.volNorm;
        this.stereoVol = event.data.stereoVol;
        this.stereoVolNorm = event.data.stereoVolNorm;
      }
    }.bind(this); 


    this.input = this._workletNode;
    this.output = this.audiocontext.createGain(); 

    this.volume = 0;
    this.volNorm = 0;
    this.stereoVol = [0, 0];
    this.stereoVolNorm = [0, 0];
    this.normalize = false;

    this._workletNode.connect(this.output);

    this.output.gain.value = 0; 

    this.output.connect(this.audiocontext.destination); 

    p5sound.meter.connect(this._workletNode); 

    p5sound.soundArray.push(this);
  };
  /**
   *  Connects to the p5sound instance (master output) by default.
   *  Optionally, you can pass in a specific source (i.e. a soundfile).
   *
   *  @method setInput
   *  @for p5.Amplitude
   *  @param {soundObject|undefined} [snd] set the sound source
   *                                       (optional, defaults to
   *                                       master output)
   *  @param {Number|undefined} [smoothing] a range between 0.0 and 1.0
   *                                        to smooth amplitude readings
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound1 = loadSound('assets/beat.mp3');
   *    sound2 = loadSound('assets/drum.mp3');
   *  }
   *  function setup(){
   *    cnv = createCanvas(100, 100);
   *    cnv.mouseClicked(toggleSound);
   *
   *    amplitude = new p5.Amplitude();
   *    amplitude.setInput(sound2);
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap to play', 20, 20);
   *
   *    let level = amplitude.getLevel();
   *    let size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *
   *  function toggleSound(){
   *    if (sound1.isPlaying() && sound2.isPlaying()) {
   *      sound1.stop();
   *      sound2.stop();
   *    } else {
   *      sound1.play();
   *      sound2.play();
   *    }
   *  }
   *  </code></div>
   */


  p5.Amplitude.prototype.setInput = function (source, smoothing) {
    p5sound.meter.disconnect();

    if (smoothing) {
      this._workletNode.parameters.get('smoothing').value = smoothing;
    } 


    if (source == null) {
      console.log('Amplitude input source is not ready! Connecting to master output instead');
      p5sound.meter.connect(this._workletNode);
    } 
    else if (source instanceof p5.Signal) {
        source.output.connect(this._workletNode);
      } 
      else if (source) {
          source.connect(this._workletNode);

          this._workletNode.disconnect();

          this._workletNode.connect(this.output);
        } 
        else {
            p5sound.meter.connect(this._workletNode);
          }
  };

  p5.Amplitude.prototype.connect = function (unit) {
    if (unit) {
      if (unit.hasOwnProperty('input')) {
        this.output.connect(unit.input);
      } else {
        this.output.connect(unit);
      }
    } else {
      this.output.connect(this.panner.connect(p5sound.input));
    }
  };

  p5.Amplitude.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };
  /**
   *  Returns a single Amplitude reading at the moment it is called.
   *  For continuous readings, run in the draw loop.
   *
   *  @method getLevel
   *  @for p5.Amplitude
   *  @param {Number} [channel] Optionally return only channel 0 (left) or 1 (right)
   *  @return {Number}       Amplitude as a number between 0.0 and 1.0
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mouseClicked(toggleSound);
   *    amplitude = new p5.Amplitude();
   *  }
   *
   *  function draw() {
   *    background(220, 150);
   *    textAlign(CENTER);
   *    text('tap to play', width/2, 20);
   *
   *    let level = amplitude.getLevel();
   *    let size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *
   *  function toggleSound(){
   *    if (sound.isPlaying()) {
   *      sound.stop();
   *    } else {
   *      sound.play();
   *    }
   *  }
   *  </code></div>
   */


  p5.Amplitude.prototype.getLevel = function (channel) {
    if (typeof channel !== 'undefined') {
      if (this.normalize) {
        return this.stereoVolNorm[channel];
      } else {
        return this.stereoVol[channel];
      }
    } else if (this.normalize) {
      return this.volNorm;
    } else {
      return this.volume;
    }
  };
  /**
   * Determines whether the results of Amplitude.process() will be
   * Normalized. To normalize, Amplitude finds the difference the
   * loudest reading it has processed and the maximum amplitude of
   * 1.0. Amplitude adds this difference to all values to produce
   * results that will reliably map between 0.0 and 1.0. However,
   * if a louder moment occurs, the amount that Normalize adds to
   * all the values will change. Accepts an optional boolean parameter
   * (true or false). Normalizing is off by default.
   *
   * @method toggleNormalize
   * @for p5.Amplitude
   * @param {boolean} [boolean] set normalize to true (1) or false (0)
   */


  p5.Amplitude.prototype.toggleNormalize = function (bool) {
    if (typeof bool === 'boolean') {
      this.normalize = bool;
    } else {
      this.normalize = !this.normalize;
    }

    this._workletNode.port.postMessage({
      name: 'toggleNormalize',
      normalize: this.normalize
    });
  };
  /**
   *  Smooth Amplitude analysis by averaging with the last analysis
   *  frame. Off by default.
   *
   *  @method smooth
   *  @for p5.Amplitude
   *  @param {Number} set smoothing from 0.0 <= 1
   */


  p5.Amplitude.prototype.smooth = function (s) {
    if (s >= 0 && s < 1) {
      this._workletNode.port.postMessage({
        name: 'smoothing',
        smoothing: s
      });
    } else {
      console.log('Error: smoothing must be between 0 and 1');
    }
  };

  p5.Amplitude.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.input) {
      this.input.disconnect();
      delete this.input;
    }

    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }

    this._workletNode.disconnect();

    delete this._workletNode;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);
  /**
   *  <p>FFT (Fast Fourier Transform) is an analysis algorithm that
   *  isolates individual
   *  <a href="https://en.wikipedia.org/wiki/Audio_frequency">
   *  audio frequencies</a> within a waveform.</p>
   *
   *  <p>Once instantiated, a p5.FFT object can return an array based on
   *  two types of analyses: <br> • <code>FFT.waveform()</code> computes
   *  amplitude values along the time domain. The array indices correspond
   *  to samples across a brief moment in time. Each value represents
   *  amplitude of the waveform at that sample of time.<br>
   *  • <code>FFT.analyze() </code> computes amplitude values along the
   *  frequency domain. The array indices correspond to frequencies (i.e.
   *  pitches), from the lowest to the highest that humans can hear. Each
   *  value represents amplitude at that slice of the frequency spectrum.
   *  Use with <code>getEnergy()</code> to measure amplitude at specific
   *  frequencies, or within a range of frequencies. </p>
   *
   *  <p>FFT analyzes a very short snapshot of sound called a sample
   *  buffer. It returns an array of amplitude measurements, referred
   *  to as <code>bins</code>. The array is 1024 bins long by default.
   *  You can change the bin array length, but it must be a power of 2
   *  between 16 and 1024 in order for the FFT algorithm to function
   *  correctly. The actual size of the FFT buffer is twice the
   *  number of bins, so given a standard sample rate, the buffer is
   *  2048/44100 seconds long.</p>
   *
   *
   *  @class p5.FFT
   *  @constructor
   *  @param {Number} [smoothing]   Smooth results of Freq Spectrum.
   *                                0.0 < smoothing < 1.0.
   *                                Defaults to 0.8.
   *  @param {Number} [bins]    Length of resulting array.
   *                            Must be a power of two between
   *                            16 and 1024. Defaults to 1024.
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup(){
   *    let cnv = createCanvas(100,100);
   *    cnv.mouseClicked(togglePlay);
   *    fft = new p5.FFT();
   *    sound.amp(0.2);
   *  }
   *
   *  function draw(){
   *    background(220);
   *
   *    let spectrum = fft.analyze();
   *    noStroke();
   *    fill(255, 0, 255);
   *    for (let i = 0; i< spectrum.length; i++){
   *      let x = map(i, 0, spectrum.length, 0, width);
   *      let h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width / spectrum.length, h )
   *    }
   *
   *    let waveform = fft.waveform();
   *    noFill();
   *    beginShape();
   *    stroke(20);
   *    for (let i = 0; i < waveform.length; i++){
   *      let x = map(i, 0, waveform.length, 0, width);
   *      let y = map( waveform[i], -1, 1, 0, height);
   *      vertex(x,y);
   *    }
   *    endShape();
   *
   *    text('tap to play', 20, 20);
   *  }
   *
   *  function togglePlay() {
   *    if (sound.isPlaying()) {
   *      sound.pause();
   *    } else {
   *      sound.loop();
   *    }
   *  }
   *  </code></div>
   */


  p5.FFT = function (smoothing, bins) {
    this.input = this.analyser = p5sound.audiocontext.createAnalyser();
    Object.defineProperties(this, {
      bins: {
        get: function get() {
          return this.analyser.fftSize / 2;
        },
        set: function set(b) {
          this.analyser.fftSize = b * 2;
        },
        configurable: true,
        enumerable: true
      },
      smoothing: {
        get: function get() {
          return this.analyser.smoothingTimeConstant;
        },
        set: function set(s) {
          this.analyser.smoothingTimeConstant = s;
        },
        configurable: true,
        enumerable: true
      }
    }); 

    this.smooth(smoothing);
    this.bins = bins || 1024; 

    p5sound.fftMeter.connect(this.analyser);
    this.freqDomain = new Uint8Array(this.analyser.frequencyBinCount);
    this.timeDomain = new Uint8Array(this.analyser.frequencyBinCount); 

    this.bass = [20, 140];
    this.lowMid = [140, 400];
    this.mid = [400, 2600];
    this.highMid = [2600, 5200];
    this.treble = [5200, 14000]; 

    p5sound.soundArray.push(this);
  };
  /**
   *  Set the input source for the FFT analysis. If no source is
   *  provided, FFT will analyze all sound in the sketch.
   *
   *  @method  setInput
   *  @for p5.FFT
   *  @param {Object} [source] p5.sound object (or web audio API source node)
   */


  p5.FFT.prototype.setInput = function (source) {
    if (!source) {
      p5sound.fftMeter.connect(this.analyser);
    } else {
      if (source.output) {
        source.output.connect(this.analyser);
      } else if (source.connect) {
        source.connect(this.analyser);
      }

      p5sound.fftMeter.disconnect();
    }
  };
  /**
   *  Returns an array of amplitude values (between -1.0 and +1.0) that represent
   *  a snapshot of amplitude readings in a single buffer. Length will be
   *  equal to bins (defaults to 1024). Can be used to draw the waveform
   *  of a sound.
   *
   *  @method waveform
   *  @for p5.FFT
   *  @param {Number} [bins]    Must be a power of two between
   *                            16 and 1024. Defaults to 1024.
   *  @param {String} [precision] If any value is provided, will return results
   *                              in a Float32 Array which is more precise
   *                              than a regular array.
   *  @return {Array}  Array    Array of amplitude values (-1 to 1)
   *                            over time. Array length = bins.
   *
   */


  p5.FFT.prototype.waveform = function () {
    var bins, mode, normalArray;

    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        bins = arguments[i];
        this.analyser.fftSize = bins * 2;
      }

      if (typeof arguments[i] === 'string') {
        mode = arguments[i];
      }
    } 


    if (mode && !p5.prototype._isSafari()) {
      timeToFloat(this, this.timeDomain);
      this.analyser.getFloatTimeDomainData(this.timeDomain);
      return this.timeDomain;
    } else {
      timeToInt(this, this.timeDomain);
      this.analyser.getByteTimeDomainData(this.timeDomain);
      var normalArray = new Array();

      for (var j = 0; j < this.timeDomain.length; j++) {
        var scaled = p5.prototype.map(this.timeDomain[j], 0, 255, -1, 1);
        normalArray.push(scaled);
      }

      return normalArray;
    }
  };
  /**
   *  Returns an array of amplitude values (between 0 and 255)
   *  across the frequency spectrum. Length is equal to FFT bins
   *  (1024 by default). The array indices correspond to frequencies
   *  (i.e. pitches), from the lowest to the highest that humans can
   *  hear. Each value represents amplitude at that slice of the
   *  frequency spectrum. Must be called prior to using
   *  <code>getEnergy()</code>.
   *
   *  @method analyze
   *  @for p5.FFT
   *  @param {Number} [bins]    Must be a power of two between
   *                             16 and 1024. Defaults to 1024.
   *  @param {Number} [scale]    If "dB," returns decibel
   *                             float measurements between
   *                             -140 and 0 (max).
   *                             Otherwise returns integers from 0-255.
   *  @return {Array} spectrum    Array of energy (amplitude/volume)
   *                              values across the frequency spectrum.
   *                              Lowest energy (silence) = 0, highest
   *                              possible is 255.
   *  @example
   *  <div><code>
   *  let osc, fft;
   *
   *  function setup(){
   *    let cnv = createCanvas(100,100);
   *    cnv.mousePressed(startSound);
   *    osc = new p5.Oscillator();
   *    osc.amp(0);
   *    fft = new p5.FFT();
   *  }
   *
   *  function draw(){
   *    background(220);
   *
   *    let freq = map(mouseX, 0, windowWidth, 20, 10000);
   *    freq = constrain(freq, 1, 20000);
   *    osc.freq(freq);
   *
   *    let spectrum = fft.analyze();
   *    noStroke();
   *    fill(255, 0, 255);
   *    for (let i = 0; i< spectrum.length; i++){
   *      let x = map(i, 0, spectrum.length, 0, width);
   *      let h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width / spectrum.length, h );
   *    }
   *
   *    stroke(255);
   *    if (!osc.started) {
   *      text('tap here and drag to change frequency', 10, 20, width - 20);
   *    } else {
   *      text(round(freq)+'Hz', 10, 20);
   *    }
   *  }
   *
   *  function startSound() {
   *    osc.start();
   *    osc.amp(0.5, 0.2);
   *  }
   *
   *  function mouseReleased() {
   *    osc.amp(0, 0.2);
   *  }
   *  </code></div>
   *
   *
   */


  p5.FFT.prototype.analyze = function () {
    var mode;

    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        this.bins = arguments[i];
        this.analyser.fftSize = this.bins * 2;
      }

      if (typeof arguments[i] === 'string') {
        mode = arguments[i];
      }
    }

    if (mode && mode.toLowerCase() === 'db') {
      freqToFloat(this);
      this.analyser.getFloatFrequencyData(this.freqDomain);
      return this.freqDomain;
    } else {
      freqToInt(this, this.freqDomain);
      this.analyser.getByteFrequencyData(this.freqDomain);
      var normalArray = Array.apply([], this.freqDomain);
      return normalArray;
    }
  };
  /**
   *  Returns the amount of energy (volume) at a specific
   *  <a href="https://en.wikipedia.org/wiki/Audio_frequency" target="_blank">
   *  frequency</a>, or the average amount of energy between two
   *  frequencies. Accepts Number(s) corresponding
   *  to frequency (in Hz), or a String corresponding to predefined
   *  frequency ranges ("bass", "lowMid", "mid", "highMid", "treble").
   *  Returns a range between 0 (no energy/volume at that frequency) and
   *  255 (maximum energy).
   *  <em>NOTE: analyze() must be called prior to getEnergy(). Analyze()
   *  tells the FFT to analyze frequency data, and getEnergy() uses
   *  the results determine the value at a specific frequency or
   *  range of frequencies.</em></p>
   *
   *  @method  getEnergy
   *  @for p5.FFT
   *  @param  {Number|String} frequency1   Will return a value representing
   *                                energy at this frequency. Alternately,
   *                                the strings "bass", "lowMid" "mid",
   *                                "highMid", and "treble" will return
   *                                predefined frequency ranges.
   *  @param  {Number} [frequency2] If a second frequency is given,
   *                                will return average amount of
   *                                energy that exists between the
   *                                two frequencies.
   *  @return {Number}   Energy   Energy (volume/amplitude) from
   *                              0 and 255.
   *
   */


  p5.FFT.prototype.getEnergy = function (frequency1, frequency2) {
    var nyquist = p5sound.audiocontext.sampleRate / 2;

    if (frequency1 === 'bass') {
      frequency1 = this.bass[0];
      frequency2 = this.bass[1];
    } else if (frequency1 === 'lowMid') {
      frequency1 = this.lowMid[0];
      frequency2 = this.lowMid[1];
    } else if (frequency1 === 'mid') {
      frequency1 = this.mid[0];
      frequency2 = this.mid[1];
    } else if (frequency1 === 'highMid') {
      frequency1 = this.highMid[0];
      frequency2 = this.highMid[1];
    } else if (frequency1 === 'treble') {
      frequency1 = this.treble[0];
      frequency2 = this.treble[1];
    }

    if (typeof frequency1 !== 'number') {
      throw 'invalid input for getEnergy()';
    } else if (!frequency2) {
      var index = Math.round(frequency1 / nyquist * this.freqDomain.length);
      return this.freqDomain[index];
    } else if (frequency1 && frequency2) {
      if (frequency1 > frequency2) {
        var swap = frequency2;
        frequency2 = frequency1;
        frequency1 = swap;
      }

      var lowIndex = Math.round(frequency1 / nyquist * this.freqDomain.length);
      var highIndex = Math.round(frequency2 / nyquist * this.freqDomain.length);
      var total = 0;
      var numFrequencies = 0; 

      for (var i = lowIndex; i <= highIndex; i++) {
        total += this.freqDomain[i];
        numFrequencies += 1;
      } 


      var toReturn = total / numFrequencies;
      return toReturn;
    } else {
      throw 'invalid input for getEnergy()';
    }
  }; 


  p5.FFT.prototype.getFreq = function (freq1, freq2) {
    console.log('getFreq() is deprecated. Please use getEnergy() instead.');
    var x = this.getEnergy(freq1, freq2);
    return x;
  };
  /**
   *  Returns the
   *  <a href="http://en.wikipedia.org/wiki/Spectral_centroid" target="_blank">
   *  spectral centroid</a> of the input signal.
   *  <em>NOTE: analyze() must be called prior to getCentroid(). Analyze()
   *  tells the FFT to analyze frequency data, and getCentroid() uses
   *  the results determine the spectral centroid.</em></p>
   *
   *  @method  getCentroid
   *  @for p5.FFT
   *  @return {Number}   Spectral Centroid Frequency   Frequency of the spectral centroid in Hz.
   *
   *
   * @example
   *  <div><code>
   * function setup(){
   *  cnv = createCanvas(100,100);
   *  cnv.mousePressed(userStartAudio);
   *  sound = new p5.AudioIn();
   *  sound.start();
   *  fft = new p5.FFT();
   *  sound.connect(fft);
   *}
   *
   *function draw() {
   *  if (getAudioContext().state !== 'running') {
   *    background(220);
   *    text('tap here and enable mic to begin', 10, 20, width - 20);
   *    return;
   *  }
   *  let centroidplot = 0.0;
   *  let spectralCentroid = 0;
   *
   *  background(0);
   *  stroke(0,255,0);
   *  let spectrum = fft.analyze();
   *  fill(0,255,0); // spectrum is green
   *
   *  //draw the spectrum
   *  for (let i = 0; i < spectrum.length; i++){
   *    let x = map(log(i), 0, log(spectrum.length), 0, width);
   *    let h = map(spectrum[i], 0, 255, 0, height);
   *    let rectangle_width = (log(i+1)-log(i))*(width/log(spectrum.length));
   *    rect(x, height, rectangle_width, -h )
   *  }
   *  let nyquist = 22050;
   *
   *  // get the centroid
   *  spectralCentroid = fft.getCentroid();
   *
   *  // the mean_freq_index calculation is for the display.
   *  let mean_freq_index = spectralCentroid/(nyquist/spectrum.length);
   *
   *  centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, width);
   *
   *  stroke(255,0,0); // the line showing where the centroid is will be red
   *
   *  rect(centroidplot, 0, width / spectrum.length, height)
   *  noStroke();
   *  fill(255,255,255);  // text is white
   *  text('centroid: ', 10, 20);
   *  text(round(spectralCentroid)+' Hz', 10, 40);
   *}
   * </code></div>
   */


  p5.FFT.prototype.getCentroid = function () {
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    var cumulative_sum = 0;
    var centroid_normalization = 0;

    for (var i = 0; i < this.freqDomain.length; i++) {
      cumulative_sum += i * this.freqDomain[i];
      centroid_normalization += this.freqDomain[i];
    }

    var mean_freq_index = 0;

    if (centroid_normalization !== 0) {
      mean_freq_index = cumulative_sum / centroid_normalization;
    }

    var spec_centroid_freq = mean_freq_index * (nyquist / this.freqDomain.length);
    return spec_centroid_freq;
  };
  /**
   *  Smooth FFT analysis by averaging with the last analysis frame.
   *
   *  @method smooth
   *  @param {Number} smoothing    0.0 < smoothing < 1.0.
   *                               Defaults to 0.8.
   */


  p5.FFT.prototype.smooth = function (s) {
    if (typeof s !== 'undefined') {
      this.smoothing = s;
    }

    return this.smoothing;
  };

  p5.FFT.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.analyser) {
      this.analyser.disconnect();
      delete this.analyser;
    }
  };
  /**
   *  Returns an array of average amplitude values for a given number
   *  of frequency bands split equally. N defaults to 16.
   *  <em>NOTE: analyze() must be called prior to linAverages(). Analyze()
   *  tells the FFT to analyze frequency data, and linAverages() uses
   *  the results to group them into a smaller set of averages.</em></p>
   *
   *  @method  linAverages
   *  @for p5.FFT
   *  @param  {Number}  N                Number of returned frequency groups
   *  @return {Array}   linearAverages   Array of average amplitude values for each group
   */


  p5.FFT.prototype.linAverages = function (N) {
    var N = N || 16; 

    var spectrum = this.freqDomain;
    var spectrumLength = spectrum.length;
    var spectrumStep = Math.floor(spectrumLength / N);
    var linearAverages = new Array(N); 

    var groupIndex = 0;

    for (var specIndex = 0; specIndex < spectrumLength; specIndex++) {
      linearAverages[groupIndex] = linearAverages[groupIndex] !== undefined ? (linearAverages[groupIndex] + spectrum[specIndex]) / 2 : spectrum[specIndex]; 

      if (specIndex % spectrumStep === spectrumStep - 1) {
        groupIndex++;
      }
    }

    return linearAverages;
  };
  /**
   *  Returns an array of average amplitude values of the spectrum, for a given
   *  set of <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank">
   *  Octave Bands</a>
   *  <em>NOTE: analyze() must be called prior to logAverages(). Analyze()
   *  tells the FFT to analyze frequency data, and logAverages() uses
   *  the results to group them into a smaller set of averages.</em></p>
   *
   *  @method  logAverages
   *  @for p5.FFT
   *  @param  {Array}   octaveBands    Array of Octave Bands objects for grouping
   *  @return {Array}   logAverages    Array of average amplitude values for each group
   */


  p5.FFT.prototype.logAverages = function (octaveBands) {
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    var spectrum = this.freqDomain;
    var spectrumLength = spectrum.length;
    var logAverages = new Array(octaveBands.length); 

    var octaveIndex = 0;

    for (var specIndex = 0; specIndex < spectrumLength; specIndex++) {
      var specIndexFrequency = Math.round(specIndex * nyquist / this.freqDomain.length); 

      if (specIndexFrequency > octaveBands[octaveIndex].hi) {
        octaveIndex++;
      }

      logAverages[octaveIndex] = logAverages[octaveIndex] !== undefined ? (logAverages[octaveIndex] + spectrum[specIndex]) / 2 : spectrum[specIndex];
    }

    return logAverages;
  };
  /**
   *  Calculates and Returns the 1/N
   *  <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank">Octave Bands</a>
   *  N defaults to 3 and minimum central frequency to 15.625Hz.
   *  (1/3 Octave Bands ~= 31 Frequency Bands)
   *  Setting fCtr0 to a central value of a higher octave will ignore the lower bands
   *  and produce less frequency groups.
   *
   *  @method   getOctaveBands
   *  @for p5.FFT
   *  @param  {Number}  N             Specifies the 1/N type of generated octave bands
   *  @param  {Number}  fCtr0         Minimum central frequency for the lowest band
   *  @return {Array}   octaveBands   Array of octave band objects with their bounds
   */


  p5.FFT.prototype.getOctaveBands = function (N, fCtr0) {
    var N = N || 3; 

    var fCtr0 = fCtr0 || 15.625; 

    var octaveBands = [];
    var lastFrequencyBand = {
      lo: fCtr0 / Math.pow(2, 1 / (2 * N)),
      ctr: fCtr0,
      hi: fCtr0 * Math.pow(2, 1 / (2 * N))
    };
    octaveBands.push(lastFrequencyBand);
    var nyquist = p5sound.audiocontext.sampleRate / 2;

    while (lastFrequencyBand.hi < nyquist) {
      var newFrequencyBand = {};
      newFrequencyBand.lo = lastFrequencyBand.hi;
      newFrequencyBand.ctr = lastFrequencyBand.ctr * Math.pow(2, 1 / N);
      newFrequencyBand.hi = newFrequencyBand.ctr * Math.pow(2, 1 / (2 * N));
      octaveBands.push(newFrequencyBand);
      lastFrequencyBand = newFrequencyBand;
    }

    return octaveBands;
  }; 


  var freqToFloat = function freqToFloat(fft) {
    if (fft.freqDomain instanceof Float32Array === false) {
      fft.freqDomain = new Float32Array(fft.analyser.frequencyBinCount);
    }
  };

  var freqToInt = function freqToInt(fft) {
    if (fft.freqDomain instanceof Uint8Array === false) {
      fft.freqDomain = new Uint8Array(fft.analyser.frequencyBinCount);
    }
  };

  var timeToFloat = function timeToFloat(fft) {
    if (fft.timeDomain instanceof Float32Array === false) {
      fft.timeDomain = new Float32Array(fft.analyser.frequencyBinCount);
    }
  };

  var timeToInt = function timeToInt(fft) {
    if (fft.timeDomain instanceof Uint8Array === false) {
      fft.timeDomain = new Uint8Array(fft.analyser.frequencyBinCount);
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var Signal = __webpack_require__(2);

  var Add = __webpack_require__(7);

  var Mult = __webpack_require__(3);

  var Scale = __webpack_require__(13);
  /**
   *  <p>p5.Signal is a constant audio-rate signal used by p5.Oscillator
   *  and p5.Envelope for modulation math.</p>
   *
   *  <p>This is necessary because Web Audio is processed on a seprate clock.
   *  For example, the p5 draw loop runs about 60 times per second. But
   *  the audio clock must process samples 44100 times per second. If we
   *  want to add a value to each of those samples, we can't do it in the
   *  draw loop, but we can do it by adding a constant-rate audio signal.</p.
   *
   *  <p>This class mostly functions behind the scenes in p5.sound, and returns
   *  a Tone.Signal from the Tone.js library by Yotam Mann.
   *  If you want to work directly with audio signals for modular
   *  synthesis, check out
   *  <a href='http://bit.ly/1oIoEng' target=_'blank'>tone.js.</a></p>
   *
   *  @class  p5.Signal
   *  @constructor
   *  @return {Tone.Signal} A Signal object from the Tone.js library
   *  @example
   *  <div><code>
   *  let carrier, modulator;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    text('tap to play', 20, 20);
   *
   *    carrier = new p5.Oscillator('sine');
   *    carrier.start();
   *    carrier.amp(1); // set amplitude
   *    carrier.freq(220); // set frequency
   *
   *    modulator = new p5.Oscillator('sawtooth');
   *    modulator.disconnect();
   *    modulator.start();
   *    modulator.amp(1);
   *    modulator.freq(4);
   *
   *    // Modulator's default amplitude range is -1 to 1.
   *    // Multiply it by -200, so the range is -200 to 200
   *    // then add 220 so the range is 20 to 420
   *    carrier.freq( modulator.mult(-400).add(220) );
   *  }
   *
   *  function canvasPressed() {
   *    userStartAudio();
   *    carrier.amp(1.0);
   *  }
   *
   *  function mouseReleased() {
   *    carrier.amp(0);
   *  }
   *  </code></div>
   */


  p5.Signal = function (value) {
    var s = new Signal(value); 

    return s; 
  };
  /**
   *  Fade to value, for smooth transitions
   *
   *  @method  fade
   *  @for p5.Signal
   *  @param  {Number} value          Value to set this signal
   *  @param  {Number} [secondsFromNow] Length of fade, in seconds from now
   */


  Signal.prototype.fade = Signal.prototype.linearRampToValueAtTime;
  Mult.prototype.fade = Signal.prototype.fade;
  Add.prototype.fade = Signal.prototype.fade;
  Scale.prototype.fade = Signal.prototype.fade;
  /**
   *  Connect a p5.sound object or Web Audio node to this
   *  p5.Signal so that its amplitude values can be scaled.
   *
   *  @method setInput
   *  @for p5.Signal
   *  @param {Object} input
   */

  Signal.prototype.setInput = function (_input) {
    _input.connect(this);
  };

  Mult.prototype.setInput = Signal.prototype.setInput;
  Add.prototype.setInput = Signal.prototype.setInput;
  Scale.prototype.setInput = Signal.prototype.setInput; 

  /**
   *  Add a constant value to this audio signal,
   *  and return the resulting audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalAdd.
   *
   *  @method  add
   *  @for p5.Signal
   *  @param {Number} number
   *  @return {p5.Signal} object
   */

  Signal.prototype.add = function (num) {
    var add = new Add(num); 

    this.connect(add);
    return add;
  };

  Mult.prototype.add = Signal.prototype.add;
  Add.prototype.add = Signal.prototype.add;
  Scale.prototype.add = Signal.prototype.add;
  /**
   *  Multiply this signal by a constant value,
   *  and return the resulting audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalMult.
   *
   *  @method  mult
   *  @for p5.Signal
   *  @param {Number} number to multiply
   *  @return {p5.Signal} object
   */

  Signal.prototype.mult = function (num) {
    var mult = new Mult(num); 

    this.connect(mult);
    return mult;
  };

  Mult.prototype.mult = Signal.prototype.mult;
  Add.prototype.mult = Signal.prototype.mult;
  Scale.prototype.mult = Signal.prototype.mult;
  /**
   *  Scale this signal value to a given range,
   *  and return the result as an audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalScale.
   *
   *  @method  scale
   *  @for p5.Signal
   *  @param {Number} number to multiply
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Signal} object
   */

  Signal.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var mapOutMin, mapOutMax;

    if (arguments.length === 4) {
      mapOutMin = p5.prototype.map(outMin, inMin, inMax, 0, 1) - 0.5;
      mapOutMax = p5.prototype.map(outMax, inMin, inMax, 0, 1) - 0.5;
    } else {
      mapOutMin = arguments[0];
      mapOutMax = arguments[1];
    }

    var scale = new Scale(mapOutMin, mapOutMax);
    this.connect(scale);
    return scale;
  };

  Mult.prototype.scale = Signal.prototype.scale;
  Add.prototype.scale = Signal.prototype.scale;
  Scale.prototype.scale = Signal.prototype.scale;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){o.Frequency=function(e,t){if(!(this instanceof o.Frequency))return new o.Frequency(e,t);o.TimeBase.call(this,e,t)},o.extend(o.Frequency,o.TimeBase),o.Frequency.prototype._primaryExpressions=Object.create(o.TimeBase.prototype._primaryExpressions),o.Frequency.prototype._primaryExpressions.midi={regexp:/^(\d+(?:\.\d+)?midi)/,method:function(e){return this.midiToFrequency(e)}},o.Frequency.prototype._primaryExpressions.note={regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method:function(e,t){var r=n[e.toLowerCase()]+12*(parseInt(t)+1);return this.midiToFrequency(r)}},o.Frequency.prototype._primaryExpressions.tr={regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method:function(e,t,r){var n=1;return e&&"0"!==e&&(n*=this._beatsToUnits(this._timeSignature()*parseFloat(e))),t&&"0"!==t&&(n*=this._beatsToUnits(parseFloat(t))),r&&"0"!==r&&(n*=this._beatsToUnits(parseFloat(r)/4)),n}},o.Frequency.prototype.transpose=function(e){return this._expr=function(e,t){return e()*this.intervalToFrequencyRatio(t)}.bind(this,this._expr,e),this},o.Frequency.prototype.harmonize=function(e){return this._expr=function(e,t){for(var r=e(),n=[],o=0;o<t.length;o++)n[o]=r*this.intervalToFrequencyRatio(t[o]);return n}.bind(this,this._expr,e),this},o.Frequency.prototype.toMidi=function(){return this.frequencyToMidi(this.valueOf())},o.Frequency.prototype.toNote=function(){var e=this.valueOf(),t=Math.log(e/o.Frequency.A4)/Math.LN2,r=Math.round(12*t)+57,n=Math.floor(r/12);return n<0&&(r+=-12*n),i[r%12]+n.toString()},o.Frequency.prototype.toSeconds=function(){return 1/this.valueOf()},o.Frequency.prototype.toFrequency=function(){return this.valueOf()},o.Frequency.prototype.toTicks=function(){var e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*o.Transport.PPQ)},o.Frequency.prototype._frequencyToUnits=function(e){return e},o.Frequency.prototype._ticksToUnits=function(e){return 1/(60*e/(o.Transport.bpm.value*o.Transport.PPQ))},o.Frequency.prototype._beatsToUnits=function(e){return 1/o.TimeBase.prototype._beatsToUnits.call(this,e)},o.Frequency.prototype._secondsToUnits=function(e){return 1/e},o.Frequency.prototype._defaultUnits="hz";var n={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},i=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return o.Frequency.A4=440,o.Frequency.prototype.midiToFrequency=function(e){return o.Frequency.A4*Math.pow(2,(e-69)/12)},o.Frequency.prototype.frequencyToMidi=function(e){return 69+12*Math.log(e/o.Frequency.A4)/Math.LN2},o.Frequency}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o){return o.TransportTime=function(t,r){if(!(this instanceof o.TransportTime))return new o.TransportTime(t,r);o.Time.call(this,t,r)},o.extend(o.TransportTime,o.Time),o.TransportTime.prototype._unaryExpressions=Object.create(o.Time.prototype._unaryExpressions),o.TransportTime.prototype._unaryExpressions.quantize={regexp:/^@/,method:function(t){var r=this._secondsToTicks(t()),e=Math.ceil(o.Transport.ticks/r);return this._ticksToUnits(e*r)}},o.TransportTime.prototype._secondsToTicks=function(t){var r=t/this._beatsToUnits(1);return Math.round(r*o.Transport.PPQ)},o.TransportTime.prototype.valueOf=function(){return this._secondsToTicks(this._expr())+(this._plusNow?o.Transport.ticks:0)},o.TransportTime.prototype.toTicks=function(){return this.valueOf()},o.TransportTime.prototype.toSeconds=function(){return this._expr()+(this._plusNow?o.Transport.seconds:0)},o.TransportTime.prototype.toFrequency=function(){return 1/this.toSeconds()},o.TransportTime}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var Add = __webpack_require__(7);

  var Mult = __webpack_require__(3);

  var Scale = __webpack_require__(13);

  var TimelineSignal = __webpack_require__(14);
  /**
   *  <p>Envelopes are pre-defined amplitude distribution over time.
   *  Typically, envelopes are used to control the output volume
   *  of an object, a series of fades referred to as Attack, Decay,
   *  Sustain and Release (
   *  <a href="https://upload.wikimedia.org/wikipedia/commons/e/ea/ADSR_parameter.svg">ADSR</a>
   *  ). Envelopes can also control other Web Audio Parameters—for example, a p5.Envelope can
   *  control an Oscillator's frequency like this: <code>osc.freq(env)</code>.</p>
   *  <p>Use <code><a href="#/p5.Envelope/setRange">setRange</a></code> to change the attack/release level.
   *  Use <code><a href="#/p5.Envelope/setADSR">setADSR</a></code> to change attackTime, decayTime, sustainPercent and releaseTime.</p>
   *  <p>Use the <code><a href="#/p5.Envelope/play">play</a></code> method to play the entire envelope,
   *  the <code><a href="#/p5.Envelope/ramp">ramp</a></code> method for a pingable trigger,
   *  or <code><a href="#/p5.Envelope/triggerAttack">triggerAttack</a></code>/
   *  <code><a href="#/p5.Envelope/triggerRelease">triggerRelease</a></code> to trigger noteOn/noteOff.</p>
   *
   *  @class p5.Envelope
   *  @constructor
   *  @example
   *  <div><code>
   *  let t1 = 0.1; // attack time in seconds
   *  let l1 = 0.7; // attack level 0.0 to 1.0
   *  let t2 = 0.3; // decay time in seconds
   *  let l2 = 0.1; // decay level  0.0 to 1.0
   *
   *  let env;
   *  let triOsc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    background(220);
   *    text('tap to play', 20, 20);
   *    cnv.mousePressed(playSound);
   *
   *    env = new p5.Envelope(t1, l1, t2, l2);
   *    triOsc = new p5.Oscillator('triangle');
   *  }
   *
   *  function playSound() {
   *    // starting the oscillator ensures that audio is enabled.
   *    triOsc.start();
   *    env.play(triOsc);
   *  }
   *  </code></div>
   */


  p5.Envelope = function (t1, l1, t2, l2, t3, l3) {
    /**
     * Time until envelope reaches attackLevel
     * @property attackTime
     */
    this.aTime = t1 || 0.1;
    /**
     * Level once attack is complete.
     * @property attackLevel
     */

    this.aLevel = l1 || 1;
    /**
     * Time until envelope reaches decayLevel.
     * @property decayTime
     */

    this.dTime = t2 || 0.5;
    /**
     * Level after decay. The envelope will sustain here until it is released.
     * @property decayLevel
     */

    this.dLevel = l2 || 0;
    /**
     * Duration of the release portion of the envelope.
     * @property releaseTime
     */

    this.rTime = t3 || 0;
    /**
     * Level at the end of the release.
     * @property releaseLevel
     */

    this.rLevel = l3 || 0;
    this._rampHighPercentage = 0.98;
    this._rampLowPercentage = 0.02;
    this.output = p5sound.audiocontext.createGain();
    this.control = new TimelineSignal();

    this._init(); 


    this.control.connect(this.output); 

    this.connection = null; 

    this.mathOps = [this.control]; 

    this.isExponential = false; 

    this.sourceToClear = null; 

    this.wasTriggered = false; 

    p5sound.soundArray.push(this);
  }; 


  p5.Envelope.prototype._init = function () {
    var now = p5sound.audiocontext.currentTime;
    var t = now;
    this.control.setTargetAtTime(0.00001, t, .001); 

    this._setRampAD(this.aTime, this.dTime);
  };
  /**
   *  Reset the envelope with a series of time/value pairs.
   *
   *  @method  set
   *  @for p5.Envelope
   *  @param {Number} attackTime     Time (in seconds) before level
   *                                 reaches attackLevel
   *  @param {Number} attackLevel    Typically an amplitude between
   *                                 0.0 and 1.0
   *  @param {Number} decayTime      Time
   *  @param {Number} decayLevel   Amplitude (In a standard ADSR envelope,
   *                                 decayLevel = sustainLevel)
   *  @param {Number} releaseTime   Release Time (in seconds)
   *  @param {Number} releaseLevel  Amplitude
   *  @example
   *  <div><code>
   *  let attackTime;
   *  let l1 = 0.7; // attack level 0.0 to 1.0
   *  let t2 = 0.3; // decay time in seconds
   *  let l2 = 0.1; // decay level  0.0 to 1.0
   *  let l3 = 0.2; // release time in seconds
   *
   *  let env, triOsc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playSound);
   *
   *    env = new p5.Envelope();
   *    triOsc = new p5.Oscillator('triangle');
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap here to play', 5, 20);
   *
   *    attackTime = map(mouseX, 0, width, 0.0, 1.0);
   *    text('attack time: ' + attackTime, 5, height - 20);
   *  }
   *
   *  // mouseClick triggers envelope if over canvas
   *  function playSound() {
   *    env.set(attackTime, l1, t2, l2, l3);
   *
   *    triOsc.start();
   *    env.play(triOsc);
   *  }
   *  </code></div>
   *
   */


  p5.Envelope.prototype.set = function (t1, l1, t2, l2, t3, l3) {
    this.aTime = t1;
    this.aLevel = l1;
    this.dTime = t2 || 0;
    this.dLevel = l2 || 0;
    this.rTime = t3 || 0;
    this.rLevel = l3 || 0; 

    this._setRampAD(t1, t2);
  };
  /**
   *  Set values like a traditional
   *  <a href="https://en.wikipedia.org/wiki/Synthesizer#/media/File:ADSR_parameter.svg">
   *  ADSR envelope
   *  </a>.
   *
   *  @method  setADSR
   *  @for p5.Envelope
   *  @param {Number} attackTime    Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]    Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   *  @example
   *  <div><code>
   *  let attackLevel = 1.0;
   *  let releaseLevel = 0;
   *
   *  let attackTime = 0.001;
   *  let decayTime = 0.2;
   *  let susPercent = 0.2;
   *  let releaseTime = 0.5;
   *
   *  let env, triOsc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playEnv);
   *
   *    env = new p5.Envelope();
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.freq(220);
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap here to play', 5, 20);
   *    attackTime = map(mouseX, 0, width, 0, 1.0);
   *    text('attack time: ' + attackTime, 5, height - 40);
   *  }
   *
   *  function playEnv() {
   *    triOsc.start();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.play();
   *  }
   *  </code></div>
   */


  p5.Envelope.prototype.setADSR = function (aTime, dTime, sPercent, rTime) {
    this.aTime = aTime;
    this.dTime = dTime || 0; 

    this.sPercent = sPercent || 0;
    this.dLevel = typeof sPercent !== 'undefined' ? sPercent * (this.aLevel - this.rLevel) + this.rLevel : 0;
    this.rTime = rTime || 0; 

    this._setRampAD(aTime, dTime);
  };
  /**
   *  Set max (attackLevel) and min (releaseLevel) of envelope.
   *
   *  @method  setRange
   *  @for p5.Envelope
   *  @param {Number} aLevel attack level (defaults to 1)
   *  @param {Number} rLevel release level (defaults to 0)
   *  @example
   *  <div><code>
   *  let attackLevel = 1.0;
   *  let releaseLevel = 0;
   *
   *  let attackTime = 0.001;
   *  let decayTime = 0.2;
   *  let susPercent = 0.2;
   *  let releaseTime = 0.5;
   *
   *  let env, triOsc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playEnv);
   *
   *    env = new p5.Envelope();
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.freq(220);
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap here to play', 5, 20);
   *    attackLevel = map(mouseY, height, 0, 0, 1.0);
   *    text('attack level: ' + attackLevel, 5, height - 20);
   *  }
   *
   *  function playEnv() {
   *    triOsc.start();
   *    env.setRange(attackLevel, releaseLevel);
   *    env.play();
   *  }
   *  </code></div>
   */


  p5.Envelope.prototype.setRange = function (aLevel, rLevel) {
    this.aLevel = aLevel || 1;
    this.rLevel = rLevel || 0; 
  }; 


  p5.Envelope.prototype._setRampAD = function (t1, t2) {
    this._rampAttackTime = this.checkExpInput(t1);
    this._rampDecayTime = this.checkExpInput(t2);
    var TCDenominator = 1.0; 

    TCDenominator = Math.log(1.0 / this.checkExpInput(1.0 - this._rampHighPercentage));
    this._rampAttackTC = t1 / this.checkExpInput(TCDenominator);
    TCDenominator = Math.log(1.0 / this._rampLowPercentage);
    this._rampDecayTC = t2 / this.checkExpInput(TCDenominator);
  }; 


  p5.Envelope.prototype.setRampPercentages = function (p1, p2) {
    this._rampHighPercentage = this.checkExpInput(p1);
    this._rampLowPercentage = this.checkExpInput(p2);
    var TCDenominator = 1.0; 

    TCDenominator = Math.log(1.0 / this.checkExpInput(1.0 - this._rampHighPercentage));
    this._rampAttackTC = this._rampAttackTime / this.checkExpInput(TCDenominator);
    TCDenominator = Math.log(1.0 / this._rampLowPercentage);
    this._rampDecayTC = this._rampDecayTime / this.checkExpInput(TCDenominator);
  };
  /**
   *  Assign a parameter to be controlled by this envelope.
   *  If a p5.Sound object is given, then the p5.Envelope will control its
   *  output gain. If multiple inputs are provided, the env will
   *  control all of them.
   *
   *  @method  setInput
   *  @for p5.Envelope
   *  @param  {Object} [...inputs]         A p5.sound object or
   *                                Web Audio Param.
   */


  p5.Envelope.prototype.setInput = function () {
    for (var i = 0; i < arguments.length; i++) {
      this.connect(arguments[i]);
    }
  };
  /**
   *  Set whether the envelope ramp is linear (default) or exponential.
   *  Exponential ramps can be useful because we perceive amplitude
   *  and frequency logarithmically.
   *
   *  @method  setExp
   *  @for p5.Envelope
   *  @param {Boolean} isExp true is exponential, false is linear
   */


  p5.Envelope.prototype.setExp = function (isExp) {
    this.isExponential = isExp;
  }; 


  p5.Envelope.prototype.checkExpInput = function (value) {
    if (value <= 0) {
      value = 0.00000001;
    }

    return value;
  };
  /**
   *  <p>Play tells the envelope to start acting on a given input.
   *  If the input is a p5.sound object (i.e. AudioIn, Oscillator,
   *  SoundFile), then Envelope will control its output volume.
   *  Envelopes can also be used to control any <a href="
   *  http://docs.webplatform.org/wiki/apis/webaudio/AudioParam">
   *  Web Audio Audio Param.</a></p>
   *
   *  @method  play
   *  @for p5.Envelope
   *  @param  {Object} unit         A p5.sound object or
   *                                Web Audio Param.
   *  @param  {Number} [startTime]  time from now (in seconds) at which to play
   *  @param  {Number} [sustainTime] time to sustain before releasing the envelope
   *  @example
   *  <div><code>
   *  let attackLevel = 1.0;
   *  let releaseLevel = 0;
   *
   *  let attackTime = 0.001;
   *  let decayTime = 0.2;
   *  let susPercent = 0.2;
   *  let releaseTime = 0.5;
   *
   *  let env, triOsc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playEnv);
   *
   *    env = new p5.Envelope();
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.freq(220);
   *    triOsc.start();
   *  }
   *
   *  function draw() {
   *    background(220);
   *    text('tap here to play', 5, 20);
   *    attackTime = map(mouseX, 0, width, 0, 1.0);
   *    attackLevel = map(mouseY, height, 0, 0, 1.0);
   *    text('attack time: ' + attackTime, 5, height - 40);
   *    text('attack level: ' + attackLevel, 5, height - 20);
   *  }
   *
   *  function playEnv() {
   *    // ensure that audio is enabled
   *    userStartAudio();
   *
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *    env.play();
   *  }
   *  </code></div>
   */


  p5.Envelope.prototype.play = function (unit, secondsFromNow, susTime) {
    var tFromNow = secondsFromNow || 0;
    var susTime = susTime || 0;

    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }

    this.triggerAttack(unit, tFromNow);
    this.triggerRelease(unit, tFromNow + this.aTime + this.dTime + susTime);
  };
  /**
   *  Trigger the Attack, and Decay portion of the Envelope.
   *  Similar to holding down a key on a piano, but it will
   *  hold the sustain level until you let go. Input can be
   *  any p5.sound object, or a <a href="
   *  http://docs.webplatform.org/wiki/apis/webaudio/AudioParam">
   *  Web Audio Param</a>.
   *
   *  @method  triggerAttack
   *  @for p5.Envelope
   *  @param  {Object} unit p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow time from now (in seconds)
   *  @example
   *  <div><code>
   *  let attackTime = 0.001;
   *  let decayTime = 0.2;
   *  let susPercent = 0.3;
   *  let releaseTime = 0.4;
   *  let env, triOsc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    background(220);
   *    textAlign(CENTER);
   *    textSize(10);
   *    text('tap to triggerAttack', width/2, height/2);
   *
   *    env = new p5.Envelope();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(1.0, 0.0);
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(envAttack);
   *  }
   *
   *  function envAttack()  {
   *    background(0, 255, 255);
   *    text('release to release', width/2, height/2);
   *
   *    // ensures audio is enabled. See also: `userStartAudio`
   *    triOsc.start();
   *
   *    env.triggerAttack(triOsc);
   *  }
   *
   *  function mouseReleased() {
   *    background(220);
   *    text('tap to triggerAttack', width/2, height/2);
   *
   *    env.triggerRelease(triOsc);
   *  }
   *  </code></div>
   */


  p5.Envelope.prototype.triggerAttack = function (unit, secondsFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    this.lastAttack = t;
    this.wasTriggered = true;

    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    } 


    var valToSet = this.control.getValueAtTime(t);

    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
    } else {
      this.control.linearRampToValueAtTime(valToSet, t);
    } 


    t += this.aTime;

    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.aLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.aLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    } 


    t += this.dTime;

    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.dLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.dLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }
  };
  /**
   *  Trigger the Release of the Envelope. This is similar to releasing
   *  the key on a piano and letting the sound fade according to the
   *  release level and release time.
   *
   *  @method  triggerRelease
   *  @for p5.Envelope
   *  @param  {Object} unit p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow time to trigger the release
   *  @example
   *  <div><code>
   *  let attackTime = 0.001;
   *  let decayTime = 0.2;
   *  let susPercent = 0.3;
   *  let releaseTime = 0.4;
   *  let env, triOsc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    background(220);
   *    textAlign(CENTER);
   *    textSize(10);
   *    text('tap to triggerAttack', width/2, height/2);
   *
   *    env = new p5.Envelope();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(1.0, 0.0);
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(envAttack);
   *  }
   *
   *  function envAttack()  {
   *    background(0, 255, 255);
   *    text('release to release', width/2, height/2);
   *
   *    // ensures audio is enabled. See also: `userStartAudio`
   *    triOsc.start();
   *
   *    env.triggerAttack(triOsc);
   *  }
   *
   *  function mouseReleased() {
   *    background(220);
   *    text('tap to triggerAttack', width/2, height/2);
   *
   *    env.triggerRelease(triOsc);
   *  }
   *  </code></div>
   */


  p5.Envelope.prototype.triggerRelease = function (unit, secondsFromNow) {
    if (!this.wasTriggered) {
      return;
    }

    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;

    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    } 


    var valToSet = this.control.getValueAtTime(t);

    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
    } else {
      this.control.linearRampToValueAtTime(valToSet, t);
    } 


    t += this.rTime;

    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.rLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.rLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }

    this.wasTriggered = false;
  };
  /**
   *  Exponentially ramp to a value using the first two
   *  values from <code><a href="#/p5.Envelope/setADSR">setADSR(attackTime, decayTime)</a></code>
   *  as <a href="https://en.wikipedia.org/wiki/RC_time_constant">
   *  time constants</a> for simple exponential ramps.
   *  If the value is higher than current value, it uses attackTime,
   *  while a decrease uses decayTime.
   *
   *  @method  ramp
   *  @for p5.Envelope
   *  @param  {Object} unit           p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow When to trigger the ramp
   *  @param  {Number} v              Target value
   *  @param  {Number} [v2]           Second target value (optional)
   *  @example
   *  <div><code>
   *  let env, osc, amp;
   *
   *  let attackTime = 0.001;
   *  let decayTime = 0.2;
   *  let attackLevel = 1;
   *  let decayLevel = 0;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    fill(0,255,0);
   *    noStroke();
   *
   *    env = new p5.Envelope();
   *    env.setADSR(attackTime, decayTime);
   *    osc = new p5.Oscillator();
   *    osc.amp(env);
   *    amp = new p5.Amplitude();
   *
   *    cnv.mousePressed(triggerRamp);
   *  }
   *
   *  function triggerRamp() {
   *    // ensures audio is enabled. See also: `userStartAudio`
   *    osc.start();
   *
   *    env.ramp(osc, 0, attackLevel, decayLevel);
   *  }
   *
   *  function draw() {
   *    background(20);
   *    text('tap to play', 10, 20);
   *    let h = map(amp.getLevel(), 0, 0.4, 0, height);;
   *    rect(0, height, width, -h);
   *  }
   *  </code></div>
   */


  p5.Envelope.prototype.ramp = function (unit, secondsFromNow, v1, v2) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    var destination1 = this.checkExpInput(v1);
    var destination2 = typeof v2 !== 'undefined' ? this.checkExpInput(v2) : undefined; 

    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    } 


    var currentVal = this.checkExpInput(this.control.getValueAtTime(t)); 

    if (destination1 > currentVal) {
      this.control.setTargetAtTime(destination1, t, this._rampAttackTC);
      t += this._rampAttackTime;
    } 
    else if (destination1 < currentVal) {
        this.control.setTargetAtTime(destination1, t, this._rampDecayTC);
        t += this._rampDecayTime;
      } 


    if (destination2 === undefined) return; 

    if (destination2 > destination1) {
      this.control.setTargetAtTime(destination2, t, this._rampAttackTC);
    } 
    else if (destination2 < destination1) {
        this.control.setTargetAtTime(destination2, t, this._rampDecayTC);
      }
  };

  p5.Envelope.prototype.connect = function (unit) {
    this.connection = unit; 

    if (unit instanceof p5.Oscillator || unit instanceof p5.SoundFile || unit instanceof p5.AudioIn || unit instanceof p5.Reverb || unit instanceof p5.Noise || unit instanceof p5.Filter || unit instanceof p5.Delay) {
      unit = unit.output.gain;
    }

    if (unit instanceof AudioParam) {
      unit.setValueAtTime(0, p5sound.audiocontext.currentTime);
    }

    if (unit instanceof p5.Signal) {
      unit.setValue(0);
    }

    this.output.connect(unit);
  };

  p5.Envelope.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  }; 

  /**
   *  Add a value to the p5.Oscillator's output amplitude,
   *  and return the oscillator. Calling this method
   *  again will override the initial add() with new values.
   *
   *  @method  add
   *  @for p5.Envelope
   *  @param {Number} number Constant number to add
   *  @return {p5.Envelope} Envelope Returns this envelope
   *                                     with scaled output
   */


  p5.Envelope.prototype.add = function (num) {
    var add = new Add(num);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, add, thisChain, nextChain, Add);
  };
  /**
   *  Multiply the p5.Envelope's output amplitude
   *  by a fixed value. Calling this method
   *  again will override the initial mult() with new values.
   *
   *  @method  mult
   *  @for p5.Envelope
   *  @param {Number} number Constant number to multiply
   *  @return {p5.Envelope} Envelope Returns this envelope
   *                                     with scaled output
   */


  p5.Envelope.prototype.mult = function (num) {
    var mult = new Mult(num);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, mult, thisChain, nextChain, Mult);
  };
  /**
   *  Scale this envelope's amplitude values to a given
   *  range, and return the envelope. Calling this method
   *  again will override the initial scale() with new values.
   *
   *  @method  scale
   *  @for p5.Envelope
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Envelope} Envelope Returns this envelope
   *                                     with scaled output
   */


  p5.Envelope.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var scale = new Scale(inMin, inMax, outMin, outMax);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, scale, thisChain, nextChain, Scale);
  }; 


  p5.Envelope.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.disconnect();

    if (this.control) {
      this.control.dispose();
      this.control = null;
    }

    for (var i = 1; i < this.mathOps.length; i++) {
      this.mathOps[i].dispose();
    }
  }; 


  p5.Env = function (t1, l1, t2, l2, t3, l3) {
    console.warn('WARNING: p5.Env is now deprecated and may be removed in future versions. ' + 'Please use the new p5.Envelope instead.');
    p5.Envelope.call(this, t1, l1, t2, l2, t3, l3);
  };

  p5.Env.prototype = Object.create(p5.Envelope.prototype);
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  __webpack_require__(23);
  /**
   *  Creates a Pulse object, an oscillator that implements
   *  Pulse Width Modulation.
   *  The pulse is created with two oscillators.
   *  Accepts a parameter for frequency, and to set the
   *  width between the pulses. See <a href="
   *  http://p5js.org/reference/#/p5.Oscillator">
   *  <code>p5.Oscillator</code> for a full list of methods.
   *
   *  @class p5.Pulse
   *  @extends p5.Oscillator
   *  @constructor
   *  @param {Number} [freq] Frequency in oscillations per second (Hz)
   *  @param {Number} [w]    Width between the pulses (0 to 1.0,
   *                         defaults to 0)
   *  @example
   *  <div><code>
   *  let pulse;
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(startPulse);
   *    background(220);
   *
   *    pulse = new p5.Pulse();
   *    pulse.amp(0.5);
   *    pulse.freq(220);
   *  }
   *  function startPulse() {
   *    pulse.start();
   *    pulse.amp(0.5, 0.02);
   *  }
   *  function mouseReleased() {
   *    pulse.amp(0, 0.2);
   *  }
   *  function draw() {
   *    background(220);
   *    text('tap to play', 5, 20, width - 20);
   *    let w = map(mouseX, 0, width, 0, 1);
   *    w = constrain(w, 0, 1);
   *    pulse.width(w);
   *    text('pulse width: ' + w, 5, height - 20);
   *  }
   *  </code></div>
   */


  p5.Pulse = function (freq, w) {
    p5.Oscillator.call(this, freq, 'sawtooth'); 

    this.w = w || 0; 

    this.osc2 = new p5.SawOsc(freq); 

    this.dNode = p5sound.audiocontext.createDelay(); 

    this.dcOffset = createDCOffset();
    this.dcGain = p5sound.audiocontext.createGain();
    this.dcOffset.connect(this.dcGain);
    this.dcGain.connect(this.output); 

    this.f = freq || 440;
    var mW = this.w / this.oscillator.frequency.value;
    this.dNode.delayTime.value = mW;
    this.dcGain.gain.value = 1.7 * (0.5 - this.w); 

    this.osc2.disconnect();
    this.osc2.panner.disconnect();
    this.osc2.amp(-1); 

    this.osc2.output.connect(this.dNode);
    this.dNode.connect(this.output);
    this.output.gain.value = 1;
    this.output.connect(this.panner);
  };

  p5.Pulse.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Set the width of a Pulse object (an oscillator that implements
   *  Pulse Width Modulation).
   *
   *  @method  width
   *  @param {Number} [width]    Width between the pulses (0 to 1.0,
   *                         defaults to 0)
   */

  p5.Pulse.prototype.width = function (w) {
    if (typeof w === 'number') {
      if (w <= 1.0 && w >= 0.0) {
        this.w = w; 

        var mW = this.w / this.oscillator.frequency.value;
        this.dNode.delayTime.value = mW;
      }

      this.dcGain.gain.value = 1.7 * (0.5 - this.w);
    } else {
      w.connect(this.dNode.delayTime);
      var sig = new p5.SignalAdd(-0.5);
      sig.setInput(w);
      sig = sig.mult(-1);
      sig = sig.mult(1.7);
      sig.connect(this.dcGain.gain);
    }
  };

  p5.Pulse.prototype.start = function (f, time) {
    var now = p5sound.audiocontext.currentTime;
    var t = time || 0;

    if (!this.started) {
      var freq = f || this.f;
      var type = this.oscillator.type;
      this.oscillator = p5sound.audiocontext.createOscillator();
      this.oscillator.frequency.setValueAtTime(freq, now);
      this.oscillator.type = type;
      this.oscillator.connect(this.output);
      this.oscillator.start(t + now); 

      this.osc2.oscillator = p5sound.audiocontext.createOscillator();
      this.osc2.oscillator.frequency.setValueAtTime(freq, t + now);
      this.osc2.oscillator.type = type;
      this.osc2.oscillator.connect(this.osc2.output);
      this.osc2.start(t + now);
      this.freqNode = [this.oscillator.frequency, this.osc2.oscillator.frequency]; 

      this.dcOffset = createDCOffset();
      this.dcOffset.connect(this.dcGain);
      this.dcOffset.start(t + now); 

      if (this.mods !== undefined && this.mods.frequency !== undefined) {
        this.mods.frequency.connect(this.freqNode[0]);
        this.mods.frequency.connect(this.freqNode[1]);
      }

      this.started = true;
      this.osc2.started = true;
    }
  };

  p5.Pulse.prototype.stop = function (time) {
    if (this.started) {
      var t = time || 0;
      var now = p5sound.audiocontext.currentTime;
      this.oscillator.stop(t + now);

      if (this.osc2.oscillator) {
        this.osc2.oscillator.stop(t + now);
      }

      this.dcOffset.stop(t + now);
      this.started = false;
      this.osc2.started = false;
    }
  };

  p5.Pulse.prototype.freq = function (val, rampTime, tFromNow) {
    if (typeof val === 'number') {
      this.f = val;
      var now = p5sound.audiocontext.currentTime;
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var currentFreq = this.oscillator.frequency.value;
      this.oscillator.frequency.cancelScheduledValues(now);
      this.oscillator.frequency.setValueAtTime(currentFreq, now + tFromNow);
      this.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
      this.osc2.oscillator.frequency.cancelScheduledValues(now);
      this.osc2.oscillator.frequency.setValueAtTime(currentFreq, now + tFromNow);
      this.osc2.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);

      if (this.freqMod) {
        this.freqMod.output.disconnect();
        this.freqMod = null;
      }
    } else if (val.output) {
      val.output.disconnect();
      val.output.connect(this.oscillator.frequency);
      val.output.connect(this.osc2.oscillator.frequency);
      this.freqMod = val;
    }
  }; 


  function createDCOffset() {
    var ac = p5sound.audiocontext;
    var buffer = ac.createBuffer(1, 2048, ac.sampleRate);
    var data = buffer.getChannelData(0);

    for (var i = 0; i < 2048; i++) {
      data[i] = 1.0;
    }

    var bufferSource = ac.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.loop = true;
    return bufferSource;
  }
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);
  /**
   *  Noise is a type of oscillator that generates a buffer with random values.
   *
   *  @class p5.Noise
   *  @extends p5.Oscillator
   *  @constructor
   *  @param {String} type Type of noise can be 'white' (default),
   *                       'brown' or 'pink'.
   */


  p5.Noise = function (type) {
    var assignType;
    p5.Oscillator.call(this);
    delete this.f;
    delete this.freq;
    delete this.oscillator;

    if (type === 'brown') {
      assignType = _brownNoise;
    } else if (type === 'pink') {
      assignType = _pinkNoise;
    } else {
      assignType = _whiteNoise;
    }

    this.buffer = assignType;
  };

  p5.Noise.prototype = Object.create(p5.Oscillator.prototype); 

  var _whiteNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var whiteBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = whiteBuffer.getChannelData(0);

    for (var i = 0; i < bufferSize; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }

    whiteBuffer.type = 'white';
    return whiteBuffer;
  }();

  var _pinkNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var pinkBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = pinkBuffer.getChannelData(0);
    var b0, b1, b2, b3, b4, b5, b6;
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;

    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      noiseData[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      noiseData[i] *= 0.11; 

      b6 = white * 0.115926;
    }

    pinkBuffer.type = 'pink';
    return pinkBuffer;
  }();

  var _brownNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var brownBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = brownBuffer.getChannelData(0);
    var lastOut = 0.0;

    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      noiseData[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = noiseData[i];
      noiseData[i] *= 3.5;
    }

    brownBuffer.type = 'brown';
    return brownBuffer;
  }();
  /**
   *  Set type of noise to 'white', 'pink' or 'brown'.
   *  White is the default.
   *
   *  @method setType
   *  @param {String} [type] 'white', 'pink' or 'brown'
   */


  p5.Noise.prototype.setType = function (type) {
    switch (type) {
      case 'white':
        this.buffer = _whiteNoise;
        break;

      case 'pink':
        this.buffer = _pinkNoise;
        break;

      case 'brown':
        this.buffer = _brownNoise;
        break;

      default:
        this.buffer = _whiteNoise;
    }

    if (this.started) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
      this.start(now + .01);
    }
  };

  p5.Noise.prototype.getType = function () {
    return this.buffer.type;
  };

  p5.Noise.prototype.start = function () {
    if (this.started) {
      this.stop();
    }

    this.noise = p5sound.audiocontext.createBufferSource();
    this.noise.buffer = this.buffer;
    this.noise.loop = true;
    this.noise.connect(this.output);
    var now = p5sound.audiocontext.currentTime;
    this.noise.start(now);
    this.started = true;
  };

  p5.Noise.prototype.stop = function () {
    var now = p5sound.audiocontext.currentTime;

    if (this.noise) {
      this.noise.stop(now);
      this.started = false;
    }
  };

  p5.Noise.prototype.dispose = function () {
    var now = p5sound.audiocontext.currentTime; 

    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.noise) {
      this.noise.disconnect();
      this.stop(now);
    }

    if (this.output) {
      this.output.disconnect();
    }

    if (this.panner) {
      this.panner.disconnect();
    }

    this.output = null;
    this.panner = null;
    this.buffer = null;
    this.noise = null;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1); 


  p5sound.inputSources = [];
  /**
   *  <p>Get audio from an input, i.e. your computer's microphone.</p>
   *
   *  <p>Turn the mic on/off with the start() and stop() methods. When the mic
   *  is on, its volume can be measured with getLevel or by connecting an
   *  FFT object.</p>
   *
   *  <p>If you want to hear the AudioIn, use the .connect() method.
   *  AudioIn does not connect to p5.sound output by default to prevent
   *  feedback.</p>
   *
   *  <p><em>Note: This uses the <a href="http://caniuse.com/stream">getUserMedia/
   *  Stream</a> API, which is not supported by certain browsers. Access in Chrome browser
   *  is limited to localhost and https, but access over http may be limited.</em></p>
   *
   *  @class p5.AudioIn
   *  @constructor
   *  @param {Function} [errorCallback] A function to call if there is an error
   *                                    accessing the AudioIn. For example,
   *                                    Safari and iOS devices do not
   *                                    currently allow microphone access.
   *  @example
   *  <div><code>
   *  let mic;
   *
   *   function setup(){
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(userStartAudio);
   *    textAlign(CENTER);
   *    mic = new p5.AudioIn();
   *    mic.start();
   *  }
   *
   *  function draw(){
   *    background(0);
   *    fill(255);
   *    text('tap to start', width/2, 20);
   *
   *    micLevel = mic.getLevel();
   *    let y = height - micLevel * height;
   *    ellipse(width/2, y, 10, 10);
   *  }
   *  </code></div>
   */

  p5.AudioIn = function (errorCallback) {

    /**
     * @property {GainNode} input
     */
    this.input = p5sound.audiocontext.createGain();
    /**
     * @property {GainNode} output
     */

    this.output = p5sound.audiocontext.createGain();
    /**
     * @property {MediaStream|null} stream
     */

    this.stream = null;
    /**
     * @property {MediaStreamAudioSourceNode|null} mediaStream
     */

    this.mediaStream = null;
    /**
     * @property {Number|null} currentSource
     */

    this.currentSource = null;
    /**
     *  Client must allow browser to access their microphone / audioin source.
     *  Default: false. Will become true when the client enables access.
     *
     *  @property {Boolean} enabled
     */

    this.enabled = false;
    /**
     * Input amplitude, connect to it by default but not to master out
     *
     *  @property {p5.Amplitude} amplitude
     */

    this.amplitude = new p5.Amplitude();
    this.output.connect(this.amplitude.input);

    if (!window.MediaStreamTrack || !window.navigator.mediaDevices || !window.navigator.mediaDevices.getUserMedia) {
      errorCallback ? errorCallback() : window.alert('This browser does not support MediaStreamTrack and mediaDevices');
    } 


    p5sound.soundArray.push(this);
  };
  /**
   *  Start processing audio input. This enables the use of other
   *  AudioIn methods like getLevel(). Note that by default, AudioIn
   *  is not connected to p5.sound's output. So you won't hear
   *  anything unless you use the connect() method.<br/>
   *
   *  Certain browsers limit access to the user's microphone. For example,
   *  Chrome only allows access from localhost and over https. For this reason,
   *  you may want to include an errorCallback—a function that is called in case
   *  the browser won't provide mic access.
   *
   *  @method start
   *  @for p5.AudioIn
   *  @param {Function} [successCallback] Name of a function to call on
   *                                    success.
   *  @param {Function} [errorCallback] Name of a function to call if
   *                                    there was an error. For example,
   *                                    some browsers do not support
   *                                    getUserMedia.
   */


  p5.AudioIn.prototype.start = function (successCallback, errorCallback) {
    var self = this;

    if (this.stream) {
      this.stop();
    } 


    var audioSource = p5sound.inputSources[self.currentSource];
    var constraints = {
      audio: {
        sampleRate: p5sound.audiocontext.sampleRate,
        echoCancellation: false
      }
    }; 

    if (p5sound.inputSources[this.currentSource]) {
      constraints.audio.deviceId = audioSource.deviceId;
    }

    window.navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      self.stream = stream;
      self.enabled = true; 

      self.mediaStream = p5sound.audiocontext.createMediaStreamSource(stream);
      self.mediaStream.connect(self.output); 

      self.amplitude.setInput(self.output);
      if (successCallback) successCallback();
    })["catch"](function (err) {
      if (errorCallback) errorCallback(err);else console.error(err);
    });
  };
  /**
   *  Turn the AudioIn off. If the AudioIn is stopped, it cannot getLevel().
   *  If re-starting, the user may be prompted for permission access.
   *
   *  @method stop
   *  @for p5.AudioIn
   */


  p5.AudioIn.prototype.stop = function () {
    if (this.stream) {
      this.stream.getTracks().forEach(function (track) {
        track.stop();
      });
      this.mediaStream.disconnect();
      delete this.mediaStream;
      delete this.stream;
    }
  };
  /**
   *  Connect to an audio unit. If no parameter is provided, will
   *  connect to the master output (i.e. your speakers).<br/>
   *
   *  @method  connect
   *  @for p5.AudioIn
   *  @param  {Object} [unit] An object that accepts audio input,
   *                          such as an FFT
   */


  p5.AudioIn.prototype.connect = function (unit) {
    if (unit) {
      if (unit.hasOwnProperty('input')) {
        this.output.connect(unit.input);
      } else if (unit.hasOwnProperty('analyser')) {
        this.output.connect(unit.analyser);
      } else {
        this.output.connect(unit);
      }
    } else {
      this.output.connect(p5sound.input);
    }
  };
  /**
   *  Disconnect the AudioIn from all audio units. For example, if
   *  connect() had been called, disconnect() will stop sending
   *  signal to your speakers.<br/>
   *
   *  @method  disconnect
   *  @for p5.AudioIn
   */


  p5.AudioIn.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect(); 

      this.output.connect(this.amplitude.input);
    }
  };
  /**
   *  Read the Amplitude (volume level) of an AudioIn. The AudioIn
   *  class contains its own instance of the Amplitude class to help
   *  make it easy to get a microphone's volume level. Accepts an
   *  optional smoothing value (0.0 < 1.0). <em>NOTE: AudioIn must
   *  .start() before using .getLevel().</em><br/>
   *
   *  @method  getLevel
   *  @for p5.AudioIn
   *  @param  {Number} [smoothing] Smoothing is 0.0 by default.
   *                               Smooths values based on previous values.
   *  @return {Number}           Volume level (between 0.0 and 1.0)
   */


  p5.AudioIn.prototype.getLevel = function (smoothing) {
    if (smoothing) {
      this.amplitude.smoothing = smoothing;
    }

    return this.amplitude.getLevel();
  };
  /**
   *  Set amplitude (volume) of a mic input between 0 and 1.0. <br/>
   *
   *  @method  amp
   *  @for p5.AudioIn
   *  @param  {Number} vol between 0 and 1.0
   *  @param {Number} [time] ramp time (optional)
   */


  p5.AudioIn.prototype.amp = function (vol, t) {
    if (t) {
      var rampTime = t || 0;
      var currentVol = this.output.gain.value;
      this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
      this.output.gain.setValueAtTime(currentVol, p5sound.audiocontext.currentTime);
      this.output.gain.linearRampToValueAtTime(vol, rampTime + p5sound.audiocontext.currentTime);
    } else {
      this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
      this.output.gain.setValueAtTime(vol, p5sound.audiocontext.currentTime);
    }
  };
  /**
   * Returns a list of available input sources. This is a wrapper
   * for <a title="MediaDevices.enumerateDevices() - Web APIs | MDN" target="_blank" href=
   *  "https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices"
   *  > and it returns a Promise.
   *
   * @method  getSources
   * @for p5.AudioIn
   * @param  {Function} [successCallback] This callback function handles the sources when they
   *                                      have been enumerated. The callback function
   *                                      receives the deviceList array as its only argument
   * @param  {Function} [errorCallback] This optional callback receives the error
   *                                    message as its argument.
   * @returns {Promise} Returns a Promise that can be used in place of the callbacks, similar
   *                            to the enumerateDevices() method
   * @example
   *  <div><code>
   *  let audioIn;
   *
   *  function setup(){
   *    text('getting sources...', 0, 20);
   *    audioIn = new p5.AudioIn();
   *    audioIn.getSources(gotSources);
   *  }
   *
   *  function gotSources(deviceList) {
   *    if (deviceList.length > 0) {
   *      //set the source to the first item in the deviceList array
   *      audioIn.setSource(0);
   *      let currentSource = deviceList[audioIn.currentSource];
   *      text('set source to: ' + currentSource.deviceId, 5, 20, width);
   *    }
   *  }
   *  </code></div>
   */


  p5.AudioIn.prototype.getSources = function (onSuccess, onError) {
    return new Promise(function (resolve, reject) {
      window.navigator.mediaDevices.enumerateDevices().then(function (devices) {
        p5sound.inputSources = devices.filter(function (device) {
          return device.kind === 'audioinput';
        });
        resolve(p5sound.inputSources);

        if (onSuccess) {
          onSuccess(p5sound.inputSources);
        }
      })["catch"](function (error) {
        reject(error);

        if (onError) {
          onError(error);
        } else {
          console.error('This browser does not support MediaStreamTrack.getSources()');
        }
      });
    });
  };
  /**
   *  Set the input source. Accepts a number representing a
   *  position in the array returned by getSources().
   *  This is only available in browsers that support
   *  <a title="MediaDevices.enumerateDevices() - Web APIs | MDN" target="_blank" href=
   *  "https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices"
   *  >navigator.mediaDevices.enumerateDevices()</a>.<br/>
   *
   *  @method setSource
   *  @for p5.AudioIn
   *  @param {number} num position of input source in the array
   *  @example
   *  <div><code>
   *  let audioIn;
   *
   *  function setup(){
   *    text('getting sources...', 0, 20);
   *    audioIn = new p5.AudioIn();
   *    audioIn.getSources(gotSources);
   *  }
   *
   *  function gotSources(deviceList) {
   *    if (deviceList.length > 0) {
   *      //set the source to the first item in the deviceList array
   *      audioIn.setSource(0);
   *      let currentSource = deviceList[audioIn.currentSource];
   *      text('set source to: ' + currentSource.deviceId, 5, 20, width);
   *    }
   *  }
   *  </code></div>
   */


  p5.AudioIn.prototype.setSource = function (num) {
    if (p5sound.inputSources.length > 0 && num < p5sound.inputSources.length) {
      this.currentSource = num;
      console.log('set source to ', p5sound.inputSources[this.currentSource]);
    } else {
      console.log('unable to set input source');
    } 


    if (this.stream && this.stream.active) {
      this.start();
    }
  }; 


  p5.AudioIn.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.stop();

    if (this.output) {
      this.output.disconnect();
    }

    if (this.amplitude) {
      this.amplitude.disconnect();
    }

    delete this.amplitude;
    delete this.output;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(2),__webpack_require__(52),__webpack_require__(58),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.CrossFade=function(e){this.createInsOuts(2,1),this.a=this.input[0]=new i.Gain,this.b=this.input[1]=new i.Gain,this.fade=new i.Signal(this.defaultArg(e,.5),i.Type.NormalRange),this._equalPowerA=new i.EqualPowerGain,this._equalPowerB=new i.EqualPowerGain,this._invert=new i.Expr("1 - $0"),this.a.connect(this.output),this.b.connect(this.output),this.fade.chain(this._equalPowerB,this.b.gain),this.fade.chain(this._invert,this._equalPowerA,this.a.gain),this._readOnly("fade")},i.extend(i.CrossFade),i.CrossFade.prototype.dispose=function(){return i.prototype.dispose.call(this),this._writable("fade"),this._equalPowerA.dispose(),this._equalPowerA=null,this._equalPowerB.dispose(),this._equalPowerB=null,this.fade.dispose(),this.fade=null,this._invert.dispose(),this._invert=null,this.a.dispose(),this.a=null,this.b.dispose(),this.b=null,this},i.CrossFade}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(7),__webpack_require__(16),__webpack_require__(3),__webpack_require__(53),__webpack_require__(26),__webpack_require__(54),__webpack_require__(25),__webpack_require__(55),__webpack_require__(56),__webpack_require__(57)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(p){"use strict";function r(e,n,r){var t=new e;return r._eval(n[0]).connect(t,0,0),r._eval(n[1]).connect(t,0,1),t}function t(e,n,r){var t=new e;return r._eval(n[0]).connect(t,0,0),t}function o(e){return e?parseFloat(e):void 0}function i(e){return e&&e.args?parseFloat(e.args):void 0}return p.Expr=function(){var n=this._replacements(Array.prototype.slice.call(arguments)),e=this._parseInputs(n);this._nodes=[],this.input=new Array(e);for(var r=0;r<e;r++)this.input[r]=this.context.createGain();var t,o=this._parseTree(n);try{t=this._eval(o)}catch(e){throw this._disposeNodes(),new Error("Tone.Expr: Could evaluate expression: "+n)}this.output=t},p.extend(p.Expr,p.SignalBase),p.Expr._Expressions={value:{signal:{regexp:/^\d+\.\d+|^\d+/,method:function(e){return new p.Signal(o(e))}},input:{regexp:/^\$\d/,method:function(e,n){return n.input[o(e.substr(1))]}}},glue:{"(":{regexp:/^\(/},")":{regexp:/^\)/},",":{regexp:/^,/}},func:{abs:{regexp:/^abs/,method:t.bind(this,p.Abs)},mod:{regexp:/^mod/,method:function(e,n){var r=i(e[1]),t=new p.Modulo(r);return n._eval(e[0]).connect(t),t}},pow:{regexp:/^pow/,method:function(e,n){var r=i(e[1]),t=new p.Pow(r);return n._eval(e[0]).connect(t),t}},a2g:{regexp:/^a2g/,method:function(e,n){var r=new p.AudioToGain;return n._eval(e[0]).connect(r),r}}},binary:{"+":{regexp:/^\+/,precedence:1,method:r.bind(this,p.Add)},"-":{regexp:/^\-/,precedence:1,method:function(e,n){return 1===e.length?t(p.Negate,e,n):r(p.Subtract,e,n)}},"*":{regexp:/^\*/,precedence:0,method:r.bind(this,p.Multiply)}},unary:{"-":{regexp:/^\-/,method:t.bind(this,p.Negate)},"!":{regexp:/^\!/,method:t.bind(this,p.NOT)}}},p.Expr.prototype._parseInputs=function(e){var n=e.match(/\$\d/g),r=0;if(null!==n)for(var t=0;t<n.length;t++){var o=parseInt(n[t].substr(1))+1;r=Math.max(r,o)}return r},p.Expr.prototype._replacements=function(e){for(var n=e.shift(),r=0;r<e.length;r++)n=n.replace(/\%/i,e[r]);return n},p.Expr.prototype._tokenize=function(e){for(var n=-1,r=[];0<e.length;){var t=o(e=e.trim());r.push(t),e=e.substr(t.value.length)}function o(e){for(var n in p.Expr._Expressions){var r=p.Expr._Expressions[n];for(var t in r){var o=r[t],i=o.regexp,a=e.match(i);if(null!==a)return{type:n,value:a[0],method:o.method}}}throw new SyntaxError("Tone.Expr: Unexpected token "+e)}return{next:function(){return r[++n]},peek:function(){return r[n+1]}}},p.Expr.prototype._parseTree=function(e){var t=this._tokenize(e),a=this.isUndef.bind(this);function r(e,n){return!a(e)&&"glue"===e.type&&e.value===n}function o(e,n,r){var t=p.Expr._Expressions[n];if(!a(e))for(var o in t){var i=t[o];if(i.regexp.test(e.value)){if(a(r))return!0;if(i.precedence===r)return!0}}return!1}function i(e){var n;a(e)&&(e=5),n=e<0?function e(){var n,r;n=t.peek();if(o(n,"unary"))return n=t.next(),r=e(),{operator:n.value,method:n.method,args:[r]};return s()}():i(e-1);for(var r=t.peek();o(r,"binary",e);)n={operator:(r=t.next()).value,method:r.method,args:[n,i(e-1)]},r=t.peek();return n}function s(){var e,n;if(e=t.peek(),a(e))throw new SyntaxError("Tone.Expr: Unexpected termination of expression");if("func"===e.type)return function(e){var n=[];if(!r(t.next(),"("))throw new SyntaxError('Tone.Expr: Expected ( in a function call "'+e.value+'"');r(t.peek(),")")||(n=function(){var e,n=[];for(;e=i(),!a(e)&&(n.push(e),r(t.peek(),","));)t.next();return n}());if(r(t.next(),")"))return{method:e.method,args:n,name:name};throw new SyntaxError('Tone.Expr: Expected ) in a function call "'+e.value+'"')}(e=t.next());if("value"===e.type)return{method:(e=t.next()).method,args:e.value};if(r(e,"(")){if(t.next(),n=i(),!r(e=t.next(),")"))throw new SyntaxError("Expected )");return n}throw new SyntaxError("Tone.Expr: Parse error, cannot process token "+e.value)}return i()},p.Expr.prototype._eval=function(e){if(!this.isUndef(e)){var n=e.method(e.args,this);return this._nodes.push(n),n}},p.Expr.prototype._disposeNodes=function(){for(var e=0;e<this._nodes.length;e++){var n=this._nodes[e];this.isFunction(n.dispose)?n.dispose():this.isFunction(n.disconnect)&&n.disconnect(),n=null,this._nodes[e]=null}this._nodes=null},p.Expr.prototype.dispose=function(){p.prototype.dispose.call(this),this._disposeNodes()},p.Expr}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(26),__webpack_require__(16),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){"use strict";return e.GreaterThan=function(t){this.createInsOuts(2,0),this._param=this.input[0]=new e.Subtract(t),this.input[1]=this._param.input[1],this._gtz=this.output=new e.GreaterThanZero,this._param.connect(this._gtz)},e.extend(e.GreaterThan,e.Signal),e.GreaterThan.prototype.dispose=function(){return e.prototype.dispose.call(this),this._param.dispose(),this._param=null,this._gtz.dispose(),this._gtz=null,this},e.GreaterThan}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(5),__webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(s){"use strict";return s.Abs=function(){this._abs=this.input=this.output=new s.WaveShaper(function(s){return 0===s?0:Math.abs(s)},127)},s.extend(s.Abs,s.SignalBase),s.Abs.prototype.dispose=function(){return s.prototype.dispose.call(this),this._abs.dispose(),this._abs=null,this},s.Abs}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(5),__webpack_require__(3),__webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){"use strict";return i.Modulo=function(t){this.createInsOuts(1,0),this._shaper=new i.WaveShaper(Math.pow(2,16)),this._multiply=new i.Multiply,this._subtract=this.output=new i.Subtract,this._modSignal=new i.Signal(t),this.input.fan(this._shaper,this._subtract),this._modSignal.connect(this._multiply,0,0),this._shaper.connect(this._multiply,0,1),this._multiply.connect(this._subtract,0,1),this._setWaveShaper(t)},i.extend(i.Modulo,i.SignalBase),i.Modulo.prototype._setWaveShaper=function(i){this._shaper.setMap(function(t){return Math.floor((t+1e-4)/i)})},Object.defineProperty(i.Modulo.prototype,"value",{get:function(){return this._modSignal.value},set:function(t){this._modSignal.value=t,this._setWaveShaper(t)}}),i.Modulo.prototype.dispose=function(){return i.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this._multiply.dispose(),this._multiply=null,this._subtract.dispose(),this._subtract=null,this._modSignal.dispose(),this._modSignal=null,this},i.Modulo}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){"use strict";return t.Pow=function(e){this._exp=this.defaultArg(e,1),this._expScaler=this.input=this.output=new t.WaveShaper(this._expFunc(this._exp),8192)},t.extend(t.Pow,t.SignalBase),Object.defineProperty(t.Pow.prototype,"value",{get:function(){return this._exp},set:function(e){this._exp=e,this._expScaler.setMap(this._expFunc(this._exp))}}),t.Pow.prototype._expFunc=function(t){return function(e){return Math.pow(Math.abs(e),t)}},t.Pow.prototype.dispose=function(){return t.prototype.dispose.call(this),this._expScaler.dispose(),this._expScaler=null,this},t.Pow}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(5),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){"use strict";return n.AudioToGain=function(){this._norm=this.input=this.output=new n.WaveShaper(function(n){return(n+1)/2})},n.extend(n.AudioToGain,n.SignalBase),n.AudioToGain.prototype.dispose=function(){return n.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},n.AudioToGain}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){"use strict";return e.EqualPowerGain=function(){this._eqPower=this.input=this.output=new e.WaveShaper(function(e){return Math.abs(e)<.001?0:this.equalPowerScale(e)}.bind(this),4096)},e.extend(e.EqualPowerGain,e.SignalBase),e.EqualPowerGain.prototype.dispose=function(){return e.prototype.dispose.call(this),this._eqPower.dispose(),this._eqPower=null,this},e.EqualPowerGain}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var Effect = __webpack_require__(4);

  var EQFilter = __webpack_require__(60);
  /**
   * p5.EQ is an audio effect that performs the function of a multiband
   * audio equalizer. Equalization is used to adjust the balance of
   * frequency compoenents of an audio signal. This process is commonly used
   * in sound production and recording to change the waveform before it reaches
   * a sound output device. EQ can also be used as an audio effect to create
   * interesting distortions by filtering out parts of the spectrum. p5.EQ is
   * built using a chain of Web Audio Biquad Filter Nodes and can be
   * instantiated with 3 or 8 bands. Bands can be added or removed from
   * the EQ by directly modifying p5.EQ.bands (the array that stores filters).
   *
   * This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   * Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   * <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   * <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   * @class p5.EQ
   * @constructor
   * @extends p5.Effect
   * @param {Number} [_eqsize] Constructor will accept 3 or 8, defaults to 3
   * @return {Object} p5.EQ object
   *
   * @example
   * <div><code>
   * let eq, soundFile
   * let eqBandIndex = 0;
   * let eqBandNames = ['lows', 'mids', 'highs'];
   *
   * function preload() {
   *   soundFormats('mp3', 'ogg');
   *   soundFile = loadSound('assets/beat');
   * }
   *
   * function setup() {
   *   let cnv = createCanvas(100, 100);
   *   cnv.mousePressed(toggleSound);
   *
   *   eq = new p5.EQ(eqBandNames.length);
   *   soundFile.disconnect();
   *   eq.process(soundFile);
   * }
   *
   * function draw() {
   *   background(30);
   *   noStroke();
   *   fill(255);
   *   textAlign(CENTER);
   *   text('filtering ', 50, 25);
   *
   *   fill(255, 40, 255);
   *   textSize(26);
   *   text(eqBandNames[eqBandIndex], 50, 55);
   *
   *   fill(255);
   *   textSize(9);
   *
   *   if (!soundFile.isPlaying()) {
   *     text('tap to play', 50, 80);
   *   } else {
   *     text('tap to filter next band', 50, 80)
   *   }
   * }
   *
   * function toggleSound() {
   *   if (!soundFile.isPlaying()) {
   *     soundFile.play();
   *   } else {
   *     eqBandIndex = (eqBandIndex + 1) % eq.bands.length;
   *   }
   *
   *   for (let i = 0; i < eq.bands.length; i++) {
   *     eq.bands[i].gain(0);
   *   }
   *   // filter the band we want to filter
   *   eq.bands[eqBandIndex].gain(-40);
   * }
   * </code></div>
   */


  p5.EQ = function (_eqsize) {
    Effect.call(this); 

    _eqsize = _eqsize === 3 || _eqsize === 8 ? _eqsize : 3;
    var factor;
    _eqsize === 3 ? factor = Math.pow(2, 3) : factor = 2;
    /**
      *  The p5.EQ is built with abstracted p5.Filter objects.
      *  To modify any bands, use methods of the <a
      *  href="/reference/#/p5.Filter" title="p5.Filter reference">
      *  p5.Filter</a> API, especially `gain` and `freq`.
      *  Bands are stored in an array, with indices 0 - 3, or 0 - 7
      *  @property {Array}  bands
      *
    */

    this.bands = [];
    var freq, res;

    for (var i = 0; i < _eqsize; i++) {
      if (i === _eqsize - 1) {
        freq = 21000;
        res = .01;
      } else if (i === 0) {
        freq = 100;
        res = .1;
      } else if (i === 1) {
        freq = _eqsize === 3 ? 360 * factor : 360;
        res = 1;
      } else {
        freq = this.bands[i - 1].freq() * factor;
        res = 1;
      }

      this.bands[i] = this._newBand(freq, res);

      if (i > 0) {
        this.bands[i - 1].connect(this.bands[i].biquad);
      } else {
        this.input.connect(this.bands[i].biquad);
      }
    }

    this.bands[_eqsize - 1].connect(this.output);
  };

  p5.EQ.prototype = Object.create(Effect.prototype);
  /**
   * Process an input by connecting it to the EQ
   * @method  process
   * @param  {Object} src Audio source
   */

  p5.EQ.prototype.process = function (src) {
    src.connect(this.input);
  }; 
  //   * Set the frequency and gain of each band in the EQ. This method should be
  //   * called with 3 or 8 frequency and gain pairs, depending on the size of the EQ.
  //   * ex. eq.set(freq0, gain0, freq1, gain1, freq2, gain2);
  //   *
  //   * @method  set
  //   * @for p5.EQ
  //   * @param {Number} [freq0] Frequency value for band with index 0
  //   * @param {Number} [gain0] Gain value for band with index 0
  //   * @param {Number} [freq1] Frequency value for band with index 1
  //   * @param {Number} [gain1] Gain value for band with index 1
  //   * @param {Number} [freq2] Frequency value for band with index 2
  //   * @param {Number} [gain2] Gain value for band with index 2
  //   * @param {Number} [freq3] Frequency value for band with index 3
  //   * @param {Number} [gain3] Gain value for band with index 3
  //   * @param {Number} [freq4] Frequency value for band with index 4
  //   * @param {Number} [gain4] Gain value for band with index 4
  //   * @param {Number} [freq5] Frequency value for band with index 5
  //   * @param {Number} [gain5] Gain value for band with index 5
  //   * @param {Number} [freq6] Frequency value for band with index 6
  //   * @param {Number} [gain6] Gain value for band with index 6
  //   * @param {Number} [freq7] Frequency value for band with index 7
  //   * @param {Number} [gain7] Gain value for band with index 7
  //   */


  p5.EQ.prototype.set = function () {
    if (arguments.length === this.bands.length * 2) {
      for (var i = 0; i < arguments.length; i += 2) {
        this.bands[i / 2].freq(arguments[i]);
        this.bands[i / 2].gain(arguments[i + 1]);
      }
    } else {
      console.error('Argument mismatch. .set() should be called with ' + this.bands.length * 2 + ' arguments. (one frequency and gain value pair for each band of the eq)');
    }
  };
  /**
   * Add a new band. Creates a p5.Filter and strips away everything but
   * the raw biquad filter. This method returns an abstracted p5.Filter,
   * which can be added to p5.EQ.bands, in order to create new EQ bands.
   * @private
   * @for p5.EQ
   * @method  _newBand
   * @param  {Number} freq
   * @param  {Number} res
   * @return {Object}      Abstracted Filter
   */


  p5.EQ.prototype._newBand = function (freq, res) {
    return new EQFilter(freq, res);
  };

  p5.EQ.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);

    if (this.bands) {
      while (this.bands.length > 0) {
        delete this.bands.pop().dispose();
      }

      delete this.bands;
    }
  };

  return p5.EQ;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var Filter = __webpack_require__(15);

  var p5sound = __webpack_require__(1);
  /**
   *  EQFilter extends p5.Filter with constraints
   *  necessary for the p5.EQ
   *
   *  @private
   */


  var EQFilter = function EQFilter(freq, res) {
    Filter.call(this, 'peaking');
    this.disconnect();
    this.set(freq, res);
    this.biquad.gain.value = 0;
    delete this.input;
    delete this.output;
    delete this._drywet;
    delete this.wet;
  };

  EQFilter.prototype = Object.create(Filter.prototype);

  EQFilter.prototype.amp = function () {
    console.warn('`amp()` is not available for p5.EQ bands. Use `.gain()`');
  };

  EQFilter.prototype.drywet = function () {
    console.warn('`drywet()` is not available for p5.EQ bands.');
  };

  EQFilter.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;

    if (this.biquad) {
      this.biquad.connect(u.input ? u.input : u);
    } else {
      this.output.connect(u.input ? u.input : u);
    }
  };

  EQFilter.prototype.disconnect = function () {
    if (this.biquad) {
      this.biquad.disconnect();
    }
  };

  EQFilter.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.disconnect();
    delete this.biquad;
  };

  return EQFilter;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var Effect = __webpack_require__(4);
  /**
   * Panner3D is based on the <a title="Web Audio Panner docs"  href=
   * "https://developer.mozilla.org/en-US/docs/Web/API/PannerNode">
   * Web Audio Spatial Panner Node</a>.
   * This panner is a spatial processing node that allows audio to be positioned
   * and oriented in 3D space.
   *
   * The position is relative to an <a title="Web Audio Listener docs" href=
   * "https://developer.mozilla.org/en-US/docs/Web/API/AudioListener">
   * Audio Context Listener</a>, which can be accessed
   * by <code>p5.soundOut.audiocontext.listener</code>
   *
   *
   * @class p5.Panner3D
   * @constructor
   */


  p5.Panner3D = function () {
    Effect.call(this);
    /**
     *  <a title="Web Audio Panner docs"  href=
     *  "https://developer.mozilla.org/en-US/docs/Web/API/PannerNode">
     *  Web Audio Spatial Panner Node</a>
     *
     *  Properties include
     *    -  <a title="w3 spec for Panning Model"
     *    href="https://www.w3.org/TR/webaudio/#idl-def-PanningModelType"
     *    >panningModel</a>: "equal power" or "HRTF"
     *    -  <a title="w3 spec for Distance Model"
     *    href="https://www.w3.org/TR/webaudio/#idl-def-DistanceModelType"
     *    >distanceModel</a>: "linear", "inverse", or "exponential"
     *
     *  @property {AudioNode} panner
     *
     */

    this.panner = this.ac.createPanner();
    this.panner.panningModel = 'HRTF';
    this.panner.distanceModel = 'linear';
    this.panner.connect(this.output);
    this.input.connect(this.panner);
  };

  p5.Panner3D.prototype = Object.create(Effect.prototype);
  /**
   * Connect an audio sorce
   *
   * @method  process
   * @for p5.Panner3D
   * @param  {Object} src Input source
   */

  p5.Panner3D.prototype.process = function (src) {
    src.connect(this.input);
  };
  /**
   * Set the X,Y,Z position of the Panner
   * @method set
   * @for p5.Panner3D
   * @param  {Number} xVal
   * @param  {Number} yVal
   * @param  {Number} zVal
   * @param  {Number} time
   * @return {Array}      Updated x, y, z values as an array
   */


  p5.Panner3D.prototype.set = function (xVal, yVal, zVal, time) {
    this.positionX(xVal, time);
    this.positionY(yVal, time);
    this.positionZ(zVal, time);
    return [this.panner.positionX.value, this.panner.positionY.value, this.panner.positionZ.value];
  };
  /**
   * Getter and setter methods for position coordinates
   * @method positionX
   * @for p5.Panner3D
   * @return {Number}      updated coordinate value
   */

  /**
   * Getter and setter methods for position coordinates
   * @method positionY
   * @for p5.Panner3D
   * @return {Number}      updated coordinate value
   */

  /**
   * Getter and setter methods for position coordinates
   * @method positionZ
   * @for p5.Panner3D
   * @return {Number}      updated coordinate value
   */


  p5.Panner3D.prototype.positionX = function (xVal, time) {
    var t = time || 0;

    if (typeof xVal === 'number') {
      this.panner.positionX.value = xVal;
      this.panner.positionX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.positionX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.panner.positionX);
    }

    return this.panner.positionX.value;
  };

  p5.Panner3D.prototype.positionY = function (yVal, time) {
    var t = time || 0;

    if (typeof yVal === 'number') {
      this.panner.positionY.value = yVal;
      this.panner.positionY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.positionY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.panner.positionY);
    }

    return this.panner.positionY.value;
  };

  p5.Panner3D.prototype.positionZ = function (zVal, time) {
    var t = time || 0;

    if (typeof zVal === 'number') {
      this.panner.positionZ.value = zVal;
      this.panner.positionZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.positionZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.panner.positionZ);
    }

    return this.panner.positionZ.value;
  };
  /**
   * Set the X,Y,Z position of the Panner
   * @method  orient
   * @for p5.Panner3D
   * @param  {Number} xVal
   * @param  {Number} yVal
   * @param  {Number} zVal
   * @param  {Number} time
   * @return {Array}      Updated x, y, z values as an array
   */


  p5.Panner3D.prototype.orient = function (xVal, yVal, zVal, time) {
    this.orientX(xVal, time);
    this.orientY(yVal, time);
    this.orientZ(zVal, time);
    return [this.panner.orientationX.value, this.panner.orientationY.value, this.panner.orientationZ.value];
  };
  /**
   * Getter and setter methods for orient coordinates
   * @method orientX
   * @for p5.Panner3D
   * @return {Number}      updated coordinate value
   */

  /**
   * Getter and setter methods for orient coordinates
   * @method orientY
   * @for p5.Panner3D
   * @return {Number}      updated coordinate value
   */

  /**
   * Getter and setter methods for orient coordinates
   * @method orientZ
   * @for p5.Panner3D
   * @return {Number}      updated coordinate value
   */


  p5.Panner3D.prototype.orientX = function (xVal, time) {
    var t = time || 0;

    if (typeof xVal === 'number') {
      this.panner.orientationX.value = xVal;
      this.panner.orientationX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.orientationX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.panner.orientationX);
    }

    return this.panner.orientationX.value;
  };

  p5.Panner3D.prototype.orientY = function (yVal, time) {
    var t = time || 0;

    if (typeof yVal === 'number') {
      this.panner.orientationY.value = yVal;
      this.panner.orientationY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.orientationY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.panner.orientationY);
    }

    return this.panner.orientationY.value;
  };

  p5.Panner3D.prototype.orientZ = function (zVal, time) {
    var t = time || 0;

    if (typeof zVal === 'number') {
      this.panner.orientationZ.value = zVal;
      this.panner.orientationZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.orientationZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.panner.orientationZ);
    }

    return this.panner.orientationZ.value;
  };
  /**
   * Set the rolloff factor and max distance
   * @method  setFalloff
   * @for p5.Panner3D
   * @param {Number} [maxDistance]
   * @param {Number} [rolloffFactor]
   */


  p5.Panner3D.prototype.setFalloff = function (maxDistance, rolloffFactor) {
    this.maxDist(maxDistance);
    this.rolloff(rolloffFactor);
  };
  /**
   * Maxium distance between the source and the listener
   * @method  maxDist
   * @for p5.Panner3D
   * @param  {Number} maxDistance
   * @return {Number} updated value
   */


  p5.Panner3D.prototype.maxDist = function (maxDistance) {
    if (typeof maxDistance === 'number') {
      this.panner.maxDistance = maxDistance;
    }

    return this.panner.maxDistance;
  };
  /**
   * How quickly the volume is reduced as the source moves away from the listener
   * @method  rollof
   * @for p5.Panner3D
   * @param  {Number} rolloffFactor
   * @return {Number} updated value
   */


  p5.Panner3D.prototype.rolloff = function (rolloffFactor) {
    if (typeof rolloffFactor === 'number') {
      this.panner.rolloffFactor = rolloffFactor;
    }

    return this.panner.rolloffFactor;
  };

  p5.Panner3D.dispose = function () {
    Effect.prototype.dispose.apply(this);

    if (this.panner) {
      this.panner.disconnect();
      delete this.panner;
    }
  };

  return p5.Panner3D;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var Effect = __webpack_require__(4); 
  //   * listener is a class that can construct both a Spatial Panner
  //   * and a Spatial Listener. The panner is based on the 
  //   * Web Audio Spatial Panner Node
  //   * https://www.w3.org/TR/webaudio/#the-listenernode-interface
  //   * This panner is a spatial processing node that allows audio to be positioned
  //   * and oriented in 3D space. 
  //   *
  //   * The Listener modifies the properties of the Audio Context Listener. 
  //   * Both objects types use the same methods. The default is a spatial panner.
  //   *
  //   * <code>p5.Panner3D</code> - Constructs a Spatial Panner<br/>
  //   * <code>p5.Listener3D</code> - Constructs a Spatial Listener<br/>
  //   *
  //   * @class listener
  //   * @constructor
  //   * @return {Object} p5.Listener3D Object
  //   *
  //   * @param {Web Audio Node} listener Web Audio Spatial Panning Node
  //   * @param {AudioParam} listener.panningModel "equal power" or "HRTF"
  //   * @param {AudioParam} listener.distanceModel "linear", "inverse", or "exponential"
  //   * @param {String} [type] [Specify construction of a spatial panner or listener]
  //   */


  p5.Listener3D = function (type) {
    this.ac = p5sound.audiocontext;
    this.listener = this.ac.listener;
  }; 
  //   * Connect an audio sorce
  //   * @param  {Object} src Input source
  //   */


  p5.Listener3D.prototype.process = function (src) {
    src.connect(this.input);
  }; 
  //   * Set the X,Y,Z position of the Panner
  //   * @param  {[Number]} xVal
  //   * @param  {[Number]} yVal
  //   * @param  {[Number]} zVal
  //   * @param  {[Number]} time
  //   * @return {[Array]}      [Updated x, y, z values as an array]
  //   */


  p5.Listener3D.prototype.position = function (xVal, yVal, zVal, time) {
    this.positionX(xVal, time);
    this.positionY(yVal, time);
    this.positionZ(zVal, time);
    return [this.listener.positionX.value, this.listener.positionY.value, this.listener.positionZ.value];
  }; 
  //   * Getter and setter methods for position coordinates
  //   * @return {Number}      [updated coordinate value]
  //   */


  p5.Listener3D.prototype.positionX = function (xVal, time) {
    var t = time || 0;

    if (typeof xVal === 'number') {
      this.listener.positionX.value = xVal;
      this.listener.positionX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.positionX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.listener.positionX);
    }

    return this.listener.positionX.value;
  };

  p5.Listener3D.prototype.positionY = function (yVal, time) {
    var t = time || 0;

    if (typeof yVal === 'number') {
      this.listener.positionY.value = yVal;
      this.listener.positionY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.positionY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.listener.positionY);
    }

    return this.listener.positionY.value;
  };

  p5.Listener3D.prototype.positionZ = function (zVal, time) {
    var t = time || 0;

    if (typeof zVal === 'number') {
      this.listener.positionZ.value = zVal;
      this.listener.positionZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.positionZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.listener.positionZ);
    }

    return this.listener.positionZ.value;
  }; 
  //   * Overrides the listener orient() method because Listener has slightly
  //   * different params. In human terms, Forward vectors are the direction the 
  //   * nose is pointing. Up vectors are the direction of the top of the head.
  //   *
  //   * @method orient
  //   * @param  {Number} xValF  Forward vector X direction
  //   * @param  {Number} yValF  Forward vector Y direction
  //   * @param  {Number} zValF  Forward vector Z direction
  //   * @param  {Number} xValU  Up vector X direction
  //   * @param  {Number} yValU  Up vector Y direction
  //   * @param  {Number} zValU  Up vector Z direction
  //   * @param  {Number} time  
  //   * @return {Array}       All orienation params
  //   */


  p5.Listener3D.prototype.orient = function (xValF, yValF, zValF, xValU, yValU, zValU, time) {
    if (arguments.length === 3 || arguments.length === 4) {
      time = arguments[3];
      this.orientForward(xValF, yValF, zValF, time);
    } else if (arguments.length === 6 || arguments === 7) {
      this.orientForward(xValF, yValF, zValF);
      this.orientUp(xValU, yValU, zValU, time);
    }

    return [this.listener.forwardX.value, this.listener.forwardY.value, this.listener.forwardZ.value, this.listener.upX.value, this.listener.upY.value, this.listener.upZ.value];
  };

  p5.Listener3D.prototype.orientForward = function (xValF, yValF, zValF, time) {
    this.forwardX(xValF, time);
    this.forwardY(yValF, time);
    this.forwardZ(zValF, time);
    return [this.listener.forwardX, this.listener.forwardY, this.listener.forwardZ];
  };

  p5.Listener3D.prototype.orientUp = function (xValU, yValU, zValU, time) {
    this.upX(xValU, time);
    this.upY(yValU, time);
    this.upZ(zValU, time);
    return [this.listener.upX, this.listener.upY, this.listener.upZ];
  }; 
  //   * Getter and setter methods for orient coordinates
  //   * @return {Number}      [updated coordinate value]
  //   */


  p5.Listener3D.prototype.forwardX = function (xVal, time) {
    var t = time || 0;

    if (typeof xVal === 'number') {
      this.listener.forwardX.value = xVal;
      this.listener.forwardX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.forwardX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.listener.forwardX);
    }

    return this.listener.forwardX.value;
  };

  p5.Listener3D.prototype.forwardY = function (yVal, time) {
    var t = time || 0;

    if (typeof yVal === 'number') {
      this.listener.forwardY.value = yVal;
      this.listener.forwardY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.forwardY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.listener.forwardY);
    }

    return this.listener.forwardY.value;
  };

  p5.Listener3D.prototype.forwardZ = function (zVal, time) {
    var t = time || 0;

    if (typeof zVal === 'number') {
      this.listener.forwardZ.value = zVal;
      this.listener.forwardZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.forwardZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.listener.forwardZ);
    }

    return this.listener.forwardZ.value;
  };

  p5.Listener3D.prototype.upX = function (xVal, time) {
    var t = time || 0;

    if (typeof xVal === 'number') {
      this.listener.upX.value = xVal;
      this.listener.upX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.upX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.listener.upX);
    }

    return this.listener.upX.value;
  };

  p5.Listener3D.prototype.upY = function (yVal, time) {
    var t = time || 0;

    if (typeof yVal === 'number') {
      this.listener.upY.value = yVal;
      this.listener.upY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.upY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.listener.upY);
    }

    return this.listener.upY.value;
  };

  p5.Listener3D.prototype.upZ = function (zVal, time) {
    var t = time || 0;

    if (typeof zVal === 'number') {
      this.listener.upZ.value = zVal;
      this.listener.upZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.upZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.listener.upZ);
    }

    return this.listener.upZ.value;
  };

  return p5.Listener3D;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var Filter = __webpack_require__(15);

  var Effect = __webpack_require__(4);
  /**
   *  Delay is an echo effect. It processes an existing sound source,
   *  and outputs a delayed version of that sound. The p5.Delay can
   *  produce different effects depending on the delayTime, feedback,
   *  filter, and type. In the example below, a feedback of 0.5 (the
   *  default value) will produce a looping delay that decreases in
   *  volume by 50% each repeat. A filter will cut out the high
   *  frequencies so that the delay does not sound as piercing as the
   *  original source.
   *
   *
   *  This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   *  Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   *  <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   *  <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *  @class p5.Delay
   *  @extends p5.Effect
   *  @constructor
   *  @example
   *  <div><code>
   *  let osc;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    background(220);
   *    textAlign(CENTER);
   *    text('tap to play', width/2, height/2);
   *
   *    osc = new p5.Oscillator('square');
   *    osc.amp(0.5);
   *    delay = new p5.Delay();
   *
   *    // delay.process() accepts 4 parameters:
   *    // source, delayTime (in seconds), feedback, filter frequency
   *    delay.process(osc, 0.12, .7, 2300);
   *
   *    cnv.mousePressed(oscStart);
   *  }
   *
   *  function oscStart() {
   *    osc.start();
   *  }
   *
   *  function mouseReleased() {
   *    osc.stop();
   *  }
   *  </code></div>
   */


  p5.Delay = function () {
    Effect.call(this);
    this._split = this.ac.createChannelSplitter(2);
    this._merge = this.ac.createChannelMerger(2);
    this._leftGain = this.ac.createGain();
    this._rightGain = this.ac.createGain();
    /**
     *  The p5.Delay is built with two
     *  <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     *  Web Audio Delay Nodes</a>, one for each stereo channel.
     *
     *  @for p5.Delay
     *  @property {DelayNode} leftDelay
     */

    this.leftDelay = this.ac.createDelay();
    /**
     *  The p5.Delay is built with two
     *  <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     *  Web Audio Delay Nodes</a>, one for each stereo channel.
     *  @for p5.Delay
     *  @property {DelayNode} rightDelay
     */

    this.rightDelay = this.ac.createDelay();
    this._leftFilter = new Filter();
    this._rightFilter = new Filter();

    this._leftFilter.disconnect();

    this._rightFilter.disconnect();

    this._leftFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);

    this._rightFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);

    this._leftFilter.biquad.Q.setValueAtTime(0.3, this.ac.currentTime);

    this._rightFilter.biquad.Q.setValueAtTime(0.3, this.ac.currentTime); 


    this.input.connect(this._split);
    this.leftDelay.connect(this._leftGain);
    this.rightDelay.connect(this._rightGain);

    this._leftGain.connect(this._leftFilter.input);

    this._rightGain.connect(this._rightFilter.input);

    this._merge.connect(this.wet);

    this._leftFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime);

    this._rightFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime); 


    this.setType(0);
    this._maxDelay = this.leftDelay.delayTime.maxValue; 

    this.feedback(0.5);
  };

  p5.Delay.prototype = Object.create(Effect.prototype);
  /**
   *  Add delay to an audio signal according to a set
   *  of delay parameters.
   *
   *  @method  process
   *  @for p5.Delay
   *  @param  {Object} Signal  An object that outputs audio
   *  @param  {Number} [delayTime] Time (in seconds) of the delay/echo.
   *                               Some browsers limit delayTime to
   *                               1 second.
   *  @param  {Number} [feedback]  sends the delay back through itself
   *                               in a loop that decreases in volume
   *                               each time.
   *  @param  {Number} [lowPass]   Cutoff frequency. Only frequencies
   *                               below the lowPass will be part of the
   *                               delay.
   */

  p5.Delay.prototype.process = function (src, _delayTime, _feedback, _filter) {
    var feedback = _feedback || 0;
    var delayTime = _delayTime || 0;

    if (feedback >= 1.0) {
      throw new Error('Feedback value will force a positive feedback loop.');
    }

    if (delayTime >= this._maxDelay) {
      throw new Error('Delay Time exceeds maximum delay time of ' + this._maxDelay + ' second.');
    }

    src.connect(this.input);
    this.leftDelay.delayTime.setValueAtTime(delayTime, this.ac.currentTime);
    this.rightDelay.delayTime.setValueAtTime(delayTime, this.ac.currentTime);
    this._leftGain.gain.value = feedback;
    this._rightGain.gain.value = feedback;

    if (_filter) {
      this._leftFilter.freq(_filter);

      this._rightFilter.freq(_filter);
    }
  };
  /**
   *  Set the delay (echo) time, in seconds. Usually this value will be
   *  a floating point number between 0.0 and 1.0.
   *
   *  @method  delayTime
   *  @for p5.Delay
   *  @param {Number} delayTime Time (in seconds) of the delay
   */


  p5.Delay.prototype.delayTime = function (t) {
    if (typeof t !== 'number') {
      t.connect(this.leftDelay.delayTime);
      t.connect(this.rightDelay.delayTime);
    } else {
      this.leftDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
      this.rightDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
      this.leftDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
      this.rightDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
    }
  };
  /**
   *  Feedback occurs when Delay sends its signal back through its input
   *  in a loop. The feedback amount determines how much signal to send each
   *  time through the loop. A feedback greater than 1.0 is not desirable because
   *  it will increase the overall output each time through the loop,
   *  creating an infinite feedback loop. The default value is 0.5
   *
   *  @method  feedback
   *  @for p5.Delay
   *  @param {Number|Object} feedback 0.0 to 1.0, or an object such as an
   *                                  Oscillator that can be used to
   *                                  modulate this param
   *  @returns {Number} Feedback value
   *
   */


  p5.Delay.prototype.feedback = function (f) {
    if (f && typeof f !== 'number') {
      f.connect(this._leftGain.gain);
      f.connect(this._rightGain.gain);
    } else if (f >= 1.0) {
      throw new Error('Feedback value will force a positive feedback loop.');
    } else if (typeof f === 'number') {
      this._leftGain.gain.value = f;
      this._rightGain.gain.value = f;
    } 


    return this._leftGain.gain.value;
  };
  /**
   *  Set a lowpass filter frequency for the delay. A lowpass filter
   *  will cut off any frequencies higher than the filter frequency.
   *
   *  @method  filter
   *  @for p5.Delay
   *  @param {Number|Object} cutoffFreq  A lowpass filter will cut off any
   *                              frequencies higher than the filter frequency.
   *  @param {Number|Object} res  Resonance of the filter frequency
   *                              cutoff, or an object (i.e. a p5.Oscillator)
   *                              that can be used to modulate this parameter.
   *                              High numbers (i.e. 15) will produce a resonance,
   *                              low numbers (i.e. .2) will produce a slope.
   */


  p5.Delay.prototype.filter = function (freq, q) {
    this._leftFilter.set(freq, q);

    this._rightFilter.set(freq, q);
  };
  /**
   *  Choose a preset type of delay. 'pingPong' bounces the signal
   *  from the left to the right channel to produce a stereo effect.
   *  Any other parameter will revert to the default delay setting.
   *
   *  @method  setType
   *  @for p5.Delay
   *  @param {String|Number} type 'pingPong' (1) or 'default' (0)
   */


  p5.Delay.prototype.setType = function (t) {
    if (t === 1) {
      t = 'pingPong';
    }

    this._split.disconnect();

    this._leftFilter.disconnect();

    this._rightFilter.disconnect();

    this._split.connect(this.leftDelay, 0);

    this._split.connect(this.rightDelay, 1);

    switch (t) {
      case 'pingPong':
        this._rightFilter.setType(this._leftFilter.biquad.type);

        this._leftFilter.output.connect(this._merge, 0, 0);

        this._rightFilter.output.connect(this._merge, 0, 1);

        this._leftFilter.output.connect(this.rightDelay);

        this._rightFilter.output.connect(this.leftDelay);

        break;

      default:
        this._leftFilter.output.connect(this._merge, 0, 0);

        this._rightFilter.output.connect(this._merge, 0, 1);

        this._leftFilter.output.connect(this.leftDelay);

        this._rightFilter.output.connect(this.rightDelay);

    }
  }; 

  /**
   *  Set the output level of the delay effect.
   *
   *  @method  amp
   *  @for p5.Delay
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param {Number} [rampTime] create a fade that lasts rampTime
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */

  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @for p5.Delay
   *  @param  {Object} unit
   */

  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   *  @for p5.Delay
   */


  p5.Delay.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);

    this._split.disconnect();

    this._leftFilter.dispose();

    this._rightFilter.dispose();

    this._merge.disconnect();

    this._leftGain.disconnect();

    this._rightGain.disconnect();

    this.leftDelay.disconnect();
    this.rightDelay.disconnect();
    this._split = undefined;
    this._leftFilter = undefined;
    this._rightFilter = undefined;
    this._merge = undefined;
    this._leftGain = undefined;
    this._rightGain = undefined;
    this.leftDelay = undefined;
    this.rightDelay = undefined;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var CustomError = __webpack_require__(11);

  var Effect = __webpack_require__(4);
  /**
   *  Reverb adds depth to a sound through a large number of decaying
   *  echoes. It creates the perception that sound is occurring in a
   *  physical space. The p5.Reverb has paramters for Time (how long does the
   *  reverb last) and decayRate (how much the sound decays with each echo)
   *  that can be set with the .set() or .process() methods. The p5.Convolver
   *  extends p5.Reverb allowing you to recreate the sound of actual physical
   *  spaces through convolution.
   *
   *  This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   *  Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   *  <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   *  <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   *  @class p5.Reverb
   *  @extends p5.Effect
   *  @constructor
   *  @example
   *  <div><code>
   *  let soundFile, reverb;
   *  function preload() {
   *    soundFile = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playSound);
   *
   *    reverb = new p5.Reverb();
   *    soundFile.disconnect(); // so we'll only hear reverb...
   *
   *    // connect soundFile to reverb, process w/
   *    // 3 second reverbTime, decayRate of 2%
   *    reverb.process(soundFile, 3, 2);
   *  }
   *
   *  function draw() {
   *    let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
   *    // 1 = all reverb, 0 = no reverb
   *    reverb.drywet(dryWet);
   *
   *    background(220);
   *    text('tap to play', 10, 20);
   *    text('dry/wet: ' + round(dryWet * 100) + '%', 10, height - 20);
   *  }
   *
   *  function playSound() {
   *    soundFile.play();
   *  }
   *  </code></div>
   */


  p5.Reverb = function () {
    Effect.call(this);

    this._initConvolverNode(); 


    this.input.gain.value = 0.5; 

    this._seconds = 3;
    this._decay = 2;
    this._reverse = false;

    this._buildImpulse();
  };

  p5.Reverb.prototype = Object.create(Effect.prototype);

  p5.Reverb.prototype._initConvolverNode = function () {
    this.convolverNode = this.ac.createConvolver();
    this.input.connect(this.convolverNode);
    this.convolverNode.connect(this.wet);
  };

  p5.Reverb.prototype._teardownConvolverNode = function () {
    if (this.convolverNode) {
      this.convolverNode.disconnect();
      delete this.convolverNode;
    }
  };

  p5.Reverb.prototype._setBuffer = function (audioBuffer) {
    this._teardownConvolverNode();

    this._initConvolverNode();

    this.convolverNode.buffer = audioBuffer;
  };
  /**
   *  Connect a source to the reverb, and assign reverb parameters.
   *
   *  @method  process
   *  @for p5.Reverb
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   *  @param  {Number} [seconds] Duration of the reverb, in seconds.
   *                           Min: 0, Max: 10. Defaults to 3.
   *  @param  {Number} [decayRate] Percentage of decay with each echo.
   *                            Min: 0, Max: 100. Defaults to 2.
   *  @param  {Boolean} [reverse] Play the reverb backwards or forwards.
   */


  p5.Reverb.prototype.process = function (src, seconds, decayRate, reverse) {
    src.connect(this.input);
    var rebuild = false;

    if (seconds) {
      this._seconds = seconds;
      rebuild = true;
    }

    if (decayRate) {
      this._decay = decayRate;
    }

    if (reverse) {
      this._reverse = reverse;
    }

    if (rebuild) {
      this._buildImpulse();
    }
  };
  /**
   *  Set the reverb settings. Similar to .process(), but without
   *  assigning a new input.
   *
   *  @method  set
   *  @for p5.Reverb
   *  @param  {Number} [seconds] Duration of the reverb, in seconds.
   *                           Min: 0, Max: 10. Defaults to 3.
   *  @param  {Number} [decayRate] Percentage of decay with each echo.
   *                            Min: 0, Max: 100. Defaults to 2.
   *  @param  {Boolean} [reverse] Play the reverb backwards or forwards.
   */


  p5.Reverb.prototype.set = function (seconds, decayRate, reverse) {
    var rebuild = false;

    if (seconds) {
      this._seconds = seconds;
      rebuild = true;
    }

    if (decayRate) {
      this._decay = decayRate;
    }

    if (reverse) {
      this._reverse = reverse;
    }

    if (rebuild) {
      this._buildImpulse();
    }
  }; 

  /**
   *  Set the output level of the reverb effect.
   *
   *  @method  amp
   *  @for p5.Reverb
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param  {Number} [rampTime] create a fade that lasts rampTime
   *  @param  {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */

  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @for p5.Reverb
   *  @param  {Object} unit
   */

  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   *  @for p5.Reverb
   */

  /**
   *  Inspired by Simple Reverb by Jordan Santell
   *  https://github.com/web-audio-components/simple-reverb/blob/master/index.js
   *
   *  Utility function for building an impulse response
   *  based on the module parameters.
   *
   *  @private
   */


  p5.Reverb.prototype._buildImpulse = function () {
    var rate = this.ac.sampleRate;
    var length = rate * this._seconds;
    var decay = this._decay;
    var impulse = this.ac.createBuffer(2, length, rate);
    var impulseL = impulse.getChannelData(0);
    var impulseR = impulse.getChannelData(1);
    var n, i;

    for (i = 0; i < length; i++) {
      n = this._reverse ? length - i : i;
      impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
      impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }

    this._setBuffer(impulse);
  };

  p5.Reverb.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);

    this._teardownConvolverNode();
  }; 

  /**
   *  <p>p5.Convolver extends p5.Reverb. It can emulate the sound of real
   *  physical spaces through a process called <a href="
   *  https://en.wikipedia.org/wiki/Convolution_reverb#Real_space_simulation">
   *  convolution</a>.</p>
   *
   *  <p>Convolution multiplies any audio input by an "impulse response"
   *  to simulate the dispersion of sound over time. The impulse response is
   *  generated from an audio file that you provide. One way to
   *  generate an impulse response is to pop a balloon in a reverberant space
   *  and record the echo. Convolution can also be used to experiment with
   *  sound.</p>
   *
   *  <p>Use the method <code>createConvolution(path)</code> to instantiate a
   *  p5.Convolver with a path to your impulse response audio file.</p>
   *
   *  @class p5.Convolver
   *  @extends p5.Effect
   *  @constructor
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} [callback] function to call when loading succeeds
   *  @param  {Function} [errorCallback] function to call if loading fails.
   *                                     This function will receive an error or
   *                                     XMLHttpRequest object with information
   *                                     about what went wrong.
   *  @example
   *  <div><code>
   *  let cVerb, sound;
   *  function preload() {
   *    // We have both MP3 and OGG versions of all sound assets
   *    soundFormats('ogg', 'mp3');
   *
   *    // Try replacing 'bx-spring' with other soundfiles like
   *    // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'
   *    cVerb = createConvolver('assets/bx-spring.mp3');
   *
   *    // Try replacing 'Damscray_DancingTiger' with
   *    // 'beat', 'doorbell', lucky_dragons_-_power_melody'
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playSound);
   *    background(220);
   *    text('tap to play', 20, 20);
   *
   *    // disconnect from master output...
   *    sound.disconnect();
   *
   *    // ...and process with cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *  }
   *
   *  function playSound() {
   *    sound.play();
   *  }
   *  </code></div>
   */


  p5.Convolver = function (path, callback, errorCallback) {
    p5.Reverb.call(this);
    /**
     *  Internally, the p5.Convolver uses the a
     *  <a href="http://www.w3.org/TR/webaudio/#ConvolverNode">
     *  Web Audio Convolver Node</a>.
     *
     *  @property {ConvolverNode} convolverNode
     */

    this._initConvolverNode(); 


    this.input.gain.value = 0.5;

    if (path) {
      this.impulses = [];

      this._loadBuffer(path, callback, errorCallback);
    } else {
      this._seconds = 3;
      this._decay = 2;
      this._reverse = false;

      this._buildImpulse();
    }
  };

  p5.Convolver.prototype = Object.create(p5.Reverb.prototype);
  p5.prototype.registerPreloadMethod('createConvolver', p5.prototype);
  /**
   *  Create a p5.Convolver. Accepts a path to a soundfile
   *  that will be used to generate an impulse response.
   *
   *  @method  createConvolver
   *  @for p5
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} [callback] function to call if loading is successful.
   *                                The object will be passed in as the argument
   *                                to the callback function.
   *  @param  {Function} [errorCallback] function to call if loading is not successful.
   *                                A custom error will be passed in as the argument
   *                                to the callback function.
   *  @return {p5.Convolver}
   *  @example
   *  <div><code>
   *  let cVerb, sound;
   *  function preload() {
   *    // We have both MP3 and OGG versions of all sound assets
   *    soundFormats('ogg', 'mp3');
   *
   *    // Try replacing 'bx-spring' with other soundfiles like
   *    // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'
   *    cVerb = createConvolver('assets/bx-spring.mp3');
   *
   *    // Try replacing 'Damscray_DancingTiger' with
   *    // 'beat', 'doorbell', lucky_dragons_-_power_melody'
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playSound);
   *    background(220);
   *    text('tap to play', 20, 20);
   *
   *    // disconnect from master output...
   *    sound.disconnect();
   *
   *    // ...and process with cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *  }
   *
   *  function playSound() {
   *    sound.play();
   *  }
   *  </code></div>
   */

  p5.prototype.createConvolver = function (path, callback, errorCallback) {
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }

    var self = this;
    var cReverb = new p5.Convolver(path, function (buffer) {
      if (typeof callback === 'function') {
        callback(buffer);
      }

      if (typeof self._decrementPreload === 'function') {
        self._decrementPreload();
      }
    }, errorCallback);
    cReverb.impulses = [];
    return cReverb;
  };
  /**
   *  Private method to load a buffer as an Impulse Response,
   *  assign it to the convolverNode, and add to the Array of .impulses.
   *
   *  @param   {String}   path
   *  @param   {Function} callback
   *  @param   {Function} errorCallback
   *  @private
   */


  p5.Convolver.prototype._loadBuffer = function (path, callback, errorCallback) {
    var path = p5.prototype._checkFileFormats(path);

    var self = this;
    var errorTrace = new Error().stack;
    var ac = p5.prototype.getAudioContext();
    var request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
      if (request.status === 200) {
        ac.decodeAudioData(request.response, function (buff) {
          var buffer = {};
          var chunks = path.split('/');
          buffer.name = chunks[chunks.length - 1];
          buffer.audioBuffer = buff;
          self.impulses.push(buffer);

          self._setBuffer(buffer.audioBuffer);

          if (callback) {
            callback(buffer);
          }
        }, 
        function () {
          var err = new CustomError('decodeAudioData', errorTrace, self.url);
          var msg = 'AudioContext error at decodeAudioData for ' + self.url;

          if (errorCallback) {
            err.msg = msg;
            errorCallback(err);
          } else {
            console.error(msg + '\n The error stack trace includes: \n' + err.stack);
          }
        });
      } 
      else {
          var err = new CustomError('loadConvolver', errorTrace, self.url);
          var msg = 'Unable to load ' + self.url + '. The request status was: ' + request.status + ' (' + request.statusText + ')';

          if (errorCallback) {
            err.message = msg;
            errorCallback(err);
          } else {
            console.error(msg + '\n The error stack trace includes: \n' + err.stack);
          }
        }
    }; 


    request.onerror = function () {
      var err = new CustomError('loadConvolver', errorTrace, self.url);
      var msg = 'There was no response from the server at ' + self.url + '. Check the url and internet connectivity.';

      if (errorCallback) {
        err.message = msg;
        errorCallback(err);
      } else {
        console.error(msg + '\n The error stack trace includes: \n' + err.stack);
      }
    };

    request.send();
  };

  p5.Convolver.prototype.set = null;
  /**
   *  Connect a source to the convolver.
   *
   *  @method  process
   *  @for p5.Convolver
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   *  @example
   *  <div><code>
   *  let cVerb, sound;
   *  function preload() {
   *    // We have both MP3 and OGG versions of all sound assets
   *    soundFormats('ogg', 'mp3');
   *
   *    // Try replacing 'bx-spring' with other soundfiles like
   *    // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'
   *    cVerb = createConvolver('assets/bx-spring.mp3');
   *
   *    // Try replacing 'Damscray_DancingTiger' with
   *    // 'beat', 'doorbell', lucky_dragons_-_power_melody'
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playSound);
   *    background(220);
   *    text('tap to play', 20, 20);
   *
   *    // disconnect from master output...
   *    sound.disconnect();
   *
   *    // ...and process with cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *  }
   *
   *  function playSound() {
   *    sound.play();
   *  }
   *
   *  </code></div>
   */

  p5.Convolver.prototype.process = function (src) {
    src.connect(this.input);
  };
  /**
   *  If you load multiple impulse files using the .addImpulse method,
   *  they will be stored as Objects in this Array. Toggle between them
   *  with the <code>toggleImpulse(id)</code> method.
   *
   *  @property {Array} impulses
   *  @for p5.Convolver
   */


  p5.Convolver.prototype.impulses = [];
  /**
   *  Load and assign a new Impulse Response to the p5.Convolver.
   *  The impulse is added to the <code>.impulses</code> array. Previous
   *  impulses can be accessed with the <code>.toggleImpulse(id)</code>
   *  method.
   *
   *  @method  addImpulse
   *  @for p5.Convolver
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} callback function (optional)
   *  @param  {Function} errorCallback function (optional)
   */

  p5.Convolver.prototype.addImpulse = function (path, callback, errorCallback) {
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }

    this._loadBuffer(path, callback, errorCallback);
  };
  /**
   *  Similar to .addImpulse, except that the <code>.impulses</code>
   *  Array is reset to save memory. A new <code>.impulses</code>
   *  array is created with this impulse as the only item.
   *
   *  @method  resetImpulse
   *  @for p5.Convolver
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} callback function (optional)
   *  @param  {Function} errorCallback function (optional)
   */


  p5.Convolver.prototype.resetImpulse = function (path, callback, errorCallback) {
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }

    this.impulses = [];

    this._loadBuffer(path, callback, errorCallback);
  };
  /**
   *  If you have used <code>.addImpulse()</code> to add multiple impulses
   *  to a p5.Convolver, then you can use this method to toggle between
   *  the items in the <code>.impulses</code> Array. Accepts a parameter
   *  to identify which impulse you wish to use, identified either by its
   *  original filename (String) or by its position in the <code>.impulses
   *  </code> Array (Number).<br/>
   *  You can access the objects in the .impulses Array directly. Each
   *  Object has two attributes: an <code>.audioBuffer</code> (type:
   *  Web Audio <a href="
   *  http://webaudio.github.io/web-audio-api/#the-audiobuffer-interface">
   *  AudioBuffer)</a> and a <code>.name</code>, a String that corresponds
   *  with the original filename.
   *
   *  @method toggleImpulse
   *  @for p5.Convolver
   *  @param {String|Number} id Identify the impulse by its original filename
   *                            (String), or by its position in the
   *                            <code>.impulses</code> Array (Number).
   */


  p5.Convolver.prototype.toggleImpulse = function (id) {
    if (typeof id === 'number' && id < this.impulses.length) {
      this._setBuffer(this.impulses[id].audioBuffer);
    }

    if (typeof id === 'string') {
      for (var i = 0; i < this.impulses.length; i++) {
        if (this.impulses[i].name === id) {
          this._setBuffer(this.impulses[i].audioBuffer);

          break;
        }
      }
    }
  };

  p5.Convolver.prototype.dispose = function () {
    p5.Reverb.prototype.dispose.apply(this); 

    for (var i in this.impulses) {
      if (this.impulses[i]) {
        this.impulses[i] = null;
      }
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1); 


  var Clock = __webpack_require__(27);

  p5.Metro = function () {
    this.clock = new Clock({
      'callback': this.ontick.bind(this)
    });
    this.syncedParts = [];
    this.bpm = 120; 

    this._init();

    this.prevTick = 0;
    this.tatumTime = 0;

    this.tickCallback = function () {};
  };

  p5.Metro.prototype.ontick = function (tickTime) {
    var elapsedTime = tickTime - this.prevTick;
    var secondsFromNow = tickTime - p5sound.audiocontext.currentTime;

    if (elapsedTime - this.tatumTime <= -0.02) {
      return;
    } else {
      this.prevTick = tickTime; 

      var self = this;
      this.syncedParts.forEach(function (thisPart) {
        if (!thisPart.isPlaying) return;
        thisPart.incrementStep(secondsFromNow); 

        thisPart.phrases.forEach(function (thisPhrase) {
          var phraseArray = thisPhrase.sequence;
          var bNum = self.metroTicks % phraseArray.length;

          if (phraseArray[bNum] !== 0 && (self.metroTicks < phraseArray.length || !thisPhrase.looping)) {
            thisPhrase.callback(secondsFromNow, phraseArray[bNum]);
          }
        });
      });
      this.metroTicks += 1;
      this.tickCallback(secondsFromNow);
    }
  };

  p5.Metro.prototype.setBPM = function (bpm, rampTime) {
    var beatTime = 60 / (bpm * this.tatums);
    var now = p5sound.audiocontext.currentTime;
    this.tatumTime = beatTime;
    var rampTime = rampTime || 0;
    this.clock.frequency.setValueAtTime(this.clock.frequency.value, now);
    this.clock.frequency.linearRampToValueAtTime(bpm, now + rampTime);
    this.bpm = bpm;
  };

  p5.Metro.prototype.getBPM = function () {
    return this.clock.getRate() / this.tatums * 60;
  };

  p5.Metro.prototype._init = function () {
    this.metroTicks = 0; 
  }; 


  p5.Metro.prototype.resetSync = function (part) {
    this.syncedParts = [part];
  }; 


  p5.Metro.prototype.pushSync = function (part) {
    this.syncedParts.push(part);
  };

  p5.Metro.prototype.start = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    this.clock.start(now + t);
    this.setBPM(this.bpm);
  };

  p5.Metro.prototype.stop = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    this.clock.stop(now + t);
  };

  p5.Metro.prototype.beatLength = function (tatums) {
    this.tatums = 1 / tatums / 4; 
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(24),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){"use strict";return t.TimelineState=function(e){t.Timeline.call(this),this._initial=e},t.extend(t.TimelineState,t.Timeline),t.TimelineState.prototype.getValueAtTime=function(e){var t=this.get(e);return null!==t?t.state:this._initial},t.TimelineState.prototype.setStateAtTime=function(e,t){this.add({state:e,time:t})},t.TimelineState}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var BPM = 120;
  /**
   *  Set the global tempo, in beats per minute, for all
   *  p5.Parts. This method will impact all active p5.Parts.
   *
   *  @method setBPM
   *  @for p5
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} rampTime Seconds from now
   */

  p5.prototype.setBPM = function (bpm, rampTime) {
    BPM = bpm;

    for (var i in p5sound.parts) {
      if (p5sound.parts[i]) {
        p5sound.parts[i].setBPM(bpm, rampTime);
      }
    }
  };
  /**
   *  <p>A phrase is a pattern of musical events over time, i.e.
   *  a series of notes and rests.</p>
   *
   *  <p>Phrases must be added to a p5.Part for playback, and
   *  each part can play multiple phrases at the same time.
   *  For example, one Phrase might be a kick drum, another
   *  could be a snare, and another could be the bassline.</p>
   *
   *  <p>The first parameter is a name so that the phrase can be
   *  modified or deleted later. The callback is a a function that
   *  this phrase will call at every step—for example it might be
   *  called <code>playNote(value){}</code>. The array determines
   *  which value is passed into the callback at each step of the
   *  phrase. It can be numbers, an object with multiple numbers,
   *  or a zero (0) indicates a rest so the callback won't be called).</p>
   *
   *  @class p5.Phrase
   *  @constructor
   *  @param {String}   name     Name so that you can access the Phrase.
   *  @param {Function} callback The name of a function that this phrase
   *                             will call. Typically it will play a sound,
   *                             and accept two parameters: a time at which
   *                             to play the sound (in seconds from now),
   *                             and a value from the sequence array. The
   *                             time should be passed into the play() or
   *                             start() method to ensure precision.
   *  @param {Array}   sequence    Array of values to pass into the callback
   *                            at each step of the phrase.
   *  @example
   *  <div><code>
   *  let mySound, myPhrase, myPart;
   *  let pattern = [1,0,0,2,0,2,0,0];
   *
   *  function preload() {
   *    mySound = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playMyPart);
   *    background(220);
   *    text('tap to play', width/2, height/2);
   *    textAlign(CENTER, CENTER);
   *
   *    myPhrase = new p5.Phrase('bbox', onEachStep, pattern);
   *    myPart = new p5.Part();
   *    myPart.addPhrase(myPhrase);
   *    myPart.setBPM(60);
   *  }
   *
   *  function onEachStep(time, playbackRate) {
   *    mySound.rate(playbackRate);
   *    mySound.play(time);
   *  }
   *
   *  function playMyPart() {
   *    userStartAudio();
   *    myPart.start();
   *  }
   *  </code></div>
   */


  p5.Phrase = function (name, callback, sequence) {
    this.phraseStep = 0;
    this.name = name;
    this.callback = callback;
    /**
     * Array of values to pass into the callback
     * at each step of the phrase. Depending on the callback
     * function's requirements, these values may be numbers,
     * strings, or an object with multiple parameters.
     * Zero (0) indicates a rest.
     *
     * @property {Array} sequence
     */

    this.sequence = sequence;
  };
  /**
   *  <p>A p5.Part plays back one or more p5.Phrases. Instantiate a part
   *  with steps and tatums. By default, each step represents a 1/16th note.</p>
   *
   *  <p>See p5.Phrase for more about musical timing.</p>
   *
   *  @class p5.Part
   *  @constructor
   *  @param {Number} [steps]   Steps in the part
   *  @param {Number} [tatums] Divisions of a beat, e.g. use 1/4, or 0.25 for a quater note (default is 1/16, a sixteenth note)
   *  @example
   *  <div><code>
   *  let box, drum, myPart;
   *  let boxPat = [1,0,0,2,0,2,0,0];
   *  let drumPat = [0,1,1,0,2,0,1,0];
   *
   *  function preload() {
   *    box = loadSound('assets/beatbox.mp3');
   *    drum = loadSound('assets/drum.mp3');
   *  }
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(playMyPart);
   *    background(220);
   *    textAlign(CENTER, CENTER);
   *    text('tap to play', width/2, height/2);
   *
   *    let boxPhrase = new p5.Phrase('box', playBox, boxPat);
   *    let drumPhrase = new p5.Phrase('drum', playDrum, drumPat);
   *    myPart = new p5.Part();
   *    myPart.addPhrase(boxPhrase);
   *    myPart.addPhrase(drumPhrase);
   *    myPart.setBPM(60);
   *  }
   *
   *  function playBox(time, playbackRate) {
   *    box.rate(playbackRate);
   *    box.play(time);
   *  }
   *
   *  function playDrum(time, playbackRate) {
   *    drum.rate(playbackRate);
   *    drum.play(time);
   *  }
   *
   *  function playMyPart() {
   *    userStartAudio();
   *
   *    myPart.start();
   *  }
   *  </code></div>
   */


  p5.Part = function (steps, bLength) {
    this.length = steps || 0; 

    this.partStep = 0;
    this.phrases = [];
    this.isPlaying = false;
    this.noLoop();
    this.tatums = bLength || 0.0625; 

    this.metro = new p5.Metro();

    this.metro._init();

    this.metro.beatLength(this.tatums);
    this.metro.setBPM(BPM);
    p5sound.parts.push(this);

    this.callback = function () {};
  };
  /**
   *  Set the tempo of this part, in Beats Per Minute.
   *
   *  @method  setBPM
   *  @for p5.Part
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} [rampTime] Seconds from now
   */


  p5.Part.prototype.setBPM = function (tempo, rampTime) {
    this.metro.setBPM(tempo, rampTime);
  };
  /**
   *  Returns the tempo, in Beats Per Minute, of this part.
   *
   *  @method getBPM
   *  @for p5.Part
   *  @return {Number}
   */


  p5.Part.prototype.getBPM = function () {
    return this.metro.getBPM();
  };
  /**
   *  Start playback of this part. It will play
   *  through all of its phrases at a speed
   *  determined by setBPM.
   *
   *  @method  start
   *  @for p5.Part
   *  @param  {Number} [time] seconds from now
   */


  p5.Part.prototype.start = function (time) {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.metro.resetSync(this);
      var t = time || 0;
      this.metro.start(t);
    }
  };
  /**
   *  Loop playback of this part. It will begin
   *  looping through all of its phrases at a speed
   *  determined by setBPM.
   *
   *  @method  loop
   *  @for p5.Part
   *  @param  {Number} [time] seconds from now
   */


  p5.Part.prototype.loop = function (time) {
    this.looping = true; 

    this.onended = function () {
      this.partStep = 0;
    };

    var t = time || 0;
    this.start(t);
  };
  /**
   *  Tell the part to stop looping.
   *
   *  @method  noLoop
   *  @for p5.Part
   */


  p5.Part.prototype.noLoop = function () {
    this.looping = false; 

    this.onended = function () {
      this.stop();
    };
  };
  /**
   *  Stop the part and cue it to step 0. Playback will resume from the begining of the Part when it is played again.
   *
   *  @method  stop
   *  @for p5.Part
   *  @param  {Number} [time] seconds from now
   */


  p5.Part.prototype.stop = function (time) {
    this.partStep = 0;
    this.pause(time);
  };
  /**
   *  Pause the part. Playback will resume
   *  from the current step.
   *
   *  @method  pause
   *  @for p5.Part
   *  @param  {Number} time seconds from now
   */


  p5.Part.prototype.pause = function (time) {
    this.isPlaying = false;
    var t = time || 0;
    this.metro.stop(t);
  };
  /**
   *  Add a p5.Phrase to this Part.
   *
   *  @method  addPhrase
   *  @for p5.Part
   *  @param {p5.Phrase}   phrase   reference to a p5.Phrase
   */


  p5.Part.prototype.addPhrase = function (name, callback, array) {
    var p;

    if (arguments.length === 3) {
      p = new p5.Phrase(name, callback, array);
    } else if (arguments[0] instanceof p5.Phrase) {
      p = arguments[0];
    } else {
      throw 'invalid input. addPhrase accepts name, callback, array or a p5.Phrase';
    }

    this.phrases.push(p); 

    if (p.sequence.length > this.length) {
      this.length = p.sequence.length;
    }
  };
  /**
   *  Remove a phrase from this part, based on the name it was
   *  given when it was created.
   *
   *  @method  removePhrase
   *  @for p5.Part
   *  @param  {String} phraseName
   */


  p5.Part.prototype.removePhrase = function (name) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        this.phrases.splice(i, 1);
      }
    }
  };
  /**
   *  Get a phrase from this part, based on the name it was
   *  given when it was created. Now you can modify its array.
   *
   *  @method  getPhrase
   *  @for p5.Part
   *  @param  {String} phraseName
   */


  p5.Part.prototype.getPhrase = function (name) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        return this.phrases[i];
      }
    }
  };
  /**
   *  Find all sequences with the specified name, and replace their patterns with the specified array.
   *
   *  @method  replaceSequence
   *  @for p5.Part
   *  @param  {String} phraseName
   *  @param  {Array} sequence  Array of values to pass into the callback
   *                            at each step of the phrase.
   */


  p5.Part.prototype.replaceSequence = function (name, array) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        this.phrases[i].sequence = array;
      }
    }
  };

  p5.Part.prototype.incrementStep = function (time) {
    if (this.partStep < this.length - 1) {
      this.callback(time);
      this.partStep += 1;
    } else {
      if (!this.looping && this.partStep === this.length - 1) {
        this.onended();
      }
    }
  };
  /**
   *  Set the function that will be called at every step. This will clear the previous function.
   *
   *  @method onStep
   *  @for p5.Part
   *  @param  {Function} callback The name of the callback
   *                              you want to fire
   *                              on every beat/tatum.
   */


  p5.Part.prototype.onStep = function (callback) {
    this.callback = callback;
  }; 

  /**
   *  A Score consists of a series of Parts. The parts will
   *  be played back in order. For example, you could have an
   *  A part, a B part, and a C part, and play them back in this order
   *  <code>new p5.Score(a, a, b, a, c)</code>
   *
   *  @class p5.Score
   *  @constructor
   *  @param {p5.Part} [...parts] One or multiple parts, to be played in sequence.
   */


  p5.Score = function () {
    this.parts = [];
    this.currentPart = 0;
    var thisScore = this;

    for (var i in arguments) {
      if (arguments[i] && this.parts[i]) {
        this.parts[i] = arguments[i];
        this.parts[i].nextPart = this.parts[i + 1];

        this.parts[i].onended = function () {
          thisScore.resetPart(i);
          playNextPart(thisScore);
        };
      }
    }

    this.looping = false;
  };

  p5.Score.prototype.onended = function () {
    if (this.looping) {
      this.parts[0].start();
    } else {
      this.parts[this.parts.length - 1].onended = function () {
        this.stop();
        this.resetParts();
      };
    }

    this.currentPart = 0;
  };
  /**
   *  Start playback of the score.
   *
   *  @method  start
   *  @for p5.Score
   */


  p5.Score.prototype.start = function () {
    this.parts[this.currentPart].start();
    this.scoreStep = 0;
  };
  /**
   *  Stop playback of the score.
   *
   *  @method  stop
   *  @for p5.Score
   */


  p5.Score.prototype.stop = function () {
    this.parts[this.currentPart].stop();
    this.currentPart = 0;
    this.scoreStep = 0;
  };
  /**
   *  Pause playback of the score.
   *
   *  @method  pause
   *  @for p5.Score
   */


  p5.Score.prototype.pause = function () {
    this.parts[this.currentPart].stop();
  };
  /**
   *  Loop playback of the score.
   *
   *  @method  loop
   *  @for p5.Score
   */


  p5.Score.prototype.loop = function () {
    this.looping = true;
    this.start();
  };
  /**
   *  Stop looping playback of the score. If it
   *  is currently playing, this will go into effect
   *  after the current round of playback completes.
   *
   *  @method  noLoop
   *  @for p5.Score
   */


  p5.Score.prototype.noLoop = function () {
    this.looping = false;
  };

  p5.Score.prototype.resetParts = function () {
    var self = this;
    this.parts.forEach(function (part) {
      self.resetParts[part];
    });
  };

  p5.Score.prototype.resetPart = function (i) {
    this.parts[i].stop();
    this.parts[i].partStep = 0;

    for (var p in this.parts[i].phrases) {
      if (this.parts[i]) {
        this.parts[i].phrases[p].phraseStep = 0;
      }
    }
  };
  /**
   *  Set the tempo for all parts in the score
   *
   *  @method setBPM
   *  @for p5.Score
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} rampTime Seconds from now
   */


  p5.Score.prototype.setBPM = function (bpm, rampTime) {
    for (var i in this.parts) {
      if (this.parts[i]) {
        this.parts[i].setBPM(bpm, rampTime);
      }
    }
  };

  function playNextPart(aScore) {
    aScore.currentPart++;

    if (aScore.currentPart >= aScore.parts.length) {
      aScore.scoreStep = 0;
      aScore.onended();
    } else {
      aScore.scoreStep = 0;
      aScore.parts[aScore.currentPart - 1].stop();
      aScore.parts[aScore.currentPart].start();
    }
  }
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var Clock = __webpack_require__(27);
  /**
   * SoundLoop
   *
   * @class p5.SoundLoop
   * @constructor
   *
   * @param {Function} callback this function will be called on each iteration of theloop
   * @param {Number|String} [interval] amount of time (if a number) or beats (if a string, following <a href = "https://github.com/Tonejs/Tone.js/wiki/Time">Tone.Time</a> convention) for each iteration of the loop. Defaults to 1 second.
   *
   * @example
   * <div><code>
   *  let synth, soundLoop;
   *  let notePattern = [60, 62, 64, 67, 69, 72];
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    colorMode(HSB);
   *    background(0, 0, 86);
   *    text('tap to start/stop', 10, 20);
   *
   *    //the looper's callback is passed the timeFromNow
   *    //this value should be used as a reference point from
   *    //which to schedule sounds
   *    let intervalInSeconds = 0.2;
   *    soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
   *
   *    synth = new p5.MonoSynth();
   * }
   *
   * function canvasPressed() {
   *   // ensure audio is enabled
   *   userStartAudio();
   *
   *   if (soundLoop.isPlaying) {
   *     soundLoop.stop();
   *   } else {
   *     // start the loop
   *     soundLoop.start();
   *   }
   * }
   *
   * function onSoundLoop(timeFromNow) {
   *   let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
   *   let note = midiToFreq(notePattern[noteIndex]);
   *   synth.play(note, 0.5, timeFromNow);
   *   background(noteIndex * 360 / notePattern.length, 50, 100);
   * }
   * </code></div>
   */


  p5.SoundLoop = function (callback, interval) {
    this.callback = callback;
    /**
     * musicalTimeMode uses <a href = "https://github.com/Tonejs/Tone.js/wiki/Time">Tone.Time</a> convention
     * true if string, false if number
     * @property {Boolean} musicalTimeMode
     */

    this.musicalTimeMode = typeof this._interval === 'number' ? false : true;
    this._interval = interval || 1;
    /**
     * musicalTimeMode variables
     * modify these only when the interval is specified in musicalTime format as a string
     */

    this._timeSignature = 4;
    this._bpm = 60;
    this.isPlaying = false;
    /**
     * Set a limit to the number of loops to play. defaults to Infinity
     * @property {Number} maxIterations
     */

    this.maxIterations = Infinity;
    var self = this;
    this.clock = new Clock({
      'callback': function callback(time) {
        var timeFromNow = time - p5sound.audiocontext.currentTime;
        /**
         * Do not initiate the callback if timeFromNow is < 0
         * This ususually occurs for a few milliseconds when the page
         * is not fully loaded
         *
         * The callback should only be called until maxIterations is reached
         */

        if (timeFromNow > 0 && self.iterations <= self.maxIterations) {
          self.callback(timeFromNow);
        }
      },
      'frequency': this._calcFreq()
    });
  };
  /**
   * Start the loop
   * @method  start
   * @for p5.SoundLoop
   * @param  {Number} [timeFromNow] schedule a starting time
   */


  p5.SoundLoop.prototype.start = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;

    if (!this.isPlaying) {
      this.clock.start(now + t);
      this.isPlaying = true;
    }
  };
  /**
   * Stop the loop
   * @method  stop
   * @for p5.SoundLoop
   * @param  {Number} [timeFromNow] schedule a stopping time
   */


  p5.SoundLoop.prototype.stop = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;

    if (this.isPlaying) {
      this.clock.stop(now + t);
      this.isPlaying = false;
    }
  };
  /**
   * Pause the loop
   * @method pause
   * @for p5.SoundLoop
   * @param  {Number} [timeFromNow] schedule a pausing time
   */


  p5.SoundLoop.prototype.pause = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;

    if (this.isPlaying) {
      this.clock.pause(now + t);
      this.isPlaying = false;
    }
  };
  /**
   * Synchronize loops. Use this method to start two more more loops in synchronization
   * or to start a loop in synchronization with a loop that is already playing
   * This method will schedule the implicit loop in sync with the explicit master loop
   * i.e. loopToStart.syncedStart(loopToSyncWith)
   *
   * @method  syncedStart
   * @for p5.SoundLoop
   * @param  {Object} otherLoop   a p5.SoundLoop to sync with
   * @param  {Number} [timeFromNow] Start the loops in sync after timeFromNow seconds
   */


  p5.SoundLoop.prototype.syncedStart = function (otherLoop, timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;

    if (!otherLoop.isPlaying) {
      otherLoop.clock.start(now + t);
      otherLoop.isPlaying = true;
      this.clock.start(now + t);
      this.isPlaying = true;
    } else if (otherLoop.isPlaying) {
      var time = otherLoop.clock._nextTick - p5sound.audiocontext.currentTime;
      this.clock.start(now + time);
      this.isPlaying = true;
    }
  };
  /**
   * Updates frequency value, reflected in next callback
   * @private
   * @for p5.SoundLoop
   * @method  _update
   */


  p5.SoundLoop.prototype._update = function () {
    this.clock.frequency.value = this._calcFreq();
  };
  /**
   * Calculate the frequency of the clock's callback based on bpm, interval, and timesignature
   * @private
   * @for p5.SoundLoop
   * @method  _calcFreq
   * @return {Number} new clock frequency value
   */


  p5.SoundLoop.prototype._calcFreq = function () {
    if (typeof this._interval === 'number') {
      this.musicalTimeMode = false;
      return 1 / this._interval;
    } 
    else if (typeof this._interval === 'string') {
        this.musicalTimeMode = true;
        return this._bpm / 60 / this._convertNotation(this._interval) * (this._timeSignature / 4);
      }
  };
  /**
   * Convert notation from musical time format to seconds
   * Uses <a href = "https://github.com/Tonejs/Tone.js/wiki/Time">Tone.Time</a> convention
   * @private
   * @for p5.SoundLoop
   * @method _convertNotation
   * @param  {String} value value to be converted
   * @return {Number}       converted value in seconds
   */


  p5.SoundLoop.prototype._convertNotation = function (value) {
    var type = value.slice(-1);
    value = Number(value.slice(0, -1));

    switch (type) {
      case 'm':
        return this._measure(value);

      case 'n':
        return this._note(value);

      default:
        console.warn('Specified interval is not formatted correctly. See Tone.js ' + 'timing reference for more info: https://github.com/Tonejs/Tone.js/wiki/Time');
    }
  };
  /**
   * Helper conversion methods of measure and note
   * @private
   * @for p5.SoundLoop
   * @method  _measure
   */


  p5.SoundLoop.prototype._measure = function (value) {
    return value * this._timeSignature;
  };
  /**
   * @private
   * @method  _note
   * @for p5.SoundLoop
   */


  p5.SoundLoop.prototype._note = function (value) {
    return this._timeSignature / value;
  };
  /**
   * Getters and Setters, setting any paramter will result in a change in the clock's
   * frequency, that will be reflected after the next callback
   * beats per minute (defaults to 60)
   * @property {Number} bpm
   * @for p5.SoundLoop
   */


  Object.defineProperty(p5.SoundLoop.prototype, 'bpm', {
    get: function get() {
      return this._bpm;
    },
    set: function set(bpm) {
      if (!this.musicalTimeMode) {
        console.warn('Changing the BPM in "seconds" mode has no effect. ' + 'BPM is only relevant in musicalTimeMode ' + 'when the interval is specified as a string ' + '("2n", "4n", "1m"...etc)');
      }

      this._bpm = bpm;

      this._update();
    }
  });
  /**
   * number of quarter notes in a measure (defaults to 4)
   * @property {Number} timeSignature
   * @for p5.SoundLoop
   */

  Object.defineProperty(p5.SoundLoop.prototype, 'timeSignature', {
    get: function get() {
      return this._timeSignature;
    },
    set: function set(timeSig) {
      if (!this.musicalTimeMode) {
        console.warn('Changing the timeSignature in "seconds" mode has no effect. ' + 'BPM is only relevant in musicalTimeMode ' + 'when the interval is specified as a string ' + '("2n", "4n", "1m"...etc)');
      }

      this._timeSignature = timeSig;

      this._update();
    }
  });
  /**
   * length of the loops interval
   * @property {Number|String} interval
   * @for p5.SoundLoop
   */

  Object.defineProperty(p5.SoundLoop.prototype, 'interval', {
    get: function get() {
      return this._interval;
    },
    set: function set(interval) {
      this.musicalTimeMode = typeof interval === 'Number' ? false : true;
      this._interval = interval;

      this._update();
    }
  });
  /**
   * how many times the callback has been called so far
   * @property {Number} iterations
   * @for p5.SoundLoop
   * @readonly
   */

  Object.defineProperty(p5.SoundLoop.prototype, 'iterations', {
    get: function get() {
      return this.clock.ticks;
    }
  });
  return p5.SoundLoop;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  'use strict';

  var p5sound = __webpack_require__(1);

  var Effect = __webpack_require__(4);

  var CustomError = __webpack_require__(11);
  /**
   * Compressor is an audio effect class that performs dynamics compression
   * on an audio input source. This is a very commonly used technique in music
   * and sound production. Compression creates an overall louder, richer,
   * and fuller sound by lowering the volume of louds and raising that of softs.
   * Compression can be used to avoid clipping (sound distortion due to
   * peaks in volume) and is especially useful when many sounds are played
   * at once. Compression can be used on indivudal sound sources in addition
   * to the master output.
   *
   * This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   * Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   * <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   * <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   * @class p5.Compressor
   * @constructor
   * @extends p5.Effect
   *
   *
   */


  p5.Compressor = function () {
    Effect.call(this);
    /**
     * The p5.Compressor is built with a <a href="https://www.w3.org/TR/webaudio/#the-dynamicscompressornode-interface"
    *   target="_blank" title="W3 spec for Dynamics Compressor Node">Web Audio Dynamics Compressor Node
    *   </a>
     * @property {AudioNode} compressor
     */

    this.compressor = this.ac.createDynamicsCompressor();
    this.input.connect(this.compressor);
    this.compressor.connect(this.wet);
  };

  p5.Compressor.prototype = Object.create(Effect.prototype);
  /**
   * Performs the same function as .connect, but also accepts
   * optional parameters to set compressor's audioParams
   * @method process
   * @for p5.Compressor
   *
   * @param {Object} src         Sound source to be connected
   *
   * @param {Number} [attack]     The amount of time (in seconds) to reduce the gain by 10dB,
   *                            default = .003, range 0 - 1
   * @param {Number} [knee]       A decibel value representing the range above the
   *                            threshold where the curve smoothly transitions to the "ratio" portion.
   *                            default = 30, range 0 - 40
   * @param {Number} [ratio]      The amount of dB change in input for a 1 dB change in output
   *                            default = 12, range 1 - 20
   * @param {Number} [threshold]  The decibel value above which the compression will start taking effect
   *                            default = -24, range -100 - 0
   * @param {Number} [release]    The amount of time (in seconds) to increase the gain by 10dB
   *                            default = .25, range 0 - 1
   */

  p5.Compressor.prototype.process = function (src, attack, knee, ratio, threshold, release) {
    src.connect(this.input);
    this.set(attack, knee, ratio, threshold, release);
  };
  /**
   * Set the paramters of a compressor.
   * @method  set
   * @for p5.Compressor
   * @param {Number} attack     The amount of time (in seconds) to reduce the gain by 10dB,
   *                            default = .003, range 0 - 1
   * @param {Number} knee       A decibel value representing the range above the
   *                            threshold where the curve smoothly transitions to the "ratio" portion.
   *                            default = 30, range 0 - 40
   * @param {Number} ratio      The amount of dB change in input for a 1 dB change in output
   *                            default = 12, range 1 - 20
   * @param {Number} threshold  The decibel value above which the compression will start taking effect
   *                            default = -24, range -100 - 0
   * @param {Number} release    The amount of time (in seconds) to increase the gain by 10dB
   *                            default = .25, range 0 - 1
   */


  p5.Compressor.prototype.set = function (attack, knee, ratio, threshold, release) {
    if (typeof attack !== 'undefined') {
      this.attack(attack);
    }

    if (typeof knee !== 'undefined') {
      this.knee(knee);
    }

    if (typeof ratio !== 'undefined') {
      this.ratio(ratio);
    }

    if (typeof threshold !== 'undefined') {
      this.threshold(threshold);
    }

    if (typeof release !== 'undefined') {
      this.release(release);
    }
  };
  /**
   * Get current attack or set value w/ time ramp
   *
   *
   * @method attack
   * @for p5.Compressor
   * @param {Number} [attack] Attack is the amount of time (in seconds) to reduce the gain by 10dB,
   *                          default = .003, range 0 - 1
   * @param {Number} [time]  Assign time value to schedule the change in value
   */


  p5.Compressor.prototype.attack = function (attack, time) {
    var t = time || 0;

    if (typeof attack == 'number') {
      this.compressor.attack.value = attack;
      this.compressor.attack.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.attack.linearRampToValueAtTime(attack, this.ac.currentTime + 0.02 + t);
    } else if (typeof attack !== 'undefined') {
      attack.connect(this.compressor.attack);
    }

    return this.compressor.attack.value;
  };
  /**
    * Get current knee or set value w/ time ramp
    *
    * @method knee
    * @for p5.Compressor
    * @param {Number} [knee] A decibel value representing the range above the
    *                        threshold where the curve smoothly transitions to the "ratio" portion.
    *                        default = 30, range 0 - 40
    * @param {Number} [time]  Assign time value to schedule the change in value
    */


  p5.Compressor.prototype.knee = function (knee, time) {
    var t = time || 0;

    if (typeof knee == 'number') {
      this.compressor.knee.value = knee;
      this.compressor.knee.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.knee.linearRampToValueAtTime(knee, this.ac.currentTime + 0.02 + t);
    } else if (typeof knee !== 'undefined') {
      knee.connect(this.compressor.knee);
    }

    return this.compressor.knee.value;
  };
  /**
   * Get current ratio or set value w/ time ramp
   * @method ratio
   * @for p5.Compressor
   * @param {Number} [ratio]      The amount of dB change in input for a 1 dB change in output
   *                            default = 12, range 1 - 20
   * @param {Number} [time]  Assign time value to schedule the change in value
   */


  p5.Compressor.prototype.ratio = function (ratio, time) {
    var t = time || 0;

    if (typeof ratio == 'number') {
      this.compressor.ratio.value = ratio;
      this.compressor.ratio.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.ratio.linearRampToValueAtTime(ratio, this.ac.currentTime + 0.02 + t);
    } else if (typeof ratio !== 'undefined') {
      ratio.connect(this.compressor.ratio);
    }

    return this.compressor.ratio.value;
  };
  /**
   * Get current threshold or set value w/ time ramp
   * @method threshold
   * @for p5.Compressor
   * @param {Number} threshold  The decibel value above which the compression will start taking effect
   *                            default = -24, range -100 - 0
   * @param {Number} [time]  Assign time value to schedule the change in value
   */


  p5.Compressor.prototype.threshold = function (threshold, time) {
    var t = time || 0;

    if (typeof threshold == 'number') {
      this.compressor.threshold.value = threshold;
      this.compressor.threshold.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.threshold.linearRampToValueAtTime(threshold, this.ac.currentTime + 0.02 + t);
    } else if (typeof threshold !== 'undefined') {
      threshold.connect(this.compressor.threshold);
    }

    return this.compressor.threshold.value;
  };
  /**
   * Get current release or set value w/ time ramp
   * @method release
   * @for p5.Compressor
   * @param {Number} release    The amount of time (in seconds) to increase the gain by 10dB
   *                            default = .25, range 0 - 1
   *
   * @param {Number} [time]  Assign time value to schedule the change in value
   */


  p5.Compressor.prototype.release = function (release, time) {
    var t = time || 0;

    if (typeof release == 'number') {
      this.compressor.release.value = release;
      this.compressor.release.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.release.linearRampToValueAtTime(release, this.ac.currentTime + 0.02 + t);
    } else if (typeof number !== 'undefined') {
      release.connect(this.compressor.release);
    }

    return this.compressor.release.value;
  };
  /**
   * Return the current reduction value
   *
   * @method reduction
   * @for p5.Compressor
   * @return {Number} Value of the amount of gain reduction that is applied to the signal
   */


  p5.Compressor.prototype.reduction = function () {
    return this.compressor.reduction.value;
  };

  p5.Compressor.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);

    if (this.compressor) {
      this.compressor.disconnect();
      delete this.compressor;
    }
  };

  return p5.Compressor;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);

  var _require = __webpack_require__(6),
      convertToWav = _require.convertToWav,
      safeBufferSize = _require.safeBufferSize;

  var processorNames = __webpack_require__(10);

  var ac = p5sound.audiocontext;
  /**
   *  <p>Record sounds for playback and/or to save as a .wav file.
   *  The p5.SoundRecorder records all sound output from your sketch,
   *  or can be assigned a specific source with setInput().</p>
   *  <p>The record() method accepts a p5.SoundFile as a parameter.
   *  When playback is stopped (either after the given amount of time,
   *  or with the stop() method), the p5.SoundRecorder will send its
   *  recording to that p5.SoundFile for playback.</p>
   *
   *  @class p5.SoundRecorder
   *  @constructor
   *  @example
   *  <div><code>
   *  let mic, recorder, soundFile;
   *  let state = 0;
   *
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(canvasPressed);
   *    background(220);
   *    textAlign(CENTER, CENTER);
   *
   *    // create an audio in
   *    mic = new p5.AudioIn();
   *
   *    // prompts user to enable their browser mic
   *    mic.start();
   *
   *    // create a sound recorder
   *    recorder = new p5.SoundRecorder();
   *
   *    // connect the mic to the recorder
   *    recorder.setInput(mic);
   *
   *    // this sound file will be used to
   *    // playback & save the recording
   *    soundFile = new p5.SoundFile();
   *
   *    text('tap to record', width/2, height/2);
   *  }
   *
   *  function canvasPressed() {
   *    // ensure audio is enabled
   *    userStartAudio();
   *
   *    // make sure user enabled the mic
   *    if (state === 0 && mic.enabled) {
   *
   *      // record to our p5.SoundFile
   *      recorder.record(soundFile);
   *
   *      background(255,0,0);
   *      text('Recording!', width/2, height/2);
   *      state++;
   *    }
   *    else if (state === 1) {
   *      background(0,255,0);
   *
   *      // stop recorder and
   *      // send result to soundFile
   *      recorder.stop();
   *
   *      text('Done! Tap to play and download', width/2, height/2, width - 20);
   *      state++;
   *    }
   *
   *    else if (state === 2) {
   *      soundFile.play(); // play the result!
   *      save(soundFile, 'mySound.wav');
   *      state++;
   *    }
   *  }
   *  </div></code>
   */

  p5.SoundRecorder = function () {
    this.input = ac.createGain();
    this.output = ac.createGain();
    this._inputChannels = 2;
    this._outputChannels = 2; 

    var workletBufferSize = safeBufferSize(1024);
    this._workletNode = new AudioWorkletNode(ac, processorNames.recorderProcessor, {
      outputChannelCount: [this._outputChannels],
      processorOptions: {
        numInputChannels: this._inputChannels,
        bufferSize: workletBufferSize
      }
    });

    this._workletNode.port.onmessage = function (event) {
      if (event.data.name === 'buffers') {
        var buffers = [new Float32Array(event.data.leftBuffer), new Float32Array(event.data.rightBuffer)];

        this._callback(buffers);
      }
    }.bind(this);
    /**
     *  callback invoked when the recording is over
     *  @private
     *  @type Function(Float32Array)
     */


    this._callback = function () {}; 


    this._workletNode.connect(p5.soundOut._silentNode);

    this.setInput(); 

    p5sound.soundArray.push(this);
  };
  /**
   *  Connect a specific device to the p5.SoundRecorder.
   *  If no parameter is given, p5.SoundRecorer will record
   *  all audible p5.sound from your sketch.
   *
   *  @method  setInput
   *  @for p5.SoundRecorder
   *  @param {Object} [unit] p5.sound object or a web audio unit
   *                         that outputs sound
   */


  p5.SoundRecorder.prototype.setInput = function (unit) {
    this.input.disconnect();
    this.input = null;
    this.input = ac.createGain();
    this.input.connect(this._workletNode);
    this.input.connect(this.output);

    if (unit) {
      unit.connect(this.input);
    } else {
      p5.soundOut.output.connect(this.input);
    }
  };
  /**
   *  Start recording. To access the recording, provide
   *  a p5.SoundFile as the first parameter. The p5.SoundRecorder
   *  will send its recording to that p5.SoundFile for playback once
   *  recording is complete. Optional parameters include duration
   *  (in seconds) of the recording, and a callback function that
   *  will be called once the complete recording has been
   *  transfered to the p5.SoundFile.
   *
   *  @method  record
   *  @for p5.SoundRecorder
   *  @param  {p5.SoundFile}   soundFile    p5.SoundFile
   *  @param  {Number}   [duration] Time (in seconds)
   *  @param  {Function} [callback] The name of a function that will be
   *                                called once the recording completes
   */


  p5.SoundRecorder.prototype.record = function (sFile, duration, callback) {
    this._workletNode.port.postMessage({
      name: 'start',
      duration: duration
    });

    if (sFile && callback) {
      this._callback = function (buffer) {
        sFile.setBuffer(buffer);
        callback();
      };
    } else if (sFile) {
      this._callback = function (buffer) {
        sFile.setBuffer(buffer);
      };
    }
  };
  /**
   *  Stop the recording. Once the recording is stopped,
   *  the results will be sent to the p5.SoundFile that
   *  was given on .record(), and if a callback function
   *  was provided on record, that function will be called.
   *
   *  @method  stop
   *  @for p5.SoundRecorder
   */


  p5.SoundRecorder.prototype.stop = function () {
    this._workletNode.port.postMessage({
      name: 'stop'
    });
  };

  p5.SoundRecorder.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    this._callback = function () {};

    if (this.input) {
      this.input.disconnect();
    }

    this.input = null;
    this._workletNode = null;
  };
  /**
   * Save a p5.SoundFile as a .wav file. The browser will prompt the user
   * to download the file to their device.
   * For uploading audio to a server, use
   * <a href="/docs/reference/#/p5.SoundFile/saveBlob">`p5.SoundFile.saveBlob`</a>.
   *
   *  @for p5
   *  @method saveSound
   *  @param  {p5.SoundFile} soundFile p5.SoundFile that you wish to save
   *  @param  {String} fileName      name of the resulting .wav file.
   */


  p5.prototype.saveSound = function (soundFile, fileName) {
    var dataView = convertToWav(soundFile.buffer);
    p5.prototype.writeFile([dataView], fileName, 'wav');
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  /**
   *  <p>PeakDetect works in conjunction with p5.FFT to
   *  look for onsets in some or all of the frequency spectrum.
   *  </p>
   *  <p>
   *  To use p5.PeakDetect, call <code>update</code> in the draw loop
   *  and pass in a p5.FFT object.
   *  </p>
   *  <p>
   *  You can listen for a specific part of the frequency spectrum by
   *  setting the range between <code>freq1</code> and <code>freq2</code>.
   *  </p>
   *
   *  <p><code>threshold</code> is the threshold for detecting a peak,
   *  scaled between 0 and 1. It is logarithmic, so 0.1 is half as loud
   *  as 1.0.</p>
   *
   *  <p>
   *  The update method is meant to be run in the draw loop, and
   *  <b>frames</b> determines how many loops must pass before
   *  another peak can be detected.
   *  For example, if the frameRate() = 60, you could detect the beat of a
   *  120 beat-per-minute song with this equation:
   *  <code> framesPerPeak = 60 / (estimatedBPM / 60 );</code>
   *  </p>
   *
   *  <p>
   *  Based on example contribtued by @b2renger, and a simple beat detection
   *  explanation by <a
   *  href="http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/"
   *  target="_blank">Felix Turner</a>.
   *  </p>
   *
   *  @class  p5.PeakDetect
   *  @constructor
   *  @param {Number} [freq1]     lowFrequency - defaults to 20Hz
   *  @param {Number} [freq2]     highFrequency - defaults to 20000 Hz
   *  @param {Number} [threshold] Threshold for detecting a beat between 0 and 1
   *                            scaled logarithmically where 0.1 is 1/2 the loudness
   *                            of 1.0. Defaults to 0.35.
   *  @param {Number} [framesPerPeak]     Defaults to 20.
   *  @example
   *  <div><code>
   *
   *  var cnv, soundFile, fft, peakDetect;
   *  var ellipseWidth = 10;
   *
   *  function preload() {
   *    soundFile = loadSound('assets/beat.mp3');
   *  }
   *
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *
   *    // p5.PeakDetect requires a p5.FFT
   *    fft = new p5.FFT();
   *    peakDetect = new p5.PeakDetect();
   *  }
   *
   *  function draw() {
   *    background(0);
   *    text('click to play/pause', width/2, height/2);
   *
   *    // peakDetect accepts an fft post-analysis
   *    fft.analyze();
   *    peakDetect.update(fft);
   *
   *    if ( peakDetect.isDetected ) {
   *      ellipseWidth = 50;
   *    } else {
   *      ellipseWidth *= 0.95;
   *    }
   *
   *    ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
   *  }
   *
   *  // toggle play/stop when canvas is clicked
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      if (soundFile.isPlaying() ) {
   *        soundFile.stop();
   *      } else {
   *        soundFile.play();
   *      }
   *    }
   *  }
   *  </code></div>
   */
  p5.PeakDetect = function (freq1, freq2, threshold, _framesPerPeak) {
    this.framesPerPeak = _framesPerPeak || 20;
    this.framesSinceLastPeak = 0;
    this.decayRate = 0.95;
    this.threshold = threshold || 0.35;
    this.cutoff = 0; 

    this.cutoffMult = 1.5;
    this.energy = 0;
    this.penergy = 0; 

    this.currentValue = 0;
    /**
     *  isDetected is set to true when a peak is detected.
     *
     *  @attribute isDetected {Boolean}
     *  @default  false
     */

    this.isDetected = false;
    this.f1 = freq1 || 40;
    this.f2 = freq2 || 20000; 

    this._onPeak = function () {};
  };
  /**
   *  The update method is run in the draw loop.
   *
   *  Accepts an FFT object. You must call .analyze()
   *  on the FFT object prior to updating the peakDetect
   *  because it relies on a completed FFT analysis.
   *
   *  @method  update
   *  @param  {p5.FFT} fftObject A p5.FFT object
   */


  p5.PeakDetect.prototype.update = function (fftObject) {
    var nrg = this.energy = fftObject.getEnergy(this.f1, this.f2) / 255;

    if (nrg > this.cutoff && nrg > this.threshold && nrg - this.penergy > 0) {
      this._onPeak();

      this.isDetected = true; 

      this.cutoff = nrg * this.cutoffMult;
      this.framesSinceLastPeak = 0;
    } else {
      this.isDetected = false;

      if (this.framesSinceLastPeak <= this.framesPerPeak) {
        this.framesSinceLastPeak++;
      } else {
        this.cutoff *= this.decayRate;
        this.cutoff = Math.max(this.cutoff, this.threshold);
      }
    }

    this.currentValue = nrg;
    this.penergy = nrg;
  };
  /**
   *  onPeak accepts two arguments: a function to call when
   *  a peak is detected. The value of the peak,
   *  between 0.0 and 1.0, is passed to the callback.
   *
   *  @method  onPeak
   *  @param  {Function} callback Name of a function that will
   *                              be called when a peak is
   *                              detected.
   *  @param  {Object}   [val]    Optional value to pass
   *                              into the function when
   *                              a peak is detected.
   *  @example
   *  <div><code>
   *  var cnv, soundFile, fft, peakDetect;
   *  var ellipseWidth = 0;
   *
   *  function preload() {
   *    soundFile = loadSound('assets/beat.mp3');
   *  }
   *
   *  function setup() {
   *    cnv = createCanvas(100,100);
   *    textAlign(CENTER);
   *
   *    fft = new p5.FFT();
   *    peakDetect = new p5.PeakDetect();
   *
   *    setupSound();
   *
   *    // when a beat is detected, call triggerBeat()
   *    peakDetect.onPeak(triggerBeat);
   *  }
   *
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    text('click to play', width/2, height/2);
   *
   *    fft.analyze();
   *    peakDetect.update(fft);
   *
   *    ellipseWidth *= 0.95;
   *    ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
   *  }
   *
   *  // this function is called by peakDetect.onPeak
   *  function triggerBeat() {
   *    ellipseWidth = 50;
   *  }
   *
   *  // mouseclick starts/stops sound
   *  function setupSound() {
   *    cnv.mouseClicked( function() {
   *      if (soundFile.isPlaying() ) {
   *        soundFile.stop();
   *      } else {
   *        soundFile.play();
   *      }
   *    });
   *  }
   *  </code></div>
   */


  p5.PeakDetect.prototype.onPeak = function (callback, val) {
    var self = this;

    self._onPeak = function () {
      callback(self.energy, val);
    };
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var p5sound = __webpack_require__(1);
  /**
   *  A gain node is usefull to set the relative volume of sound.
   *  It's typically used to build mixers.
   *
   *  @class p5.Gain
   *  @constructor
   *  @example
   *  <div><code>
   *
   *  // load two soundfile and crossfade beetween them
   *  let sound1,sound2;
   *  let sound1Gain, sound2Gain, masterGain;
   *  function preload(){
   *    soundFormats('ogg', 'mp3');
   *    sound1 = loadSound('assets/Damscray_-_Dancing_Tiger_01');
   *    sound2 = loadSound('assets/beat');
   *  }
   *  function setup() {
   *    let cnv = createCanvas(100, 100);
   *    cnv.mousePressed(startSound);
   *    // create a 'master' gain to which we will connect both soundfiles
   *    masterGain = new p5.Gain();
   *    masterGain.connect();
   *    sound1.disconnect(); // diconnect from p5 output
   *    sound1Gain = new p5.Gain(); // setup a gain node
   *    sound1Gain.setInput(sound1); // connect the first sound to its input
   *    sound1Gain.connect(masterGain); // connect its output to the 'master'
   *    sound2.disconnect();
   *    sound2Gain = new p5.Gain();
   *    sound2Gain.setInput(sound2);
   *    sound2Gain.connect(masterGain);
   *  }
   *  function startSound() {
   *    sound1.loop();
   *    sound2.loop();
   *    loop();
   *  }
   *  function mouseReleased() {
   *    sound1.stop();
   *    sound2.stop();
   *  }
   *  function draw(){
   *    background(220);
   *    textAlign(CENTER);
   *    textSize(11);
   *    fill(0);
   *    if (!sound1.isPlaying()) {
   *      text('tap and drag to play', width/2, height/2);
   *      return;
   *    }
   *    // map the horizontal position of the mouse to values useable for volume    *  control of sound1
   *    var sound1Volume = constrain(map(mouseX,width,0,0,1), 0, 1);
   *    var sound2Volume = 1-sound1Volume;
   *    sound1Gain.amp(sound1Volume);
   *    sound2Gain.amp(sound2Volume);
   *    // map the vertical position of the mouse to values useable for 'master    *  volume control'
   *    var masterVolume = constrain(map(mouseY,height,0,0,1), 0, 1);
   *    masterGain.amp(masterVolume);
   *    text('master', width/2, height - masterVolume * height * 0.9)
   *    fill(255, 0, 255);
   *    textAlign(LEFT);
   *    text('sound1', 5, height - sound1Volume * height * 0.9);
   *    textAlign(RIGHT);
   *    text('sound2', width - 5, height - sound2Volume * height * 0.9);
   *  }
   *</code></div>
   */


  p5.Gain = function () {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain(); 

    this.input.gain.value = 0.5;
    this.input.connect(this.output); 

    p5sound.soundArray.push(this);
  };
  /**
   *  Connect a source to the gain node.
   *
   *  @method  setInput
   *  @for p5.Gain
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   */


  p5.Gain.prototype.setInput = function (src) {
    src.connect(this.input);
  };
  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @for p5.Gain
   *  @param  {Object} unit
   */


  p5.Gain.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   *  @for p5.Gain
   */


  p5.Gain.prototype.disconnect = function () {
    if (this.output) {
      this.output.disconnect();
    }
  };
  /**
   *  Set the output level of the gain node.
   *
   *  @method  amp
   *  @for p5.Gain
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param  {Number} [rampTime] create a fade that lasts rampTime
   *  @param  {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */


  p5.Gain.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
  };

  p5.Gain.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);

    if (this.output) {
      this.output.disconnect();
      delete this.output;
    }

    if (this.input) {
      this.input.disconnect();
      delete this.input;
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var Effect = __webpack_require__(4);


  function makeDistortionCurve(amount) {
    var k = typeof amount === 'number' ? amount : 50;
    var numSamples = 44100;
    var curve = new Float32Array(numSamples);
    var deg = Math.PI / 180;
    var i = 0;
    var x;

    for (; i < numSamples; ++i) {
      x = i * 2 / numSamples - 1;
      curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
    }

    return curve;
  }
  /**
   * A Distortion effect created with a Waveshaper Node,
   * with an approach adapted from
   * [Kevin Ennis](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion)
   *
   * This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   * Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   * <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   * <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   * @class p5.Distortion
   * @extends p5.Effect
   * @constructor
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   *
   */


  p5.Distortion = function (amount, oversample) {
    Effect.call(this);

    if (typeof amount === 'undefined') {
      amount = 0.25;
    }

    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }

    if (typeof oversample === 'undefined') {
      oversample = '2x';
    }

    if (typeof oversample !== 'string') {
      throw new Error('oversample must be a String');
    }

    var curveAmount = p5.prototype.map(amount, 0.0, 1.0, 0, 2000);
    /**
     *  The p5.Distortion is built with a
     *  <a href="http://www.w3.org/TR/webaudio/#WaveShaperNode">
     *  Web Audio WaveShaper Node</a>.
     *
     *  @property {AudioNode} WaveShaperNode
     */

    this.waveShaperNode = this.ac.createWaveShaper();
    this.amount = curveAmount;
    this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
    this.waveShaperNode.oversample = oversample;
    this.input.connect(this.waveShaperNode);
    this.waveShaperNode.connect(this.wet);
  };

  p5.Distortion.prototype = Object.create(Effect.prototype);
  /**
   * Process a sound source, optionally specify amount and oversample values.
   *
   * @method process
   * @for p5.Distortion
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   */

  p5.Distortion.prototype.process = function (src, amount, oversample) {
    src.connect(this.input);
    this.set(amount, oversample);
  };
  /**
   * Set the amount and oversample of the waveshaper distortion.
   *
   * @method set
   * @for p5.Distortion
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   */


  p5.Distortion.prototype.set = function (amount, oversample) {
    if (amount) {
      var curveAmount = p5.prototype.map(amount, 0.0, 1.0, 0, 2000);
      this.amount = curveAmount;
      this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
    }

    if (oversample) {
      this.waveShaperNode.oversample = oversample;
    }
  };
  /**
   *  Return the distortion amount, typically between 0-1.
   *
   *  @method  getAmount
   *  @for p5.Distortion
   *  @return {Number} Unbounded distortion amount.
   *                   Normal values range from 0-1.
   */


  p5.Distortion.prototype.getAmount = function () {
    return this.amount;
  };
  /**
   *  Return the oversampling.
   *
   *  @method getOversample
   *  @for p5.Distortion
   *  @return {String} Oversample can either be 'none', '2x', or '4x'.
   */


  p5.Distortion.prototype.getOversample = function () {
    return this.waveShaperNode.oversample;
  };

  p5.Distortion.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);

    if (this.waveShaperNode) {
      this.waveShaperNode.disconnect();
      this.waveShaperNode = null;
    }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

 })
 ]);
