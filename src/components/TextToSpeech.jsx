import React, { useState, useEffect } from "react";
import phrasesData from "../data/phrasesData"; // index.js بيرجع array

const TextToSpeech = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [speakingPhrase, setSpeakingPhrase] = useState(null);

  // تحميل الأصوات + fallback
  const loadVoices = () => {
    let availableVoices = window.speechSynthesis.getVoices();

    if (availableVoices.length === 0) {
      // hack بسيط: ننطق نص فاضي عشان iOS يحمّل الأصوات
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
      availableVoices = window.speechSynthesis.getVoices();
    }

    setVoices(availableVoices);

    // fallback اختيارات للصوت
    const defaultVoice =
      availableVoices.find((v) => v.name === "Google UK English Male") ||
      availableVoices.find((v) => v.lang === "en-GB") ||
      availableVoices.find((v) => v.lang.startsWith("en")) ||
      availableVoices[0];

    if (defaultVoice) {
      setSelectedVoice(defaultVoice);
    }
  };

  useEffect(() => {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const sanitizeText = (text) => {
    return text
      .replace(/(\d+)\s*\\\s*(\d+)/g, "$1 to $2") // 30\45 => 30 to 45
      .replace(/\\/g, " ") // يشيل أي backslash باقي
      .replace(/\s+/g, " ") // يقلل المسافات الزايدة
      .trim();
  };

  const speak = (text, id) => {
    // نضمن إن الأصوات متاحة
    if (!voices.length) loadVoices();
    if (!selectedVoice) return;

    const cleanText = sanitizeText(text);

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.voice = selectedVoice;
    utterance.rate = rate;

    utterance.onstart = () => setSpeakingPhrase(id);
    utterance.onend = () => setSpeakingPhrase(null);

    window.speechSynthesis.speak(utterance);
  };

  const stop = (id) => {
    if (speakingPhrase === id) {
      window.speechSynthesis.cancel();
      setSpeakingPhrase(null);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1>English Phrases with Text-to-Speech</h1>

      {/* voice selector */}
      <label>
        Voice:{" "}
        <select
          onChange={(e) =>
            setSelectedVoice(
              voices.find((voice) => voice.name === e.target.value)
            )
          }
          value={selectedVoice?.name || ""}
        >
          {voices.map((voice, i) => (
            <option key={i} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </label>

      {voices.length === 0 && (
        <p style={{ color: "red" }}>
          ⚠️ Voice selection not available on this device/browser.
        </p>
      )}

      {/* speed controller */}
      <label style={{ marginLeft: "20px" }}>
        Speed:{" "}
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        {rate.toFixed(1)}x
      </label>

      {phrasesData.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          style={{
            marginTop: "30px",
            borderTop: "1px solid #ddd",
            paddingTop: "10px",
          }}
        >
          <h2>{section.title}</h2>
          <table
            className="table table-bordered"
            border="1"
            cellPadding="10"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr>
                <th>English</th>
                <th>Arabic</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {section.data.map((phrase, i) => {
                const phraseId = `${sectionIndex}-${i}`;
                return (
                  <tr
                    key={i}
                    style={{
                      backgroundColor:
                        speakingPhrase === phraseId ? "#d1ffd1" : "white",
                    }}
                  >
                    <td>{phrase.en}</td>
                    <td>{phrase.ar}</td>
                    <td>
                      <button
                        onClick={() => speak(phrase.en, phraseId)}
                        style={{ marginRight: "10px" }}
                      >
                        🔊 Speak
                      </button>
                      <button
                        onClick={() => stop(phraseId)}
                        disabled={speakingPhrase !== phraseId}
                      >
                        ⏹ Stop
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TextToSpeech;
