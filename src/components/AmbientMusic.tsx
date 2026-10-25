import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play } from 'lucide-react';

// Original generative ambient score: warm pads and a sparse pentatonic melody.
// Synthesized locally, with no downloads, tracking, or third-party audio.
export default function AmbientMusic() {
  const engine = useRef<{ context: AudioContext; master: GainNode; timer: ReturnType<typeof setInterval> } | null>(null);
  const [playing, setPlaying] = useState(false);
  const [busy, setBusy] = useState(false);
  const [volume, setVolume] = useState(30);
  const [error, setError] = useState('');

  useEffect(() => {
    const hide = () => {
      if (document.hidden && engine.current) {
        void engine.current.context.suspend();
        setPlaying(false);
      }
    };
    document.addEventListener('visibilitychange', hide);
    return () => {
      document.removeEventListener('visibilitychange', hide);
      if (engine.current) {
        clearInterval(engine.current.timer);
        void engine.current.context.close();
      }
    };
  }, []);

  async function toggle() {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      if (!engine.current) {
        const context = new AudioContext();
        const master = context.createGain();
        master.gain.value = volume / 100;
        const filter = context.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1800;
        master.connect(filter);
        filter.connect(context.destination);
        const chords = [[48, 55, 59, 64], [45, 52, 57, 60], [41, 48, 55, 60], [43, 50, 57, 62]];
        let step = 0;
        let next = context.currentTime + 0.15;
        function note(midi: number, start: number, duration: number, level: number) {
          const oscillator = context.createOscillator();
          const envelope = context.createGain();
          oscillator.type = 'sine';
          oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
          envelope.gain.setValueAtTime(0, start);
          envelope.gain.linearRampToValueAtTime(level, start + Math.min(1.7, duration / 3));
          envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
          oscillator.connect(envelope);
          envelope.connect(master);
          oscillator.start(start);
          oscillator.stop(start + duration + 0.05);
          oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
        }
        function schedule() {
          if (context.state !== 'running') return;
          if (next < context.currentTime) next = context.currentTime + 0.1;
          while (next < context.currentTime + 0.6) {
            const chord = chords[step % chords.length];
            chord.forEach((pitch, i) => note(pitch, next + i * 0.12, 11.5, 0.052));
            [0, 2, 1].forEach((index, i) => note(chord[index] + 24, next + 2 + i * 2.6, 3.8, 0.025));
            next += 10;
            step++;
          }
        }
        engine.current = { context, master, timer: setInterval(schedule, 250) };
        await context.resume();
        schedule();
        setPlaying(context.state === 'running');
      } else if (playing) {
        await engine.current.context.suspend();
        setPlaying(false);
      } else {
        await engine.current.context.resume();
        setPlaying(engine.current.context.state === 'running');
      }
    } catch {
      if (engine.current) {
        clearInterval(engine.current.timer);
        void engine.current.context.close();
        engine.current = null;
      }
      setPlaying(false);
      setError('Audio is unavailable in this browser.');
    } finally { setBusy(false); }
  }

  return <aside className="ambient-player" aria-label="Background music">
    <div className="ambient-title"><Music2 size={15}/><span>Ambient studio<small>{playing ? 'A little calm, while you explore' : 'An optional soundtrack'}</small></span></div>
    <button onClick={toggle} disabled={busy} aria-label={playing ? 'Pause background music' : 'Play background music'} aria-pressed={playing}>{playing ? <Pause size={16}/> : <Play size={16}/>}<span>{playing ? 'Pause' : 'Play'}</span></button>
    <label className="ambient-volume"><span>Volume</span><input type="range" min="0" max="100" value={volume} aria-label="Music volume" onChange={event => {
      const value = Number(event.target.value);
      setVolume(value);
      if (engine.current) engine.current.master.gain.setTargetAtTime(value / 100, engine.current.context.currentTime, 0.15);
    }}/></label>
    {error && <span className="ambient-error" role="status">{error}</span>}
  </aside>;
}
