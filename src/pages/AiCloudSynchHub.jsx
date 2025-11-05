import React, { useEffect, useState } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiCloudSyncHub.css";

// Firebase-SDK-importer
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

// 🔧 Din Firebase-konfiguration (ersätt med verkliga nycklar)
const firebaseConfig = {
  apiKey: "FAKE_API_KEY",
  authDomain: "mergx-ai-cloud.firebaseapp.com",
  projectId: "mergx-ai-cloud",
  storageBucket: "mergx-ai-cloud.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:1234567890abcdef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function AiCloudSyncHub() {
  const { emitEvent } = useAiEvents();
  const [status, setStatus] = useState("Offline");
  const [lastSync, setLastSync] = useState(null);
  const [config, setConfig] = useState(() => {
    const saved = localStorage.getItem("mergx-ai-profiles");
    return saved ? JSON.parse(saved) : {};
  });
  const [userId, setUserId] = useState("default-admin");

  // 🔁 Hämta senaste molnkonfiguration vid start
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const docRef = doc(db, "ai-configs", userId);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setConfig(snapshot.data());
          localStorage.setItem("mergx-ai-profiles", JSON.stringify(snapshot.data()));
          emitEvent({
            module: "Cloud",
            type: "info",
            message: "AI-konfiguration hämtad från molnet.",
          });
        } else {
          emitEvent({
            module: "Cloud",
            type: "warning",
            message: "Ingen molnkonfiguration hittades, använder lokal data.",
          });
        }
        setStatus("Online");
      } catch (err) {
        console.error(err);
        emitEvent({
          module: "Cloud",
          type: "alert",
          message: "Kunde inte ansluta till molnet.",
        });
        setStatus("Offline");
      }
    };
    fetchConfig();
  }, []);

  // ☁️ Ladda upp till molnet
  const handleUpload = async () => {
    try {
      const docRef = doc(db, "ai-configs", userId);
      await setDoc(docRef, {
        ...config,
        updated: serverTimestamp(),
      });
      setLastSync(new Date().toLocaleTimeString("sv-SE"));
      emitEvent({
        module: "Cloud",
        type: "info",
        message: "AI-konfiguration synkad till molnet.",
      });
    } catch (err) {
      console.error(err);
      emitEvent({
        module: "Cloud",
        type: "alert",
        message: "Uppladdning till molnet misslyckades.",
      });
    }
  };

  // 🔄 Uppdatera lokalt (simulerad)
  const handleDownload = () => {
    emitEvent({
      module: "Cloud",
      type: "info",
      message: "Lokal konfiguration uppdaterad från molnet.",
    });
    setLastSync(new Date().toLocaleTimeString("sv-SE"));
  };

  return (
    <div className="ai-cloud glass-panel">
      <header className="cloud-header">
        <h1>AI Cloud Sync Hub</h1>
        <p>Molnsynk för AI-konfiguration och profiler</p>
      </header>

      <section className="cloud-status">
        <h2>Status</h2>
        <div className={`status-indicator ${status.toLowerCase()}`}>{status}</div>
        <p>Senast synk: {lastSync || "Ingen"}</p>
      </section>

      <section className="cloud-actions">
        <button onClick={handleUpload}>☁️ Ladda upp konfiguration</button>
        <button onClick={handleDownload}>⬇️ Uppdatera lokalt</button>
      </section>

      <section className="cloud-data">
        <h2>Aktuell data</h2>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </section>

      <footer className="cloud-footnote">
        🔗 Nästa version (V9.9) aktiverar realtidssynk via Firestore-listeners och MergX Cloud API.
      </footer>
    </div>
  );
}
