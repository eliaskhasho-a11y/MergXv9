import React, { useEffect, useState } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiCloudRealtimeEngine.css";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, serverTimestamp } from "firebase/firestore";

// ⚙️  Firebase-konfiguration (dummyvärden – byt till riktiga)
const firebaseConfig = {
  apiKey: "FAKE_API_KEY",
  authDomain: "mergx-ai-cloud.firebaseapp.com",
  projectId: "mergx-ai-cloud",
  storageBucket: "mergx-ai-cloud.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:abcdef123456789",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function AiCloudRealtimeEngine() {
  const { emitEvent } = useAiEvents();
  const [status, setStatus] = useState("Disconnected");
  const [remoteConfig, setRemoteConfig] = useState({});
  const [lastUpdate, setLastUpdate] = useState(null);
  const [userId] = useState("default-admin");

  // 🔁 Starta realtime-lyssnare
  useEffect(() => {
    const docRef = doc(db, "ai-configs", userId);
    const unsub = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setRemoteConfig(data);
          localStorage.setItem("mergx-ai-profiles", JSON.stringify(data));
          setStatus("Live");
          setLastUpdate(new Date().toLocaleTimeString("sv-SE"));
          emitEvent({
            module: "Cloud",
            type: "info",
            message: "Realtidsuppdatering mottagen från molnet.",
          });
        } else {
          setStatus("No data");
        }
      },
      (error) => {
        console.error(error);
        setStatus("Error");
        emitEvent({
          module: "Cloud",
          type: "alert",
          message: "Fel vid realtime-anslutning.",
        });
      }
    );

    return () => unsub();
  }, []);

  // ☁️ Uppdatera molnet manuellt (t.ex. när användaren sparar ny konfig)
  const pushUpdate = async () => {
    try {
      const docRef = doc(db, "ai-configs", userId);
      const localData = JSON.parse(localStorage.getItem("mergx-ai-profiles") || "{}");
      await setDoc(docRef, { ...localData, updated: serverTimestamp() });
      emitEvent({
        module: "Cloud",
        type: "info",
        message: "Lokal AI-konfig skickad till molnet.",
      });
    } catch (e) {
      console.error(e);
      emitEvent({
        module: "Cloud",
        type: "alert",
        message: "Kunde inte skicka data till molnet.",
      });
    }
  };

  return (
    <div className="ai-rt glass-panel">
      <header className="rt-header">
        <h1>AI Cloud Realtime Sync Engine</h1>
        <p>Håller alla MergX-användare synkade i realtid</p>
      </header>

      <section className="rt-status">
        <h2>Status • {status}</h2>
        <p>Senaste uppdatering: {lastUpdate || "–"}</p>
        <button onClick={pushUpdate}>☁️ Tvinga Push till Molnet</button>
      </section>

      <section className="rt-data">
        <h2>Aktuell molndata</h2>
        <pre>{JSON.stringify(remoteConfig, null, 2)}</pre>
      </section>

      <footer className="rt-footnote">
        ⚙️ Nästa version (V10.0) lägger till säker token-autentisering och synk mellan multi-tenant-företagskonton.
      </footer>
    </div>
  );
}
